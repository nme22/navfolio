import { navLinks } from '@/lib/data';

export default function Navbar() {
   return (
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
         <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <a
               href="#home"
               className="text-sm font-semibold tracking-tight text-zinc-100"
            >
               NE<span className="text-gradient">.</span>
            </a>
            <ul className="flex items-center gap-5 sm:gap-7">
               {navLinks.map((link) => (
                  <li key={link.href}>
                     <a
                        href={link.href}
                        className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                     >
                        {link.label}
                     </a>
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   );
}
