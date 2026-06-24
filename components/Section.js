'use client';

import { motion } from 'framer-motion';

// Shared section wrapper: consistent width/spacing, a scroll anchor (id),
// and a subtle fade/slide-up reveal as it enters the viewport.
export default function Section({ id, className = '', children }) {
   return (
      <motion.section
         id={id}
         initial={{ opacity: 0, y: 24 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: '-80px' }}
         transition={{ duration: 0.6, ease: 'easeOut' }}
         className={`mx-auto w-full max-w-5xl px-6 py-24 ${className}`}
      >
         {children}
      </motion.section>
   );
}
