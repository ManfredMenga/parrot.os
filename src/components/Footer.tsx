import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-accent/10 text-white py-10 md:py-14">
      <div className="max-w-[85rem] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex items-center gap-2">
          <span className="font-bold text-base tracking-tighter uppercase leading-none">
            LEITKRAFT
          </span>
        </div>
        <p className="text-xs font-medium text-white/40">KI-Content-Engine für wachsende Marken</p>
        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-brand-muted">
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
