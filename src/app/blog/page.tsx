import type { Metadata } from 'next';
import Link from 'next/link';
import SubpageHeader from '@/components/SubpageHeader';
import SubpageFooter from '@/components/SubpageFooter';
import ClientEffects from '@/components/ClientEffects';
import TextReveal from '@/components/TextReveal';

export const metadata: Metadata = {
  title: 'Blog | LeitSalon',
  description: 'Tipps, Strategien und Insights für Premium-Salons. Von SEO bis Social Media.',
};

const posts = [
  {
    slug: 'warum-premium-salons-eine-website-brauchen',
    title: 'Warum Premium-Salons eine professionelle Website brauchen',
    excerpt:
      'Die meisten Salon-Besitzer unterschätzen die Wirkung einer erstklassigen digitalen Präsenz. Wir zeigen, warum eine Website dein wichtigstes Marketing-Tool ist.',
    date: '2026-03-10',
    category: 'Strategie',
    readTime: '5 Min',
    num: '01',
  },
  {
    slug: 'google-ranking-friseur',
    title: 'Google Platz 1 als Friseur – so geht\'s',
    excerpt:
      'Lokale SEO ist der Schlüssel zu mehr Neukunden. Erfahre, welche Schritte dich auf die erste Seite bei Google bringen.',
    date: '2026-03-05',
    category: 'SEO',
    readTime: '7 Min',
    num: '02',
  },
  {
    slug: 'instagram-content-strategie-salons',
    title: 'Instagram Content-Strategie für Salons',
    excerpt:
      'Welche Inhalte funktionieren auf Instagram für Friseur-Salons? Reels, Karussells oder Stories – wir brechen es herunter.',
    date: '2026-02-28',
    category: 'Social Media',
    readTime: '6 Min',
    num: '03',
  },
  {
    slug: 'online-buchung-mehr-umsatz',
    title: 'Wie Online-Buchungen deinen Umsatz steigern',
    excerpt:
      'Automatisierte Terminbuchungen reduzieren No-Shows und steigern deinen Umsatz. Wir zeigen dir warum und wie.',
    date: '2026-02-20',
    category: 'Automatisierung',
    readTime: '4 Min',
    num: '04',
  },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
  return `${d.getDate()}. ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <ClientEffects />
      <SubpageHeader />

      {/* Hero — white, consistent with content below */}
      <section className="pt-32 pb-0 md:pt-44 md:pb-0">
        <div className="max-w-[85rem] mx-auto px-6 md:px-12">
          <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-8 md:mb-12">
            <span className="accent-dot mr-3" />
            Insights & Strategien
          </p>
          <h1 className="text-fluid-section font-bold tracking-tighter text-brand-black mb-6">
            <TextReveal text="Wissen, das" />
            <br />
            <TextReveal text="Wachstum bringt." className="font-serif italic font-normal tracking-normal text-brand-accent" delay={3} />
          </h1>
          <p className="reveal delay-2 text-lg text-brand-muted font-medium max-w-2xl mb-16 md:mb-24">
            Praxis-Wissen für Salon-Inhaber, die digital führen wollen.
          </p>
          <div className="line-draw h-[1px] bg-black/10" />
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24">
        <div className="max-w-[85rem] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {posts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="reveal delay-1 group relative block py-10 border-b border-black/5 last:border-b-0"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[9px] font-bold text-brand-accent/50">{post.num}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent/50">
                    {post.category}
                  </span>
                  <span className="text-[10px] text-brand-muted">{formatDate(post.date)}</span>
                  <span className="text-[10px] text-brand-muted">{post.readTime}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-brand-black mb-3 group-hover:text-brand-accent transition-colors duration-500">
                  {post.title}
                </h2>
                <p className="text-sm text-brand-muted font-medium leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent group-hover:tracking-[0.2em] transition-all duration-500">
                  Weiterlesen →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — subtle, not heavy black */}
      <section className="py-20 md:py-28 border-t border-black/5">
        <div className="max-w-[85rem] mx-auto px-6 md:px-12 text-center">
          <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-8">
            <span className="accent-dot mr-3" />
            Bereit für mehr?
          </p>
          <h2 className="reveal delay-1 text-3xl md:text-5xl font-bold tracking-tighter text-brand-black mb-8">
            Lass uns über deinen Salon sprechen.
          </h2>
          <div className="reveal delay-2">
            <a href="/#kontakt" className="btn-pill btn-black btn-magnetic">
              Jetzt Termin buchen
            </a>
          </div>
        </div>
      </section>

      <SubpageFooter />
    </main>
  );
}
