'use client';
import { useState, useEffect } from 'react';

const CARDS = [
  {
    label: 'Quote Card',
    content: (
      <>
        <p className="text-white text-sm font-medium leading-snug mb-5">"Unser Feed sieht endlich aus wie eine echte Marke."</p>
        <div className="flex gap-1 mb-5">
          {[0,1,2,3,4].map(i => <span key={i} className="text-white text-xs">★</span>)}
        </div>
        <div className="flex items-center gap-2 pt-4 border-t border-[#1a1a1a]">
          <div className="w-7 h-7 rounded-full bg-[#1a1a1a]" />
          <div>
            <p className="text-[10px] text-white font-medium">Marie K.</p>
            <p className="text-[9px] text-[#999]">@studio.brnd</p>
          </div>
        </div>
      </>
    ),
  },
  {
    label: 'Stats Card',
    content: (
      <>
        <div className="text-[40px] font-bold text-white leading-none mb-1">+342%</div>
        <div className="text-xs text-[#999] mb-5">Reichweite diesen Monat</div>
        <div className="space-y-3">
          {[['Instagram','72%','72%','bg-white'],['LinkedIn','55%','55%','bg-[#444]']].map(([p,v,w,c])=>(
            <div key={p}>
              <div className="flex justify-between text-[10px] mb-1.5"><span className="text-[#999]">{p}</span><span className="text-white">{v}</span></div>
              <div className="h-px bg-[#1a1a1a] rounded-full"><div className={`h-px ${c} rounded-full`} style={{width:w}} /></div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    label: 'Carousel',
    content: (
      <>
        <div className="text-[9px] text-[#999] mb-1.5 uppercase tracking-widest">Hook · Slide 1/5</div>
        <p className="text-white text-sm font-medium leading-snug mb-5">3 Gründe warum dein Content nicht performt</p>
        <div className="pt-4 border-t border-[#1a1a1a] mb-4">
          <p className="text-[10px] text-[#999]">Nächste Slide</p>
          <p className="text-[11px] text-white mt-0.5">Grund #1: Kein klarer Hook</p>
        </div>
        <div className="flex gap-1.5">
          {[0,1,2,3,4].map(i => (
            <div key={i} className={`h-0.5 flex-1 rounded-full ${i===0?'bg-white':'bg-[#2a2a2a]'}`} />
          ))}
        </div>
      </>
    ),
  },
];

function getStyle(offset: number): React.CSSProperties {
  // offset 0 = front, 1 = right-back, 2 = left-back
  const base: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '240px',
    transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1), opacity 0.9s ease, z-index 0s',
  };
  if (offset === 0) return { ...base, transform: 'translateX(-50%) translateY(-55%) rotate(0deg) scale(1)', zIndex: 10, opacity: 1 };
  if (offset === 1) return { ...base, transform: 'translateX(22%) translateY(-40%) rotate(5deg) scale(0.97)', zIndex: 0, opacity: 0.55 };
  return { ...base, transform: 'translateX(-122%) translateY(-63%) rotate(-5deg) scale(0.97)', zIndex: 0, opacity: 0.55 };
}

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive(p => (p + 1) % 3), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-black pt-20 pb-12 md:pt-12 md:pb-0">
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Left */}
        <div>
          <span className="hero-fade inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#222] text-[11px] text-[#999] mb-8">
            <span className="relative w-1.5 h-1.5 inline-block"><span className="absolute inset-0 rounded-full bg-white animate-ping opacity-75" /><span className="relative block w-1.5 h-1.5 rounded-full bg-white" /></span>
            KI-Content-Engine — jetzt in Beta
          </span>
          <h1 className="hero-fade font-bold text-white leading-[1.05] mb-6"
            style={{fontSize:'clamp(2.4rem, 4.5vw, 4rem)', letterSpacing:'-0.03em'}}>
            120 Posts.<br />3 Plattformen.<br />
            <span className="text-[#999]">Null Burnout.</span>
          </h1>
          <p className="hero-fade-2 text-base text-[#999] mb-8 leading-relaxed max-w-sm">
            KI-generierter Content der aussieht, als hätte dein Team eine Woche daran gearbeitet — fertig in Minuten.
          </p>
          <div className="hero-fade-3 flex gap-3">
            <a href="#demo" className="btn-primary px-6 py-3">Demo ansehen</a>
            <a href="#demo" className="btn-ghost px-6 py-3">Kostenlos testen</a>
          </div>
        </div>

        {/* Right: Carousel */}
        <div className="hidden md:block relative h-[480px]">
          {CARDS.map((card, i) => {
            const offset = (i - active + 3) % 3;
            return (
              <div key={i} style={getStyle(offset)}
                className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-6 shadow-2xl cursor-pointer"
                onClick={() => setActive(i)}>
                <div className="text-[9px] text-[#666] uppercase tracking-widest mb-4 font-semibold">{card.label}</div>
                {card.content}
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
