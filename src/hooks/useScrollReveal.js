import { useEffect } from 'react';

/**
 * Hook kustom untuk memicu animasi Scroll Reveal menggunakan
 * browser native Intersection Observer API sesuai spesifikasi PRD Bab 5.
 * Hanya memanipulasi class CSS yang menerapkan GPU-accelerated transform & opacity.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Hormati preferensi pengguna prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Jika pengguna memilih kurangi animasi, langsung jadikan semua elemen terlihat
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Lepas observasi setelah elemen muncul untuk efisiensi CPU/GPU (60 FPS)
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px', // Picu sedikit sebelum elemen tepat menyentuh bawah layar
      threshold: 0.12
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal-on-scroll');

    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}
