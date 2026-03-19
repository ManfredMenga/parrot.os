import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog | Leitkraft',
  description: 'Insights, Strategien und Tipps rund um KI-Content, Social Media und digitales Marketing.',
};

const posts = [
  {
    title: 'Warum KI-Content besser performt als du denkst',
    excerpt: 'Die meisten Brands unterschätzen KI-generierten Content. Wir zeigen anhand echter Daten, warum algorithmisch optimierte Posts mehr Reichweite erzielen.',
    date: '19. Mär 2026',
    category: 'KI & Content',
    readTime: '5 Min',
  },
  {
    title: 'Social Media ohne Burnout — so skalierst du Content',
    excerpt: '120 Posts im Monat klingt unmöglich? Mit dem richtigen System ist es Alltag. Hier ist der Fahrplan.',
    date: '14. Mär 2026',
    category: 'Strategie',
    readTime: '6 Min',
  },
  {
    title: 'Agentur vs. KI-Content-Engine: Ein ehrlicher Vergleich',
    excerpt: 'Agenturen haben ihren Platz — aber für 120+ Posts im Monat sind sie nicht gebaut. Wir vergleichen Kosten, Speed und Qualität.',
    date: '7. Mär 2026',
    category: 'Vergleich',
    readTime: '7 Min',
  },
];

export default function BlogPage() {
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] mb-6">Blog</p>
          <h1 className="text-fluid-section font-bold tracking-tight text-white">Insights & Strategien.</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          {posts.map((post, i) => (
            <div key={i} className={`py-10 ${i > 0 ? 'border-t border-[#1a1a1a]' : ''}`}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#666]">{post.category}</span>
                <span className="text-[10px] text-[#444]">{post.date}</span>
                <span className="text-[10px] text-[#444]">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-white mb-3">{post.title}</h2>
              <p className="text-[15px] text-[#999] leading-relaxed">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
