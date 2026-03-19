import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ClientEffects from '@/components/ClientEffects';
import Booking from '@/components/Booking';
import FAQ from '@/components/FAQ';

const IconSearch = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
);
const IconPen = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>
);
const IconChart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <ClientEffects />
      <Header />
      <Hero />

      {/* ===== PROBLEM ===== */}
      <section className="relative z-10 border-t border-[#1a1a1a]">
        <div className="max-w-[88rem] mx-auto px-6 sm:px-12 md:px-20">
          <div className="grid md:grid-cols-12 gap-0">
            <div className="md:col-span-5 pt-16 pb-8 md:py-32 md:pr-16 md:border-r border-[#1a1a1a]">
              <p className="reveal text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] mb-6">Das Problem</p>
              <h2 className="reveal delay-1 text-fluid-section font-bold text-white">
                Dein Content-Problem hat einen Namen: Kapazität.
              </h2>
            </div>
            <div className="md:col-span-7 pb-16 md:py-32 md:pl-16 flex flex-col justify-center gap-5 md:border-t-0">
              <p className="reveal delay-1 text-[15px] text-[#999] leading-relaxed">
                Du weißt, dass Social Media funktioniert. Du siehst es bei der Konkurrenz.
              </p>
              <p className="reveal delay-2 text-[15px] text-[#999] leading-relaxed">
                Aber zwischen Tagesgeschäft, Kundenprojekten und dem fünften Reel diese Woche bleibt Instagram liegen. Oder du postest halbherzig — und es performt halbherzig.
              </p>
              <p className="reveal delay-3 text-[15px] text-[#999] leading-relaxed">
                Agenturen kosten €5K–15K/Monat und liefern 12 Posts. Freelancer ghosten nach 3 Wochen. Canva-Templates sehen aus wie Canva-Templates.
              </p>
              <p className="reveal delay-4 text-[15px] text-white font-medium pt-2">
                Was wäre, wenn du 10× mehr Content hättest — ohne 10× mehr Arbeit?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LÖSUNG / FEATURES ===== */}
      <section id="features" className="relative z-10 border-t border-[#1a1a1a]">
        <div className="max-w-[88rem] mx-auto px-6 sm:px-12 md:px-20 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-0 mb-12">
            <div className="md:col-span-7 md:pr-16">
              <p className="reveal text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] mb-6">Lösung</p>
              <h2 className="reveal delay-1 text-fluid-section font-bold text-white">
                Leitkraft macht aus deiner Marke eine Content-Maschine.
              </h2>
            </div>
            <div className="md:col-span-5 flex items-end mt-8 md:mt-0">
              <div>
                <p className="reveal delay-2 text-[15px] text-[#999] leading-relaxed mb-4">
                  Wir analysieren, was in deiner Nische viral geht. Dann generieren wir originale Posts — Texte, Bilder, Carousels — die zu deiner Marke passen.
                </p>
                <p className="reveal delay-3 text-[15px] text-[#999] leading-relaxed">
                  Kein Copy-Paste. Kein Repost. Dein Stil, deine Stimme, auf Autopilot.
                </p>
              </div>
            </div>
          </div>
          <div className="bento-grid grid-cols-1 md:grid-cols-3">
            {[
              { icon: <IconSearch />, t:'Nischen-Intelligenz', d:'Wir tracken die Top-Accounts in deiner Branche und erkennen, welche Inhalte gerade performen.' },
              { icon: <IconPen />, t:'KI-Content-Studio', d:'Texte, Bilder und Carousels — generiert in deinem Branding, mit deinen Farben und deiner Tonalität.' },
              { icon: <IconChart />, t:'Performance-Daten', d:'Jeder Post wird auf Basis von Engagement-Daten optimiert. Kein Raten, nur Ergebnisse.' },
            ].map((f, i) => (
              <div key={i} className={`reveal delay-${i+1} p-6 sm:p-10`}>
                <div className="text-[#666] mb-5">{f.icon}</div>
                <h3 className="text-base font-semibold text-white mb-3">{f.t}</h3>
                <p className="text-[15px] text-[#999] leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ZAHLEN ===== */}
      <section className="relative z-10 border-t border-[#1a1a1a]">
        <div className="max-w-[88rem] mx-auto px-6 sm:px-12 md:px-20 py-24 md:py-32">
          <p className="reveal text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] mb-6 text-center">Zahlen</p>
          <h2 className="reveal delay-1 text-fluid-section font-bold text-white mb-12 text-center">
            Zahlen, die für sich sprechen.
          </h2>
          <div className="bento-grid grid-cols-1 md:grid-cols-3">
            {[
              { v:'120', s:'+', label:'Posts pro Monat', sub:'automatisch generiert' },
              { v:'3', s:'', label:'Plattformen gleichzeitig', sub:'Instagram, Facebook, LinkedIn' },
              { v:'18', s:'', label:'Professionelle Template-Formate', sub:'datengetrieben designt' },
            ].map((s, i) => (
              <div key={i} className={`number-pop delay-${i+1} p-8 sm:p-12 md:p-16 text-center`}>
                <p className="text-fluid-number font-bold text-white mb-3">
                  <span data-counter={s.v} data-suffix={s.s} className="counter-value">0</span>
                </p>
                <p className="text-base font-medium text-white mb-1">{s.label}</p>
                <p className="text-sm text-[#666]">{s.sub}</p>
              </div>
            ))}
          </div>
          <p className="reveal text-[15px] text-[#666] mt-8 text-center">
            Ein menschliches Team kostet dich €15.000/Monat für denselben Output.
          </p>
        </div>
      </section>

      {/* ===== TEMPLATE SHOWCASE ===== */}
      <section className="relative z-10">
        <div className="max-w-[88rem] mx-auto px-6 sm:px-12 md:px-20 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-0 mb-12">
            <div className="md:col-span-6">
              <p className="reveal text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] mb-6">Templates</p>
              <h2 className="reveal delay-1 text-fluid-section font-bold text-white">
                Nicht irgendwelche Posts. Deine Posts.
              </h2>
            </div>
            <div className="md:col-span-6 flex items-end">
              <p className="reveal delay-2 text-[15px] text-[#999] leading-relaxed max-w-md">
                Jedes Format ist datengetrieben designt — basierend auf den Inhalten, die in deiner Nische die höchste Reichweite erzielen.
              </p>
            </div>
          </div>
          <div className="bento-grid grid-cols-1 md:grid-cols-3">

            <div className="reveal delay-1 p-6 sm:p-10">
              <div className="text-[9px] text-[#666] uppercase tracking-widest mb-5 font-semibold">Quote / Testimonial</div>
              <div className="bg-[#050505] border border-[#1a1a1a] rounded-xl p-5 aspect-[4/3] flex flex-col justify-between">
                <p className="text-white text-sm font-medium leading-snug">"Das hat unsere Reichweite in 4 Wochen verdreifacht."</p>
                <div className="flex items-center gap-2 pt-4 border-t border-[#1a1a1a]">
                  <div className="w-6 h-6 rounded-full bg-[#1a1a1a]" />
                  <span className="text-[10px] text-[#666]">@markenbrand</span>
                </div>
              </div>
            </div>

            <div className="reveal delay-2 p-6 sm:p-10">
              <div className="text-[9px] text-[#666] uppercase tracking-widest mb-5 font-semibold">Stats Card</div>
              <div className="bg-[#050505] border border-[#1a1a1a] rounded-xl p-5 aspect-[4/3] flex flex-col justify-between">
                <div className="text-3xl font-bold text-white">120+</div>
                <div>
                  <div className="text-xs text-[#666] mb-3">Posts pro Monat</div>
                  <div className="space-y-2">
                    {[['IG',80],['FB',65],['LI',50]].map(([p,w],i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-[9px] text-[#666] w-4">{p}</span>
                        <div className="flex-1 h-px bg-[#1a1a1a] rounded-full">
                          <div className="h-px bg-[#444] rounded-full" style={{width:`${w}%`}} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal delay-3 p-6 sm:p-10">
              <div className="text-[9px] text-[#666] uppercase tracking-widest mb-5 font-semibold">Carousel</div>
              <div className="bg-[#050505] border border-[#1a1a1a] rounded-xl p-5 aspect-[4/3] flex flex-col justify-between">
                <div>
                  <div className="text-[9px] text-[#666] uppercase tracking-widest mb-2">Hook</div>
                  <p className="text-white text-sm font-medium leading-snug">3 Fehler die dein Instagram sabotieren</p>
                </div>
                <div>
                  <div className="text-[9px] text-[#666] mb-2">Slide 1 / 5</div>
                  <div className="flex gap-1">
                    {[0,1,2,3,4].map(i => (
                      <div key={i} className={`h-px flex-1 rounded-full ${i===0?'bg-white':'bg-[#222]'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="relative z-10 border-t border-[#1a1a1a]">
        <div className="max-w-[88rem] mx-auto px-6 sm:px-12 md:px-20">
          <div className="grid md:grid-cols-12 gap-0">
            <div className="md:col-span-4 pt-16 pb-8 md:py-32 md:pr-16 md:border-r border-[#1a1a1a]">
              <p className="reveal text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] mb-6">Prozess</p>
              <h2 className="reveal delay-1 text-fluid-section font-bold text-white">
                In 3 Schritten zum Content-Autopilot.
              </h2>
            </div>
            <div className="md:col-span-8 pb-16 md:py-32 md:pl-16 md:border-t-0">
              {[
                { n:'01', t:'Branding einrichten', d:'Farben, Schriften, Tonalität — einmal einrichten, dann läuft\'s.' },
                { n:'02', t:'Content generieren', d:'Wähle Formate, Themen und Frequenz. Die KI erstellt deine Posts.' },
                { n:'03', t:'Freigeben & posten', d:'Prüfe, passe an, veröffentliche — oder lass es automatisch laufen.' },
              ].map((s, i) => (
                <div key={i} className={`reveal delay-${i+1} flex items-start gap-8 py-8 ${i > 0 ? 'border-t border-[#1a1a1a]' : ''}`}>
                  <span className="text-[11px] font-bold text-[#555] tracking-widest mt-1 w-8 shrink-0">{s.n}</span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2">{s.t}</h3>
                    <p className="text-[15px] text-[#999] leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== VERGLEICH ===== */}
      <section className="relative z-10 border-t border-[#1a1a1a]">
        <div className="max-w-[88rem] mx-auto px-6 sm:px-12 md:px-20 py-24 md:py-32">
          <p className="reveal text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] mb-6">Vergleich</p>
          <h2 className="reveal delay-1 text-fluid-section font-bold text-white mb-12">
            Warum Leitkraft statt Agentur?
          </h2>
          <div className="reveal delay-2 bento-grid overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#1a1a1a]">
                    <th className="text-left py-4 px-4 sm:py-5 sm:px-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#555] w-48"></th>
                    <th className="text-left py-4 px-4 sm:py-5 sm:px-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666]">Agentur</th>
                    <th className="text-left py-4 px-4 sm:py-5 sm:px-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666]">Freelancer</th>
                    <th className="text-left py-4 px-4 sm:py-5 sm:px-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-white bg-white/[0.02]">Leitkraft</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Posts/Monat','8–15','10–20','120+'],
                    ['Kosten','€5K–15K','€2K–5K','Ab €X/Monat'],
                    ['Turnaround','5–10 Tage','3–7 Tage','Minuten'],
                    ['Plattformen','1–2','1','3+'],
                    ['Branding-Konsistenz','Variiert','Variiert','100% on-brand'],
                    ['Skalierbar','Nein','Nein','Ja'],
                  ].map(([l,a,b,lk],i) => (
                    <tr key={i} className="border-b border-[#1a1a1a] last:border-0 hover:bg-white/[0.015] transition-colors">
                      <td className="py-4 px-4 sm:py-5 sm:px-6 text-sm font-medium text-white">{l}</td>
                      <td className="py-4 px-4 sm:py-5 sm:px-6 text-sm text-[#666]">{a}</td>
                      <td className="py-4 px-4 sm:py-5 sm:px-6 text-sm text-[#666]">{b}</td>
                      <td className="py-4 px-4 sm:py-5 sm:px-6 text-sm font-medium text-white bg-white/[0.02]">{lk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===== USE CASES ===== */}
      <section id="branchen" className="relative z-10">
        <div className="max-w-[88rem] mx-auto px-6 sm:px-12 md:px-20 py-24 md:py-32">
          <p className="reveal text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] mb-6">Branchen</p>
          <h2 className="reveal delay-1 text-fluid-section font-bold text-white mb-12">
            Für Marken, die wachsen wollen.
          </h2>
          <div className="bento-grid grid-cols-1 md:grid-cols-2">
            {[
              { tag:'Gastro & Hospitality', d:'Tagesgerichte, Events, Bewertungen, Behind-the-Scenes — automatisch in Posts verwandelt, die Gäste bringen.' },
              { tag:'Beauty & Wellness', d:'Vorher/Nachher, Tipps, Testimonials, Buchungs-CTAs — dein Feed sieht aus wie eine Premium-Marke.' },
              { tag:'D2C & E-Commerce', d:'Produkt-Launches, Social Proof, UGC-Style Posts, Sale-Ankündigungen — Content der konvertiert.' },
              { tag:'Coaches & Berater', d:'Thought Leadership, Frameworks, Kundenstimmen — positioniere dich als Experte ohne stundenlang zu posten.' },
            ].map((uc, i) => (
              <div key={i} className={`reveal delay-${i+1} p-6 sm:p-10`}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#666] mb-4">{uc.tag}</p>
                <p className="text-[15px] text-[#999] leading-relaxed">{uc.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative z-10">
        <div className="max-w-[88rem] mx-auto px-6 sm:px-12 md:px-20 py-24 md:py-32">
          <p className="reveal text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] mb-6">Beta-Feedback</p>
          <h2 className="reveal delay-1 text-fluid-section font-bold text-white mb-12">Erste Ergebnisse aus der Beta.</h2>
          <div className="grid md:grid-cols-2 gap-4">

            <div className="reveal delay-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-8">
                  {[0,1,2,3,4].map(i => <span key={i} className="text-white text-sm">★</span>)}
                </div>
                <p className="text-lg text-white font-medium leading-relaxed">
                  &ldquo;Wir haben vorher €8.000/Monat für eine Agentur bezahlt und 12 Posts bekommen. Mit Leitkraft bekommen wir 10× mehr Content für einen Bruchteil der Kosten.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 mt-10 pt-8 border-t border-[#1a1a1a]">
                <div className="w-9 h-9 rounded-full bg-[#222] shrink-0 flex items-center justify-center text-[11px] font-semibold text-white">SK</div>
                <div>
                  <p className="text-sm font-semibold text-white">Sarah K.</p>
                  <p className="text-xs text-[#666]">Inhaberin, Boutique-Hotel</p>
                </div>
              </div>
            </div>

            <div className="reveal delay-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-8">
                  {[0,1,2,3,4].map(i => <span key={i} className="text-white text-sm">★</span>)}
                </div>
                <p className="text-lg text-white font-medium leading-relaxed">
                  &ldquo;Endlich sieht unser Instagram aus wie eine echte Marke. Und ich muss nicht mehr jeden Abend Canva aufmachen.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 mt-10 pt-8 border-t border-[#1a1a1a]">
                <div className="w-9 h-9 rounded-full bg-[#222] shrink-0 flex items-center justify-center text-[11px] font-semibold text-white">MR</div>
                <div>
                  <p className="text-sm font-semibold text-white">Marco R.</p>
                  <p className="text-xs text-[#666]">Geschäftsführer, D2C Skincare Brand</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== BOOKING ===== */}
      <section id="demo" className="relative z-10 border-t border-[#1a1a1a]">
        <div className="max-w-[88rem] mx-auto px-6 sm:px-12 md:px-20">
          <div className="grid md:grid-cols-12 gap-0">
            <div className="md:col-span-4 pt-16 pb-8 md:py-32 md:pr-16 md:border-r border-[#1a1a1a]">
              <p className="reveal text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] mb-6">Demo buchen</p>
              <h2 className="reveal delay-1 text-fluid-section font-bold text-white mb-6">
                Sieh Leitkraft live in Aktion.
              </h2>
              <p className="reveal delay-2 text-[15px] text-[#999] leading-relaxed">
                Wähle einen Termin und wir zeigen dir in 15 Minuten, wie dein Feed in einer Woche aussehen könnte.
              </p>
            </div>
            <div className="md:col-span-8 pb-16 md:py-32 md:pl-16 md:border-t-0">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-sm font-semibold text-white">JC</div>
                <div>
                  <p className="text-sm font-semibold text-white">Jonathan Castro</p>
                  <p className="text-xs text-[#666]">Gründer, Leitkraft</p>
                </div>
              </div>
              <Booking />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="relative z-10 border-t border-[#1a1a1a]">
        <div className="max-w-[88rem] mx-auto px-6 sm:px-12 md:px-20 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="md:col-span-4">
              <p className="reveal text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] mb-6">FAQ</p>
              <h2 className="reveal delay-1 text-fluid-section font-bold text-white">Häufige Fragen.</h2>
            </div>
            <div className="md:col-span-8">
              <FAQ />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section id="cta" className="relative z-10 border-t border-[#1a1a1a]">
        <div className="max-w-[88rem] mx-auto px-6 sm:px-12 md:px-20 py-28 md:py-40 text-center">
          <h2 className="reveal text-fluid-section font-bold text-white mb-4">
            Dein Instagram verdient besseren Content.
          </h2>
          <p className="reveal delay-1 text-[15px] text-[#999] mb-12 max-w-md mx-auto leading-relaxed">
            Starte jetzt und sieh in 10 Minuten, wie dein Feed aussehen könnte.
          </p>
          <div className="reveal delay-2 flex justify-center">
            <a href="#demo" className="btn-primary px-8 py-3">Kostenlose Demo starten</a>
          </div>
          <div className="reveal delay-3 flex flex-col sm:flex-row gap-6 justify-center mt-10 text-xs text-[#666]">
            <span>Keine Kreditkarte nötig</span>
            <span>In 2 Minuten eingerichtet</span>
            <span>Jederzeit kündbar</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
