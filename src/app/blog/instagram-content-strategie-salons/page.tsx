import type { Metadata } from 'next';
import Link from 'next/link';
import SubpageHeader from '@/components/SubpageHeader';
import SubpageFooter from '@/components/SubpageFooter';
import ClientEffects from '@/components/ClientEffects';
import TextReveal from '@/components/TextReveal';

export const metadata: Metadata = {
  title: 'Instagram Content-Strategie für Salons | LeitSalon',
  description: 'Welche Inhalte funktionieren auf Instagram für Friseur-Salons? Reels, Karussells oder Stories.',
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <ClientEffects />
      <SubpageHeader />

      <section className="pt-32 pb-12 md:pt-44 md:pb-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent/50">Social Media</span>
            <span className="text-[10px] text-brand-muted">28. Feb 2026</span>
            <span className="text-[10px] text-brand-muted">6 Min</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-brand-black mb-6">
            <TextReveal text="Instagram Content-Strategie für Salons" />
          </h1>
          <p className="reveal delay-2 text-lg text-brand-muted font-medium leading-relaxed">
            Welche Inhalte funktionieren auf Instagram für Friseur-Salons? Reels, Karussells oder Stories — wir brechen es herunter.
          </p>
        </div>
      </section>

      <div className="line-draw max-w-3xl mx-auto px-6 md:px-12 h-[1px] bg-black/10" />

      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-8 text-[15px] text-brand-black/80 font-medium leading-[1.85]">
          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Instagram ist dein digitales Schaufenster</h2>
            <p>
              Für Friseur-Salons ist Instagram die wichtigste Social-Media-Plattform. Nirgendwo sonst kannst du deine Arbeit so visuell präsentieren und gleichzeitig eine Community aufbauen. Aber einfach ein paar Vorher-Nachher-Bilder posten reicht nicht mehr. Du brauchst eine Strategie.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Die 3 Content-Säulen für Salons</h2>
            <p>Jeder erfolgreiche Salon-Account baut auf drei Säulen auf:</p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold">01</span>
                <span><strong className="text-brand-black">Ergebnis-Content</strong> — Vorher-Nachher, fertige Looks, Detailaufnahmen. Zeigt dein Können und zieht Neukunden an.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold">02</span>
                <span><strong className="text-brand-black">Behind-the-Scenes</strong> — Team-Alltag, Salon-Atmosphäre, Fortbildungen. Baut Vertrauen und Sympathie auf.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold">03</span>
                <span><strong className="text-brand-black">Edu-Content</strong> — Pflege-Tipps, Styling-Hacks, Trend-Erklärungen. Positioniert dich als Experte und generiert Saves & Shares.</span>
              </li>
            </ul>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Reels: Dein Wachstums-Motor</h2>
            <p>
              Reels sind aktuell der stärkste Hebel für organische Reichweite auf Instagram. Für Salons funktionieren besonders gut:
            </p>
            <p className="mt-4">
              <strong className="text-brand-black">Transformations-Reels</strong> — der Klassiker. Zeige den kompletten Prozess in 15-30 Sekunden. Starte mit dem „Vorher", schneide dynamisch durch die Arbeitsschritte und ende mit dem „Wow-Moment". Nutze trending Audio.
            </p>
            <p className="mt-4">
              <strong className="text-brand-black">POV-Reels</strong> — „POV: Du lässt dir zum ersten Mal eine Balayage machen" oder „POV: Der Moment, wenn die Farbe perfekt sitzt". Diese Formate erzeugen Identifikation und werden stark geteilt.
            </p>
            <p className="mt-4">
              <strong className="text-brand-black">Tutorial-Reels</strong> — kurze Styling-Tipps, die deine Follower zu Hause nachmachen können. Baut Expertise auf und wird gespeichert.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Karussells für Tiefgang</h2>
            <p>
              Karussell-Posts haben die höchste Save-Rate aller Formate. Nutze sie für:
            </p>
            <p className="mt-4">
              Pflege-Guides (Slide 1: Hook, Slide 2-8: Tipps, Slide 9: CTA), Trend-Übersichten der Saison, oder ausführliche Vorher-Nachher mit Erklärung der Technik. Karussells eignen sich perfekt, um dein Fachwissen zu demonstrieren.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Stories: Dein täglicher Touchpoint</h2>
            <p>
              Stories sind der persönlichste Kanal. Poste täglich 3-5 Stories: Tagesplanung am Morgen, Work-in-Progress während des Tages, fertige Ergebnisse am Abend. Nutze Umfragen und Frage-Sticker für Interaktion. Erstelle Highlights für: Ergebnisse, Team, Preise, FAQ und Buchung.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Posting-Frequenz und Timing</h2>
            <p>
              Für optimale Ergebnisse: 3-4 Feed-Posts pro Woche (Mix aus Reels und Karussells), tägliche Stories, und 1-2 Reels pro Woche als Minimum. Poste dann, wenn deine Zielgruppe aktiv ist — für Salon-Kunden typischerweise morgens (7-9 Uhr) und abends (19-21 Uhr).
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Fazit</h2>
            <p>
              Instagram-Erfolg für Salons kommt nicht über Nacht. Aber mit einer klaren Strategie, konsistentem Content und dem richtigen Mix aus Formaten baust du dir einen Kanal auf, der kontinuierlich Neukunden generiert — organisch und authentisch.
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
