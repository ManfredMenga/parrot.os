'use client';

import Link from 'next/link';
import TextReveal from '@/components/TextReveal';

const projects = [
  {
    name: 'Studio Noir',
    desc: 'Dunkle Eleganz, zeitlose Ästhetik',
    href: '/portfolio/studio-noir',
  },
  {
    name: 'Salon Elara',
    desc: 'Wärme, Eleganz & Persönlichkeit',
    href: '/portfolio/salon-elara',
  },
];

function IframePreview({ href, name }: { href: string; name: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#1a1a1a]">
      {/* Browser chrome */}
      <div className="absolute top-0 left-0 right-0 z-10 h-7 bg-[#2a2a2a] flex items-center gap-1.5 px-3">
        <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
        <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[9px] text-white/30 truncate">leitsalon.de{href}</span>
      </div>
      {/* Iframe container — iframe scales to always fill container width */}
      <div className="iframe-wrap absolute top-7 left-0 right-0 bottom-0 overflow-hidden">
        <iframe
          src={href}
          title={name}
          className="pointer-events-none border-0"
          style={{
            width: '200%',
            height: '200%',
            transform: 'scale(0.5)',
            transformOrigin: 'top left',
          }}
          tabIndex={-1}
          loading="lazy"
        />
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-20" />
    </div>
  );
}

export default function Portfolio() {
  return (
    <section className="py-20 md:py-32 bg-white">
      {/* iframe scale handled inline */}
      <div className="max-w-[85rem] mx-auto px-6 md:px-12">
        <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-8 md:mb-12">
          <span className="accent-dot mr-3" />
          So könnte Ihre Website aussehen
        </p>
        <h2 className="text-fluid-section font-bold tracking-tighter mb-16">
          <TextReveal text="Unsere" />{' '}
          <TextReveal text="Referenzen." className="font-serif italic font-normal tracking-normal text-brand-accent" delay={1} />
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <Link key={p.name} href={p.href} className="group block reveal">
              <IframePreview href={p.href} name={p.name} />
              <div className="mt-5">
                <h3 className="font-bold text-2xl tracking-tight text-brand-black group-hover:text-brand-accent transition-colors mb-1">{p.name}</h3>
                <p className="text-brand-black/50 text-sm">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent hover:text-brand-black transition-colors"
          >
            Alle Projekte ansehen &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
