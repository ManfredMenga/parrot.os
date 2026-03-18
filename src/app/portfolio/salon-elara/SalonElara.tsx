'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const services = [
  { id: 'cut', name: 'Schnitt & Styling', duration: '60 Min', price: '89 €' },
  { id: 'color', name: 'Farb-Manufaktur', duration: '120 Min', price: '135 €' },
  { id: 'balayage', name: 'Balayage & Highlights', duration: '150 Min', price: '195 €' },
  { id: 'care', name: 'Pflege-Ritual', duration: '45 Min', price: '75 €' },
  { id: 'bridal', name: 'Braut & Event', duration: '90 Min', price: '250 €' },
  { id: 'extensions', name: 'Extensions & Verdichtung', duration: '180 Min', price: '350 €' },
];

const stylists = [
  { id: 'elena', name: 'Elena', role: 'Master Stylist', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80' },
  { id: 'julian', name: 'Julian', role: 'Color Expert', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
  { id: 'sophie', name: 'Sophie', role: 'Balayage Specialist', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' },
  { id: 'any', name: 'Egal', role: 'Nächster verfügbar', img: '' },
];

const timeSlots = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'];

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

export default function SalonElara() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
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
    setSelectedService('');
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

  const selectedServiceData = services.find((s) => s.id === selectedService);
  const selectedStylistData = stylists.find((s) => s.id === selectedStylist);

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#2A2723] selection:bg-[#8B7D6B]/20">
      {/* Zurück-Button */}
      <a href="/" className="fixed bottom-6 left-6 z-50 flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-[#8A8580]/50 hover:text-[#2A2723] transition-colors duration-500 group">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:-translate-x-1 transition-transform duration-500">
          <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1" />
        </svg>
        Zurück
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E8E4DE]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Left: Menu */}
          <button
            className="flex items-center gap-3 text-[#2A2723] md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="text-xs font-bold uppercase tracking-widest">Menu</span>
          </button>
          <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-[#8A8580]">
            <a href="#about" className="hover:text-[#2A2723] transition-colors">Über uns</a>
            <a href="#services" className="hover:text-[#2A2723] transition-colors">Leistungen</a>
            <a href="#team" className="hover:text-[#2A2723] transition-colors">Team</a>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <h1 className="text-2xl md:text-3xl tracking-[0.35em] uppercase font-light text-[#2A2723]">
              ELARA
            </h1>
            <p className="text-[9px] tracking-[0.25em] text-[#8A8580] uppercase mt-0.5">modern · artistic · hair</p>
          </div>

          {/* Right: Book Now */}
          <button
            onClick={openBooking}
            className="border border-[#2A2723] px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-[#2A2723] hover:text-white transition-all"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAFAF8] border-t border-[#E8E4DE] px-6 py-8 flex flex-col gap-6">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest text-[#8A8580]">Über uns</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest text-[#8A8580]">Leistungen</a>
            <a href="#team" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest text-[#8A8580]">Team</a>
          </div>
        )}
      </nav>

      {/* Hero: Three Images */}
      <section className="pt-20">
        <div className="grid grid-cols-3 gap-1 md:gap-2 h-[50vh] md:h-[75vh]">
          <div className="relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
              alt="Salon Interior"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&q=80"
              alt="Salon Stühle"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80"
              alt="Salon Produkte"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B7D6B] mb-8">Über uns</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.3] mb-8">
            Ein Ort, an dem <em className="font-serif">Handwerk</em> und <em className="font-serif">Persönlichkeit</em> zusammenfinden.
          </h2>
          <p className="text-[#8A8580] text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Salon Elara wurde mit einer klaren Vision gegründet: Einen Raum zu schaffen,
            der Ruhe ausstrahlt und in dem jeder Besuch ein kleines Ritual der Verwandlung ist.
            Bei uns steht nicht der Trend im Mittelpunkt — sondern Sie.
          </p>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80"
              alt="Salon Atmosphäre"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B7D6B] mb-8 text-center">Leistungen</p>
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
            Das erwartet <em className="font-serif">Sie</em>
          </h2>
          <div>
            {services.map((service) => (
              <div
                key={service.id}
                className="group border-b border-[#E8E4DE] py-6 flex items-center justify-between gap-4 cursor-pointer hover:px-2 transition-all"
                onClick={() => { setSelectedService(service.id); openBooking(); }}
              >
                <div className="flex-1">
                  <h3 className="text-lg font-light group-hover:text-[#8B7D6B] transition-colors">{service.name}</h3>
                  <p className="text-[13px] text-[#8A8580] mt-0.5">{service.duration}</p>
                </div>
                <span className="text-[#8B7D6B] font-medium">{service.price}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={openBooking}
              className="border border-[#2A2723] px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-[#2A2723] hover:text-white transition-all"
            >
              Termin buchen
            </button>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B7D6B] mb-8 text-center">Unser Team</p>
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
            Die Gesichter hinter <em className="font-serif">Elara</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stylists.filter(s => s.img).map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#F5F3F0]">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
                <h3 className="text-xl font-light mb-1">{member.name}</h3>
                <p className="text-[11px] uppercase tracking-widest text-[#8A8580]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920&q=80"
          alt="Salon"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#2A2723]/60" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-2xl md:text-4xl font-light text-white leading-relaxed">
            &bdquo;Wahre Schönheit entsteht, wenn man sich traut, <em className="font-serif">ganz man selbst</em> zu sein.&ldquo;
          </p>
          <p className="text-white/50 text-xs uppercase tracking-widest mt-8">— Elena, Gründerin</p>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-20 md:py-32 px-6 md:px-12 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B7D6B] mb-6">Termin</p>
        <h2 className="text-3xl md:text-5xl font-light mb-6">
          Wir freuen uns auf <em className="font-serif">Sie.</em>
        </h2>
        <p className="text-[#8A8580] font-light mb-10 max-w-md mx-auto">
          Buchen Sie Ihren Wunschtermin direkt online oder rufen Sie uns an.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button
            onClick={openBooking}
            className="bg-[#2A2723] text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#1a1916] transition-colors"
          >
            Online buchen
          </button>
          <a
            href="tel:+498987654321"
            className="border border-[#2A2723]/20 text-[#2A2723] px-10 py-4 text-xs font-bold uppercase tracking-widest hover:border-[#2A2723] transition-colors"
          >
            Anrufen
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-12 text-sm text-[#8A8580]">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#8B7D6B] mb-2">Adresse</p>
            <p>Leopoldstraße 142, 80804 München</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#8B7D6B] mb-2">Öffnungszeiten</p>
            <p>Mo–Fr 9:00–20:00 · Sa 9:00–18:00</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E8E4DE] py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8A8580]">
          <p>© 2026 Salon Elara · München</p>
          <div className="flex gap-6 uppercase tracking-widest">
            <a href="#" className="hover:text-[#2A2723] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#2A2723] transition-colors">Impressum</a>
            <a href="#" className="hover:text-[#2A2723] transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>

      {/* ===== BOOKING MODAL ===== */}
      {bookingOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={() => setBookingOpen(false)} />

          {/* Modal */}
          <div className="relative ml-auto w-full max-w-lg bg-white h-full overflow-y-auto shadow-2xl animate-[slideIn_0.3s_ease]">
            {/* Header */}
            <div className="sticky top-0 bg-white z-10 border-b border-[#E8E4DE] px-6 py-5 flex items-center justify-between">
              <div>
                <p className="font-bold text-sm tracking-tight">Salon Elara</p>
                <p className="text-[10px] text-[#8A8580] uppercase tracking-widest mt-0.5">Online-Buchung</p>
              </div>
              <button onClick={() => setBookingOpen(false)} className="text-[#8A8580] hover:text-[#2A2723] transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Steps Indicator */}
            {!confirmed && (
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E4DE] text-[11px] uppercase tracking-widest">
                <button
                  onClick={() => step > 1 && setStep(1)}
                  className={`transition-colors ${step === 1 ? 'text-[#2A2723] font-bold' : step > 1 ? 'text-[#8B7D6B] cursor-pointer' : 'text-[#C5C0B8]'}`}
                >
                  Service
                </button>
                <span className="text-[#C5C0B8]">›</span>
                <button
                  onClick={() => step > 2 && setStep(2)}
                  className={`transition-colors ${step === 2 ? 'text-[#2A2723] font-bold' : step > 2 ? 'text-[#8B7D6B] cursor-pointer' : 'text-[#C5C0B8]'}`}
                >
                  Tag & Zeit
                </button>
                <span className="text-[#C5C0B8]">›</span>
                <span className={`transition-colors ${step === 3 ? 'text-[#2A2723] font-bold' : 'text-[#C5C0B8]'}`}>
                  Bestätigen
                </span>
              </div>
            )}

            <div className="px-6 py-6">
              {/* Step 1: Service & Stylist */}
              {step === 1 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#8A8580] mb-4">Leistung wählen</p>
                  <div className="space-y-1 mb-8">
                    {services.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedService(s.id)}
                        className={`w-full text-left px-4 py-4 rounded-lg flex items-center justify-between transition-all ${
                          selectedService === s.id
                            ? 'bg-[#2A2723] text-white'
                            : 'hover:bg-[#F5F3F0]'
                        }`}
                      >
                        <div>
                          <p className="font-medium text-sm">{s.name}</p>
                          <p className={`text-[12px] mt-0.5 ${selectedService === s.id ? 'text-white/60' : 'text-[#8A8580]'}`}>
                            {s.duration}
                          </p>
                        </div>
                        <span className={`text-sm font-medium ${selectedService === s.id ? 'text-white/80' : 'text-[#8B7D6B]'}`}>
                          {s.price}
                        </span>
                      </button>
                    ))}
                  </div>

                  <p className="text-xs font-bold uppercase tracking-widest text-[#8A8580] mb-4">Stylist wählen</p>
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {stylists.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedStylist(s.id)}
                        className={`p-4 rounded-lg text-center transition-all ${
                          selectedStylist === s.id
                            ? 'bg-[#2A2723] text-white'
                            : 'bg-[#F5F3F0] hover:bg-[#EAE6E0]'
                        }`}
                      >
                        {s.img ? (
                          <div className="w-12 h-12 rounded-full overflow-hidden mx-auto mb-2 relative">
                            <Image src={s.img} alt={s.name} fill className="object-cover" />
                          </div>
                        ) : (
                          <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-lg ${
                            selectedStylist === s.id ? 'bg-white/20' : 'bg-[#E8E4DE]'
                          }`}>
                            ?
                          </div>
                        )}
                        <p className="font-medium text-sm">{s.name}</p>
                        <p className={`text-[11px] mt-0.5 ${selectedStylist === s.id ? 'text-white/60' : 'text-[#8A8580]'}`}>
                          {s.role}
                        </p>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => selectedService && selectedStylist && setStep(2)}
                    disabled={!selectedService || !selectedStylist}
                    className="w-full bg-[#2A2723] text-white py-4 text-xs font-bold uppercase tracking-widest disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#1a1916] transition-colors"
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
                      className="p-2 hover:bg-[#F5F3F0] rounded-full transition-colors"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <p className="text-sm font-medium">
                      {weekDays[0].toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}
                    </p>
                    <button
                      onClick={() => {
                        const d = new Date(weekStart);
                        d.setDate(d.getDate() + 7);
                        setWeekStart(d);
                      }}
                      className="p-2 hover:bg-[#F5F3F0] rounded-full transition-colors"
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
                      const disabled = isPast || sunday;

                      return (
                        <button
                          key={d.toISOString()}
                          onClick={() => !disabled && setSelectedDate(d)}
                          disabled={disabled}
                          className={`py-3 rounded-lg text-center transition-all ${
                            isSelected
                              ? 'bg-[#2A2723] text-white'
                              : disabled
                              ? 'text-[#C5C0B8] cursor-not-allowed'
                              : 'hover:bg-[#F5F3F0]'
                          }`}
                        >
                          <p className="text-[10px] uppercase tracking-wider mb-1">{dayNames[d.getDay()]}</p>
                          <p className="text-lg font-light">{d.getDate()}</p>
                        </button>
                      );
                    })}
                  </div>

                  {/* Selected Date Display */}
                  {selectedDate && (
                    <div className="bg-[#F5F3F0] rounded-lg px-4 py-3 mb-6">
                      <p className="text-xs text-[#8A8580]">
                        Ausgewählt: <span className="font-bold text-[#2A2723]">{formatDateLong(selectedDate)}</span>
                      </p>
                    </div>
                  )}

                  {/* Time Slots */}
                  {selectedDate && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#8A8580] mb-4">Uhrzeit wählen</p>
                      <div className="grid grid-cols-3 gap-2 mb-8">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`py-3 rounded-lg text-sm transition-all ${
                              selectedTime === t
                                ? 'bg-[#2A2723] text-white font-medium'
                                : 'border border-[#E8E4DE] hover:border-[#2A2723] text-[#2A2723]'
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
                      className="px-6 py-4 border border-[#E8E4DE] text-xs font-bold uppercase tracking-widest hover:border-[#2A2723] transition-colors"
                    >
                      Zurück
                    </button>
                    <button
                      onClick={() => selectedDate && selectedTime && setStep(3)}
                      disabled={!selectedDate || !selectedTime}
                      className="flex-1 bg-[#2A2723] text-white py-4 text-xs font-bold uppercase tracking-widest disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#1a1916] transition-colors"
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
                  <div className="bg-[#F5F3F0] rounded-lg p-5 mb-8">
                    <p className="text-xs text-[#8A8580] mb-1">{selectedDate && formatDateLong(selectedDate)}</p>
                    <p className="font-bold text-base">
                      {selectedServiceData?.name} ({selectedServiceData?.price})
                    </p>
                    <p className="text-sm text-[#8A8580] mt-0.5">
                      um {selectedTime} Uhr · {selectedStylistData?.name === 'Egal' ? 'Nächster verfügbar' : `bei ${selectedStylistData?.name}`}
                    </p>
                  </div>

                  {/* Form */}
                  <div className="space-y-5 mb-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#8A8580] mb-1.5">Vorname</label>
                        <input
                          type="text"
                          value={form.firstName}
                          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                          placeholder="Vorname"
                          className="w-full border border-[#E8E4DE] rounded-lg px-4 py-3 text-sm focus:border-[#2A2723] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#8A8580] mb-1.5">Nachname</label>
                        <input
                          type="text"
                          value={form.lastName}
                          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                          placeholder="Nachname"
                          className="w-full border border-[#E8E4DE] rounded-lg px-4 py-3 text-sm focus:border-[#2A2723] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#8A8580] mb-1.5">Telefonnummer</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+49 ..."
                        className="w-full border border-[#E8E4DE] rounded-lg px-4 py-3 text-sm focus:border-[#2A2723] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#8A8580] mb-1.5">E-Mail</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="ihre@email.de"
                        className="w-full border border-[#E8E4DE] rounded-lg px-4 py-3 text-sm focus:border-[#2A2723] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-4 border border-[#E8E4DE] text-xs font-bold uppercase tracking-widest hover:border-[#2A2723] transition-colors"
                    >
                      Zurück
                    </button>
                    <button
                      onClick={() => form.firstName && form.phone && setConfirmed(true)}
                      disabled={!form.firstName || !form.phone}
                      className="flex-1 bg-[#2A2723] text-white py-4 text-xs font-bold uppercase tracking-widest disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#1a1916] transition-colors"
                    >
                      Termin bestätigen
                    </button>
                  </div>
                </div>
              )}

              {/* Confirmed */}
              {confirmed && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#4A7C59] flex items-center justify-center mx-auto mb-6">
                    <Check size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-light mb-2">Termin bestätigt!</h3>
                  <p className="text-[#8A8580] text-sm mb-8 max-w-xs mx-auto">
                    Vielen Dank, {form.firstName}. Sie erhalten eine Bestätigung per E-Mail.
                  </p>
                  <div className="bg-[#F5F3F0] rounded-lg p-5 text-left max-w-xs mx-auto mb-8">
                    <p className="text-xs text-[#8A8580] mb-1">{selectedDate && formatDateLong(selectedDate)}</p>
                    <p className="font-bold">{selectedServiceData?.name}</p>
                    <p className="text-sm text-[#8A8580]">{selectedTime} Uhr · {selectedStylistData?.name}</p>
                  </div>
                  <button
                    onClick={() => setBookingOpen(false)}
                    className="text-xs font-bold uppercase tracking-widest text-[#8B7D6B] hover:text-[#2A2723] transition-colors"
                  >
                    Schließen
                  </button>
                </div>
              )}
            </div>
          </div>

          <style jsx>{`
            @keyframes slideIn {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
