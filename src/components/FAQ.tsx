'use client';

import { useState } from 'react';

const faqs = [
  { q: 'Ist das nicht einfach ChatGPT + Canva?', a: 'Nein. Leitkraft analysiert was in deiner Nische funktioniert, generiert daraus originale Inhalte in deinem Branding und optimiert auf Performance. Das ist keine Text-Box — das ist eine Content-Engine.' },
  { q: 'Kann ich die Posts bearbeiten bevor sie live gehen?', a: 'Ja. Du hast volle Kontrolle. Jeder Post kann angepasst, freigegeben oder verworfen werden.' },
  { q: 'Für welche Plattformen funktioniert das?', a: 'Instagram, Facebook und LinkedIn. TikTok und YouTube Shorts sind in Planung.' },
  { q: 'Wie schnell sehe ich Ergebnisse?', a: 'Die ersten Posts sind in Minuten fertig. Algorithmische Reichweite baut sich über 2–4 Wochen auf.' },
  { q: 'Was wenn mir der Stil nicht gefällt?', a: 'Branding (Farben, Tonalität, Formate) wird einmalig eingerichtet und kann jederzeit angepasst werden.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-[#1a1a1a]">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-6 text-left group"
          >
            <h3 className="text-[15px] font-medium text-white pr-8">{faq.q}</h3>
            <span className={`text-[#666] text-lg shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open === i ? '200px' : '0', opacity: open === i ? 1 : 0 }}
          >
            <p className="text-[15px] text-[#999] leading-relaxed pb-6">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
