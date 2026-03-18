import type { Metadata } from 'next';
import Link from 'next/link';
import SubpageHeader from '@/components/SubpageHeader';
import SubpageFooter from '@/components/SubpageFooter';
import ClientEffects from '@/components/ClientEffects';
import TextReveal from '@/components/TextReveal';

export const metadata: Metadata = {
  title: 'Wie Online-Buchungen deinen Umsatz steigern | LeitSalon',
  description: 'Automatisierte Terminbuchungen reduzieren No-Shows und steigern deinen Umsatz.',
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <ClientEffects />
      <SubpageHeader />

      <section className="pt-32 pb-12 md:pt-44 md:pb-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent/50">Automatisierung</span>
            <span className="text-[10px] text-brand-muted">20. Feb 2026</span>
            <span className="text-[10px] text-brand-muted">4 Min</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-brand-black mb-6">
            <TextReveal text="Wie Online-Buchungen deinen Umsatz steigern" />
          </h1>
          <p className="reveal delay-2 text-lg text-brand-muted font-medium leading-relaxed">
            Automatisierte Terminbuchungen reduzieren No-Shows und steigern deinen Umsatz. Wir zeigen dir warum und wie.
          </p>
        </div>
      </section>

      <div className="line-draw max-w-3xl mx-auto px-6 md:px-12 h-[1px] bg-black/10" />

      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-8 text-[15px] text-brand-black/80 font-medium leading-[1.85]">
          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Das Telefon klingelt — aber du schneidest gerade</h2>
            <p>
              Die größte Umsatz-Bremse im Salon-Alltag: verpasste Anrufe. Studien zeigen, dass bis zu 35% aller Anrufe bei Friseuren nicht beantwortet werden — weil das Team mit Kunden beschäftigt ist. Jeder verpasste Anruf ist ein potenziell verlorener Neukunde, der dann einfach den nächsten Salon anruft.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Online-Buchung löst das Problem</h2>
            <p>
              Mit einem Online-Buchungssystem können Kunden 24 Stunden am Tag, 7 Tage die Woche Termine buchen — auch um 23 Uhr auf dem Sofa, wenn sie gerade beschließen, dass sie einen neuen Look brauchen. Keine Warteschleife, kein „Rufen Sie morgen nochmal an".
            </p>
            <p className="mt-4">
              Die Zahlen sprechen für sich: Salons mit Online-Buchung verzeichnen im Durchschnitt 25-40% mehr Terminbuchungen als solche, die nur telefonisch buchen. Der Grund ist simpel — du entfernst die Hürde zwischen „Ich will einen Termin" und „Ich habe einen Termin".
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">No-Shows reduzieren</h2>
            <p>
              No-Shows kosten die Friseur-Branche Milliarden. Ein gutes Buchungssystem reduziert No-Shows drastisch durch:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold">01</span>
                <span><strong className="text-brand-black">Automatische Erinnerungen</strong> — SMS oder E-Mail 24 Stunden vor dem Termin. Reduziert No-Shows um bis zu 50%.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold">02</span>
                <span><strong className="text-brand-black">Einfache Umbuchung</strong> — Kunden können mit einem Klick umbuchen statt einfach nicht zu erscheinen.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold">03</span>
                <span><strong className="text-brand-black">Warteliste</strong> — bei Absagen rücken automatisch Kunden von der Warteliste nach. Keine Lücken mehr.</span>
              </li>
            </ul>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Upselling automatisieren</h2>
            <p>
              Ein smartes Buchungssystem macht Upselling einfach. Bei der Buchung eines Haarschnitts wird automatisch eine Pflege-Behandlung vorgeschlagen. Oder ein Add-on wie Augenbrauen-Styling. Das funktioniert deutlich besser als mündlich im Salon zu fragen — Kunden entscheiden sich online leichter für Extras, weil kein sozialer Druck besteht.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Die richtige Lösung wählen</h2>
            <p>
              Für Premium-Salons empfehlen wir Lösungen wie Cal.com, die sich nahtlos in deine Website integrieren lassen. Wichtig ist: Das Buchungstool muss zu deiner Marke passen. Ein billiges Widget mit Logo des Anbieters untergräbt dein Premium-Image. Die Buchung sollte sich anfühlen wie ein natürlicher Teil deiner Website.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Fazit</h2>
            <p>
              Online-Buchung ist kein Trend — es ist der neue Standard. Kunden erwarten es. Und die Zahlen zeigen: Mehr Buchungen, weniger No-Shows, höherer Durchschnittsbon durch automatisiertes Upselling. Die Frage ist nicht ob, sondern wann du umstellst.
            </p>
          </div>
        </div>
      </article>

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
