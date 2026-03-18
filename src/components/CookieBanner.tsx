'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] p-4 md:p-6">
      <div className="max-w-2xl mx-auto bg-brand-black border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
        <p className="text-white/80 text-sm leading-relaxed mb-6">
          Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
          Weitere Informationen finden Sie in unserer{' '}
          <a href="/datenschutz" className="text-brand-accent hover:text-white transition-colors underline">
            Datenschutzerklärung
          </a>.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="btn-pill btn-accent text-xs flex-1 md:flex-none"
          >
            Akzeptieren
          </button>
          <button
            onClick={handleDecline}
            className="btn-pill text-xs flex-1 md:flex-none border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors"
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
}
