import './globals.css';
import SupabaseProvider from './supabase-provider';
import { Toaster } from '@/components/ui/sonner';
import { PropsWithChildren } from 'react';

export const dynamic = 'force-dynamic';

const meta = {
  title: 'Real Estate Scout - Zero in on potential clients',
  description:
    'Automate your recon, have AI call potential sellers and save yourself time.',
  cardImage: '/og.png',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  url: 'https://subscription-starter.vercel.app',
  type: 'website'
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  cardImage: meta.cardImage,
  robots: meta.robots,
  favicon: meta.favicon,
  url: meta.url,
  type: meta.type,
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage,
    type: meta.type,
    site_name: meta.title
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vercel',
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage
  }
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-black overflow-hidden">
        <SupabaseProvider>
          <main
            id="skip"
            className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
          >
            <Toaster />
            {children}
          </main>
        </SupabaseProvider>
      </body>
    </html>
  );
}
