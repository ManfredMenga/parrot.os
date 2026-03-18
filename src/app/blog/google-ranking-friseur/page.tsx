import type { Metadata } from 'next';
import Link from 'next/link';
import SubpageHeader from '@/components/SubpageHeader';
import SubpageFooter from '@/components/SubpageFooter';
import ClientEffects from '@/components/ClientEffects';
import TextReveal from '@/components/TextReveal';

export const metadata: Metadata = {
  title: 'Google Platz 1 als Friseur – so geht\'s | LeitSalon',
  description: 'Lokale SEO ist der Schlüssel zu mehr Neukunden. Erfahre, welche Schritte dich auf die erste Seite bei Google bringen.',
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <ClientEffects />
      <SubpageHeader />

      <section className="pt-32 pb-12 md:pt-44 md:pb-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent/50">SEO</span>
            <span className="text-[10px] text-brand-muted">5. Mär 2026</span>
            <span className="text-[10px] text-brand-muted">7 Min</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-brand-black mb-6">
            <TextReveal text="Google Platz 1 als Friseur – so geht's" />
          </h1>
          <p className="reveal delay-2 text-lg text-brand-muted font-medium leading-relaxed">
            Lokale SEO ist der Schlüssel zu mehr Neukunden. Erfahre, welche Schritte dich auf die erste Seite bei Google bringen.
          </p>
        </div>
      </section>

      <div className="line-draw max-w-3xl mx-auto px-6 md:px-12 h-[1px] bg-black/10" />

      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-8 text-[15px] text-brand-black/80 font-medium leading-[1.85]">
          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Warum lokale SEO für Friseure entscheidend ist</h2>
            <p>
              Wenn jemand in München „Friseur in meiner Nähe" oder „bester Friseur München" googelt, entscheidet die Position in den Suchergebnissen, wer den Neukunden bekommt. Platz 1 bei Google erhält über 30% aller Klicks — Platz 5 nur noch 5%. Für lokale Dienstleister wie Friseur-Salons ist das der Unterschied zwischen vollen und leeren Terminen.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Google Business Profil — dein wichtigstes Tool</h2>
            <p>
              Der erste und wichtigste Schritt: Ein vollständig optimiertes Google Business Profil. Das ist der Eintrag, der bei Google Maps und in der lokalen Suche erscheint. Hier musst du:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold">01</span>
                <span><strong className="text-brand-black">Alle Informationen ausfüllen</strong> — Adresse, Öffnungszeiten, Telefonnummer, Website, Kategorien.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold">02</span>
                <span><strong className="text-brand-black">Hochwertige Fotos hochladen</strong> — mindestens 20 professionelle Bilder von Salon, Team und Ergebnissen.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold">03</span>
                <span><strong className="text-brand-black">Regelmäßig Beiträge posten</strong> — Google belohnt aktive Profile mit besserer Sichtbarkeit.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold">04</span>
                <span><strong className="text-brand-black">Bewertungen sammeln</strong> — aktiv nach Bewertungen fragen und auf jede einzelne antworten.</span>
              </li>
            </ul>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">On-Page SEO für Salon-Websites</h2>
            <p>
              Deine Website muss Google klar signalisieren, wer du bist, wo du bist und was du anbietest. Das bedeutet:
            </p>
            <p className="mt-4">
              <strong className="text-brand-black">Title Tags und Meta Descriptions</strong> müssen deine Stadt und deine Dienstleistungen enthalten. Statt „Willkommen bei uns" sollte dort stehen: „Premium Friseur München Schwabing | Balayage, Colorierung & Styling".
            </p>
            <p className="mt-4">
              <strong className="text-brand-black">Lokale Keywords</strong> natürlich in Überschriften und Texte einbauen. Denke an Kombinationen wie „Friseur + Stadtteil", „Balayage München", „Herren Haarschnitt + Stadt".
            </p>
            <p className="mt-4">
              <strong className="text-brand-black">Schema Markup</strong> (strukturierte Daten) für lokale Geschäfte hilft Google, deine Informationen richtig zu verstehen und in Rich Snippets anzuzeigen.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Bewertungen — der stärkste Ranking-Faktor</h2>
            <p>
              Google-Bewertungen sind der einzeln stärkste Faktor für lokale Rankings. Salons mit 50+ Bewertungen und einer Durchschnittsnote über 4,5 dominieren die lokale Suche. Entwickle ein System: Bitte zufriedene Kunden direkt nach dem Termin um eine Bewertung. Ein QR-Code am Spiegel oder eine kurze Nachricht danach wirkt Wunder.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Technische Grundlagen</h2>
            <p>
              Deine Website muss schnell laden (unter 3 Sekunden), mobil perfekt funktionieren und über HTTPS verschlüsselt sein. Google bestraft langsame, nicht-mobile Seiten mit schlechteren Rankings. Außerdem: Dein NAP (Name, Address, Phone) muss überall im Internet identisch sein — auf deiner Website, bei Google, auf Social Media und in Branchenverzeichnissen.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-xl font-bold text-brand-black tracking-tight mb-4">Fazit: SEO ist ein Marathon, kein Sprint</h2>
            <p>
              Lokale SEO-Ergebnisse zeigen sich typischerweise nach 3-6 Monaten. Aber wenn du einmal auf Platz 1 stehst, generiert das konstant Neukunden — ohne laufende Werbekosten. Starte mit deinem Google Business Profil, optimiere deine Website und sammle systematisch Bewertungen. Der Rest kommt von allein.
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
