'use client';

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-5 md:px-10 md:py-6 flex justify-between items-center bg-transparent mix-blend-difference">
      <a href="#" className="flex items-center gap-2 cursor-pointer group">
        <span className="font-bold text-lg tracking-tighter uppercase leading-none text-white">
          LEITKRAFT
        </span>
      </a>
      <div className="flex gap-6 items-center">
        <a
          href="#features"
          className="text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 transition-opacity hidden md:block"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 transition-opacity hidden md:block"
        >
          Pricing
        </a>
        <a
          href="#faq"
          className="text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 transition-opacity hidden md:block"
        >
          FAQ
        </a>
        <a
          href="#cta"
          className="text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 transition-opacity hidden md:block"
        >
          Demo
        </a>
        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md p-6 flex flex-col gap-4 md:hidden mix-blend-normal">
          <a href="#features" onClick={() => setMenuOpen(false)} className="text-xs font-bold uppercase tracking-widest text-white py-2">Features</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="text-xs font-bold uppercase tracking-widest text-white py-2">Pricing</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="text-xs font-bold uppercase tracking-widest text-white py-2">FAQ</a>
          <a href="#cta" onClick={() => setMenuOpen(false)} className="text-xs font-bold uppercase tracking-widest text-white py-2">Demo</a>
        </div>
      )}
    </header>
  );
}
