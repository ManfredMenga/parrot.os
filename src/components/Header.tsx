'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-[#1a1a1a]' : ''}`}>
      <div className="w-full px-6 sm:px-12 md:px-20 h-12 flex justify-between items-center">
        <a href="/" className="font-bold text-[15px] tracking-tight text-white flex items-center gap-2">
          <Image src="/images/logo-white.png" alt="Leitkraft" width={26} height={26} className="-mr-0.5" />
          Leitkraft
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {['Features','Branchen','FAQ'].map(n=>(
            <a key={n} href={`#${n.toLowerCase()}`} className="text-[13px] text-[#666] hover:text-white transition-colors">{n}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a href="/login" className="text-[13px] text-[#666] hover:text-white transition-colors">Log in</a>
          <a href="#demo" className="text-[13px] font-medium py-2 px-5 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-200">Kostenlos starten</a>
        </div>
        <button onClick={()=>setOpen(!open)} className="md:hidden p-2 text-white" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open?<path d="M18 6L6 18M6 6l12 12"/>:<path d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>
      {open&&(
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-[#1a1a1a] px-6 py-4 flex flex-col gap-3">
          {['Features','Branchen','FAQ'].map(n=>(
            <a key={n} href={`#${n.toLowerCase()}`} onClick={()=>setOpen(false)} className="text-sm text-[#666] py-2">{n}</a>
          ))}
          <a href="#demo" onClick={()=>setOpen(false)} className="btn-primary text-sm py-3 text-center mt-2">Kostenlos starten</a>
        </div>
      )}
    </header>
  );
}
