'use client';

import { motion } from 'framer-motion';
import VisitedMap from '@/components/VisitedMap';
import { visitedCountries } from '@/lib/data';

export default function Hero() {
   return (
      <section
         id="home"
         className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col items-center justify-center gap-8 px-6 py-20 text-center"
      >
         {/* soft accent glow behind the hero */}
         <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]"
         />

         <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-center gap-3"
         >
            <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-6xl">
               Navid M. Ebrahimi
            </h1>
            <p className="text-lg font-medium sm:text-2xl">
               <span className="text-gradient">Full-Stack Developer</span>
            </p>
         </motion.div>

         <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="w-full"
         >
            <VisitedMap />
            <p className="mt-3 text-sm text-zinc-500">
               <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-indigo-500 align-middle" />
               Places I&apos;ve been — {visitedCountries.length} countries
            </p>
         </motion.div>

         <div className="flex flex-wrap items-center justify-center gap-3">
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
      </section>
   );
}
