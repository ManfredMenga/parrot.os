import Booking from '@/components/Booking';

export default function Kontakt() {
  return (
    <section id="kontakt" className="bg-brand-black text-white pt-20 pb-20 md:pt-28 md:pb-28">
      <div className="max-w-[85rem] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 md:gap-8 items-start">
          <div className="md:col-span-7">
            <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-6">
              <span className="accent-dot mr-3" />
              Termin buchen
            </p>
            <h2 className="reveal delay-1 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-8">
              Lass uns sprechen.
            </h2>
            <div className="reveal delay-2">
              <Booking />
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col items-start md:items-end md:text-right">
            <div className="reveal-right delay-2 w-20 h-20 rounded-full overflow-hidden mb-5 grayscale border border-brand-accent/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
                alt="Jonathan Castro"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="reveal-right delay-3 text-2xl md:text-3xl font-bold tracking-tight mb-1">
              Jonathan Castro
            </h3>
            <p className="reveal-right delay-4 text-xs font-medium text-brand-accent/50 mb-6 italic font-serif">
              Salon-Stratege
            </p>
            <div className="reveal-right delay-5 mt-6 text-left md:text-right">
              <p className="text-sm text-white/40 mb-2">Oder direkt anrufen:</p>
              <a href="tel:08975539009" className="text-xl font-bold tracking-tight hover:text-brand-accent transition-colors">
                089 755 39 09
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
