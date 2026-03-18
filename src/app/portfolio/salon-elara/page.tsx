import type { Metadata } from 'next';
import SalonElara from './SalonElara';

export const metadata: Metadata = {
  title: 'Salon Elara | Ihr Premium-Salon in München',
  description: 'Eleganz, Wärme & meisterhafte Haarkunst — Salon Elara in München-Schwabing.',
};

export default function SalonElaraPage() {
  return <SalonElara />;
}
