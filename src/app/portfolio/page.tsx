'use client';

import Link from 'next/link';

const projects = [
  {
    slug: 'studio-noir',
    name: 'Studio Noir',
    tagline: 'Dunkle Eleganz, zeitlose Ästhetik',
    description:
      'Ultra-minimalistisches Design für einen exklusiven Salon in München-Maxvorstadt. Reduzierte Farbpalette, maximale Wirkung.',
    tags: ['Dark Luxury', 'Minimalistisch', 'München'],
    colors: ['#0A0A0A', '#8B0000', '#FFFFFF'],
  },
  {
    slug: 'salon-elara',
    name: 'Salon Elara',
    tagline: 'Wärme, Eleganz & Persönlichkeit',
    description:
      'Warmes, feminines Design für einen Premium-Salon in München-Schwabing. Einladende Ästhetik mit Liebe zum Detail.',
    tags: ['Warm Luxury', 'Elegant', 'München'],
    colors: ['#FAF7F2', '#C9A96E', '#2C1810'],
  },
];

function IframePreview({ slug, name }: { slug: string; name: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#1a1a1a]">
      {/* Browser chrome */}
      <div className="absolute top-0 left-0 right-0 z-10 h-8 bg-[#2a2a2a] flex items-center gap-1.5 px-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-4 text-[10px] text-white/30 truncate">leitsalon.de/portfolio/{slug}</span>
      </div>
      {/* Iframe container */}
      <div className="absolute top-8 left-0 right-0 bottom-0 overflow-hidden">
        <iframe
          src={`/portfolio/${slug}`}
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

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-brand-black text-white">
      {/* iframe scale handled inline */}

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-brand-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg tracking-[0.2em] uppercase font-light hover:text-brand-accent transition-colors">
            LeitSalon
          </Link>
          <span className="text-xs tracking-[0.2em] uppercase text-white/40">Portfolio</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-brand-accent mb-4">Unsere Arbeit</p>
          <h1 className="font-serif text-4xl md:text-6xl italic mb-6">
            Digitale Exzellenz,<br />
            <span className="text-brand-accent">die überzeugt.</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            Jedes Projekt erzählt eine Geschichte. Entdecken Sie, wie wir Premium-Salons
            eine digitale Identität verleihen, die ihre Exklusivität widerspiegelt.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group block"
            >
              <div className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                {/* Live Preview */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <IframePreview slug={project.slug} name={project.name} />
                </div>

                {/* Info */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    {project.colors.map((color) => (
                      <div
                        key={color}
                        className="w-5 h-5 rounded-full border border-white/20"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl italic mb-2 group-hover:text-brand-accent transition-colors duration-300">
                    {project.name}
                  </h2>
                  <p className="text-brand-accent text-sm tracking-wider uppercase mb-4">
                    {project.tagline}
                  </p>
                  <p className="text-white/40 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/5 text-white/40 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm text-white/60 group-hover:text-brand-accent transition-colors duration-300 tracking-wider uppercase">
                    Projekt ansehen
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-4xl italic mb-6">
            Bereit für Ihre <span className="text-brand-accent">digitale Transformation?</span>
          </h2>
          <p className="text-white/40 mb-10 max-w-lg mx-auto">
            Lassen Sie uns gemeinsam die Online-Präsenz Ihres Salons auf das nächste Level heben.
          </p>
          <Link
            href="/#kontakt"
            className="inline-block border border-brand-accent text-brand-accent px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-brand-accent hover:text-white transition-all duration-500"
          >
            Jetzt Beratung anfragen
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs tracking-[0.2em] uppercase text-white/20">
            © 2025 LeitSalon
          </span>
          <Link href="/" className="text-xs text-white/20 hover:text-white/40 transition-colors">
            Zurück zur Hauptseite
          </Link>
        </div>
      </footer>
    </div>
  );
}
