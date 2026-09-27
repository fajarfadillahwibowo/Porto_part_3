import { useEffect } from 'react';

/**
 * Hook kustom untuk memicu animasi Scroll Reveal menggunakan
 * browser native Intersection Observer API.
 * Menghandle re-render dinamis (misal filtering atau pergantian bahasa)
 * agar elemen yang sudah berada di viewport tidak menjadi blank/opacity 0.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Hormati preferensi pengguna prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const checkAndObserve = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => {
        // Jika elemen sudah berada dalam area viewport aktif, langsung tampilkan
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-revealed');
        } else if (!el.classList.contains('is-revealed')) {
          observer.observe(el);
        }
      });
    };

    checkAndObserve();

    // Pantau mutasi DOM agar saat komponen re-render, elemen tetap tampil
    const mutationObserver = new MutationObserver(() => {
      checkAndObserve();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
