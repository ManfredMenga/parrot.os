import TextReveal from '@/components/TextReveal';

export default function Eingriff() {
  return (
    <section className="py-20 md:py-32 bg-white border-t border-black/5">
      <div className="max-w-[85rem] mx-auto px-6 md:px-12">
        <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-8 md:mb-12">
          <span className="accent-dot mr-3" />
          Eingriff
        </p>
        <h2 className="text-fluid-section font-bold tracking-tighter text-brand-black mb-16 md:mb-20">
          <TextReveal text="Was wir in deinem Salon" />
          <br />
          <TextReveal text="verbessern." className="font-serif italic font-normal tracking-normal text-brand-black" delay={5} />
        </h2>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div className="reveal-tilt delay-1 card-lift relative group">
            <div className="sweep-line h-[1px] bg-brand-accent/10 mb-8 group-hover:bg-brand-accent/30 transition-colors duration-700" />
            <span className="text-[9px] font-bold text-brand-accent/50 block mb-4">01</span>
            <h3 className="text-xl font-bold tracking-tight mb-4">Positionierung</h3>
            <p className="text-sm text-brand-muted font-medium leading-relaxed">
              Schluss mit Rabatten. Wir machen deinen Salon zur exklusivsten digitalen Adresse
              deiner Stadt.
            </p>
          </div>
          <div className="reveal-tilt delay-2 card-lift relative group">
            <div className="sweep-line h-[1px] bg-brand-accent/10 mb-8 group-hover:bg-brand-accent/30 transition-colors duration-700" />
            <span className="text-[9px] font-bold text-brand-accent/50 block mb-4">02</span>
            <h3 className="text-xl font-bold tracking-tight mb-4">Sichtbarkeit</h3>
            <p className="text-sm text-brand-muted font-medium leading-relaxed">
              Lokale Dominanz. Wer nach Premium-Hairstyling sucht, findet dich auf Platz 1 bei
              Google.
            </p>
          </div>
          <div className="reveal-tilt delay-3 card-lift relative group">
            <div className="sweep-line h-[1px] bg-brand-accent/10 mb-8 group-hover:bg-brand-accent/30 transition-colors duration-700" />
            <span className="text-[9px] font-bold text-brand-accent/50 block mb-4">03</span>
            <h3 className="text-xl font-bold tracking-tight mb-4">Ergebnisse</h3>
            <p className="text-sm text-brand-muted font-medium leading-relaxed">
              Erprobte Systeme für automatisierte Online-Buchungen und planbar volle Terminkalender.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
