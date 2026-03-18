'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Check, X } from 'lucide-react';

const services = [
  { name: 'Cut & Style', desc: 'Beratung, Waschen, Schnitt, Finish', price: '95', duration: '60 min' },
  { name: 'Coloration', desc: 'Individuelle Farbkonzepte, Balayage, Highlights', price: '145', duration: '120 min' },
  { name: 'Keratin Treatment', desc: 'Intensivpflege für geschmeidiges, glänzendes Haar', price: '220', duration: '90 min' },
  { name: 'Bridal', desc: 'Probestyling & Hochzeitstag-Styling', price: '280', duration: '120 min' },
  { name: 'Grooming', desc: 'Herrenschnitt, Bartpflege, Styling', price: '65', duration: '45 min' },
  { name: 'Olaplex Ritual', desc: 'Bond-Repair-Behandlung für geschädigtes Haar', price: '85', duration: '60 min' },
];

const stylists = [
  { id: 'lena', name: 'Lena', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80' },
  { id: 'marc', name: 'Marc', role: 'Senior Stylist', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
  { id: 'ada', name: 'Ada', role: 'Color Specialist', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' },
  { id: 'any', name: 'Egal', role: 'Nächster verfügbar', img: '' },
];

const timeSlots = ['10:00', '10:30', '11:00', '11:30', '12:00', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];

function getWeekDays(startDate: Date) {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(startDate);
    d.setDate(d.getDate() + i);
    days.push(d);
  }
  return days;
}

function formatDate(d: Date) {
  return d.toLocaleDateString('de-DE', { weekday: 'short', day: 'numeric', month: 'short' });
}

function formatDateLong(d: Date) {
  return d.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

const dayNames = ['SO', 'MO', 'DI', 'MI', 'DO', 'FR', 'SA'];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80', alt: 'Interior', span: 'md:col-span-2 md:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80', alt: 'Styling', span: '' },
  { src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80', alt: 'Tools', span: '' },
  { src: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600&q=80', alt: 'Atmosphere', span: '' },
  { src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&q=80', alt: 'Detail', span: 'md:col-span-2' },
  { src: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=80', alt: 'Stylist', span: '' },
];

export default function StudioNoir() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedStylist, setSelectedStylist] = useState('');
  const [weekStart, setWeekStart] = useState(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '' });
  const [confirmed, setConfirmed] = useState(false);

  const weekDays = getWeekDays(weekStart);
  const isSunday = (d: Date) => d.getDay() === 0;
  const isMonday = (d: Date) => d.getDay() === 1;

  useEffect(() => {
    const els = document.querySelectorAll('.sn-reveal, .sn-reveal-right, .sn-reveal-scale, .sn-reveal-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sn-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (bookingOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [bookingOpen]);

  const resetBooking = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedStylist('');
    setSelectedDate(null);
    setSelectedTime('');
    setForm({ firstName: '', lastName: '', phone: '', email: '' });
    setConfirmed(false);
  };

  const openBooking = () => {
    resetBooking();
    setBookingOpen(true);
  };

  const selectedServiceData = selectedService !== null ? services[selectedService] : null;
  const selectedStylistData = stylists.find((s) => s.id === selectedStylist);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E8E4DF] antialiased selection:bg-[#8B0000]/30">
      <style dangerouslySetInnerHTML={{ __html: `
        .sn-reveal { opacity: 0; transform: translateY(40px); transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .sn-reveal.sn-visible { opacity: 1; transform: translateY(0); }
        .sn-reveal-right { opacity: 0; transform: translateX(30px); transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .sn-reveal-right.sn-visible { opacity: 1; transform: translateX(0); }
        .sn-reveal-scale { opacity: 0; transform: scale(0.95); transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .sn-reveal-scale.sn-visible { opacity: 1; transform: scale(1); }
        .sn-reveal-up { opacity: 0; transform: translateY(60px); transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .sn-reveal-up.sn-visible { opacity: 1; transform: translateY(0); }
        .sn-d1 { transition-delay: 0.1s; }
        .sn-d2 { transition-delay: 0.2s; }
        .sn-d3 { transition-delay: 0.3s; }
        .sn-d4 { transition-delay: 0.4s; }
        .sn-d5 { transition-delay: 0.5s; }
        .sn-d6 { transition-delay: 0.6s; }
        @keyframes sn-fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes sn-lineExpand { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes sn-subtleFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .sn-hero-fade { opacity: 0; animation: sn-fadeIn 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards; }
        .sn-hero-fade-2 { opacity: 0; animation: sn-fadeIn 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards; }
        .sn-hero-fade-3 { opacity: 0; animation: sn-fadeIn 1.6s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards; }
        .sn-hero-fade-4 { opacity: 0; animation: sn-fadeIn 1.6s cubic-bezier(0.16, 1, 0.3, 1) 1.3s forwards; }
        .sn-line-anim { transform-origin: left; animation: sn-lineExpand 2s cubic-bezier(0.16, 1, 0.3, 1) 1.6s forwards; transform: scaleX(0); }
        .sn-grain::after { content: ''; position: fixed; inset: 0; z-index: 9990; pointer-events: none; opacity: 0.02; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
        @keyframes sn-scrollDown { 0%, 100% { transform: translateY(0); opacity: 0.4; } 50% { transform: translateY(12px); opacity: 1; } }
      ` }} />

      <div className="sn-grain" />

      {/* Zurück-Button */}
      <a href="/" className="fixed bottom-6 left-6 z-50 flex items-center gap-2 text-[9px] tracking-[0.2em] uppercase text-white/30 hover:text-white/70 transition-colors duration-500 group">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:-translate-x-1 transition-transform duration-500">
          <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="0.75" />
        </svg>
        Zurück
      </a>

      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-40 mix-blend-difference">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 py-6 md:py-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-white/40" />
            <span className="text-[11px] font-light tracking-[0.35em] uppercase text-white">
              Studio Noir
            </span>
          </div>
          <nav className="hidden md:flex gap-10 items-center">
            {['Philosophie', 'Services', 'Galerie', 'Kontakt'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] tracking-[0.25em] uppercase text-white/60 hover:text-white transition-colors duration-500 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-white/60 group-hover:w-full transition-all duration-500" />
              </a>
            ))}
            <button
              onClick={openBooking}
              className="text-[10px] tracking-[0.2em] uppercase text-white border border-white/20 px-5 py-2.5 hover:bg-white hover:text-[#0A0A0A] transition-all duration-500"
            >
              Termin buchen
            </button>
          </nav>
        </div>
      </header>

      {/* Hero — Cinematic Full Bleed */}
      <section className="relative h-dvh min-h-[600px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=85"
            alt="Studio Noir"
            fill
            className="object-cover scale-[1.05]"
            priority
            style={{ filter: 'brightness(0.25) contrast(1.1)' }}
          />
        </div>

        <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 max-w-[90rem] mx-auto w-full">
          <div className="grid md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8">
              <p className="sn-hero-fade text-[10px] tracking-[0.4em] uppercase text-white/60 mb-5">
                München · Maxvorstadt · Est. 2019
              </p>
              <h1 className="sn-hero-fade-2 text-[clamp(3rem,8vw,7rem)] font-extralight tracking-[-0.04em] leading-[0.9]">
                Studio
                <br />
                <span className="font-serif italic font-light tracking-[-0.02em]">Noir</span>
              </h1>
              <div className="sn-line-anim w-24 h-[0.5px] bg-white/30 mt-8 mb-6" />
              <p className="sn-hero-fade-3 text-sm font-light text-white/70 max-w-sm leading-relaxed tracking-wide">
                Wo Reduktion zur Haltung wird. Handwerk, destilliert auf das Wesentliche.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <div className="sn-hero-fade-4">
                <button
                  onClick={openBooking}
                  className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-white/70 hover:text-white transition-colors duration-500 group"
                >
                  <span>Termin anfragen</span>
                  <span className="w-8 h-[0.5px] bg-white/30 group-hover:w-14 transition-all duration-500" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10" style={{ animation: 'sn-scrollDown 2.5s ease-in-out infinite' }}>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-white/50">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="8" cy="8" r="1.5" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Philosophie */}
      <section id="philosophie" className="py-28 md:py-44">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-16 md:gap-20">
            <div className="md:col-span-6 lg:col-span-5">
              <div className="sn-reveal sticky top-32">
                <p className="text-[9px] tracking-[0.5em] uppercase text-white/40 mb-12">
                  01 — Philosophie
                </p>
                <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extralight tracking-[-0.03em] leading-[1.1] mb-8">
                  Wir schneiden keine
                  <br />
                  Haare. Wir <span className="font-serif italic">editieren</span>
                  <br />
                  <span className="text-white/50">Persönlichkeit.</span>
                </h2>
                <div className="w-12 h-[0.5px] bg-white/10 mb-8" />
                <p className="text-[13px] font-light text-white/50 leading-[1.9] max-w-sm">
                  Studio Noir ist kein Salon im klassischen Sinne. Es ist ein Raum,
                  in dem jeder Schnitt eine bewusste Entscheidung ist. Jede Farbe
                  eine klare Haltung. Wir arbeiten reduziert — weil
                  Reduktion die höchste Form der Klarheit ist.
                </p>
              </div>
            </div>
            <div className="md:col-span-6 lg:col-span-7">
              <div className="sn-reveal-right sn-d2 relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80"
                  alt="Studio Noir Philosophie"
                  fill
                  className="object-cover"
                  style={{ filter: 'brightness(0.7) contrast(1.05)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <blockquote className="text-lg md:text-xl font-serif italic font-light text-white/60 leading-relaxed">
                    &ldquo;Perfektion ist nicht dann erreicht, wenn man nichts mehr hinzufügen,
                    sondern nichts mehr weglassen kann.&rdquo;
                  </blockquote>
                  <p className="text-[9px] tracking-[0.4em] uppercase text-white/40 mt-4">
                    — Antoine de Saint-Exupéry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Divider — Numbers */}
      <section className="py-20 md:py-28 border-y border-white/[0.04]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { num: '6', label: 'Jahre Erfahrung' },
              { num: '4.200+', label: 'Zufriedene Kunden' },
              { num: '3', label: 'Meister-Stylisten' },
              { num: '1', label: 'Überzeugung' },
            ].map((stat, i) => (
              <div key={stat.label} className={`sn-reveal sn-d${i + 1} text-center md:text-left`}>
                <p className="text-[clamp(2rem,4vw,3.5rem)] font-extralight tracking-[-0.02em] text-white/80 mb-2">
                  {stat.num}
                </p>
                <p className="text-[9px] tracking-[0.4em] uppercase text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 md:py-44">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-12 md:gap-20 mb-16 md:mb-24">
            <div className="md:col-span-5">
              <p className="sn-reveal text-[9px] tracking-[0.5em] uppercase text-white/40 mb-6">
                02 — Services
              </p>
              <h2 className="sn-reveal sn-d1 text-[clamp(2rem,4vw,3.5rem)] font-extralight tracking-[-0.03em] leading-[1.1]">
                Präzision in
                <br />
                <span className="font-serif italic">jedem Detail.</span>
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 flex items-end">
              <p className="sn-reveal sn-d2 text-[13px] font-light text-white/50 leading-[1.9]">
                Jede Leistung auf höchstem Niveau. Keine Kompromisse.
                Wir verwenden ausschließlich Produkte, an die wir selbst glauben.
              </p>
            </div>
          </div>

          <div className="border-t border-white/[0.06]">
            {services.map((service, i) => (
              <div
                key={service.name}
                className={`sn-reveal sn-d${Math.min(i + 1, 4)} group border-b border-white/[0.06] cursor-pointer transition-colors duration-500 ${activeService === i ? 'bg-white/[0.02]' : ''}`}
                onMouseEnter={() => setActiveService(i)}
                onMouseLeave={() => setActiveService(null)}
                onClick={() => { setSelectedService(i); openBooking(); }}
              >
                <div className="py-6 md:py-8 px-2 md:px-6">
                  <div className="grid md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-1">
                      <span className="text-[10px] tracking-[0.3em] text-white/40 font-light">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <h3 className="text-lg md:text-xl font-light tracking-[-0.01em] group-hover:text-white transition-colors duration-500">
                        {service.name}
                      </h3>
                    </div>
                    <div className="md:col-span-4">
                      <p className={`text-[13px] font-light text-white/40 leading-relaxed transition-all duration-500 ${activeService === i ? 'text-white/40' : ''}`}>
                        {service.desc}
                      </p>
                    </div>
                    <div className="md:col-span-1 md:text-center">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">
                        {service.duration}
                      </span>
                    </div>
                    <div className="md:col-span-2 md:text-right">
                      <span className="text-lg font-light tracking-tight text-white/50 group-hover:text-white/60 transition-colors duration-500">
                        ab {service.price} €
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-8">
            <p className="text-[9px] text-white/30 tracking-[0.3em] uppercase">
              Alle Preise inkl. MwSt. · Individuelle Beratung vor jedem Service
            </p>
            <button
              onClick={openBooking}
              className="text-[10px] tracking-[0.2em] uppercase border border-white/10 text-white/60 px-8 py-4 hover:bg-white hover:text-[#0A0A0A] transition-all duration-500"
            >
              Termin buchen
            </button>
          </div>
        </div>
      </section>

      {/* Full Bleed Image */}
      <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=1920&q=80"
          alt="Atelier"
          fill
          className="object-cover"
          style={{ filter: 'brightness(0.4) contrast(1.1)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center">
            <p className="sn-reveal text-[9px] tracking-[0.5em] uppercase text-white/50 mb-6">Das Atelier</p>
            <h2 className="sn-reveal sn-d1 text-[clamp(1.5rem,4vw,3rem)] font-extralight tracking-[-0.02em] text-white/70">
              Ein Raum, der <span className="font-serif italic">atmet.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galerie" className="py-28 md:py-44">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <p className="sn-reveal text-[9px] tracking-[0.5em] uppercase text-white/40 mb-16">
            03 — Galerie
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {galleryImages.map((image, i) => (
              <div
                key={image.alt}
                className={`sn-reveal-scale sn-d${Math.min(i + 1, 5)} relative overflow-hidden group ${image.span} ${i === 0 ? 'aspect-square' : i === 4 ? 'aspect-[2/1]' : 'aspect-[3/4]'}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-1000 ease-out"
                  style={{ filter: 'brightness(0.6)' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.filter = 'brightness(0.8)'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.filter = 'brightness(0.6)'; }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-28 md:py-44 border-t border-white/[0.04]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-16 md:gap-20">
            <div className="md:col-span-7">
              <p className="sn-reveal text-[9px] tracking-[0.5em] uppercase text-white/40 mb-6">
                04 — Kontakt
              </p>
              <h2 className="sn-reveal sn-d1 text-[clamp(2rem,5vw,4rem)] font-extralight tracking-[-0.03em] leading-[1.1] mb-10">
                Bereit für <span className="font-serif italic">Veränderung?</span>
              </h2>
              <p className="sn-reveal sn-d2 text-[13px] font-light text-white/50 leading-[1.9] max-w-md mb-12">
                Jede Transformation beginnt mit einem Gespräch.
                Buchen Sie Ihren Wunschtermin direkt online oder rufen Sie uns an.
              </p>
              <div className="sn-reveal sn-d3 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openBooking}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-[11px] tracking-[0.2em] uppercase bg-white text-[#0A0A0A] hover:bg-white/90 transition-all duration-500"
                >
                  Online buchen
                </button>
                <a
                  href="tel:+498912345678"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-[11px] tracking-[0.2em] uppercase border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all duration-500"
                >
                  Anrufen
                </a>
              </div>
            </div>

            <div className="md:col-span-4 md:col-start-9 space-y-10">
              {[
                { label: 'Adresse', value: 'Türkenstraße 78\n80799 München' },
                { label: 'Öffnungszeiten', value: 'Dienstag — Freitag\n10:00 — 20:00\n\nSamstag\n10:00 — 18:00' },
                { label: 'Telefon', value: '+49 89 123 456 78', href: 'tel:+498912345678' },
              ].map((item, i) => (
                <div key={item.label} className={`sn-reveal-right sn-d${i + 2}`}>
                  <p className="text-[9px] tracking-[0.5em] uppercase text-white/40 mb-3">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-light text-white/40 hover:text-white/70 transition-colors duration-500">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-light text-white/40 whitespace-pre-line leading-relaxed">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-10 px-6 md:px-12">
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-5 h-[0.5px] bg-white/20" />
            <span className="text-[10px] font-light tracking-[0.3em] uppercase text-white/40">
              Studio Noir
            </span>
          </div>
          <div className="flex gap-8 text-[9px] tracking-[0.3em] uppercase text-white/30">
            <a href="#" className="hover:text-white/50 transition-colors duration-500">Instagram</a>
            <a href="#" className="hover:text-white/50 transition-colors duration-500">Impressum</a>
            <a href="#" className="hover:text-white/50 transition-colors duration-500">Datenschutz</a>
          </div>
        </div>
      </footer>

      {/* ===== BOOKING MODAL ===== */}
      {bookingOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setBookingOpen(false)} />

          {/* Modal */}
          <div className="relative ml-auto w-full max-w-lg bg-[#0A0A0A] h-full overflow-y-auto shadow-2xl animate-[sn-slideIn_0.3s_ease]">
            {/* Header */}
            <div className="sticky top-0 bg-[#0A0A0A] z-10 border-b border-white/[0.06] px-6 py-5 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-light tracking-[0.35em] uppercase text-white">Studio Noir</p>
                <p className="text-[9px] text-white/40 uppercase tracking-[0.25em] mt-1">Online-Buchung</p>
              </div>
              <button onClick={() => setBookingOpen(false)} className="text-white/40 hover:text-white transition-colors duration-300">
                <X size={20} />
              </button>
            </div>

            {/* Steps Indicator */}
            {!confirmed && (
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] text-[10px] uppercase tracking-[0.2em]">
                <button
                  onClick={() => step > 1 && setStep(1)}
                  className={`transition-colors duration-300 ${step === 1 ? 'text-white font-medium' : step > 1 ? 'text-white/50 cursor-pointer' : 'text-white/20'}`}
                >
                  Service
                </button>
                <span className="text-white/20">—</span>
                <button
                  onClick={() => step > 2 && setStep(2)}
                  className={`transition-colors duration-300 ${step === 2 ? 'text-white font-medium' : step > 2 ? 'text-white/50 cursor-pointer' : 'text-white/20'}`}
                >
                  Tag & Zeit
                </button>
                <span className="text-white/20">—</span>
                <span className={`transition-colors duration-300 ${step === 3 ? 'text-white font-medium' : 'text-white/20'}`}>
                  Bestätigen
                </span>
              </div>
            )}

            <div className="px-6 py-6">
              {/* Step 1: Service & Stylist */}
              {step === 1 && (
                <div>
                  <p className="text-[9px] tracking-[0.4em] uppercase text-white/40 mb-5">Leistung wählen</p>
                  <div className="space-y-1 mb-10">
                    {services.map((s, i) => (
                      <button
                        key={s.name}
                        onClick={() => setSelectedService(i)}
                        className={`w-full text-left px-4 py-4 flex items-center justify-between transition-all duration-300 ${
                          selectedService === i
                            ? 'bg-white text-[#0A0A0A]'
                            : 'hover:bg-white/[0.04]'
                        }`}
                      >
                        <div>
                          <p className="text-sm font-light tracking-wide">{s.name}</p>
                          <p className={`text-[11px] mt-0.5 ${selectedService === i ? 'text-[#0A0A0A]/50' : 'text-white/40'}`}>
                            {s.duration}
                          </p>
                        </div>
                        <span className={`text-sm font-light ${selectedService === i ? 'text-[#0A0A0A]/70' : 'text-white/50'}`}>
                          ab {s.price} €
                        </span>
                      </button>
                    ))}
                  </div>

                  <p className="text-[9px] tracking-[0.4em] uppercase text-white/40 mb-5">Stylist wählen</p>
                  <div className="grid grid-cols-2 gap-2 mb-10">
                    {stylists.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedStylist(s.id)}
                        className={`p-4 text-center transition-all duration-300 ${
                          selectedStylist === s.id
                            ? 'bg-white text-[#0A0A0A]'
                            : 'bg-white/[0.03] hover:bg-white/[0.06]'
                        }`}
                      >
                        {s.img ? (
                          <div className="w-12 h-12 rounded-full overflow-hidden mx-auto mb-3 relative">
                            <Image src={s.img} alt={s.name} fill className="object-cover" />
                          </div>
                        ) : (
                          <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-lg font-light ${
                            selectedStylist === s.id ? 'bg-[#0A0A0A]/10' : 'bg-white/10'
                          }`}>
                            ?
                          </div>
                        )}
                        <p className="text-sm font-light">{s.name}</p>
                        <p className={`text-[10px] tracking-[0.15em] uppercase mt-1 ${selectedStylist === s.id ? 'text-[#0A0A0A]/50' : 'text-white/40'}`}>
                          {s.role}
                        </p>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => selectedService !== null && selectedStylist && setStep(2)}
                    disabled={selectedService === null || !selectedStylist}
                    className="w-full bg-white text-[#0A0A0A] py-4 text-[10px] tracking-[0.2em] uppercase disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/90 transition-all duration-300"
                  >
                    Weiter
                  </button>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <div>
                  {/* Week Navigator */}
                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={() => {
                        const d = new Date(weekStart);
                        d.setDate(d.getDate() - 7);
                        if (d >= new Date(new Date().setHours(0,0,0,0))) setWeekStart(d);
                      }}
                      className="p-2 text-white/40 hover:text-white transition-colors duration-300"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <p className="text-sm font-light tracking-wide text-white/70">
                      {weekDays[0].toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}
                    </p>
                    <button
                      onClick={() => {
                        const d = new Date(weekStart);
                        d.setDate(d.getDate() + 7);
                        setWeekStart(d);
                      }}
                      className="p-2 text-white/40 hover:text-white transition-colors duration-300"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>

                  {/* Day Selector */}
                  <div className="grid grid-cols-7 gap-1 mb-6">
                    {weekDays.map((d) => {
                      const isSelected = selectedDate?.toDateString() === d.toDateString();
                      const isPast = d < new Date(new Date().setHours(0,0,0,0));
                      const sunday = isSunday(d);
                      const monday = isMonday(d);
                      const disabled = isPast || sunday || monday;

                      return (
                        <button
                          key={d.toISOString()}
                          onClick={() => !disabled && setSelectedDate(d)}
                          disabled={disabled}
                          className={`py-3 text-center transition-all duration-300 ${
                            isSelected
                              ? 'bg-white text-[#0A0A0A]'
                              : disabled
                              ? 'text-white/15 cursor-not-allowed'
                              : 'hover:bg-white/[0.04] text-white/60'
                          }`}
                        >
                          <p className="text-[9px] uppercase tracking-wider mb-1">{dayNames[d.getDay()]}</p>
                          <p className="text-lg font-extralight">{d.getDate()}</p>
                        </button>
                      );
                    })}
                  </div>

                  {/* Selected Date Display */}
                  {selectedDate && (
                    <div className="border border-white/[0.06] px-4 py-3 mb-6">
                      <p className="text-[11px] text-white/40">
                        Ausgewählt: <span className="text-white/80">{formatDateLong(selectedDate)}</span>
                      </p>
                    </div>
                  )}

                  {/* Time Slots */}
                  {selectedDate && (
                    <div>
                      <p className="text-[9px] tracking-[0.4em] uppercase text-white/40 mb-4">Uhrzeit wählen</p>
                      <div className="grid grid-cols-3 gap-2 mb-8">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`py-3 text-sm font-light transition-all duration-300 ${
                              selectedTime === t
                                ? 'bg-white text-[#0A0A0A]'
                                : 'border border-white/[0.06] text-white/50 hover:border-white/20 hover:text-white/70'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="px-6 py-4 border border-white/[0.06] text-[10px] tracking-[0.2em] uppercase text-white/50 hover:border-white/20 hover:text-white transition-all duration-300"
                    >
                      Zurück
                    </button>
                    <button
                      onClick={() => selectedDate && selectedTime && setStep(3)}
                      disabled={!selectedDate || !selectedTime}
                      className="flex-1 bg-white text-[#0A0A0A] py-4 text-[10px] tracking-[0.2em] uppercase disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/90 transition-all duration-300"
                    >
                      Weiter
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirm */}
              {step === 3 && !confirmed && (
                <div>
                  {/* Summary */}
                  <div className="border border-white/[0.06] p-5 mb-8">
                    <p className="text-[11px] text-white/40 mb-1">{selectedDate && formatDateLong(selectedDate)}</p>
                    <p className="text-base font-light text-white/90">
                      {selectedServiceData?.name} <span className="text-white/40">(ab {selectedServiceData?.price} €)</span>
                    </p>
                    <p className="text-[13px] text-white/40 mt-1">
                      um {selectedTime} Uhr · {selectedStylistData?.name === 'Egal' ? 'Nächster verfügbar' : `bei ${selectedStylistData?.name}`}
                    </p>
                  </div>

                  {/* Form */}
                  <div className="space-y-5 mb-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9px] tracking-[0.3em] uppercase text-white/40 mb-2">Vorname</label>
                        <input
                          type="text"
                          value={form.firstName}
                          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                          placeholder="Vorname"
                          className="w-full bg-transparent border border-white/[0.06] px-4 py-3 text-sm font-light text-white placeholder:text-white/20 focus:border-white/30 focus:outline-none transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] tracking-[0.3em] uppercase text-white/40 mb-2">Nachname</label>
                        <input
                          type="text"
                          value={form.lastName}
                          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                          placeholder="Nachname"
                          className="w-full bg-transparent border border-white/[0.06] px-4 py-3 text-sm font-light text-white placeholder:text-white/20 focus:border-white/30 focus:outline-none transition-colors duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[9px] tracking-[0.3em] uppercase text-white/40 mb-2">Telefonnummer</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+49 ..."
                        className="w-full bg-transparent border border-white/[0.06] px-4 py-3 text-sm font-light text-white placeholder:text-white/20 focus:border-white/30 focus:outline-none transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] tracking-[0.3em] uppercase text-white/40 mb-2">E-Mail</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="ihre@email.de"
                        className="w-full bg-transparent border border-white/[0.06] px-4 py-3 text-sm font-light text-white placeholder:text-white/20 focus:border-white/30 focus:outline-none transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-4 border border-white/[0.06] text-[10px] tracking-[0.2em] uppercase text-white/50 hover:border-white/20 hover:text-white transition-all duration-300"
                    >
                      Zurück
                    </button>
                    <button
                      onClick={() => form.firstName && form.phone && setConfirmed(true)}
                      disabled={!form.firstName || !form.phone}
                      className="flex-1 bg-white text-[#0A0A0A] py-4 text-[10px] tracking-[0.2em] uppercase disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/90 transition-all duration-300"
                    >
                      Termin bestätigen
                    </button>
                  </div>
                </div>
              )}

              {/* Confirmed */}
              {confirmed && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-6">
                    <Check size={28} className="text-white/80" />
                  </div>
                  <h3 className="text-2xl font-extralight tracking-[-0.02em] mb-2">Termin bestätigt.</h3>
                  <p className="text-white/40 text-[13px] font-light mb-8 max-w-xs mx-auto">
                    Vielen Dank, {form.firstName}. Sie erhalten eine Bestätigung per E-Mail.
                  </p>
                  <div className="border border-white/[0.06] p-5 text-left max-w-xs mx-auto mb-8">
                    <p className="text-[11px] text-white/40 mb-1">{selectedDate && formatDateLong(selectedDate)}</p>
                    <p className="text-sm font-light text-white/90">{selectedServiceData?.name}</p>
                    <p className="text-[13px] text-white/40 mt-1">{selectedTime} Uhr · {selectedStylistData?.name}</p>
                  </div>
                  <button
                    onClick={() => setBookingOpen(false)}
                    className="text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors duration-300"
                  >
                    Schließen
                  </button>
                </div>
              )}
            </div>
          </div>

          <style jsx>{`
            @keyframes sn-slideIn {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
