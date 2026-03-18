'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';

// ============================================================
// CAL.COM INTEGRATION READY
// When you're ready to connect Cal.com, install @calcom/embed-react:
//   npm install @calcom/embed-react
//
// Then replace the form below with:
//   import Cal, { getCalApi } from "@calcom/embed-react";
//   <Cal calLink="your-username/15min" style={{width:"100%",height:"100%"}} />
//
// Cal.com scheduling links to create:
//   - /15min  (Kostenloses Erstgespräch)
//   - /30min  (Strategie-Gespräch)
// ============================================================

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00',
];

function getNextWeekdays(count: number): Date[] {
  const days: Date[] = [];
  const now = new Date();
  let d = new Date(now);
  d.setDate(d.getDate() + 1); // start tomorrow
  while (days.length < count) {
    if (d.getDay() !== 0 && d.getDay() !== 6) {
      days.push(new Date(d));
    }
    d.setDate(d.getDate() + 1);
  }
  return days;
}

function formatDate(date: Date): string {
  const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
  return `${days[date.getDay()]}, ${date.getDate()}. ${months[date.getMonth()]}`;
}

export default function Booking() {
  const [duration, setDuration] = useState<15 | 30>(15);
  const [selectedDate, setSelectedDate] = useState<number>(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const dates = useMemo(() => getNextWeekdays(7), []);

  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toDateStr = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

  const fetchAvailability = useCallback(async (dateIndex: number, dur: number) => {
    setLoadingSlots(true);
    try {
      const dateStr = toDateStr(dates[dateIndex]);
      const res = await fetch(`/api/availability?date=${dateStr}&duration=${dur}`);
      if (res.ok) {
        const data = await res.json();
        setAvailableSlots(data.available || []);
      } else {
        setAvailableSlots(timeSlots); // fallback to all slots
      }
    } catch {
      setAvailableSlots(timeSlots); // fallback on error
    } finally {
      setLoadingSlots(false);
    }
  }, [dates]);

  useEffect(() => {
    if (step === 2) {
      fetchAvailability(selectedDate, duration);
    }
  }, [step, selectedDate, duration, fetchAvailability]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const selectedDateObj = dates[selectedDate];
    const dateStr = `${selectedDateObj.getFullYear()}-${String(selectedDateObj.getMonth() + 1).padStart(2, '0')}-${String(selectedDateObj.getDate()).padStart(2, '0')}`;

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: dateStr,
          time: selectedTime,
          duration,
        }),
      });

      if (!res.ok) throw new Error('Fehler beim Erstellen');
      setSubmitted(true);
    } catch {
      setError('Termin konnte nicht erstellt werden. Bitte versuche es erneut.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold tracking-tight mb-3">Termin angefragt</h3>
        <p className="text-sm text-white/50 max-w-md mx-auto mb-2">
          {duration} Minuten am {formatDate(dates[selectedDate])} um {selectedTime} Uhr
        </p>
        <p className="text-xs text-white/30">
          Wir melden uns innerhalb von 24 Stunden bei dir.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Step Indicator */}
      <div className="flex items-center gap-3 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-3">
            <button
              onClick={() => {
                if (s === 1) setStep(1);
                if (s === 2 && duration) setStep(2);
                if (s === 3 && selectedTime) setStep(3);
              }}
              className={`w-8 h-8 rounded-full text-xs font-bold transition-all duration-300 ${
                step === s
                  ? 'bg-brand-accent text-brand-black'
                  : step > s
                    ? 'bg-brand-accent/20 text-brand-accent'
                    : 'bg-white/5 text-white/30'
              }`}
            >
              {step > s ? '✓' : s}
            </button>
            {s < 3 && (
              <div className={`w-8 h-[1px] transition-colors duration-300 ${step > s ? 'bg-brand-accent/30' : 'bg-white/10'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Duration */}
      {step === 1 && (
        <div>
          <h3 className="text-lg font-bold tracking-tight mb-1">Gesprächsart wählen</h3>
          <p className="text-xs text-white/40 mb-6">Was passt am besten zu dir?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => { setDuration(15); setStep(2); }}
              className={`text-left p-5 rounded-xl border transition-all duration-300 ${
                duration === 15
                  ? 'border-brand-accent/40 bg-brand-accent/5'
                  : 'border-white/10 hover:border-white/20 bg-white/[0.02]'
              }`}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent/50 block mb-2">15 Min</span>
              <span className="text-base font-bold block mb-1">Kostenloses Erstgespräch</span>
              <span className="text-xs text-white/40">Kurzes Kennenlernen & Potenzial-Check</span>
            </button>
            <button
              onClick={() => { setDuration(30); setStep(2); }}
              className={`text-left p-5 rounded-xl border transition-all duration-300 ${
                duration === 30
                  ? 'border-brand-accent/40 bg-brand-accent/5'
                  : 'border-white/10 hover:border-white/20 bg-white/[0.02]'
              }`}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent/50 block mb-2">30 Min</span>
              <span className="text-base font-bold block mb-1">Strategie-Gespräch</span>
              <span className="text-xs text-white/40">Tiefgehende Analyse & konkreter Fahrplan</span>
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Date & Time */}
      {step === 2 && (
        <div>
          <h3 className="text-lg font-bold tracking-tight mb-1">Wann passt es dir?</h3>
          <p className="text-xs text-white/40 mb-6">{duration}-Minuten-Gespräch</p>

          {/* Date Selection */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
            {dates.map((date, i) => (
              <button
                key={i}
                onClick={() => setSelectedDate(i)}
                className={`flex-shrink-0 px-4 py-3 rounded-lg text-center transition-all duration-300 ${
                  selectedDate === i
                    ? 'bg-brand-accent text-brand-black'
                    : 'bg-white/5 hover:bg-white/10 text-white/70'
                }`}
              >
                <span className="text-[10px] font-bold uppercase block">{['So','Mo','Di','Mi','Do','Fr','Sa'][date.getDay()]}</span>
                <span className="text-lg font-bold block">{date.getDate()}</span>
              </button>
            ))}
          </div>

          {/* Time Selection */}
          {loadingSlots ? (
            <div className="text-center py-8">
              <div className="w-6 h-6 border-2 border-brand-accent/30 border-t-brand-accent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-xs text-white/40">Verfügbarkeit wird geprüft...</p>
            </div>
          ) : availableSlots.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-sm text-white/50">Keine freien Termine an diesem Tag.</p>
              <p className="text-xs text-white/30 mt-1">Bitte wähle einen anderen Tag.</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 gap-y-3">
              {availableSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => { setSelectedTime(time); setStep(3); }}
                  className={`py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedTime === time
                      ? 'bg-brand-accent text-brand-black'
                      : 'bg-white/5 hover:bg-white/10 text-white/70'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Step 3: Contact Info */}
      {step === 3 && (
        <div>
          <h3 className="text-lg font-bold tracking-tight mb-1">Fast geschafft</h3>
          <p className="text-xs text-white/40 mb-6">
            {duration} Min · {formatDate(dates[selectedDate])} · {selectedTime} Uhr
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-brand-accent/40 transition-colors"
                placeholder="Dein Name"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-2">E-Mail</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-brand-accent/40 transition-colors"
                placeholder="dein@email.de"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-2">Telefon</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-brand-accent/40 transition-colors"
                placeholder="+49 ..."
              />
            </div>
            {error && (
              <p className="text-xs text-red-400 text-center">{error}</p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="w-full btn-pill btn-accent btn-magnetic mt-2 disabled:opacity-50"
            >
              {submitting ? 'Wird gesendet...' : 'Termin anfragen'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
