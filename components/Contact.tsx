import Section from '@/components/Section';
import { siteConfig } from '@/lib/site';

export default function Contact() {
   return (
      <Section id="contact" className="text-center">
         <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-50">
            <span className="text-gradient">Let&apos;s talk</span>
         </h2>
         <p className="mx-auto mb-8 max-w-xl text-zinc-400">
            Thanks for checking out my work. If you have a question, an idea, or
            you just want to say hi, my inbox is always open.
         </p>
         <a
            href={`mailto:${siteConfig.email}`}
            className="inline-block rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 px-7 py-3 text-sm font-semibold text-zinc-950 transition-transform hover:scale-105"
         >
            Reach Out
         </a>
      </Section>
   );
}
