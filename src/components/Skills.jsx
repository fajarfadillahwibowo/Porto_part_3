import React from 'react';
import { skillsData } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { useLanguageTheme } from '../context/LanguageThemeContext';
import '../styles/skills.css';

// Data baris 1 marquee (bergerak ke kiri) - Fokus Stack Utama & Backend
const marqueeRow1 = [
  { name: 'Laragon', badge: 'Core Local Server', iconId: 'laragon', isCore: true },
  { name: 'React', badge: 'Frontend Library', iconId: 'react', isCore: true },
  { name: 'Antigravity', badge: 'AI Agentic Coding', iconId: 'antigravity', isCore: true },
  { name: 'Laravel', badge: 'Backend Framework', iconId: 'laravel', isCore: true },
  { name: 'PHP', badge: 'Server-side 8.4', iconId: 'php', isCore: true },
  { name: 'JavaScript', badge: 'ES6+ Language', iconId: 'javascript', isCore: false },
  { name: 'MySQL', badge: 'Relational Database', iconId: 'mysql', isCore: true },
  { name: 'Tailwind CSS', badge: 'Modern Styling', iconId: 'tailwindcss', isCore: false },
];

// Data baris 2 marquee (bergerak ke kanan) - Tooling, Runtime & Workflow
const marqueeRow2 = [
  { name: 'Vite', badge: 'Next-Gen Bundler', iconId: 'vite', isCore: false },
  { name: 'Node.js', badge: 'JS Runtime & APIs', iconId: 'nodejs', isCore: false },
  { name: 'Git', badge: 'Version Control', iconId: 'git', isCore: false },
  { name: 'VS Code', badge: 'Primary IDE', iconId: 'vscode', isCore: false },
  { name: 'HTML5', badge: 'Semantic Structure', iconId: 'html5', isCore: false },
  { name: 'CSS3', badge: 'Keyframes & Grid', iconId: 'css3', isCore: false },
  { name: 'Antigravity', badge: 'DeepMind Engine', iconId: 'antigravity', isCore: true },
  { name: 'Laragon', badge: 'Fast Dev Stack', iconId: 'laragon', isCore: true },
  { name: 'React', badge: 'Modular UI', iconId: 'react', isCore: true },
];

export default function Skills() {
  const { t } = useLanguageTheme();
  // Gandakan array agar loop translasi CSS 100% mulus tanpa jeda
  const track1 = [...marqueeRow1, ...marqueeRow1];
  const track2 = [...marqueeRow2, ...marqueeRow2];

  return (
    <section className="section" id="keahlian" aria-label="Keahlian dan Teknologi">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header reveal-on-scroll">
          <span className="section-badge">{t.skills.sectionBadge}</span>
          <h2 className="section-title">
            {t.skills.sectionTitlePart1} <span className="text-gradient">{t.skills.sectionTitleGradient}</span>
          </h2>
          <p className="section-subtitle">
            {t.skills.sectionSubtitle}
          </p>
        </div>

        {/* 
          ANIMASI KHUSUS TUMPUKAN TEKNOLOGI:
          Infinite Marquee 2 Baris menggunakan CSS Murni (@keyframes & transform: translate3d)
          Berjalan stabil di 60 FPS tanpa beban memori JS.
          - Baris 1: Bergerak ke kiri
          - Baris 2: Bergerak ke kanan
          - Efek hover: Otomatis pause saat kursor mendekat
        */}
        <div className="marquee-container reveal-on-scroll" aria-label="Daftar logo teknologi beranimasi">
          {/* Baris 1 (Bergerak ke Kiri) */}
          <div className="marquee-track marquee-left">
            {track1.map((item, index) => (
              <div
                key={`row1-${item.name}-${index}`}
                className={`marquee-item ${item.isCore ? 'core-highlight' : ''}`}
              >
                <div className="marquee-icon-wrap">
                  <TechIcon iconId={item.iconId} size={36} />
                </div>
                <div className="marquee-content">
                  <span className="marquee-title">{item.name}</span>
                  <span className="marquee-badge">{item.badge}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Baris 2 (Bergerak ke Kanan) */}
          <div className="marquee-track marquee-right">
            {track2.map((item, index) => (
              <div
                key={`row2-${item.name}-${index}`}
                className={`marquee-item ${item.isCore ? 'core-highlight' : ''}`}
              >
                <div className="marquee-icon-wrap">
                  <TechIcon iconId={item.iconId} size={36} />
                </div>
                <div className="marquee-content">
                  <span className="marquee-title">{item.name}</span>
                  <span className="marquee-badge">{item.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kategori Keahlian Terstruktur */}
        {skillsData.map((categoryGroup, catIndex) => (
          <div key={catIndex} className="skills-category-group reveal-on-scroll">
            <h3 className="skills-category-title">{categoryGroup.category}</h3>

            <div className="skills-grid">
              {categoryGroup.skills.map((skill, index) => {
                const isCore = skill.badge.includes('Core') || skill.badge.includes('AI');
                return (
                  <div
                    key={skill.name}
                    className={`skill-card hover-float ${isCore ? 'core-stack' : ''} reveal-on-scroll reveal-delay-${(index % 3) + 1}`}
                  >
                    <div className="skill-icon-box">
                      <TechIcon iconId={skill.iconId} size={44} />
                    </div>

                    <div className="skill-info">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-badge">{skill.badge}</span>
                      </div>
                      <p className="skill-desc">{skill.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
