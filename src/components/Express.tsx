'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FormData {
  salonName: string;
  teamSize: string;
  revenue: string;
  hasWebsite: string;
  socialMedia: string;
  googleRating: string;
}

interface Result {
  score: number;
  label: string;
  tips: string[];
  breakdown: { label: string; score: number; max: number }[];
}

function calculatePotential(data: FormData): Result {
  const breakdown: { label: string; score: number; max: number }[] = [];
  let total = 0;

  // Team (max 20)
  const teamScores: Record<string, number> = { '1': 8, '2-3': 14, '4-6': 18, '7+': 20 };
  const teamScore = teamScores[data.teamSize] || 0;
  breakdown.push({ label: 'Teamgröße', score: teamScore, max: 20 });
  total += teamScore;

  // Revenue (max 25)
  const revScores: Record<string, number> = {
    'unter-5k': 8, '5k-15k': 14, '15k-30k': 20, '30k+': 25,
  };
  const revScore = revScores[data.revenue] || 0;
  breakdown.push({ label: 'Umsatz', score: revScore, max: 25 });
  total += revScore;

  // Website (max 20)
  const webScore = data.hasWebsite === 'ja' ? 20 : 5;
  breakdown.push({ label: 'Website', score: webScore, max: 20 });
  total += webScore;

  // Social Media (max 15)
  const socialScore = data.socialMedia === 'ja' ? 15 : 3;
  breakdown.push({ label: 'Social Media', score: socialScore, max: 15 });
  total += socialScore;

  // Google Rating (max 20)
  const ratingScores: Record<string, number> = {
    'keine': 3, 'unter-4': 10, '4-4.5': 16, '4.5+': 20,
  };
  const ratingScore = ratingScores[data.googleRating] || 0;
  breakdown.push({ label: 'Google-Bewertungen', score: ratingScore, max: 20 });
  total += ratingScore;

  // Tips based on weaknesses
  const tips: string[] = [];

  if (data.hasWebsite === 'nein') {
    tips.push('Eine professionelle Website ist heute Pflicht – 78% der Neukunden suchen online nach einem Salon.');
  }
  if (data.socialMedia === 'nein') {
    tips.push('Social Media ist der stärkste Kanal für Salons. Regelmäßige Vorher/Nachher-Posts bringen nachweislich mehr Buchungen.');
  }
  if (data.googleRating === 'keine' || data.googleRating === 'unter-4') {
    tips.push('Google-Bewertungen sind entscheidend für lokale Sichtbarkeit. Aktives Review-Management kann Ihren Umsatz um bis zu 18% steigern.');
  }
  if (data.revenue === 'unter-5k' || data.revenue === '5k-15k') {
    tips.push('Mit gezieltem Online-Marketing lässt sich der Umsatz in 6 Monaten deutlich steigern – ohne zusätzliches Personal.');
  }
  if (data.hasWebsite === 'ja' && data.socialMedia === 'ja' && data.googleRating === '4.5+') {
    tips.push('Ihre digitale Basis ist stark. Der nächste Schritt: Automatisierte Buchungssysteme und gezielte Kampagnen für Premium-Kunden.');
  }
  if (tips.length === 0) {
    tips.push('Ihre digitale Präsenz ist solide. Mit einer klaren Strategie können Sie Ihren Salon auf das nächste Level bringen.');
  }

  let label = 'Ausbaufähig';
  if (total >= 80) label = 'Exzellent';
  else if (total >= 60) label = 'Stark';
  else if (total >= 40) label = 'Solide';

  return { score: total, label, tips, breakdown };
}

export default function Express() {
  const [result, setResult] = useState<Result | null>(null);
  const [form, setForm] = useState<FormData>({
    salonName: '',
    teamSize: '',
    revenue: '',
    hasWebsite: '',
    socialMedia: '',
    googleRating: '',
  });

  const update = (key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(calculatePotential(form));
  };

  const allFilled = form.teamSize && form.revenue && form.hasWebsite && form.socialMedia && form.googleRating;

  const selectClass =
    'w-full bg-transparent border-b border-black/10 py-3 text-sm text-brand-black focus:border-brand-accent focus:outline-none transition-colors appearance-none cursor-pointer';
  const toggleClass = (active: boolean) =>
    `flex-1 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-full text-center cursor-pointer transition-all ${
      active ? 'bg-brand-black text-white' : 'bg-transparent text-brand-muted hover:text-brand-black'
    }`;

  return (
    <section id="express" className="py-16 md:py-32 bg-white border-t border-black/5">
      <div className="max-w-[85rem] mx-auto px-6 md:px-12 text-center">
        <p className="reveal text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-6">
          <span className="accent-dot mr-3" />
          Gratis Analyse
        </p>
        <h2 className="reveal delay-1 text-3xl md:text-4xl font-bold tracking-tighter text-brand-black mb-3">
          Dein <span className="font-serif italic font-normal tracking-normal">Potential</span>-Rechner.
        </h2>
        <p className="reveal delay-2 text-sm text-brand-muted font-medium mb-12 max-w-lg mx-auto">
          Beantworte 5 kurze Fragen und erfahre, wie viel ungenutztes Wachstum in deinem Salon steckt.
        </p>

        <form onSubmit={handleSubmit} className="reveal-scale delay-3 max-w-2xl mx-auto mb-16 text-left">
          {/* Salonname */}
          <div className="mb-8">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-2">
              Salonname
            </label>
            <input
              type="text"
              value={form.salonName}
              onChange={(e) => update('salonName', e.target.value)}
              placeholder="z.B. Salon Noir, München..."
              className="input-ultra-clean"
            />
          </div>

          {/* Grid: Teamgröße & Umsatz */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-2">
                Teamgröße
              </label>
              <select
                value={form.teamSize}
                onChange={(e) => update('teamSize', e.target.value)}
                className={selectClass}
                required
              >
                <option value="" disabled>Bitte wählen</option>
                <option value="1">1 Person (Solo)</option>
                <option value="2-3">2–3 Mitarbeiter</option>
                <option value="4-6">4–6 Mitarbeiter</option>
                <option value="7+">7+ Mitarbeiter</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-2">
                Monatlicher Umsatz
              </label>
              <select
                value={form.revenue}
                onChange={(e) => update('revenue', e.target.value)}
                className={selectClass}
                required
              >
                <option value="" disabled>Bitte wählen</option>
                <option value="unter-5k">Unter 5.000 €</option>
                <option value="5k-15k">5.000 – 15.000 €</option>
                <option value="15k-30k">15.000 – 30.000 €</option>
                <option value="30k+">Über 30.000 €</option>
              </select>
            </div>
          </div>

          {/* Toggle: Website & Social Media */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-3">
                Haben Sie eine Website?
              </label>
              <div className="flex gap-2 p-1 bg-black/[0.03] rounded-full">
                <button type="button" onClick={() => update('hasWebsite', 'ja')} className={toggleClass(form.hasWebsite === 'ja')}>
                  Ja
                </button>
                <button type="button" onClick={() => update('hasWebsite', 'nein')} className={toggleClass(form.hasWebsite === 'nein')}>
                  Nein
                </button>
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-3">
                Social Media aktiv?
              </label>
              <div className="flex gap-2 p-1 bg-black/[0.03] rounded-full">
                <button type="button" onClick={() => update('socialMedia', 'ja')} className={toggleClass(form.socialMedia === 'ja')}>
                  Ja
                </button>
                <button type="button" onClick={() => update('socialMedia', 'nein')} className={toggleClass(form.socialMedia === 'nein')}>
                  Nein
                </button>
              </div>
            </div>
          </div>

          {/* Google Rating */}
          <div className="mb-10">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-2">
              Google-Bewertungen
            </label>
            <select
              value={form.googleRating}
              onChange={(e) => update('googleRating', e.target.value)}
              className={selectClass}
              required
            >
              <option value="" disabled>Bitte wählen</option>
              <option value="keine">Keine Bewertungen</option>
              <option value="unter-4">Unter 4 Sterne</option>
              <option value="4-4.5">4 – 4.5 Sterne</option>
              <option value="4.5+">4.5+ Sterne</option>
            </select>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button type="submit" disabled={!allFilled} className="btn-pill btn-accent disabled:opacity-40 disabled:cursor-not-allowed">
              Potential berechnen
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </form>

        {/* Result */}
        {result && (
          <div className="max-w-3xl mx-auto text-left ticket-animate">
            <div className="express-ticket flex flex-col md:flex-row">
              {/* Left: Score */}
              <div className="p-6 md:p-8 md:w-[36%] border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center items-center text-center">
                <p className="text-[9px] uppercase font-bold tracking-widest text-brand-accent/50 mb-6">
                  Dein Ergebnis
                </p>
                <div className="relative w-28 h-28 mb-4">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
                    <circle
                      cx="50" cy="50" r="42" fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={`${(result.score / 100) * 264} 264`}
                      className="text-brand-accent transition-all duration-1000"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
                    {result.score}%
                  </span>
                </div>
                <p className="text-sm font-bold text-white tracking-wide">{result.label}</p>
                {form.salonName && (
                  <p className="text-xs text-white/40 mt-1">{form.salonName}</p>
                )}
              </div>

              {/* Right: Breakdown + Tips */}
              <div className="p-6 md:p-8 md:w-[64%] bg-[#1A1D24]">
                {/* Breakdown bars */}
                <p className="text-[9px] uppercase font-bold tracking-widest text-brand-accent/50 mb-4">
                  Aufschlüsselung
                </p>
                <div className="space-y-3 mb-8">
                  {result.breakdown.map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs text-white/60 mb-1">
                        <span>{item.label}</span>
                        <span>{item.score}/{item.max}</span>
                      </div>
                      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-brand-accent rounded-full transition-all duration-700"
                          style={{ width: `${(item.score / item.max) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tips */}
                <p className="text-[9px] uppercase font-bold tracking-widest text-brand-accent/50 mb-3">
                  Empfehlungen
                </p>
                <ul className="space-y-2">
                  {result.tips.map((tip, i) => (
                    <li key={i} className="flex gap-2 text-xs text-white/70 leading-relaxed">
                      <span className="text-brand-accent mt-0.5 flex-shrink-0">→</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
