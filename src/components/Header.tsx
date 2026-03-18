import { Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 px-6 py-5 md:px-10 md:py-6 flex justify-between items-center bg-transparent mix-blend-difference"
    >
      <div className="flex items-center gap-3 cursor-pointer group">
        <Image
          src="/images/logo.png"
          alt="LeitSalon Logo"
          width={42}
          height={42}
          className="invert"
        />
        <span className="font-bold text-lg tracking-tighter uppercase leading-none mt-0.5 text-white">
          LEITSALON
        </span>
      </div>
      <div className="flex gap-6 items-center">
        <a
          href="#kontakt"
          className="text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 transition-opacity hidden md:block"
        >
          Kontakt
        </a>
        <Instagram className="w-5 h-5 cursor-pointer text-white" />
      </div>
    </header>
  );
}
