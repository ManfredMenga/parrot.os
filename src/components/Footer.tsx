import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const cols = [
    { title: 'PRODUKT', links: ['Features', 'Branchen', 'Demo'] },
    { title: 'PLATTFORMEN', links: ['Instagram', 'Facebook', 'LinkedIn', 'TikTok (bald)'] },
    { title: 'RESSOURCEN', links: ['Blog', 'Hilfe', 'Changelog', 'API'] },
    { title: 'RECHTLICHES', links: ['Impressum', 'Datenschutz'] },
  ];

  return (
    <footer className="border-t border-[#1a1a1a] bg-black">
      <div className="max-w-[76rem] mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12 md:mb-16">
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#888] mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => {
                  const href = link === 'Impressum' ? '/impressum' : link === 'Datenschutz' ? '/datenschutz' : '#';
                  return (
                    <li key={link}>
                      <Link href={href} className="text-sm text-[#666] hover:text-white transition-colors">{link}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1a1a1a]">
          <span className="font-bold text-[15px] tracking-tight text-white flex items-center gap-2">
            <Image src="/images/logo-white.png" alt="Leitkraft" width={26} height={26} className="-mr-0.5" />
            Leitkraft
          </span>
          <p className="text-xs text-[#444]">&copy; 2026 Leitkraft. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
