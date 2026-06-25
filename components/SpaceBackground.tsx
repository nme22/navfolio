'use client';

import { useEffect, useState } from 'react';

/**
 * Immersive, full-bleed space scene: nebula base, two parallax star layers
 * that drift with the cursor for depth, a soft core glow, and a vignette.
 * Parallax is disabled when the user prefers reduced motion.
 */
export default function SpaceBackground() {
   const [offset, setOffset] = useState({ x: 0, y: 0 });

   useEffect(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      let raf = 0;
      const onMove = (event: MouseEvent) => {
         cancelAnimationFrame(raf);
         raf = requestAnimationFrame(() => {
            setOffset({
               x: event.clientX / window.innerWidth - 0.5,
               y: event.clientY / window.innerHeight - 0.5,
            });
         });
      };
      window.addEventListener('mousemove', onMove);
      return () => {
         window.removeEventListener('mousemove', onMove);
         cancelAnimationFrame(raf);
      };
   }, []);

   const shift = (factor: number) =>
      `translate3d(${offset.x * factor}px, ${offset.y * factor}px, 0)`;

   return (
      <div
         aria-hidden
         className="pointer-events-none absolute inset-0 overflow-hidden"
      >
         <div className="galaxy-bg absolute inset-0" />

         {/* soft core glow behind the map */}
         <div
            className="absolute inset-0"
            style={{
               background:
                  'radial-gradient(55% 45% at 50% 48%, rgba(99,102,241,0.12), transparent 70%)',
               transform: shift(-10),
            }}
         />

         {/* distant stars */}
         <div
            className="galaxy-stars absolute -inset-16"
            style={{ transform: shift(-8) }}
         />
         {/* foreground stars (move more) */}
         <div
            className="galaxy-stars-near absolute -inset-16"
            style={{ transform: shift(-20) }}
         />

         {/* vignette to focus the center */}
         <div
            className="absolute inset-0"
            style={{
               background:
                  'radial-gradient(125% 125% at 50% 42%, transparent 62%, rgba(5,5,10,0.72) 100%)',
            }}
         />
      </div>
   );
}
