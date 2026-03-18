import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import CookieBanner from '@/components/CookieBanner';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#13151A',
};

export const metadata: Metadata = {
  title: 'LeitSalon | Die Agentur für Premium-Wachstum',
  description:
    'Digitale Exzellenz für Premium-Salons. Wir verwandeln meisterhaftes Handwerk in digitale Anziehungskraft.',
  keywords: ['friseur marketing', 'salon marketing', 'premium salon', 'digitale sichtbarkeit'],
  authors: [{ name: 'LeitSalon' }],
  openGraph: {
    title: 'LeitSalon | Die Agentur für Premium-Wachstum',
    description:
      'Digitale Exzellenz für Premium-Salons. Wir verwandeln meisterhaftes Handwerk in digitale Anziehungskraft.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
