import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { socials } from '@/lib/data';
import { siteConfig } from '@/lib/site';
import type { SocialIcon } from '@/lib/types';

const socialIcons: Record<SocialIcon, IconType> = {
   github: FaGithub,
   linkedin: FaLinkedin,
   twitter: FaTwitter,
   facebook: FaFacebook,
};

export default function Footer() {
   return (
      <footer className="border-t border-white/10">
         <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
            <p className="text-sm text-zinc-500">© 2026 {siteConfig.name}</p>
            <div className="flex items-center gap-5">
               {socials.map((social) => {
                  const Icon = socialIcons[social.icon];
                  return (
                     <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="text-zinc-400 transition-colors hover:text-zinc-100"
                     >
                        <Icon className="h-5 w-5" />
                     </a>
                  );
               })}
            </div>
         </div>
      </footer>
   );
}
