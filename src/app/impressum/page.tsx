import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Impressum | Leitkraft',
  description: 'Impressum und Angaben gemäß § 5 TMG.',
};

const sections = [
  {
    title: 'Angaben gemäß § 5 TMG',
    content: (
      <p>
        Jonathan Castro<br />
        Irminswindstraße 21<br />
        94094 Rotthalmünster, Deutschland
      </p>
    ),
  },
  {
    title: 'Kontakt',
    content: (
      <p>
        E-Mail: jonathan@leitkraft.de
      </p>
    ),
  },
  {
    title: 'Umsatzsteuer-ID',
    content: (
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        USt-IdNr.: Beantragt
      </p>
    ),
  },
  {
    title: 'Hinweis nach § 36 VSBG',
    content: (
      <p>
        Wir sind nicht verpflichtet, an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen, und nehmen hieran nicht teil.
      </p>
    ),
  },
  {
    title: 'Registereintrag',
    content: (
      <p>
        Kein Registereintrag (Einzelunternehmen, nicht e. K.).
      </p>
    ),
  },
];

export default function ImpressumPage() {
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] mb-6">Rechtliches</p>
          <h1 className="text-fluid-section font-bold tracking-tight text-white mb-6">Impressum</h1>
          <div className="h-[1px] bg-[#1a1a1a]" />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          {sections.map((section, i) => (
            <div key={i} className="mb-12 last:mb-0">
              <div className="h-[1px] bg-[#1a1a1a] mb-8" />
              <h2 className="text-base font-bold text-white mb-4 tracking-tight">{section.title}</h2>
              <div className="text-[15px] text-[#999] leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
