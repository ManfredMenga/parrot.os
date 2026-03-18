import type { Metadata } from 'next';
import StudioNoir from './StudioNoir';

export const metadata: Metadata = {
  title: 'Studio Noir | Premium Salon München',
  description: 'Exklusiver Friseursalon in München — Meisterhafte Haarkunst in minimalistischem Ambiente.',
};

export default function StudioNoirPage() {
  return <StudioNoir />;
}
