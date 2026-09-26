import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Icon } from './TechIcons';
import CvModal from './CvModal';
import { useLanguageTheme } from '../context/LanguageThemeContext';
import '../styles/navbar.css';

export default function Navbar({ onOpenCv }) {
  const { lang, setLang, theme, toggleTheme, t } = useLanguageTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [internalCvModalOpen, setInternalCvModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  // Daftar navigasi dinamis berbasis kamus multibahasa (tanpa 'tentang' sesuai permintaan)
  const navItems = [
    { id: 'beranda', label: t.nav.beranda },
    { id: 'keahlian', label: t.nav.keahlian },
    { id: 'proyek', label: t.nav.proyek },
    { id: 'sertifikat', label: t.nav.sertifikat || (lang === 'id' ? 'Sertifikat' : 'Certificates') },
    { id: 'kontak', label: t.nav.kontak },
  ];

  const handleOpenCv = () => {
    if (onOpenCv) {
      onOpenCv();
    } else {
      setInternalCvModalOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active nav link based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          {/* Brand Logo */}
          <a href="#beranda" className="brand-logo" aria-label="Beranda Fajar Fadillah Wibowo">
            <div className="brand-avatar-box">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="brand-avatar-img"
                width="40"
                height="40"
              />
            </div>
            <div className="brand-text">
              <span className="brand-name">{personalInfo.name}</span>
              <span className="brand-role">Software Engineer</span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav aria-label="Navigasi Utama">
            <ul className="nav-menu-desktop">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    id={`nav-link-${item.id}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions (Language Switcher, Theme Toggle, CV Button, Mobile Toggle) */}
          <div className="navbar-actions">
            
            {/* Pilihan Bahasa Modern: ID | EN */}
            <div className="lang-switcher-pill" role="group" aria-label="Pilihan Bahasa">
              <button
                type="button"
                className={`lang-btn ${lang === 'id' ? 'active' : ''}`}
                onClick={() => setLang('id')}
                aria-label="Pilih Bahasa Indonesia"
                title="Bahasa Indonesia"
              >
                ID
              </button>
              <span className="lang-divider">/</span>
              <button
                type="button"
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
                aria-label="Select English Language"
                title="English"
              >
                EN
              </button>
            </div>

            {/* Pilihan Tema: Dark / Light Toggle */}
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t.theme.toLight : t.theme.toDark}
              title={theme === 'dark' ? t.theme.toLight : t.theme.toDark}
            >
              {theme === 'dark' ? (
                <Icon name="sun" size={17} className="theme-icon sun-icon" />
              ) : (
                <Icon name="moon" size={17} className="theme-icon moon-icon" />
              )}
            </button>

            {/* Tombol Lihat CV */}
            <button
              type="button"
              className="btn btn-cv"
              id="btn-preview-cv-nav"
              onClick={handleOpenCv}
              title={t.cvModal.title}
            >
              <Icon name="eye" size={16} />
              <span>{t.nav.cv}</span>
            </button>

            {/* Hamburger Menu Toggle (Mobile) */}
            <button
              type="button"
              className="mobile-toggle-btn"
              id="btn-mobile-menu-toggle"
              aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'x' : 'menu'} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} id="mobile-navigation-drawer">
          {/* Kontrol Bahasa & Tema di dalam Drawer Mobile */}
          <div className="mobile-drawer-controls">
            <div className="lang-switcher-pill">
              <button
                type="button"
                className={`lang-btn ${lang === 'id' ? 'active' : ''}`}
                onClick={() => setLang('id')}
              >
                ID (Indonesia)
              </button>
              <span className="lang-divider">/</span>
              <button
                type="button"
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
              >
                EN (English)
              </button>
            </div>

            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t.theme.toLight : t.theme.toDark}
              title={theme === 'dark' ? t.theme.toLight : t.theme.toDark}
            >
              {theme === 'dark' ? (
                <Icon name="sun" size={18} className="theme-icon sun-icon" />
              ) : (
                <Icon name="moon" size={18} className="theme-icon moon-icon" />
              )}
            </button>
          </div>

          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <button
            type="button"
            className="btn btn-cv"
            onClick={() => {
              closeMobileMenu();
              handleOpenCv();
            }}
          >
            <Icon name="eye" size={18} />
            <span>{t.nav.cvDownload}</span>
          </button>
        </div>
      </header>

      {/* Modal Pratinjau CV Sebelum Mengunduh (jika onOpenCv tidak disediakan oleh parent) */}
      {!onOpenCv && (
        <CvModal
          isOpen={internalCvModalOpen}
          onClose={() => setInternalCvModalOpen(false)}
        />
      )}
    </>
  );
}
