import React, { useState, useEffect } from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';
import { Icon } from './TechIcons';
import CvModal from './CvModal';
import '../styles/navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky style when scrolled beyond 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active nav link based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                    id={`nav-link-${link.id}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions (Lihat CV & Mobile Toggle) */}
          <div className="navbar-actions">
            {/* Tombol Lihat CV (Membuka Pratinjau Terlebih Dahulu) */}
            <button
              type="button"
              className="btn btn-cv"
              id="btn-preview-cv-nav"
              onClick={() => setIsCvModalOpen(true)}
              title="Pratinjau Curriculum Vitae"
            >
              <Icon name="eye" size={16} />
              <span>Lihat CV</span>
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
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="btn btn-cv"
            onClick={() => {
              closeMobileMenu();
              setIsCvModalOpen(true);
            }}
          >
            <Icon name="eye" size={18} />
            <span>Lihat & Unduh CV</span>
          </button>
        </div>
      </header>

      {/* Modal Pratinjau CV Sebelum Mengunduh */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </>
  );
}
