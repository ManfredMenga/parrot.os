import type { Metadata } from 'next';
import SubpageHeader from '@/components/SubpageHeader';
import SubpageFooter from '@/components/SubpageFooter';
import ClientEffects from '@/components/ClientEffects';
import TextReveal from '@/components/TextReveal';

export const metadata: Metadata = {
  title: 'Impressum | LeitSalon',
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
    <main className="min-h-screen bg-white">
      <ClientEffects />
      <SubpageHeader />

      {/* Hero */}
      <section className="pt-32 pb-0 md:pt-44 md:pb-0">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-8 md:mb-12">
            <span className="accent-dot mr-3" />
            Rechtliches
          </p>
          <h1 className="text-fluid-section font-bold tracking-tighter text-brand-black mb-6">
            <TextReveal text="Impressum" />
          </h1>
          <div className="line-draw h-[1px] bg-black/10" />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          {sections.map((section, i) => (
            <div key={i} className="reveal delay-1 mb-12 last:mb-0">
              <div className="sweep-line h-[1px] bg-brand-accent/10 mb-8" />
              <h2 className="text-base font-bold text-brand-black mb-4 tracking-tight">{section.title}</h2>
              <div className="text-sm text-brand-muted font-medium leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      <SubpageFooter />
    </main>
  );
}
