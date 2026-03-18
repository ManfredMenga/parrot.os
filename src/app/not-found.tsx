import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-black flex flex-col items-center justify-center text-white px-6">
      <Image
        src="/images/logo.png"
        alt="LeitSalon Logo"
        width={64}
        height={64}
        className="invert mb-8"
      />
      <h1 className="font-playfair text-fluid-section font-bold tracking-tight mb-4">
        Seite nicht gefunden
      </h1>
      <p className="text-white/50 text-lg mb-10 text-center max-w-md">
        Die angeforderte Seite existiert nicht oder wurde verschoben.
      </p>
      <Link
        href="/"
        className="btn-pill btn-accent"
      >
        Zurück zur Startseite
      </Link>
    </main>
  );
}
