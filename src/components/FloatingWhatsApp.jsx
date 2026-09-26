import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Icon } from './TechIcons';
import { useLanguageTheme } from '../context/LanguageThemeContext';
import '../styles/floatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const { lang } = useLanguageTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Muncul setelah scroll lebih dari 250px
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waText = lang === 'id'
    ? encodeURIComponent('Halo Fajar, saya melihat portofolio Anda dan ingin berdiskusi mengenai proyek web.')
    : encodeURIComponent('Hello Fajar, I saw your portfolio and would like to discuss a web project.');

  const waUrl = `${personalInfo.socials.whatsapp}?text=${waText}`;

  return (
    <aside
      className={`floating-wa-wrapper ${isVisible ? 'visible' : ''}`}
      aria-label="Pintas WhatsApp Cepat"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        id="btn-floating-whatsapp"
        aria-label="Chat langsung via WhatsApp ke 085607746031"
      >
        <span className="wa-pulse-glow" aria-hidden="true"></span>
        <span className="wa-icon-box">
          <Icon name="whatsapp" size={26} />
        </span>
        <span className="floating-wa-label">
          <span className="wa-badge-status">Online</span>
          <span className="wa-callout-text">
            {lang === 'id' ? 'Chat WhatsApp' : 'WhatsApp Chat'}
          </span>
          <span className="wa-number-sub">{personalInfo.phoneFormatted || '0856-0774-6031'}</span>
        </span>
      </a>
    </aside>
  );
}
