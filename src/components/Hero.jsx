import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Icon } from './TechIcons';
import { ShinyButton } from '@/components/ui/shiny-button';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="beranda" aria-label="Hero Section">
      <div className="container">
        <div className="hero-content">
          {/* Status Badge */}
          <div className="anim-fade-up-1">
            <div className="hero-status-pill">
              <span className="status-dot-pulse" aria-hidden="true"></span>
              <span>{personalInfo.status}</span>
            </div>
          </div>

          {/* Headline Typography */}
          <h1 className="hero-title anim-fade-up-2">
            Membangun Solusi Digital dengan <span className="text-gradient">React, Laragon</span> & Performa Maksimal
          </h1>

          {/* Sub-headline Role */}
          <p className="hero-subtitle anim-fade-up-3">
            Halo! Saya <strong>{personalInfo.name}</strong>, seorang {personalInfo.title}. {personalInfo.heroDescription}
          </p>

          {/* CTA Buttons with ShinyButton */}
          <div className="hero-cta-group anim-fade-up-4">
            <ShinyButton href="#proyek" id="cta-hero-projects">
              <span>Lihat Karya Saya</span>
              <Icon name="arrow-right" size={18} />
            </ShinyButton>
            <a
              href="#kontak"
              className="btn btn-secondary"
              id="cta-hero-contact"
            >
              <span>Hubungi Saya</span>
              <Icon name="email" size={18} />
            </a>
          </div>

          {/* Key Metrics */}
          <div className="hero-metrics anim-fade-up-4">
            <div className="metric-item">
              <span className="metric-number">{personalInfo.experienceYears}</span>
              <span className="metric-label">Pengalaman Coding</span>
            </div>
            <div className="metric-item">
              <span className="metric-number">{personalInfo.projectsCompleted}</span>
              <span className="metric-label">Proyek Diselesaikan</span>
            </div>
            <div className="metric-item">
              <span className="metric-number">{personalInfo.clientSatisfaction}</span>
              <span className="metric-label">Dedikasi Kualitas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
