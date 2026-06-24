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

// Full, static class strings per color so Tailwind keeps them in the build.
// Subtle tinted hovers (low-opacity fill + matching border/text) that sit
// comfortably on the dark theme.
const colorStyles = {
   orange: 'hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-300',
   amber: 'hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-300',
   yellow: 'hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-300',
   green: 'hover:border-green-400/40 hover:bg-green-400/10 hover:text-green-300',
   emerald: 'hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-300',
   teal: 'hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-300',
   cyan: 'hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300',
   sky: 'hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-300',
   blue: 'hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-blue-300',
   indigo: 'hover:border-indigo-400/40 hover:bg-indigo-400/10 hover:text-indigo-300',
   violet: 'hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-violet-300',
   purple: 'hover:border-purple-400/40 hover:bg-purple-400/10 hover:text-purple-300',
   pink: 'hover:border-pink-400/40 hover:bg-pink-400/10 hover:text-pink-300',
   slate: 'hover:border-slate-300/40 hover:bg-slate-300/10 hover:text-slate-200',
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
                              key={item.name}
                              className={`cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300 transition-colors duration-200 ${colorStyles[item.color]}`}
                           >
                              {item.name}
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
                  <div className="flex flex-wrap gap-3">
                     {hobbies.map((hobby) => {
                        const Icon = hobbyIcons[hobby.icon];
                        return (
                           <div
                              key={hobby.label}
                              className={`flex w-24 cursor-default flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-400 transition-colors duration-200 ${colorStyles[hobby.color]}`}
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
