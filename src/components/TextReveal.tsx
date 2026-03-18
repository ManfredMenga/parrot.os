'use client';

import { useEffect, useRef } from 'react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TextReveal({ text, className = '', delay = 0 }: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.querySelectorAll('.text-reveal-word').forEach((word) => {
              word.classList.add('visible');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(/\s+/).filter(Boolean);

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="text-reveal-word"
          style={{ transitionDelay: `${(delay + i) * 0.09}s` }}
        >
          {word}
        </span>
      )).reduce<React.ReactNode[]>((acc, el, i) => {
        if (i > 0) acc.push(' ');
        acc.push(el);
        return acc;
      }, [])}
    </span>
  );
}
