import TextReveal from '@/components/TextReveal';

export default function Ergebnisse() {
  return (
    <section className="py-20 md:py-32 bg-white text-brand-black">
      <div className="max-w-[85rem] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 md:mb-20 gap-10">
          <div>
            <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-8 md:mb-12">
              <span className="accent-dot mr-3" />
              Ergebnisse statt Theorie
            </p>
            <h2 className="text-fluid-section font-bold tracking-tighter">
              <TextReveal text="Ergebnisse" />{' '}
              <TextReveal text="statt" className="font-serif italic font-normal tracking-normal text-brand-accent" delay={1} />{' '}
              <TextReveal text="Theorie." delay={2} />
            </h2>
          </div>
        </div>

        <div className="line-draw h-[1px] bg-brand-black/10 mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6 text-center md:text-left">
          <div className="number-pop delay-1">
            <p className="text-fluid-number font-bold tracking-tighter mb-2">
              <span data-counter="2.5" data-suffix="x" className="counter-value">0</span>
            </p>
            <p className="text-[10px] uppercase tracking-widest text-brand-black/40 font-bold">
              Höherer
              <br />
              Kundenwert
            </p>
          </div>
          <div className="number-pop delay-2">
            <p className="text-fluid-number font-bold tracking-tighter mb-2">#1</p>
            <p className="text-[10px] uppercase tracking-widest text-brand-black/40 font-bold">
              Google
              <br />
              Ranking
            </p>
          </div>
          <div className="number-pop delay-3">
            <p className="text-fluid-number font-bold tracking-tighter mb-2">24/7</p>
            <p className="text-[10px] uppercase tracking-widest text-brand-black/40 font-bold">
              Automatische
              <br />
              Buchung
            </p>
          </div>
          <div className="number-pop delay-4">
            <p className="text-fluid-number font-bold tracking-tighter mb-2">
              <span data-counter="100" data-suffix="%" className="counter-value">0</span>
            </p>
            <p className="text-[10px] uppercase tracking-widest text-brand-black/40 font-bold">
              Friseur
              <br />
              Fokus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
