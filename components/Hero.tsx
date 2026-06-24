'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { intro } from '@/lib/data';

export default function Hero() {
   return (
      <section
         id="home"
         className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col items-center justify-center gap-8 px-6 py-20 text-center"
      >
         {/* full-bleed beach backdrop */}
         <div
            aria-hidden
            style={{ backgroundImage: "url('/beach-quotes.jpeg')" }}
            className="pointer-events-none absolute left-1/2 top-0 -z-20 h-full w-screen -translate-x-1/2 bg-cover bg-center"
         />
         {/* dark overlay: keeps text readable and blends into the page below */}
         <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-screen -translate-x-1/2 bg-gradient-to-b from-zinc-950/80 via-zinc-950/75 to-zinc-950"
         />

         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
         >
            <Image
               src="/youngshwap.png"
               alt="Portrait of Navid M. Ebrahimi"
               width={612}
               height={408}
               priority
               className="h-auto w-64 rounded-2xl object-contain ring-2 ring-white/10 sm:w-80"
            />
         </motion.div>

         <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="flex flex-col items-center gap-4"
         >
            <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-6xl">
               Navid M. Ebrahimi
            </h1>
            <p className="text-lg font-medium sm:text-2xl">
               <span className="text-gradient">Full-Stack Developer</span>
            </p>
            <p className="max-w-2xl text-balance text-base leading-relaxed text-zinc-400">
               {intro}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
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
         </motion.div>
      </section>
   );
}
