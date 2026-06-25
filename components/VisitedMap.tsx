'use client';

import { useEffect, useState } from 'react';
import { geoNaturalEarth1, geoPath } from 'd3-geo';
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

const WIDTH = 800;
const HEIGHT = 420;

interface Tooltip {
   label: string;
   visited: boolean;
   x: number;
   y: number;
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

   const projection = geoNaturalEarth1().fitSize([WIDTH, HEIGHT], {
      type: 'Sphere',
   });
   const path = geoPath(projection);

   return (
      <div className="galaxy-bg relative w-full overflow-hidden rounded-2xl border border-white/10 p-2 shadow-2xl shadow-indigo-950/40 sm:p-4">
         {/* twinkling starfield */}
         <div
            aria-hidden
            className="galaxy-stars pointer-events-none absolute inset-0"
         />

         <div className="relative aspect-[40/21] w-full">
            {loading && (
               <div className="absolute inset-0 z-10 flex items-center justify-center gap-3 text-sm text-zinc-400">
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-indigo-400" />
                  Loading map…
               </div>
            )}

            <svg
               viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
               className="absolute inset-0 h-full w-full"
               role="img"
               aria-label="World map highlighting the countries I've visited"
            >
               <g>
                  {countries.map((geo, index) => {
                     const name = geo.properties?.name ?? '';
                     const visited = visitedSet.has(name.toLowerCase());
                     return (
                        <path
                           key={index}
                           d={path(geo) ?? undefined}
                           strokeWidth={0.5}
                           className={
                              visited
                                 ? 'fill-indigo-500 stroke-zinc-950 transition-colors duration-150 hover:fill-indigo-400'
                                 : 'fill-zinc-800/90 stroke-zinc-950 transition-colors duration-150 hover:fill-zinc-700'
                           }
                           onMouseMove={(event) =>
                              setTooltip({
                                 label: prettyName(name),
                                 visited,
                                 x: event.clientX,
                                 y: event.clientY,
                              })
                           }
                           onMouseLeave={() => setTooltip(null)}
                        />
                     );
                  })}
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
