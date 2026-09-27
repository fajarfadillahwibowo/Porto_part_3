import React, { useState } from 'react';
import { projectsData, personalInfo } from '../data/portfolioData';
import { Icon } from './TechIcons';
import { useLanguageTheme } from '../context/LanguageThemeContext';
import ProjectInteractions from './ProjectInteractions';
import '../styles/projects.css';

export default function Projects() {
  const { lang, t } = useLanguageTheme();
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Full-Stack', 'Web App'];

  const filteredProjects = activeCategory === 'Semua'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section className="section" id="proyek" aria-label="Etalase Portofolio Bento Grid">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header reveal-on-scroll">
          <span className="section-badge">{t.projects.sectionBadge}</span>
          <h2 className="section-title">
            {t.projects.sectionTitlePart1} <span className="text-gradient">{t.projects.sectionTitleGradient}</span>
          </h2>
          <p className="section-subtitle">
            {t.projects.sectionSubtitle}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects-filter-bar reveal-on-scroll">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'Semua' ? t.projects.filterAll : cat}
            </button>
          ))}
        </div>

        {/* BENTO GRID CONTAINER */}
        <div className="bento-grid">
          {filteredProjects.map((project) => {
            const isFeatured = project.id === 1;
            const projectTitle = t.projects.items[project.id]?.title || project.title;
            const projectDesc = t.projects.items[project.id]?.desc || project.description;
            const spanClass = filteredProjects.length === 1 
              ? 'bento-span-1 bento-single-project' 
              : 'bento-span-1';

            return (
              <article
                key={`${activeCategory}-${project.id}`}
                className={`bento-card ${spanClass} bento-card-animate ${isFeatured ? 'bento-card-featured-glow' : ''}`}
                id={`project-card-${project.id}`}
              >
                <div className="bento-compact-media media-static-crisp">
                  <span className={`bento-badge ${isFeatured ? 'featured' : ''}`}>
                    {isFeatured ? `⭐ ${t.projects.featuredBadge}` : project.category}
                  </span>
                  <img
                    src={project.image}
                    alt={`Tangkapan layar antarmuka ${projectTitle}`}
                    className="project-img"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="340"
                  />
                </div>

                <div className="bento-content">
                  <div>
                    <h3 className="bento-title">{projectTitle}</h3>
                    <p className="bento-description">{projectDesc}</p>

                    <div className="bento-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bento-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bento-actions">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bento-link"
                      title={t.projects.btnCode}
                    >
                      <Icon name="github" size={16} />
                      <span>{t.projects.btnCode}</span>
                    </a>

                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bento-link demo"
                      title={t.projects.btnDemo}
                    >
                      <span>{t.projects.btnDemo}</span>
                      <Icon name="external" size={15} />
                    </a>
                  </div>

                  {/* Baris Interaktif: Reaksi Emojis & Komentar Pengunjung */}
                  <ProjectInteractions
                    projectId={project.id}
                    projectTitle={projectTitle}
                  />
                </div>
              </article>
            );
          })}

          {/* BENTO HIGHLIGHT CARD */}
          {activeCategory === 'Semua' && (
            <div className="bento-card bento-span-3 bento-card-info bento-card-animate">
              <div className="bento-info-header">
                <span className="section-badge" style={{ marginBottom: '8px' }}>
                  {lang === 'id' ? 'Filosofi Rekayasa' : 'Engineering Philosophy'}
                </span>
                <h3 className="bento-info-title">
                  {lang === 'id' ? 'Standar Kode Bersih, Modular & Tangguh' : 'Clean, Modular & Resilient Code Standards'}
                </h3>
                <p className="bento-info-subtitle">
                  {lang === 'id'
                    ? 'Setiap baris kode dirancang untuk kemudahan pemeliharaan jangka panjang, performa stabil 60 FPS, dan pengalaman pengguna yang memuaskan.'
                    : 'Engineered for long-term maintainability, stable 60 FPS fluid performance, and delightful user experiences.'}
                </p>
              </div>

              <div className="bento-features-list">
                <div className="bento-feature-item">
                  <span className="bento-feature-icon">⚡</span>
                  <div className="bento-feature-text">
                    <h5>{lang === 'id' ? 'Arsitektur Komponen Modular' : 'Modular Component Architecture'}</h5>
                    <p>{lang === 'id' ? 'Pemisahan tanggung jawab secara tegas dan efisiensi re-render.' : 'Strict separation of concerns with fine-grained render efficiency.'}</p>
                  </div>
                </div>

                <div className="bento-feature-item">
                  <span className="bento-feature-icon">🛡️</span>
                  <div className="bento-feature-text">
                    <h5>{lang === 'id' ? 'Keamanan & Tata Kelola Data' : 'Security & Data Governance'}</h5>
                    <p>{lang === 'id' ? 'Validasi menyeluruh dan sanitasi input basis data terstruktur.' : 'Comprehensive validation, sanitization, and structured data handling.'}</p>
                  </div>
                </div>

                <div className="bento-feature-item">
                  <span className="bento-feature-icon">🧠</span>
                  <div className="bento-feature-text">
                    <h5>{lang === 'id' ? 'Akselerasi Rekayasa Cerdas' : 'Modern Engineering Acceleration'}</h5>
                    <p>{lang === 'id' ? 'Debugging presisi dan pengujian komprehensif berstandar modern.' : 'Precision debugging and automated modern testing standards.'}</p>
                  </div>
                </div>

                <div className="bento-feature-item">
                  <span className="bento-feature-icon">🎨</span>
                  <div className="bento-feature-text">
                    <h5>{lang === 'id' ? 'Desain Adaptif & Interaktif' : 'Adaptive & Responsive Design'}</h5>
                    <p>{lang === 'id' ? 'Estetika visual modern yang tetap ringan, ramah sentuhan, dan aksesibel.' : 'Modern visual aesthetics that stay fast, touch-friendly, and accessible.'}</p>
                  </div>
                </div>
              </div>

              <div className="bento-info-footer">
                <div className="bento-stats-pills">
                  <span className="bento-stat-pill">60 FPS Native Motion</span>
                  <span className="bento-stat-pill">Sub-second Build</span>
                  <span className="bento-stat-pill">100% Mobile Ready</span>
                </div>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bento-link demo"
                >
                  <span>{lang === 'id' ? 'Kunjungi Semua Repositori' : 'Explore All Repositories'}</span>
                  <Icon name="arrow-right" size={16} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
