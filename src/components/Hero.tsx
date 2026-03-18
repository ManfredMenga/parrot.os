export default function Hero() {
  return (
    <section className="relative h-dvh min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0c]">
        {/* Abstract gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0c] via-[#13151A] to-[#1a1520]" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 md:px-6 max-w-4xl mx-auto w-full text-white">
        <p className="hero-fade text-xs font-bold uppercase tracking-widest text-brand-accent mb-6">
          KI-Content-Engine
        </p>
        <h1 className="text-fluid-hero font-bold tracking-tighter mb-4 leading-[1.05]">
          <span className="hero-fade inline-block">120 Posts pro Monat.</span>
          <br />
          <span className="hero-fade inline-block">3 Plattformen.</span>
          <br />
          <span className="hero-fade-2 inline-block font-serif italic font-normal tracking-normal text-brand-accent gold-glow">
            Null Burnout.
          </span>
        </h1>
        <p className="hero-fade-2 text-lg md:text-xl text-white/50 font-medium max-w-2xl mx-auto mt-6">
          KI-generierter Content der aussieht, als hätte dein Team eine Woche daran gearbeitet — fertig in Minuten.
        </p>
        <div className="hero-fade-3 mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#cta" className="btn-pill btn-accent btn-magnetic">
            Kostenlos testen
          </a>
          <a href="#how-it-works" className="btn-pill btn-magnetic border border-white/20 text-white hover:bg-white/10 transition-colors">
            Demo ansehen
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
