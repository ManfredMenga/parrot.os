import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Leitkraft',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Link href="/" className="flex items-center justify-center gap-2 mb-12">
          <Image src="/images/logo-white.png" alt="Leitkraft" width={32} height={32} />
          <span className="font-bold text-[17px] tracking-tight text-white">Leitkraft</span>
        </Link>

        <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-8">
          <h1 className="text-xl font-bold text-white mb-1">Willkommen zurück</h1>
          <p className="text-sm text-[#666] mb-8">Melde dich in deinem Konto an</p>

          <form className="space-y-4">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#555] block mb-2">E-Mail</label>
              <input
                type="email"
                className="w-full bg-white/5 border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#444] focus:outline-none focus:border-white/20 transition-colors"
                placeholder="dein@email.de"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#555] block mb-2">Passwort</label>
              <input
                type="password"
                className="w-full bg-white/5 border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#444] focus:outline-none focus:border-white/20 transition-colors"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full mt-2"
            >
              Anmelden
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-[#444] mt-8">
          Noch kein Konto? <Link href="/#demo" className="text-white hover:underline">Demo buchen</Link>
        </p>
      </div>
    </main>
  );
}
