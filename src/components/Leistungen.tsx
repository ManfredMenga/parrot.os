import Link from 'next/link';
import { Globe, Instagram, PenTool, BarChart3, Camera } from 'lucide-react';
import TextReveal from '@/components/TextReveal';

export default function Leistungen() {
  return (
    <section className="py-20 md:py-32 bg-[#0a0a0c] text-white overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-6 md:px-12">
        <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-8 md:mb-12">
          <span className="accent-dot mr-3" />
          Was du konkret bekommst
        </p>
        <h2 className="text-fluid-section font-bold tracking-tighter text-white mb-6">
          <TextReveal text="Alles aus einer Hand." />
          <br />
          <TextReveal text="Keine halben Sachen." className="font-serif italic font-normal tracking-normal text-brand-accent" delay={4} />
        </h2>
        <p className="reveal delay-2 text-lg text-white/50 font-medium max-w-2xl mb-16 md:mb-24">
          Vom ersten Pixel bis zum letzten Posting – wir bauen deine komplette digitale Präsenz auf.
        </p>

        {/* Website Cards — Live Previews */}
        <div className="reveal delay-2 mb-20 md:mb-28">
          <div className="flex items-center gap-3 mb-10">
            <Globe className="w-5 h-5 text-brand-accent" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/70">Premium Website</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Studio Noir', desc: 'Dunkle Eleganz, zeitlose Ästhetik', href: '/portfolio/studio-noir' },
              { name: 'Salon Elara', desc: 'Wärme, Eleganz & Persönlichkeit', href: '/portfolio/salon-elara' },
            ].map((p) => (
              <Link key={p.name} href={p.href} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#1a1a1a]">
                  <div className="absolute top-0 left-0 right-0 z-10 h-7 bg-[#2a2a2a] flex items-center gap-1.5 px-3">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#28c840]" />
                    <span className="ml-3 text-[9px] text-white/30 truncate">leitsalon.de{p.href}</span>
                  </div>
                  <div className="absolute top-7 left-0 right-0 bottom-0 overflow-hidden">
                    <iframe
                      src={p.href}
                      title={p.name}
                      className="pointer-events-none border-0"
                      style={{ width: '200%', height: '200%', transform: 'scale(0.5)', transformOrigin: 'top left' }}
                      tabIndex={-1}
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-20" />
                </div>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <h3 className="font-bold text-2xl tracking-tight text-white group-hover:text-brand-accent transition-colors mb-1">{p.name}</h3>
                    <p className="text-white/50 text-sm">{p.desc}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-white/40 group-hover:text-brand-accent transition-colors duration-300 flex-shrink-0 ml-4">
                    Ansehen
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Instagram,
              title: 'Instagram Content',
              desc: 'Feed-Design, Reels-Konzepte und Story-Templates die zu deiner Marke passen. Monatlich frischer Content.',
              num: '01',
            },
            {
              icon: PenTool,
              title: 'Texte & Copy',
              desc: 'Website-Texte, Instagram-Captions und Google-Beschreibungen die Premium-Kunden ansprechen.',
              num: '02',
            },
            {
              icon: Camera,
              title: 'Foto & Video',
              desc: 'Professionelle Salon-Fotografie und kurze Video-Clips für Social Media und deine Website.',
              num: '03',
            },
            {
              icon: BarChart3,
              title: 'SEO & Ads',
              desc: 'Lokale Google-Dominanz und gezielte Werbeanzeigen für Neukunden in deiner Stadt.',
              num: '04',
            },
          ].map((service, i) => (
            <div
              key={i}
              className={`reveal delay-${i + 1} group relative rounded-2xl bg-white/[0.03] border border-white/5 p-6 card-lift hover:border-brand-accent/20 transition-colors duration-500`}
            >
              <span className="text-[9px] font-bold text-brand-accent/50 block mb-4">{service.num}</span>
              <service.icon className="w-5 h-5 text-brand-accent mb-4 icon-animate" />
              <h3 className="text-base font-bold tracking-tight mb-3">{service.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
