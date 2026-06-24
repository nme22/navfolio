import Section from '@/components/Section';
import {
   FaCode,
   FaGamepad,
   FaFutbol,
   FaSnowboarding,
} from 'react-icons/fa';
import { skills, story, hobbies, spotifyPlaylist } from '@/lib/data';

const hobbyIcons = {
   code: FaCode,
   gamepad: FaGamepad,
   futbol: FaFutbol,
   snowboarding: FaSnowboarding,
};

export default function About() {
   return (
      <Section id="about">
         <h2 className="mb-10 text-3xl font-bold tracking-tight text-zinc-50">
            <span className="text-gradient">About</span>
         </h2>

         <div className="grid gap-10 md:grid-cols-2">
            {/* Skills */}
            <div className="space-y-6">
               {Object.entries(skills).map(([group, items]) => (
                  <div key={group}>
                     <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                        {group}
                     </h3>
                     <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                           <span
                              key={item}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300"
                           >
                              {item}
                           </span>
                        ))}
                     </div>
                  </div>
               ))}
            </div>

            {/* Story */}
            <div className="space-y-6">
               {story.map((block) => (
                  <div key={block.title}>
                     <h3 className="mb-2 text-lg font-semibold text-zinc-100">
                        {block.title}
                     </h3>
                     <p className="text-sm leading-relaxed text-zinc-400">
                        {block.body}
                     </p>
                  </div>
               ))}

               <div>
                  <h3 className="mb-3 text-lg font-semibold text-zinc-100">
                     Hobbies
                  </h3>
                  <div className="flex gap-6 text-zinc-400">
                     {hobbies.map((hobby) => {
                        const Icon = hobbyIcons[hobby.icon];
                        return (
                           <div
                              key={hobby.label}
                              className="flex flex-col items-center gap-2"
                              title={hobby.label}
                           >
                              <Icon className="h-7 w-7" aria-hidden />
                              <span className="text-xs">{hobby.label}</span>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>

         {/* Music */}
         <div className="mt-12">
            <h3 className="mb-4 text-lg font-semibold text-zinc-100">
               Music I Enjoy
            </h3>
            <div className="overflow-hidden rounded-2xl border border-white/10">
               <iframe
                  title="Spotify playlist"
                  src={spotifyPlaylist}
                  width="100%"
                  height="352"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  className="block"
               />
            </div>
         </div>
      </Section>
   );
}
