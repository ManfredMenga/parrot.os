import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Wahrheit from '@/components/Wahrheit';
import Eingriff from '@/components/Eingriff';
import Leistungen from '@/components/Leistungen';
import Ergebnisse from '@/components/Ergebnisse';
// import Express from '@/components/Express'; // Potenzialtracker — hidden, not deleted
import Kontakt from '@/components/Kontakt';
import Footer from '@/components/Footer';
import ClientEffects from '@/components/ClientEffects';
// import Portfolio from '@/components/Portfolio'; // moved into Leistungen section

export default function Home() {
  return (
    <main className="min-h-screen">
      <ClientEffects />
      <Header />
      <Hero />
      <Wahrheit />
      <Eingriff />

      <Leistungen />
      <Ergebnisse />
      {/* <Portfolio /> — now integrated into Leistungen */}

      {/* Parallax Divider */}
      <div data-parallax className="relative h-[30vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 md:inset-[-20%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1536520002442-39764a41e987?q=80&w=2000&auto=format&fit=crop"
            alt="Premium Salon Interior"
            className="w-full h-full object-cover object-center parallax-divider-img"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      {/* <Express /> — Potenzialtracker hidden */}
      <Kontakt />
      <Footer />
    </main>
  );
}
