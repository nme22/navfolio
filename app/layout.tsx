import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { siteConfig } from '@/lib/site';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
   metadataBase: new URL(siteConfig.url),
   title: siteConfig.title,
   description: siteConfig.description,
   authors: [{ name: siteConfig.name }],
   openGraph: {
      title: siteConfig.title,
      description: siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      type: 'website',
   },
   twitter: {
      card: 'summary',
      title: siteConfig.title,
      description: siteConfig.description,
   },
};

export const viewport: Viewport = {
   width: 'device-width',
   initialScale: 1,
   themeColor: '#09090b',
};

// Person structured data for richer search results.
const jsonLd = {
   '@context': 'https://schema.org',
   '@type': 'Person',
   name: siteConfig.name,
   url: siteConfig.url,
   email: `mailto:${siteConfig.email}`,
   jobTitle: siteConfig.jobTitle,
};

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="en" className={inter.className}>
         <body>
            {children}
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
         </body>
      </html>
   );
}
