import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
   project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
   return (
      <a
         href={project.href}
         target="_blank"
         rel="noopener noreferrer"
         className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
      >
         <div className="mb-4 flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-zinc-100">
               {project.title}
            </h3>
            <span className="flex items-center gap-2">
               {project.inProgress && (
                  <span className="rounded-full bg-amber-400/15 px-2 py-0.5 text-xs font-medium text-amber-300">
                     In Progress
                  </span>
               )}
               <FiArrowUpRight className="h-5 w-5 shrink-0 text-zinc-500 transition-colors group-hover:text-zinc-200" />
            </span>
         </div>

         <p className="flex-1 text-sm leading-relaxed text-zinc-400">
            {project.description}
         </p>

         <div className="mt-5 flex items-center gap-3">
            {project.tech.map((t) => (
               <Image
                  key={t.src}
                  src={t.src}
                  alt={t.alt}
                  title={t.alt}
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded object-contain"
               />
            ))}
         </div>
      </a>
   );
}
