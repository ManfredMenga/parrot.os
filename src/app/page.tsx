import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ClientEffects from '@/components/ClientEffects';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ClientEffects />
      <Header />
      <Hero />

      {/* ===== SECTION 2: Problem ===== */}
      <section id="problem" className="py-20 md:py-32 bg-white">
        <div className="max-w-[85rem] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7">
              <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-8 md:mb-12">
                <span className="accent-dot mr-3" />
                Das Problem
              </p>
              <h2 className="text-fluid-section font-bold tracking-tighter text-brand-black mb-8">
                Dein Content-Problem hat einen Namen:{' '}
                <span className="font-serif italic font-normal tracking-normal">Kapazität.</span>
              </h2>
            </div>
            <div className="md:col-span-5 md:mt-16">
              <p className="reveal-right delay-1 text-lg md:text-xl font-medium text-brand-black leading-snug mb-6">
                Du weißt, dass Social Media funktioniert. Du siehst es bei der Konkurrenz.
              </p>
              <p className="reveal-right delay-2 text-sm text-brand-muted font-medium leading-relaxed mb-6">
                Aber zwischen Tagesgeschäft, Kundenprojekten und dem fünften Reel diese Woche bleibt Instagram liegen. Oder du postest halbherzig — und es performt halbherzig.
              </p>
              <p className="reveal-right delay-3 text-sm text-brand-muted font-medium leading-relaxed mb-8">
                Agenturen kosten €5K–15K/Monat und liefern 12 Posts. Freelancer ghosten nach 3 Wochen. Canva-Templates sehen aus wie Canva-Templates.
              </p>
              <p className="reveal-right delay-4 text-lg font-bold text-brand-accent">
                Was wäre, wenn du 10× mehr Content hättest — ohne 10× mehr Arbeit?
              </p>
              <div className="line-draw-gold mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: Lösung / Produkt-Intro ===== */}
      <section id="features" className="py-20 md:py-32 bg-white border-t border-black/5">
        <div className="max-w-[85rem] mx-auto px-6 md:px-12">
          <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-8 md:mb-12">
            <span className="accent-dot mr-3" />
            Die Lösung
          </p>
          <h2 className="text-fluid-section font-bold tracking-tighter text-brand-black mb-6">
            Leitkraft macht aus deiner Marke eine{' '}
            <span className="font-serif italic font-normal tracking-normal">Content-Maschine.</span>
          </h2>
          <p className="reveal delay-1 text-lg text-brand-muted font-medium max-w-3xl mb-16 md:mb-20">
            Wir analysieren, was in deiner Nische viral geht. Dann generieren wir originale Posts — Texte, Bilder, Carousels — die zu deiner Marke passen. Kein Copy-Paste. Kein Repost. Dein Stil, deine Stimme, auf Autopilot.
          </p>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <div className="reveal-tilt delay-1 card-lift relative group">
              <div className="sweep-line h-[1px] bg-brand-accent/10 mb-8 group-hover:bg-brand-accent/30 transition-colors duration-700" />
              <span className="text-3xl block mb-4">🔍</span>
              <h3 className="text-xl font-bold tracking-tight mb-4">Nischen-Intelligenz</h3>
              <p className="text-sm text-brand-muted font-medium leading-relaxed">
                Wir tracken die Top-Accounts in deiner Branche und erkennen, welche Inhalte gerade performen.
              </p>
            </div>
            <div className="reveal-tilt delay-2 card-lift relative group">
              <div className="sweep-line h-[1px] bg-brand-accent/10 mb-8 group-hover:bg-brand-accent/30 transition-colors duration-700" />
              <span className="text-3xl block mb-4">✍️</span>
              <h3 className="text-xl font-bold tracking-tight mb-4">KI-Content-Studio</h3>
              <p className="text-sm text-brand-muted font-medium leading-relaxed">
                Texte, Bilder und Carousels — generiert in deinem Branding, mit deinen Farben und deiner Tonalität.
              </p>
            </div>
            <div className="reveal-tilt delay-3 card-lift relative group">
              <div className="sweep-line h-[1px] bg-brand-accent/10 mb-8 group-hover:bg-brand-accent/30 transition-colors duration-700" />
              <span className="text-3xl block mb-4">📊</span>
              <h3 className="text-xl font-bold tracking-tight mb-4">Performance-Daten</h3>
              <p className="text-sm text-brand-muted font-medium leading-relaxed">
                Jeder Post wird auf Basis von Engagement-Daten optimiert. Kein Raten, nur Ergebnisse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: Social Proof / Zahlen ===== */}
      <section className="py-20 md:py-32 bg-[#0a0a0c] text-white">
        <div className="max-w-[85rem] mx-auto px-6 md:px-12">
          <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-8 md:mb-12">
            <span className="accent-dot mr-3" />
            In Zahlen
          </p>
          <h2 className="text-fluid-section font-bold tracking-tighter text-white mb-16 md:mb-20">
            Zahlen, die für sich{' '}
            <span className="font-serif italic font-normal tracking-normal text-brand-accent">sprechen.</span>
          </h2>

          <div className="line-draw h-[1px] bg-white/10 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center md:text-left">
            <div className="number-pop delay-1">
              <p className="text-fluid-number font-bold tracking-tighter mb-2">
                <span data-counter="120" data-suffix="+" className="counter-value">0</span>
              </p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                Posts pro Monat<br />automatisch generiert
              </p>
            </div>
            <div className="number-pop delay-2">
              <p className="text-fluid-number font-bold tracking-tighter mb-2">
                <span data-counter="3" className="counter-value">0</span>
              </p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                Plattformen gleichzeitig<br />(IG, FB, LinkedIn)
              </p>
            </div>
            <div className="number-pop delay-3">
              <p className="text-fluid-number font-bold tracking-tighter mb-2">
                <span data-counter="18" className="counter-value">0</span>
              </p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                Professionelle<br />Template-Formate
              </p>
            </div>
          </div>

          <p className="reveal delay-3 text-sm text-white/30 font-medium mt-12 text-center md:text-left">
            Ein menschliches Team kostet dich €15.000/Monat für denselben Output.
          </p>
        </div>
      </section>

      {/* ===== SECTION 5: Template-Showcase ===== */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[85rem] mx-auto px-6 md:px-12">
          <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-8 md:mb-12">
            <span className="accent-dot mr-3" />
            Dein Content
          </p>
          <h2 className="text-fluid-section font-bold tracking-tighter text-brand-black mb-16 md:mb-20">
            Nicht irgendwelche Posts.{' '}
            <span className="font-serif italic font-normal tracking-normal">Deine Posts.</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: 'Quote / Testimonial Card', color: 'from-brand-accent/20 to-brand-accent/5' },
              { title: 'Stats Card mit Metriken', color: 'from-blue-500/15 to-blue-500/5' },
              { title: 'Carousel (Hook → Steps → CTA)', color: 'from-purple-500/15 to-purple-500/5' },
              { title: 'Vergleich (Do vs. Don\'t)', color: 'from-green-500/15 to-green-500/5' },
              { title: 'News-Style Post', color: 'from-orange-500/15 to-orange-500/5' },
              { title: 'Video Thumbnail', color: 'from-rose-500/15 to-rose-500/5' },
            ].map((template, i) => (
              <div
                key={i}
                className={`reveal delay-${Math.min(i + 1, 5)} card-lift aspect-[4/5] rounded-2xl bg-gradient-to-br ${template.color} border border-black/5 flex items-end p-5 md:p-6 group hover:border-brand-accent/20 transition-colors duration-500`}
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-white/80 mb-3 flex items-center justify-center text-xs font-bold text-brand-black">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-xs md:text-sm font-bold text-brand-black/80">{template.title}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="reveal delay-3 text-sm text-brand-muted font-medium mt-10 text-center max-w-2xl mx-auto">
            Jedes Format ist datengetrieben designt — basierend auf den Inhalten, die in deiner Nische die höchste Reichweite erzielen.
          </p>
        </div>
      </section>

      {/* ===== SECTION 6: Wie es funktioniert ===== */}
      <section id="how-it-works" className="py-20 md:py-32 bg-[#0a0a0c] text-white">
        <div className="max-w-[85rem] mx-auto px-6 md:px-12">
          <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-8 md:mb-12">
            <span className="accent-dot mr-3" />
            So funktioniert's
          </p>
          <h2 className="text-fluid-section font-bold tracking-tighter text-white mb-16 md:mb-20">
            In 3 Schritten zum{' '}
            <span className="font-serif italic font-normal tracking-normal text-brand-accent">Content-Autopilot.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <div className="reveal-tilt delay-1 card-lift relative group">
              <div className="sweep-line h-[1px] bg-brand-accent/10 mb-8 group-hover:bg-brand-accent/30 transition-colors duration-700" />
              <span className="text-[9px] font-bold text-brand-accent/50 block mb-4">01</span>
              <h3 className="text-xl font-bold tracking-tight mb-4 text-white">Branding einrichten</h3>
              <p className="text-sm text-white/40 font-medium leading-relaxed">
                Farben, Schriften, Tonalität — einmal einrichten, dann läuft's.
              </p>
            </div>
            <div className="reveal-tilt delay-2 card-lift relative group">
              <div className="sweep-line h-[1px] bg-brand-accent/10 mb-8 group-hover:bg-brand-accent/30 transition-colors duration-700" />
              <span className="text-[9px] font-bold text-brand-accent/50 block mb-4">02</span>
              <h3 className="text-xl font-bold tracking-tight mb-4 text-white">Content generieren</h3>
              <p className="text-sm text-white/40 font-medium leading-relaxed">
                Wähle Formate, Themen und Frequenz. Die KI erstellt deine Posts.
              </p>
            </div>
            <div className="reveal-tilt delay-3 card-lift relative group">
              <div className="sweep-line h-[1px] bg-brand-accent/10 mb-8 group-hover:bg-brand-accent/30 transition-colors duration-700" />
              <span className="text-[9px] font-bold text-brand-accent/50 block mb-4">03</span>
              <h3 className="text-xl font-bold tracking-tight mb-4 text-white">Freigeben & posten</h3>
              <p className="text-sm text-white/40 font-medium leading-relaxed">
                Prüfe, passe an, veröffentliche — oder lass es automatisch laufen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: Vergleich ===== */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[85rem] mx-auto px-6 md:px-12">
          <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-8 md:mb-12">
            <span className="accent-dot mr-3" />
            Vergleich
          </p>
          <h2 className="text-fluid-section font-bold tracking-tighter text-brand-black mb-16 md:mb-20">
            Warum Leitkraft statt{' '}
            <span className="font-serif italic font-normal tracking-normal">Agentur?</span>
          </h2>

          <div className="reveal overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-brand-black/10">
                  <th className="text-left py-4 pr-4 font-bold text-brand-muted text-xs uppercase tracking-widest"></th>
                  <th className="text-left py-4 px-4 font-bold text-brand-muted text-xs uppercase tracking-widest">Agentur</th>
                  <th className="text-left py-4 px-4 font-bold text-brand-muted text-xs uppercase tracking-widest">Freelancer</th>
                  <th className="text-left py-4 px-4 font-bold text-brand-accent text-xs uppercase tracking-widest">Leitkraft</th>
                </tr>
              </thead>
              <tbody className="text-brand-black">
                {[
                  ['Posts/Monat', '8–15', '10–20', '120+'],
                  ['Kosten', '€5K–15K', '€2K–5K', 'Ab €X/Monat'],
                  ['Turnaround', '5–10 Tage', '3–7 Tage', 'Minuten'],
                  ['Plattformen', '1–2', '1', '3+'],
                  ['Branding-Konsistenz', 'Variiert', 'Variiert', '100% on-brand'],
                  ['Skalierbar', 'Nein', 'Nein', 'Ja'],
                ].map(([label, agentur, freelancer, leitkraft], i) => (
                  <tr key={i} className="border-b border-brand-black/5 hover:bg-brand-accent/5 transition-colors">
                    <td className="py-4 pr-4 font-bold text-sm">{label}</td>
                    <td className="py-4 px-4 text-brand-muted">{agentur}</td>
                    <td className="py-4 px-4 text-brand-muted">{freelancer}</td>
                    <td className="py-4 px-4 font-bold text-brand-accent">{leitkraft}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: Use Cases / Nischen ===== */}
      <section className="py-20 md:py-32 bg-[#0a0a0c] text-white overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-6 md:px-12">
          <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-8 md:mb-12">
            <span className="accent-dot mr-3" />
            Use Cases
          </p>
          <h2 className="text-fluid-section font-bold tracking-tighter text-white mb-16 md:mb-20">
            Für Marken, die{' '}
            <span className="font-serif italic font-normal tracking-normal text-brand-accent">wachsen wollen.</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: '🍷',
                title: 'Gastro & Hospitality',
                desc: 'Tagesgerichte, Events, Bewertungen, Behind-the-Scenes — automatisch in Posts verwandelt, die Gäste bringen.',
              },
              {
                emoji: '💇',
                title: 'Beauty & Wellness',
                desc: 'Vorher/Nachher, Tipps, Testimonials, Buchungs-CTAs — dein Feed sieht aus wie eine Premium-Marke.',
              },
              {
                emoji: '🛍️',
                title: 'D2C & E-Commerce',
                desc: 'Produkt-Launches, Social Proof, UGC-Style Posts, Sale-Ankündigungen — Content der konvertiert.',
              },
              {
                emoji: '💼',
                title: 'Coaches & Berater',
                desc: 'Thought Leadership, Frameworks, Kundenstimmen — positioniere dich als Experte ohne stundenlang zu posten.',
              },
            ].map((useCase, i) => (
              <div
                key={i}
                className={`reveal delay-${i + 1} group relative rounded-2xl bg-white/[0.03] border border-white/5 p-6 card-lift hover:border-brand-accent/20 transition-colors duration-500`}
              >
                <span className="text-3xl block mb-4">{useCase.emoji}</span>
                <h3 className="text-base font-bold tracking-tight mb-3 text-white">{useCase.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: Testimonials ===== */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[85rem] mx-auto px-6 md:px-12">
          <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-8 md:mb-12">
            <span className="accent-dot mr-3" />
            Kundenstimmen
          </p>
          <h2 className="text-fluid-section font-bold tracking-tighter text-brand-black mb-16 md:mb-20">
            Was unsere Kunden{' '}
            <span className="font-serif italic font-normal tracking-normal">sagen.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="reveal delay-1 card-lift p-8 md:p-10 rounded-2xl bg-[#fafafa] border border-black/5">
              <p className="text-lg md:text-xl font-medium text-brand-black leading-relaxed mb-8">
                "Wir haben vorher €8.000/Monat für eine Agentur bezahlt und 12 Posts bekommen. Mit Leitkraft bekommen wir 10× mehr Content für einen Bruchteil der Kosten."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-sm font-bold text-brand-accent">?</div>
                <div>
                  <p className="font-bold text-sm text-brand-black">[Name]</p>
                  <p className="text-xs text-brand-muted">[Unternehmen]</p>
                </div>
              </div>
            </div>
            <div className="reveal delay-2 card-lift p-8 md:p-10 rounded-2xl bg-[#fafafa] border border-black/5">
              <p className="text-lg md:text-xl font-medium text-brand-black leading-relaxed mb-8">
                "Endlich sieht unser Instagram aus wie eine echte Marke. Und ich muss nicht mehr jeden Abend Canva aufmachen."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-sm font-bold text-brand-accent">?</div>
                <div>
                  <p className="font-bold text-sm text-brand-black">[Name]</p>
                  <p className="text-xs text-brand-muted">[Unternehmen]</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-brand-muted text-center mt-8 italic">
            Echte Testimonials nach Beta-Phase
          </p>
        </div>
      </section>

      {/* ===== SECTION 10: Pricing ===== */}
      <section id="pricing" className="py-20 md:py-32 bg-[#0a0a0c] text-white">
        <div className="max-w-[85rem] mx-auto px-6 md:px-12">
          <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-8 md:mb-12">
            <span className="accent-dot mr-3" />
            Pricing
          </p>
          <h2 className="text-fluid-section font-bold tracking-tighter text-white mb-6">
            Investiere in Content,{' '}
            <span className="font-serif italic font-normal tracking-normal text-brand-accent">nicht in Overhead.</span>
          </h2>
          <p className="reveal delay-1 text-lg text-white/40 font-medium max-w-2xl mb-16 md:mb-20">
            Wähle den Plan, der zu deinem Wachstum passt.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Starter',
                price: '€X',
                posts: '40',
                platforms: '1',
                features: ['Carousels', 'Basic Branding'],
                missing: ['AI-Bilder', 'Reels'],
                highlighted: false,
              },
              {
                name: 'Growth',
                price: '€X',
                posts: '80',
                platforms: '2',
                features: ['Carousels', 'AI-Bilder', 'Full Branding'],
                missing: ['Reels'],
                highlighted: true,
              },
              {
                name: 'Scale',
                price: '€X',
                posts: '120+',
                platforms: '3+',
                features: ['Carousels', 'AI-Bilder', 'Reels', 'Full Branding + Varianten'],
                missing: [],
                highlighted: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`reveal delay-${i + 1} card-lift relative rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-brand-accent/10 border-2 border-brand-accent/30'
                    : 'bg-white/[0.03] border border-white/5'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-6 bg-brand-accent text-brand-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    Beliebt
                  </span>
                )}
                <h3 className="text-xl font-bold tracking-tight mb-2">{plan.name}</h3>
                <p className="text-fluid-number font-bold tracking-tighter text-brand-accent mb-1">
                  {plan.price}
                </p>
                <p className="text-xs text-white/40 mb-8">pro Monat</p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-brand-accent font-bold">{plan.posts}</span>
                    <span className="text-white/60">Posts/Monat</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-brand-accent font-bold">{plan.platforms}</span>
                    <span className="text-white/60">Plattformen</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-6 space-y-2">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="text-green-400 text-xs">✓</span>
                      {f}
                    </div>
                  ))}
                  {plan.missing.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-white/20">
                      <span className="text-white/20 text-xs">✗</span>
                      {f}
                    </div>
                  ))}
                </div>

                <a
                  href="#cta"
                  className={`block text-center mt-8 btn-pill w-full ${
                    plan.highlighted ? 'btn-accent' : 'border border-white/10 text-white hover:bg-white/5 transition-colors'
                  }`}
                >
                  Plan wählen
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 11: FAQ ===== */}
      <section id="faq" className="py-20 md:py-32 bg-white">
        <div className="max-w-[85rem] mx-auto px-6 md:px-12">
          <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-8 md:mb-12">
            <span className="accent-dot mr-3" />
            FAQ
          </p>
          <h2 className="text-fluid-section font-bold tracking-tighter text-brand-black mb-16 md:mb-20">
            Häufige{' '}
            <span className="font-serif italic font-normal tracking-normal">Fragen.</span>
          </h2>

          <div className="max-w-3xl space-y-0">
            {[
              {
                q: 'Ist das nicht einfach ChatGPT + Canva?',
                a: 'Nein. Leitkraft analysiert was in deiner Nische funktioniert, generiert daraus originale Inhalte in deinem Branding und optimiert auf Performance. Das ist keine Text-Box — das ist eine Content-Engine.',
              },
              {
                q: 'Kann ich die Posts bearbeiten bevor sie live gehen?',
                a: 'Ja. Du hast volle Kontrolle. Jeder Post kann angepasst, freigegeben oder verworfen werden.',
              },
              {
                q: 'Für welche Plattformen funktioniert das?',
                a: 'Instagram, Facebook und LinkedIn. TikTok und YouTube Shorts sind in Planung.',
              },
              {
                q: 'Wie schnell sehe ich Ergebnisse?',
                a: 'Die ersten Posts sind in Minuten fertig. Algorithmische Reichweite baut sich über 2–4 Wochen auf.',
              },
              {
                q: 'Was wenn mir der Stil nicht gefällt?',
                a: 'Branding (Farben, Tonalität, Formate) wird einmalig eingerichtet und kann jederzeit angepasst werden.',
              },
            ].map((faq, i) => (
              <div key={i} className={`reveal delay-${Math.min(i + 1, 5)} border-b border-brand-black/5 py-8`}>
                <h3 className="text-lg font-bold tracking-tight text-brand-black mb-3">{faq.q}</h3>
                <p className="text-sm text-brand-muted font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 12: Final CTA ===== */}
      <section id="cta" className="py-20 md:py-32 bg-[#0a0a0c] text-white text-center">
        <div className="max-w-[85rem] mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="reveal text-fluid-section font-bold tracking-tighter text-white mb-4">
              Dein Instagram verdient{' '}
              <span className="font-serif italic font-normal tracking-normal text-brand-accent">besseren Content.</span>
            </h2>
            <p className="reveal delay-1 text-lg text-white/50 font-medium mb-10">
              Starte jetzt und sieh in 10 Minuten, wie dein Feed aussehen könnte.
            </p>
            <div className="reveal delay-2">
              <a href="#" className="btn-pill btn-accent btn-magnetic text-lg px-10 py-5">
                Kostenlose Demo starten
              </a>
            </div>
            <div className="reveal delay-3 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mt-10 text-xs text-white/30 font-medium">
              <span>✓ Keine Kreditkarte nötig</span>
              <span>✓ In 2 Minuten eingerichtet</span>
              <span>✓ Jederzeit kündbar</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
