'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { geoNaturalEarth1, geoPath, geoCentroid, geoInterpolate } from 'd3-geo';
import { feature } from 'topojson-client';
import type { Topology, GeometryCollection } from 'topojson-specification';
import type { FeatureCollection, Geometry } from 'geojson';
import { visitedCountries } from '@/lib/data';

interface CountryProps {
   name: string;
}
type CountryFeature = FeatureCollection<
   Geometry,
   CountryProps
>['features'][number];

const visitedSet = new Set(visitedCountries.map((c) => c.toLowerCase()));

// Prettify a couple of terse dataset labels for the tooltip.
const displayNames: Record<string, string> = {
   'United States of America': 'United States',
   'Dominican Rep.': 'Dominican Republic',
};
const prettyName = (name: string) => displayNames[name] ?? name;

const HOME_NAME = 'United States of America';
// Center of the continental US (the 110m feature's true centroid is pulled
// north-west by Alaska, so we anchor the home base by hand).
const HOME: [number, number] = [-98, 39];

const WIDTH = 800;
const HEIGHT = 420;

interface Tooltip {
   label: string;
   visited: boolean;
   x: number;
   y: number;
}
interface Marker {
   label: string;
   x: number;
   y: number;
   home: boolean;
}
interface Arc {
   d: string;
   delay: number;
}

export default function VisitedMap() {
   const [countries, setCountries] = useState<CountryFeature[]>([]);
   const [loading, setLoading] = useState(true);
   const [tooltip, setTooltip] = useState<Tooltip | null>(null);

   useEffect(() => {
      let active = true;
      fetch('/world-110m.json')
         .then((res) => res.json())
         .then((topology: Topology) => {
            if (!active) return;
            const collection = feature(
               topology,
               topology.objects.countries as GeometryCollection
            ) as unknown as FeatureCollection<Geometry, CountryProps>;
            setCountries(collection.features);
         })
         .catch(() => {
            /* leave the map empty if the data can't be loaded */
         })
         .finally(() => {
            if (active) setLoading(false);
         });
      return () => {
         active = false;
      };
   }, []);

   const projection = useMemo(
      () => geoNaturalEarth1().fitSize([WIDTH, HEIGHT], { type: 'Sphere' }),
      []
   );
   const path = useMemo(() => geoPath(projection), [projection]);

   const visited = useMemo(
      () =>
         countries.filter((c) =>
            visitedSet.has((c.properties?.name ?? '').toLowerCase())
         ),
      [countries]
   );

   const markers = useMemo<Marker[]>(() => {
      const out: Marker[] = [];
      for (const f of visited) {
         const name = f.properties?.name ?? '';
         const home = name === HOME_NAME;
         const point = projection(home ? HOME : geoCentroid(f));
         if (point)
            out.push({
               label: prettyName(name),
               x: point[0],
               y: point[1],
               home,
            });
      }
      return out;
   }, [visited, projection]);

   // Great-circle arcs from the home base out to every other visited country.
   const arcs = useMemo<Arc[]>(() => {
      const out: Arc[] = [];
      let index = 0;
      for (const f of visited) {
         if ((f.properties?.name ?? '') === HOME_NAME) continue;
         const interpolate = geoInterpolate(HOME, geoCentroid(f));
         const points: string[] = [];
         for (let t = 0; t <= 1.0001; t += 1 / 32) {
            const p = projection(interpolate(t));
            if (p) points.push(`${p[0]},${p[1]}`);
         }
         if (points.length)
            out.push({ d: 'M' + points.join('L'), delay: index * 0.12 });
         index++;
      }
      return out;
   }, [visited, projection]);

   return (
      <div className="relative w-full">
         <div className="relative mx-auto aspect-[40/21] w-full max-w-4xl">
            {loading && (
               <div className="absolute inset-0 z-10 flex items-center justify-center gap-3 text-sm text-zinc-400">
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-indigo-400" />
                  Loading map…
               </div>
            )}

            <svg
               viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
               className="absolute inset-0 h-full w-full overflow-visible"
               role="img"
               aria-label="World map highlighting the countries I've visited"
            >
               <defs>
                  <linearGradient id="arc-grad" x1="0" y1="0" x2="1" y2="0">
                     <stop offset="0%" stopColor="#38bdf8" />
                     <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
               </defs>

               {/* countries */}
               <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: loading ? 0 : 1 }}
                  transition={{ duration: 0.8 }}
               >
                  {countries.map((geo, index) => {
                     const name = geo.properties?.name ?? '';
                     const isVisited = visitedSet.has(name.toLowerCase());
                     return (
                        <path
                           key={index}
                           d={path(geo) ?? undefined}
                           strokeWidth={0.5}
                           className={
                              isVisited
                                 ? 'cursor-default fill-indigo-500/90 stroke-indigo-300/50 transition-[fill] duration-150 hover:fill-indigo-400'
                                 : 'cursor-default fill-zinc-800 stroke-white/[0.08] transition-[fill] duration-150 hover:fill-zinc-700'
                           }
                           onMouseMove={(event) =>
                              setTooltip({
                                 label: prettyName(name),
                                 visited: isVisited,
                                 x: event.clientX,
                                 y: event.clientY,
                              })
                           }
                           onMouseLeave={() => setTooltip(null)}
                        />
                     );
                  })}
               </motion.g>

               {/* travel arcs from home */}
               <g className="pointer-events-none">
                  {arcs.map((arc, index) => (
                     <motion.path
                        key={index}
                        d={arc.d}
                        fill="none"
                        stroke="url(#arc-grad)"
                        strokeWidth={1}
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={
                           loading ? {} : { pathLength: 1, opacity: 0.65 }
                        }
                        transition={{
                           duration: 1.4,
                           delay: 0.6 + arc.delay,
                           ease: 'easeInOut',
                        }}
                        style={{
                           filter: 'drop-shadow(0 0 3px rgba(129,140,248,0.7))',
                        }}
                     />
                  ))}
               </g>

               {/* markers */}
               <g className="pointer-events-none">
                  {markers.map((marker, index) => (
                     <g
                        key={index}
                        transform={`translate(${marker.x}, ${marker.y})`}
                     >
                        <circle
                           r={5}
                           fill="none"
                           strokeWidth={1}
                           className="marker-ping"
                           stroke={marker.home ? '#38bdf8' : '#818cf8'}
                           style={{ animationDelay: `${index * 0.3}s` }}
                        />
                        <motion.circle
                           r={marker.home ? 3.2 : 2.6}
                           fill={marker.home ? '#38bdf8' : '#a5b4fc'}
                           initial={{ scale: 0, opacity: 0 }}
                           animate={loading ? {} : { scale: 1, opacity: 1 }}
                           transition={{
                              delay: 0.8 + index * 0.07,
                              type: 'spring',
                              stiffness: 320,
                              damping: 18,
                           }}
                           style={{
                              transformBox: 'fill-box',
                              transformOrigin: 'center',
                              filter:
                                 'drop-shadow(0 0 5px rgba(129,140,248,0.95))',
                           }}
                        />
                     </g>
                  ))}
               </g>
            </svg>
         </div>

         {tooltip && (
            <div
               className="pointer-events-none fixed z-50 rounded-md border border-white/10 bg-zinc-900/95 px-2.5 py-1 text-xs text-zinc-100 shadow-lg"
               style={{ left: tooltip.x + 12, top: tooltip.y + 12 }}
            >
               {tooltip.label}
               {tooltip.visited && (
                  <span className="ml-1.5 font-medium text-indigo-400">
                     ✓ visited
                  </span>
               )}
            </div>
         )}
      </div>
   );
}
