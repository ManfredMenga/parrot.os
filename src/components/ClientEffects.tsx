'use client';

import { useEffect } from 'react';

export default function ClientEffects() {
  useEffect(() => {
    // ===== DETECT MOBILE =====
    const isMobile = window.matchMedia('(pointer: coarse)').matches;

    // ===== SCROLL PROGRESS BAR =====
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    // ===== MAGNETIC BUTTONS (desktop only) =====
    if (!isMobile) {
      const magneticBtns = document.querySelectorAll('.btn-magnetic');
      magneticBtns.forEach((btn) => {
        const el = btn as HTMLElement;
        el.addEventListener('mousemove', (e: Event) => {
          const evt = e as MouseEvent;
          const rect = el.getBoundingClientRect();
          const x = evt.clientX - rect.left - rect.width / 2;
          const y = evt.clientY - rect.top - rect.height / 2;
          el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        el.addEventListener('mouseleave', () => {
          el.style.transform = 'translate(0, 0)';
        });
      });
    }

    // ===== SCROLL REVEAL =====
    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-tilt, .number-pop, .sweep-line, .line-draw, .line-draw-gold'
    );
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    revealElements.forEach((el) => revealObserver.observe(el));

    // ===== COUNTER ANIMATION =====
    const counters = document.querySelectorAll('[data-counter]');
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseFloat(el.dataset.counter || '0');
            const suffix = el.dataset.suffix || '';
            const prefix = el.dataset.prefix || '';
            const decimals = (el.dataset.counter || '').includes('.') ? 1 : 0;
            const duration = 2200;
            const start = performance.now();

            const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

            const animate = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = easeOutExpo(progress);
              const current = eased * target;
              el.textContent = prefix + current.toFixed(decimals) + suffix;
              if (progress < 1) requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => counterObserver.observe(el));

    // ===== STICKY CTA =====
    const stickyCta = document.createElement('div');
    stickyCta.className = 'sticky-cta';
    stickyCta.innerHTML = `<a href="#cta" class="sticky-cta-btn">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
      Demo starten
    </a>`;
    document.body.appendChild(stickyCta);

    // ===== PARALLAX (desktop only) =====
    const heroImg = document.querySelector('.hero-img') as HTMLElement | null;
    const parallaxTexts = document.querySelectorAll('.parallax-text');
    const dividerImgs = document.querySelectorAll('.parallax-divider-img') as NodeListOf<HTMLElement>;

    const onScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      // Progress bar
      const progress = scrolled / maxScroll;
      progressBar.style.transform = `scaleX(${progress})`;

      // Hero image parallax — desktop only
      if (!isMobile && heroImg && scrolled < window.innerHeight) {
        heroImg.style.transform = `scale(1.15) translateY(${scrolled * 0.35}px)`;
      }

      // Parallax divider images — desktop only
      if (!isMobile) {
        dividerImgs.forEach((img) => {
          const parent = img.closest('[data-parallax]') as HTMLElement | null;
          if (!parent) return;
          const rect = parent.getBoundingClientRect();
          const viewH = window.innerHeight;
          if (rect.bottom > 0 && rect.top < viewH) {
            const prog = (viewH - rect.top) / (viewH + rect.height);
            const offset = (prog - 0.5) * 120;
            img.style.transform = `translateY(${offset}px) scale(1.1)`;
          }
        });
      }

      // Sticky CTA visibility
      if (scrolled > window.innerHeight * 0.8) {
        stickyCta.classList.add('visible');
      } else {
        stickyCta.classList.remove('visible');
      }

      // Parallax text — desktop only
      if (!isMobile) {
        parallaxTexts.forEach((el) => {
          const htmlEl = el as HTMLElement;
          const speed = parseFloat(htmlEl.dataset.speed || '0.1');
          const rect = htmlEl.getBoundingClientRect();
          const center = rect.top + rect.height / 2 - window.innerHeight / 2;
          htmlEl.style.transform = `translateY(${center * speed}px)`;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      progressBar.remove();
      stickyCta.remove();
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return null;
}
