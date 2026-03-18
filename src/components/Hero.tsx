export default function Hero() {
  return (
    <section className="relative h-dvh min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2000&auto=format&fit=crop"
          alt="Premium Salon Interior"
          className="w-full h-full object-cover object-center hero-img hero-zoom"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 md:px-6 max-w-3xl mx-auto w-full text-white">
        <p className="hero-fade text-xs font-bold uppercase tracking-widest text-white mb-6">
          Premium Salon Marketing
        </p>
        <h1 className="text-fluid-hero font-bold tracking-tighter mb-4 leading-[1.05]">
          <span className="hero-fade inline-block">Dein Salon ist Premium.</span>
          <br />
          <span className="hero-fade-2 inline-block font-serif italic font-normal tracking-normal text-brand-accent gold-glow">
            Dein Marketing nicht.
          </span>
        </h1>
        <div className="hero-fade-3 mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#kontakt" className="btn-pill btn-accent btn-magnetic">
            Jetzt Termin buchen
          </a>
          <a href="#wahrheit" className="btn-pill btn-magnetic border border-white/20 text-white hover:bg-white/10 transition-colors">
            Mehr erfahren
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
