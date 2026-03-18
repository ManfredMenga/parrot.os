import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function SubpageHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-5 md:px-10 md:py-6 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-black/5">
      <Link href="/" className="flex items-center gap-3 group">
        <Image
          src="/images/logo.png"
          alt="LeitSalon Logo"
          width={42}
          height={42}
        />
        <span className="font-bold text-lg tracking-tighter uppercase leading-none mt-0.5 text-brand-black">
          LEITSALON
        </span>
      </Link>
      <Link
        href="/"
        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-black hover:text-brand-accent transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
        Zurück
      </Link>
    </header>
  );
}
