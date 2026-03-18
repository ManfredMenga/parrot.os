import type { Metadata } from 'next';
import Link from 'next/link';
import SubpageHeader from '@/components/SubpageHeader';
import SubpageFooter from '@/components/SubpageFooter';
import ClientEffects from '@/components/ClientEffects';
import TextReveal from '@/components/TextReveal';

export const metadata: Metadata = {
  title: 'Warum Premium-Salons eine professionelle Website brauchen | LeitSalon',
  description: 'Die meisten Salon-Besitzer unterschätzen die Wirkung einer erstklassigen digitalen Präsenz.',
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <ClientEffects />
      <SubpageHeader />

      {/* Header */}
      <section className="pt-32 pb-12 md:pt-44 md:pb-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent/50">Strategie</span>
            <span className="text-[10px] text-brand-muted">10. Mär 2026</span>
            <span className="text-[10px] text-brand-muted">5 Min</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-brand-black mb-6">
            <TextReveal text="Warum Premium-Salons eine professionelle Website brauchen" />
          </h1>
          <p className="reveal delay-2 text-lg text-brand-muted font-medium leading-relaxed">
            Die meisten Salon-Besitzer unterschätzen die Wirkung einer erstklassigen digitalen Präsenz. Wir zeigen, warum eine Website dein wichtigstes Marketing-Tool ist.
          </p>
        </div>
      </section>

      <div className="line-draw max-w-3xl mx-auto px-6 md:px-12 h-[1px] bg-black/10" />

      {/* Content */}
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-8 text-[15px] text-brand-black/80 font-medium leading-[1.85]">
          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Dein Salon ist erstklassig. Deine Online-Präsenz auch?</h2>
            <p>
              Du investierst in die besten Produkte, bildest dich ständig weiter und lieferst handwerkliche Perfektion. Aber wenn ein potenzieller Neukunde deinen Salon googelt, findet er eine veraltete Website — oder gar keine. Genau hier verlierst du Premium-Kunden, bevor sie jemals einen Fuß in deinen Salon setzen.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Der erste Eindruck ist digital</h2>
            <p>
              Über 80% aller Neukunden recherchieren online, bevor sie einen Salon besuchen. Sie vergleichen Websites, lesen Bewertungen und scrollen durch Instagram-Feeds. Deine Website ist nicht nur eine digitale Visitenkarte — sie ist dein wichtigster Verkäufer. Rund um die Uhr, 7 Tage die Woche.
            </p>
            <p className="mt-4">
              Eine professionelle Website signalisiert sofort: Hier arbeiten Profis. Die Bildsprache, die Typografie, die Nutzerführung — alles kommuniziert deinen Qualitätsanspruch, noch bevor ein Wort gelesen wird.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Was eine Premium-Website leisten muss</h2>
            <p>Eine Website für einen Premium-Salon muss mehr können als gut aussehen. Sie muss:</p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold">01</span>
                <span><strong className="text-brand-black">Vertrauen aufbauen</strong> — durch professionelle Fotos, echte Bewertungen und eine klare Positionierung.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold">02</span>
                <span><strong className="text-brand-black">Termine generieren</strong> — mit einer nahtlosen Online-Buchung, die Hürden abbaut.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold">03</span>
                <span><strong className="text-brand-black">Gefunden werden</strong> — durch lokale SEO-Optimierung für Google Maps und organische Suche.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold">04</span>
                <span><strong className="text-brand-black">Deine Marke stärken</strong> — mit einer visuellen Sprache, die Premium kommuniziert.</span>
              </li>
            </ul>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Der ROI einer Premium-Website</h2>
            <p>
              Rechne es dir aus: Ein durchschnittlicher Neukunde bringt über seine Lebenszeit zwischen 2.000 und 5.000 Euro Umsatz. Wenn deine Website nur 2-3 zusätzliche Neukunden pro Monat generiert, hat sich die Investition innerhalb weniger Wochen bezahlt gemacht.
            </p>
            <p className="mt-4">
              Dazu kommt: Eine gut optimierte Website reduziert deine Abhängigkeit von Plattformen wie Instagram oder Google Ads. Du baust dir einen eigenen Kanal auf, der dir gehört und den du kontrollierst.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Fazit</h2>
            <p>
              Eine professionelle Website ist kein Nice-to-have für Premium-Salons — sie ist die Grundlage deiner gesamten digitalen Strategie. Sie ist der Ort, an dem aus Interessenten Kunden werden. Investiere in eine Website, die deinem handwerklichen Anspruch gerecht wird.
            </p>
          </div>
        </div>
      </article>

      {/* Back to Blog */}
      <section className="py-12 border-t border-black/5">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Link href="/blog" className="text-[10px] font-bold uppercase tracking-widest text-brand-accent hover:tracking-[0.2em] transition-all duration-500">
            ← Alle Artikel
          </Link>
        </div>
      </section>

      <SubpageFooter />
    </main>
  );
}
