import Link from 'next/link';
import Image from 'next/image';

export default function SubpageFooter() {
  return (
    <footer className="bg-brand-black text-white py-10 md:py-14">
      <div className="max-w-[85rem] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="LeitSalon Logo"
            width={32}
            height={32}
            className="invert"
          />
          <span className="font-bold text-base tracking-tighter uppercase leading-none mt-0.5">
            LEITSALON
          </span>
        </Link>
        <p className="text-xs font-medium text-white/40">München, Deutschland</p>
        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-brand-muted">
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/impressum" className="hover:text-white transition-colors">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-white transition-colors">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
