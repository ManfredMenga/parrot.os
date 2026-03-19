import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  colorScheme: 'dark',
  other: {
    'supported-color-schemes': 'dark',
    'color-scheme': 'dark only',
  },
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
    <html lang="de" className={`${inter.variable} scroll-smooth`} style={{colorScheme:'dark'}} suppressHydrationWarning>
      <body className="font-sans bg-black text-white">
        {children}
      </body>
    </html>
  );
}
