'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { TravelPhoto } from '@/lib/types';

interface PhotoCarouselProps {
   photos: TravelPhoto[];
}

export default function PhotoCarousel({ photos }: PhotoCarouselProps) {
   const [index, setIndex] = useState(0);

   if (photos.length === 0) {
      return (
         <div className="flex aspect-[4/3] w-full items-center justify-center rounded-lg border border-white/10 bg-zinc-800/50 text-sm text-zinc-400">
            Photos coming soon
         </div>
      );
   }

   const go = (delta: number) =>
      setIndex((i) => (i + delta + photos.length) % photos.length);

   const photo = photos[index];

   return (
      <div
         className="w-full"
         role="group"
         aria-label="Photo carousel"
         tabIndex={0}
         onKeyDown={(event) => {
            if (event.key === 'ArrowRight') go(1);
            if (event.key === 'ArrowLeft') go(-1);
         }}
      >
         <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-white/10 bg-zinc-900">
            <motion.img
               key={index}
               src={photo.src}
               alt={photo.alt}
               className="h-full w-full object-cover"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.25 }}
            />

            {photos.length > 1 && (
               <>
                  <button
                     type="button"
                     aria-label="Previous photo"
                     onClick={() => go(-1)}
                     className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-zinc-950/70 px-3 py-1.5 text-lg leading-none text-white hover:bg-zinc-950"
                  >
                     ‹
                  </button>
                  <button
                     type="button"
                     aria-label="Next photo"
                     onClick={() => go(1)}
                     className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-zinc-950/70 px-3 py-1.5 text-lg leading-none text-white hover:bg-zinc-950"
                  >
                     ›
                  </button>
               </>
            )}
         </div>

         {photos.length > 1 && (
            <div className="mt-3 flex justify-center gap-2">
               {photos.map((p, i) => (
                  <button
                     key={p.src}
                     type="button"
                     aria-label={`Go to photo ${i + 1}`}
                     aria-current={i === index}
                     onClick={() => setIndex(i)}
                     className={
                        i === index
                           ? 'h-2 w-2 rounded-full bg-indigo-400'
                           : 'h-2 w-2 rounded-full bg-white/30 hover:bg-white/50'
                     }
                  />
               ))}
            </div>
         )}
      </div>
   );
}
