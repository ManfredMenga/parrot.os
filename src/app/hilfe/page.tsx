import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Hilfe | Leitkraft',
  description: 'Häufige Fragen und Support für Leitkraft.',
};

const topics = [
  {
    title: 'Erste Schritte',
    items: [
      { q: 'Wie richte ich mein Branding ein?', a: 'Nach der Anmeldung führt dich unser Setup-Wizard durch Farben, Schriften und Tonalität. Das dauert ca. 5 Minuten.' },
      { q: 'Wie generiere ich meinen ersten Post?', a: 'Wähle ein Format, ein Thema und klick auf "Generieren". Dein Post ist in Sekunden fertig.' },
      { q: 'Kann ich Posts vor der Veröffentlichung bearbeiten?', a: 'Ja. Jeder Post kann angepasst, freigegeben oder verworfen werden.' },
    ],
  },
  {
    title: 'Plattformen',
    items: [
      { q: 'Welche Plattformen werden unterstützt?', a: 'Instagram, Facebook und LinkedIn. TikTok und YouTube Shorts sind in Planung.' },
      { q: 'Kann ich auf mehreren Plattformen gleichzeitig posten?', a: 'Ja. Leitkraft optimiert den Content automatisch für jede Plattform.' },
    ],
  },
  {
    title: 'Konto & Abrechnung',
    items: [
      { q: 'Wie kann ich mein Abo kündigen?', a: 'Jederzeit über dein Dashboard. Keine Mindestlaufzeit, keine versteckten Kosten.' },
      { q: 'Gibt es eine kostenlose Testphase?', a: 'Ja. Du kannst Leitkraft kostenlos testen bevor du dich für ein Abo entscheidest.' },
    ],
  },
];

export default function HilfePage() {
  return (
    <main className="min-h-screen bg-black">
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 h-12 flex justify-between items-center">
          <Link href="/" className="font-bold text-[15px] tracking-tight text-white flex items-center gap-2">
            <Image src="/images/logo-white.png" alt="Leitkraft" width={26} height={26} className="-mr-0.5" />
            Leitkraft
          </Link>
          <Link href="/" className="text-[13px] text-[#666] hover:text-white transition-colors">Zurück</Link>
        </div>
      </header>

      <section className="pt-32 pb-0 md:pt-40">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] mb-6">Support</p>
          <h1 className="text-fluid-section font-bold tracking-tight text-white">Wie können wir helfen?</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          {topics.map((topic) => (
            <div key={topic.title} className="mb-14 last:mb-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] mb-6">{topic.title}</p>
              {topic.items.map((item, j) => (
                <div key={j} className={`py-6 ${j > 0 ? 'border-t border-[#1a1a1a]' : ''}`}>
                  <h3 className="text-[15px] font-medium text-white mb-2">{item.q}</h3>
                  <p className="text-[15px] text-[#999] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          ))}

          <div className="mt-12 pt-8 border-t border-[#1a1a1a]">
            <p className="text-[15px] text-[#999]">Frage nicht dabei? <a href="mailto:jonathan@leitkraft.de" className="text-white hover:underline">jonathan@leitkraft.de</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
