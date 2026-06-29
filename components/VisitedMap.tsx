'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { geoNaturalEarth1, geoPath, geoCentroid, geoInterpolate } from 'd3-geo';
import { feature } from 'topojson-client';
import type { Topology, GeometryCollection } from 'topojson-specification';
import type { FeatureCollection, Geometry } from 'geojson';
import { getTier, getVisitedCountry, getDisplayName } from '@/lib/countries';
import {
   IDENTITY,
   ZOOM_STEP,
   clampTranslate,
   zoomToward,
   type Transform,
} from '@/lib/mapZoom';
import CountryDrawer from '@/components/CountryDrawer';
import type { VisitedCountry } from '@/lib/types';

interface CountryProps {
   name: string;
}
type CountryFeature = FeatureCollection<
   Geometry,
   CountryProps
>['features'][number];

const HOME_NAME = 'United States of America';
// Center of the continental US (the 110m feature's true centroid is pulled
// north-west by Alaska, so we anchor the home base by hand).
const HOME: [number, number] = [-98, 39];

const WIDTH = 800;
const HEIGHT = 420;
const DRAG_THRESHOLD = 4; // px of movement before a press counts as a drag

interface Tooltip {
   label: string;
   tier: 'visited' | 'wishlist' | 'other';
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

interface VisitedMapProps {
   /** Test seam: when provided, render these features and skip the fetch. */
   initialFeatures?: CountryFeature[];
}

export default function VisitedMap({ initialFeatures }: VisitedMapProps) {
   const [countries, setCountries] = useState<CountryFeature[]>(
      initialFeatures ?? []
   );
   const [loading, setLoading] = useState(!initialFeatures);
   const [tooltip, setTooltip] = useState<Tooltip | null>(null);
   const [selected, setSelected] = useState<VisitedCountry | null>(null);
   const [transform, setTransform] = useState<Transform>(IDENTITY);

   const svgRef = useRef<SVGSVGElement>(null);
   const drag = useRef({ active: false, x: 0, y: 0 });
   const didDrag = useRef(false);

   const closeDrawer = useCallback(() => setSelected(null), []);

   useEffect(() => {
      if (initialFeatures) return;
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
   }, [initialFeatures]);

   const projection = useMemo(
      () => geoNaturalEarth1().fitSize([WIDTH, HEIGHT], { type: 'Sphere' }),
      []
   );
   const path = useMemo(() => geoPath(projection), [projection]);

   const visited = useMemo(
      () =>
         countries.filter(
            (c) => getTier(c.properties?.name ?? '') === 'visited'
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
               label: getDisplayName(name),
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

   const fillClass = (
      tier: 'visited' | 'wishlist' | 'other',
      isSelected: boolean
   ) => {
      if (tier === 'visited')
         return isSelected
            ? 'cursor-pointer fill-indigo-300 stroke-indigo-200/70'
            : 'cursor-pointer fill-indigo-500/90 stroke-indigo-300/50 transition-[fill] duration-150 hover:fill-indigo-400';
      if (tier === 'wishlist')
         return 'cursor-default fill-yellow-500/80 stroke-yellow-300/50 transition-[fill] duration-150 hover:fill-yellow-400';
      return 'cursor-default fill-zinc-800 stroke-white/[0.08] transition-[fill] duration-150 hover:fill-zinc-700';
   };

   // --- zoom + pan ---
   const zoomIn = () =>
      setTransform((t) =>
         zoomToward(t, ZOOM_STEP, WIDTH / 2, HEIGHT / 2, WIDTH, HEIGHT)
      );
   const zoomOut = () =>
      setTransform((t) =>
         zoomToward(t, 1 / ZOOM_STEP, WIDTH / 2, HEIGHT / 2, WIDTH, HEIGHT)
      );
   const resetZoom = () => setTransform(IDENTITY);
   const isIdentity =
      transform.k === IDENTITY.k && transform.x === 0 && transform.y === 0;

   const onPointerDown = (event: React.PointerEvent<SVGSVGElement>) => {
      drag.current = { active: true, x: event.clientX, y: event.clientY };
      didDrag.current = false;
   };
   const onPointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
      if (!drag.current.active) return;
      const dxPx = event.clientX - drag.current.x;
      const dyPx = event.clientY - drag.current.y;
      if (!didDrag.current && Math.hypot(dxPx, dyPx) > DRAG_THRESHOLD)
         didDrag.current = true;
      const rect = svgRef.current?.getBoundingClientRect();
      const ratio = rect && rect.width ? WIDTH / rect.width : 1;
      setTransform((t) =>
         clampTranslate(
            { k: t.k, x: t.x + dxPx * ratio, y: t.y + dyPx * ratio },
            WIDTH,
            HEIGHT
         )
      );
      drag.current = { active: true, x: event.clientX, y: event.clientY };
   };
   const endDrag = () => {
      drag.current.active = false;
   };

   return (
      <div className="relative h-full w-full">
         <div className="relative mx-auto h-full w-full">
            {loading && (
               <div className="absolute inset-0 z-10 flex items-center justify-center gap-3 text-sm text-zinc-400">
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-indigo-400" />
                  Loading map…
               </div>
            )}

            {/* zoom controls */}
            <div className="absolute right-3 top-3 z-20 flex flex-col gap-1.5">
               <button
                  type="button"
                  aria-label="Zoom in"
                  onClick={zoomIn}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-zinc-900/80 text-lg leading-none text-zinc-100 hover:bg-zinc-800"
               >
                  +
               </button>
               <button
                  type="button"
                  aria-label="Zoom out"
                  onClick={zoomOut}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-zinc-900/80 text-lg leading-none text-zinc-100 hover:bg-zinc-800"
               >
                  −
               </button>
               <button
                  type="button"
                  aria-label="Reset zoom"
                  onClick={resetZoom}
                  disabled={isIdentity}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-zinc-900/80 text-sm leading-none text-zinc-100 hover:bg-zinc-800 disabled:cursor-default disabled:opacity-40"
               >
                  ⟲
               </button>
            </div>

            <svg
               ref={svgRef}
               viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
               preserveAspectRatio="xMidYMid meet"
               className="absolute inset-0 h-full w-full cursor-grab touch-none overflow-visible active:cursor-grabbing"
               role="img"
               aria-label="World map highlighting the countries I've visited and want to visit"
               onPointerDown={onPointerDown}
               onPointerMove={onPointerMove}
               onPointerUp={endDrag}
               onPointerLeave={endDrag}
            >
               <defs>
                  <linearGradient id="arc-grad" x1="0" y1="0" x2="1" y2="0">
                     <stop offset="0%" stopColor="#38bdf8" />
                     <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
               </defs>

               <g
                  data-testid="zoom-layer"
                  transform={`translate(${transform.x} ${transform.y}) scale(${transform.k})`}
               >
                  <motion.g
                     initial={{ opacity: 0 }}
                     animate={{ opacity: loading ? 0 : 1 }}
                     transition={{ duration: 0.8 }}
                  >
                     {countries.map((geo, index) => {
                        const name = geo.properties?.name ?? '';
                        const tier = getTier(name);
                        const isSelected =
                           tier === 'visited' && selected?.name === name;
                        return (
                           <path
                              key={index}
                              data-country={name}
                              data-tier={tier}
                              d={path(geo) ?? undefined}
                              strokeWidth={0.5}
                              vectorEffect="non-scaling-stroke"
                              className={fillClass(tier, isSelected)}
                              onMouseMove={(event) =>
                                 setTooltip({
                                    label: getDisplayName(name),
                                    tier,
                                    x: event.clientX,
                                    y: event.clientY,
                                 })
                              }
                              onMouseLeave={() => setTooltip(null)}
                              onClick={() => {
                                 if (didDrag.current) return;
                                 if (tier !== 'visited') return;
                                 const country = getVisitedCountry(name);
                                 if (country) setSelected(country);
                              }}
                           />
                        );
                     })}
                  </motion.g>

                  <g className="pointer-events-none">
                     {arcs.map((arc, index) => (
                        <motion.path
                           key={index}
                           d={arc.d}
                           fill="none"
                           stroke="url(#arc-grad)"
                           strokeWidth={1}
                           strokeLinecap="round"
                           vectorEffect="non-scaling-stroke"
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
                              filter:
                                 'drop-shadow(0 0 3px rgba(129,140,248,0.7))',
                           }}
                        />
                     ))}
                  </g>

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
               </g>
            </svg>
         </div>

         {tooltip && (
            <div
               className="pointer-events-none fixed z-50 rounded-md border border-white/10 bg-zinc-900/95 px-2.5 py-1 text-xs text-zinc-100 shadow-lg"
               style={{ left: tooltip.x + 12, top: tooltip.y + 12 }}
            >
               {tooltip.label}
               {tooltip.tier === 'visited' && (
                  <span className="ml-1.5 font-medium text-indigo-400">
                     ✓ visited
                  </span>
               )}
               {tooltip.tier === 'wishlist' && (
                  <span className="ml-1.5 font-medium text-yellow-400">
                     ★ on my list
                  </span>
               )}
            </div>
         )}

         <CountryDrawer country={selected} onClose={closeDrawer} />
      </div>
   );
}
