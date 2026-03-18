import TextReveal from '@/components/TextReveal';

export default function Wahrheit() {
  return (
    <section id="wahrheit" className="py-20 md:py-32 bg-white">
      <div className="max-w-[85rem] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-8">
            <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-8 md:mb-12">
              <span className="accent-dot mr-3" />
              Der wahre Grund
            </p>
            <h2 className="text-fluid-section font-bold tracking-tighter text-brand-black">
              <TextReveal text="Warum du aktuell nicht" />
              <br />
              <TextReveal text="vorankommst." className="font-serif italic font-normal tracking-normal text-brand-black" delay={4} />
            </h2>
          </div>
          <div className="md:col-span-4 md:mt-20">
            <p className="reveal-right delay-2 text-lg md:text-xl font-medium text-brand-black leading-snug mb-6">
              Du lieferst handwerkliche Perfektion, aber online bist du unsichtbar.
            </p>
            <p className="reveal-right delay-3 text-sm text-brand-muted font-medium leading-relaxed">
              Anspruchsvolle Kunden vergleichen heute digital. Ohne eine Präsenz, die exakt dein
              Niveau widerspiegelt, verlierst du Klientel an die Konkurrenz – egal wie gut du
              schneidest.
            </p>
            <div className="line-draw-gold mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
