import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
   title: 'Navid M. Ebrahimi — Full-Stack Developer',
   description:
      'Portfolio of Navid M. Ebrahimi, a full-stack web developer. Projects, skills, and contact.',
   openGraph: {
      title: 'Navid M. Ebrahimi — Full-Stack Developer',
      description:
         'Portfolio of Navid M. Ebrahimi, a full-stack web developer.',
      type: 'website',
   },
};

export const viewport = {
   width: 'device-width',
   initialScale: 1,
};

export default function RootLayout({ children }) {
   return (
      <html lang="en" className={inter.className}>
         <body>{children}</body>
      </html>
   );
}
