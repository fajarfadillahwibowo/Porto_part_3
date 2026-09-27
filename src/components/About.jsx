import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Icon } from './TechIcons';
import '../styles/about.css';

export default function About() {
  return (
    <section className="section" id="tentang" aria-label="Tentang Saya">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header reveal-on-scroll">
          <span className="section-badge">Profil Profesional</span>
          <h2 className="section-title">
            Mengenal Lebih Dekat <span className="text-gradient">Sosok di Balik Kode</span>
          </h2>
          <p className="section-subtitle">
            Kombinasi antara presisi logika, kebersihan arsitektur, dan kepedulian terhadap detail visual.
          </p>
        </div>

        <div className="about-grid">
          {/* 
            Bagian Foto Profil:
            CRITICAL PRD Bab 4 & 5:
            - Render Asli (Native Rendering)
            - Aspek rasio iPhone 3:4 dijaga utuh 100%
            - Tanpa manipulasi filter CSS (filter: none)
            - Dikecualikan dari animasi interaktif hover/parallax
            - Prioritas muat cepat (loading="eager")
          */}
          <div className="profile-media-frame reveal-on-scroll media-static-crisp">
            <div className="profile-media-wrapper">
              <img
                src={personalInfo.profileImage}
                alt={`Foto profesional ${personalInfo.name} - Software Engineer`}
                className="profile-native-image"
                loading="eager"
                decoding="async"
                width="600"
                height="800"
              />
            </div>
          </div>

          {/* Narasi & Sorotan Karier */}
          <div className="about-narrative reveal-on-scroll reveal-delay-2">
            {personalInfo.aboutBio.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}

            <div className="about-highlights">
              <a
                href={personalInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-box"
                id="about-domisili-maps"
                title="Buka Fajar House di Google Maps"
                style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                <div className="highlight-icon">
                  <Icon name="map-pin" size={20} />
                </div>
                <div className="highlight-content">
                  <h4>Domisili</h4>
                  <p>{personalInfo.location} <span style={{ fontSize: '0.8em', opacity: 0.7 }}>↗</span></p>
                </div>
              </a>

              <div className="highlight-box">
                <div className="highlight-icon">
                  <Icon name="briefcase" size={20} />
                </div>
                <div className="highlight-content">
                  <h4>Status Kerja</h4>
                  <p>{personalInfo.status}</p>
                </div>
              </div>
            </div>

            {/* Tautan Profesional Langsung */}
            <div className="about-socials-row">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-link"
                id="about-link-github"
              >
                <Icon name="github" size={18} />
                <span>GitHub Profile</span>
              </a>

              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-link"
                id="about-link-instagram"
              >
                <Icon name="instagram" size={18} />
                <span>Instagram Profile</span>
              </a>

              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="about-social-link"
                id="about-link-email"
              >
                <Icon name="email" size={18} />
                <span>Email Langsung</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
