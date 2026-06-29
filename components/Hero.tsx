'use client';

import { motion } from 'framer-motion';
import SpaceBackground from '@/components/SpaceBackground';
import VisitedMap from '@/components/VisitedMap';
import { visitedCountries } from '@/lib/data';

export default function Hero() {
   return (
      <section
         id="home"
         className="relative flex min-h-screen w-full flex-col overflow-hidden"
      >
         <SpaceBackground />

         <div className="relative z-10 flex min-h-screen w-full flex-col px-6">
            {/* header band */}
            <div className="flex flex-col items-center gap-2 pt-24 text-center">
               <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-xs font-medium uppercase tracking-[0.3em] text-indigo-300/80"
               >
                  Full-Stack Developer
               </motion.p>

               <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl"
               >
                  Navid || Nav
               </motion.h1>

               <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  className="max-w-md text-sm text-zinc-400 sm:text-base"
               >
                  Amount of map I&apos;ve unlocked: {visitedCountries.length}
                  /195
               </motion.p>
            </div>

            {/* map band — fills the available height. The map is absolutely
                positioned so its height resolves from this flex item's used
                height; a plain `h-full` here would collapse to 0 because the
                ancestors are sized by min-height, not an explicit height.
                overflow-hidden contains the map when zoomed in (so it can't
                paint over the header/CTAs) without clipping the travel arcs,
                which bow slightly above the map into this band's empty space. */}
            <div className="relative w-full flex-1 overflow-hidden">
               <div className="absolute inset-0 py-4">
                  <VisitedMap />
               </div>
            </div>

            {/* CTA band */}
            <div className="flex flex-wrap items-center justify-center gap-3 pb-10">
               <a
                  href="#projects"
                  className="rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 px-6 py-2.5 text-sm font-semibold text-zinc-950 transition-transform hover:scale-105"
               >
                  View Projects
               </a>
               <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:bg-white/5"
               >
                  Get in Touch
               </a>
            </div>
         </div>

         {/* blend the space scene into the page below */}
         <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-zinc-950"
         />
      </section>
   );
}
