import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

export default function Projects() {
   return (
      <Section id="projects">
         <h2 className="mb-3 text-3xl font-bold tracking-tight text-zinc-50">
            <span className="text-gradient">Projects</span>
         </h2>
         <p className="mb-10 max-w-2xl text-zinc-400">
            Some of the things I&apos;ve built. Click a card to check it out.
         </p>
         <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
               <ProjectCard key={project.title} project={project} />
            ))}
         </div>
      </Section>
   );
}
