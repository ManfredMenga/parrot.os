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
  title: 'Leitkraft | 120 Posts pro Monat. 3 Plattformen. Null Burnout.',
  description:
    'KI-generierter Content der aussieht, als hätte dein Team eine Woche daran gearbeitet — fertig in Minuten. Für D2C-Brands, Gastro, Beauty & Coaches.',
  keywords: ['ki content', 'social media automatisierung', 'content marketing', 'instagram posts', 'ai content generator'],
  authors: [{ name: 'Leitkraft' }],
  openGraph: {
    title: 'Leitkraft | 120 Posts pro Monat. 3 Plattformen. Null Burnout.',
    description:
      'KI-generierter Content der aussieht, als hätte dein Team eine Woche daran gearbeitet — fertig in Minuten.',
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
