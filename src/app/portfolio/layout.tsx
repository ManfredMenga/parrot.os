import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | LeitSalon — Unsere Referenzen',
  description: 'Entdecken Sie unsere Demo-Websites für Premium-Salons. Digitale Exzellenz, die überzeugt.',
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
