'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { VisitedCountry } from '@/lib/types';
import PhotoCarousel from '@/components/PhotoCarousel';

interface CountryDrawerProps {
   country: VisitedCountry | null;
   onClose: () => void;
}

export default function CountryDrawer({
   country,
   onClose,
}: CountryDrawerProps) {
   const panelRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (!country) return;
      const onKey = (event: KeyboardEvent) => {
         if (event.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', onKey);
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      panelRef.current?.focus();
      return () => {
         document.removeEventListener('keydown', onKey);
         document.body.style.overflow = previousOverflow;
      };
   }, [country, onClose]);

   return (
      <AnimatePresence>
         {country && (
            <motion.div
               className="fixed inset-0 z-50"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
            >
               <div
                  data-testid="drawer-backdrop"
                  className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
                  onClick={onClose}
               />

               <motion.div
                  ref={panelRef}
                  role="dialog"
                  aria-modal="true"
                  aria-label={`${country.displayName ?? country.name} travel details`}
                  tabIndex={-1}
                  className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-2xl border-t border-white/10 bg-zinc-900 p-6 outline-none sm:inset-y-0 sm:left-auto sm:right-0 sm:max-h-none sm:w-full sm:max-w-md sm:rounded-none sm:border-l sm:border-t-0"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%' }}
                  transition={{ type: 'spring', stiffness: 320, damping: 32 }}
               >
                  <div className="mb-4 flex items-start justify-between gap-4">
                     <h2 className="text-2xl font-bold text-white">
                        {country.displayName ?? country.name}
                     </h2>
                     <button
                        type="button"
                        aria-label="Close"
                        onClick={onClose}
                        className="rounded-full p-1 text-zinc-400 hover:bg-white/10 hover:text-white"
                     >
                        ✕
                     </button>
                  </div>

                  <p className="mb-5 text-sm leading-relaxed text-zinc-300">
                     {country.blurb}
                  </p>

                  {country.cities.length > 0 && (
                     <div className="mb-5">
                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                           Cities
                        </h3>
                        <div className="flex flex-wrap gap-2">
                           {country.cities.map((city) => (
                              <span
                                 key={city}
                                 className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                              >
                                 {city}
                              </span>
                           ))}
                        </div>
                     </div>
                  )}

                  <div className="mb-5">
                     <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Photos
                     </h3>
                     <PhotoCarousel photos={country.photos} />
                  </div>

                  {country.people.length > 0 && (
                     <div>
                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                           Who I was with
                        </h3>
                        <div className="flex flex-wrap gap-2">
                           {country.people.map((person) => (
                              <span
                                 key={person}
                                 className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs text-indigo-200"
                              >
                                 {person}
                              </span>
                           ))}
                        </div>
                     </div>
                  )}
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
