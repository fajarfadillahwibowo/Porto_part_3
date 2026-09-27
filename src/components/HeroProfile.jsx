import React, { useRef, useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Icon } from './TechIcons';
import { ShinyButton } from '@/components/ui/shiny-button';
import { useLanguageTheme } from '../context/LanguageThemeContext';
import HeroTerminal from './HeroTerminal';
import '../styles/heroProfile.css';

/**
 * HeroProfile Component (Unified Hero & About)
 * Dilengkapi dukungan multibahasa dinamis dan interaksi 3D tilt
 */
export default function HeroProfile({ onOpenCv }) {
  const { t } = useLanguageTheme();
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, shineX: 50, shineY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Deteksi layar sentuh / smartphone / tablet agar kartu 100% tegak lurus, simetris, dan tidak bergetar
  const isTouchDevice = () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768 || window.matchMedia('(hover: none), (pointer: coarse)').matches;
  };

  // Kalkulasi 3D tilt interaktif hanya untuk desktop kursor mouse
  const handleMouseMove = (e) => {
    if (isTouchDevice()) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTilt({
      x: rotateX,
      y: rotateY,
      shineX: (x / rect.width) * 100,
      shineY: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    if (isTouchDevice()) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0, shineX: 50, shineY: 50 });
  };

  return (
    <section className="hero-profile-section" id="beranda" aria-label="Beranda dan Profil Fajar Fadillah Wibowo">
      {/* Target jangkar untuk navigasi 'Tentang' agar tautan navbar tetap berfungsi mulus */}
      <span id="tentang" style={{ position: 'absolute', top: '20px', left: 0, visibility: 'hidden' }} aria-hidden="true"></span>

      <div className="container hero-profile-container">
        <div className="hero-profile-grid">
          
          {/* ================================================================
              KOLOM KIRI: Narasi Profesional, Prinsip Rekayasa & CTA
              ================================================================ */}
          <div className="hero-intro-column anim-fade-up-1">
            
            {/* Status Ketersediaan */}
            <div className="hero-availability-pill">
              <span className="status-dot-pulse" aria-hidden="true"></span>
              <span>{t.hero.availability}</span>
            </div>

            {/* Headline Utama */}
            <h1 className="hero-main-title">
              {t.hero.titlePart1} <span className="text-gradient">{t.hero.titleGradient}</span> {t.hero.titlePart2}
            </h1>

            {/* Narasi Pengantar */}
            <p className="hero-main-desc">
              {t.hero.greeting} <strong>{personalInfo.name}</strong>, {t.hero.role}. {t.hero.description}
            </p>

            {/* Interactive Cyber Developer Terminal (Animated Live Console) */}
            <HeroTerminal />

            {/* Tombol Aksi Utama (CTA) */}
            <div className="hero-action-group">
              <ShinyButton href="#proyek" id="cta-hero-explore-projects">
                <span>{t.hero.ctaProjects}</span>
                <Icon name="arrow-right" size={18} />
              </ShinyButton>

              <a href="#kontak" className="btn-secondary-hero" id="cta-hero-discuss">
                <Icon name="email" size={18} />
                <span>{t.hero.ctaDiscuss}</span>
              </a>

              {onOpenCv && (
                <button
                  type="button"
                  className="btn-secondary-hero"
                  id="cta-hero-preview-cv"
                  onClick={onOpenCv}
                  title={t.cvModal.title}
                >
                  <Icon name="eye" size={17} />
                  <span>{t.hero.ctaPreviewCv}</span>
                </button>
              )}
            </div>


          </div>

          {/* ================================================================
              KOLOM KANAN: Foto Profil dengan Bingkai Futuristik & 3D Tilt
              ================================================================ */}
          <div className="hero-photo-showcase anim-fade-up-2">
            {/* Efek Ambient Glow / Aura di belakang foto */}
            <div className="photo-ambient-halo" aria-hidden="true"></div>

            {/* Kartu Interaktif dengan 3D Perspective */}
            <div
              className="photo-tilt-card"
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={
                !isTouchDevice() && isHovered
                  ? {
                      transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`,
                    }
                  : {
                      transform: 'none',
                    }
              }
            >
              {/* Inner Enclosure Glass */}
              <div className="photo-inner-enclosure">
                
                {/* Efek Spotlight Sheen dinamis mengikuti pointer mouse */}
                <div
                  className="photo-spotlight-sheen"
                  style={{
                    background: `radial-gradient(circle at ${tilt.shineX}% ${tilt.shineY}%, rgba(255, 255, 255, 0.28) 0%, transparent 65%)`,
                    opacity: !isTouchDevice() && isHovered ? 0.7 : 0,
                  }}
                  aria-hidden="true"
                ></div>

                {/* Cyber HUD Corner Brackets */}
                <span className="hud-corner hud-top-left" aria-hidden="true"></span>
                <span className="hud-corner hud-top-right" aria-hidden="true"></span>
                <span className="hud-corner hud-bottom-left" aria-hidden="true"></span>
                <span className="hud-corner hud-bottom-right" aria-hidden="true"></span>

                {/* Badge Mengambang: Peran Utama */}
                <div className="badge-floating-role">
                  <Icon name="check" size={14} className="text-lime-green" />
                  <span>{t.hero.photoRoleBadge}</span>
                </div>

                {/* Wadah Foto Profil Asli (Native & Tajam) */}
                <div className="photo-img-wrapper">
                  <img
                    src={personalInfo.profileImage}
                    alt={`Foto Profesional ${personalInfo.name} - Web Developer`}
                    className="photo-core-image"
                    loading="eager"
                    decoding="async"
                    width="480"
                    height="640"
                  />
                </div>

                {/* Badge Mengambang: Status Verifikasi & Kualitas */}
                <div className="badge-floating-status">
                  <span className="status-dot-pulse" aria-hidden="true"></span>
                  <span>{t.hero.photoStatusBadge}</span>
                </div>
              </div>
            </div>

            {/* Dock Pintas Sosial & Konektivitas Profesional */}
            <div className="hero-social-dock">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-dock-btn"
                aria-label="GitHub Profile"
              >
                <Icon name="github" size={17} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-dock-btn"
                aria-label="Instagram Profile"
              >
                <Icon name="instagram" size={17} />
                <span>Instagram</span>
              </a>

              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="social-dock-btn"
                aria-label="Kirim Email"
              >
                <Icon name="email" size={17} />
                <span>Email</span>
              </a>

              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="social-dock-btn"
                aria-label="WhatsApp"
              >
                <Icon name="whatsapp" size={17} />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
