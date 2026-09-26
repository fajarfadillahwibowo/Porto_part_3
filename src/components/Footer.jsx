import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { useLanguageTheme } from '../context/LanguageThemeContext';
import { Icon } from './TechIcons';
import '../styles/footer.css';

export default function Footer() {
  const { lang, t } = useLanguageTheme();

  const footerNavLinks = [
    { id: 'beranda', label: t.nav.beranda },
    { id: 'keahlian', label: t.nav.keahlian },
    { id: 'proyek', label: t.nav.proyek },
    { id: 'sertifikat', label: t.nav.sertifikat || (lang === 'id' ? 'Sertifikat' : 'Certificates') },
    { id: 'kontak', label: t.nav.kontak },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const waMessage = lang === 'id'
    ? encodeURIComponent('Halo Fajar, saya ingin berkonsultasi mengenai pembuatan sistem web.')
    : encodeURIComponent('Hello Fajar, I would like to consult about a web system project.');
  const waFullUrl = `${personalInfo.socials.whatsapp}?text=${waMessage}`;

  return (
    <footer className="site-footer" aria-label="Footer Website">
      {/* Background Glow Accents */}
      <div className="footer-ambient-glow" aria-hidden="true"></div>

      <div className="container">
        
        {/* ================================================================
            FOOTER TOP: Banner Kolaborasi Interaktif & Tombol WhatsApp Utama
            ================================================================ */}
        <div className="footer-cta-banner reveal-on-scroll">
          <div className="footer-cta-content">
            <span className="footer-cta-badge">
              <span className="cta-dot-live"></span>
              {t.footer.statusBadge}
            </span>
            <h3 className="footer-cta-title">
              {lang === 'id' ? 'Siap Merealisasikan Proyek Impian Anda?' : 'Ready to Engineer Your Next Digital Solution?'}
            </h3>
            <p className="footer-cta-desc">
              {t.footer.discussProject}
            </p>
          </div>

          <div className="footer-cta-actions">
            {/* Tombol Utama WhatsApp dengan Nomor 085607746031 */}
            <a
              href={waFullUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-footer-wa"
              id="footer-main-whatsapp-btn"
              title="Chat langsung ke WhatsApp 085607746031"
            >
              <div className="btn-wa-icon-glow">
                <Icon name="whatsapp" size={20} />
              </div>
              <div className="btn-wa-text-group">
                <span className="btn-wa-sub">{t.footer.waDirect}</span>
                <span className="btn-wa-number">{personalInfo.phoneFormatted || '0856-0774-6031'}</span>
              </div>
            </a>

            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="btn-footer-secondary"
              id="footer-email-btn"
            >
              <Icon name="email" size={17} />
              <span>{lang === 'id' ? 'Kirim Surel' : 'Send Email'}</span>
            </a>
          </div>
        </div>

        {/* ================================================================
            FOOTER MAIN: 4-Column Professional Grid
            ================================================================ */}
        <div className="footer-grid">
          
          {/* Column 1: Identitas Profesional & Visi Rekayasa */}
          <div className="footer-col footer-col-brand">
            <a href="#beranda" className="footer-brand-header">
              <div className="brand-avatar-box">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="brand-avatar-img"
                  width="44"
                  height="44"
                />
              </div>
              <div>
                <span className="footer-brand-name">{personalInfo.name}</span>
                <span className="footer-brand-role">{personalInfo.title}</span>
              </div>
            </a>
            
            <p className="footer-brand-tagline">
              {t.footer.tagline}
            </p>

            <div className="footer-status-pill">
              <span className="status-live-indicator"></span>
              <span>{t.hero.availability}</span>
            </div>
          </div>

          {/* Column 2: Navigasi Cepat */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t.footer.quickNavTitle}</h4>
            <ul className="footer-links-list">
              {footerNavLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="footer-nav-anchor">
                    <span className="nav-bullet">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Kontak & Saluran WhatsApp Resmi */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t.footer.contactTitle}</h4>
            <div className="footer-contact-items">
              
              {/* WhatsApp Item */}
              <a
                href={waFullUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-row"
                id="footer-contact-wa-link"
              >
                <div className="contact-mini-icon wa-tint">
                  <Icon name="whatsapp" size={16} />
                </div>
                <div>
                  <span className="contact-row-label">WhatsApp (Chat)</span>
                  <span className="contact-row-val">{personalInfo.phoneFormatted || '0856-0774-6031'}</span>
                </div>
              </a>

              {/* Email Item */}
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="footer-contact-row"
                id="footer-contact-email-link"
              >
                <div className="contact-mini-icon email-tint">
                  <Icon name="email" size={16} />
                </div>
                <div>
                  <span className="contact-row-label">Email Resmi</span>
                  <span className="contact-row-val">{personalInfo.socials.email}</span>
                </div>
              </a>

              {/* Location Item */}
              <div className="footer-contact-row static-row">
                <div className="contact-mini-icon pin-tint">
                  <Icon name="map-pin" size={16} />
                </div>
                <div>
                  <span className="contact-row-label">Domisili</span>
                  <span className="contact-row-val">{personalInfo.location} (Remote / Hybrid)</span>
                </div>
              </div>

            </div>
          </div>

          {/* Column 4: Jejaring Sosial & Kode Sumber */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t.footer.socialTitle}</h4>
            <p className="footer-social-desc">
              {lang === 'id' 
                ? 'Terhubung dengan saya melalui platform profesional dan jelajahi repositori kode publik saya.' 
                : 'Connect with me across professional platforms and explore my public code repositories.'}
            </p>

            <div className="footer-social-dock">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon-btn"
                aria-label="GitHub Profile"
                id="footer-social-github"
                title="GitHub"
              >
                <Icon name="github" size={18} />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon-btn"
                aria-label="LinkedIn Profile"
                id="footer-social-linkedin"
                title="LinkedIn"
              >
                <Icon name="linkedin" size={18} />
              </a>

              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon-btn wa-social-btn"
                aria-label="WhatsApp (085607746031)"
                id="footer-social-whatsapp"
                title="WhatsApp: 085607746031"
              >
                <Icon name="whatsapp" size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* ================================================================
            FOOTER BOTTOM: Hak Cipta, Attribution & Back-to-Top
            ================================================================ */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} <strong>{personalInfo.name}</strong>. {t.footer.copyright}
          </div>

          <div className="footer-bottom-meta">
            <span className="footer-tech-tag">
              <span className="tech-dot"></span>
              {t.footer.attribution}
            </span>
          </div>

          <button
            type="button"
            className="btn-back-to-top"
            onClick={scrollToTop}
            aria-label={t.footer.backToTop}
            id="btn-scroll-top-footer"
          >
            <span>{t.footer.backToTop}</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
