import React, { useState } from 'react';
import { projectsData, personalInfo } from '../data/portfolioData';
import { Icon } from './TechIcons';
import '../styles/projects.css';

export default function Projects() {
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
          <span className="section-badge">Bento Grid Showcase</span>
          <h2 className="section-title">
            Etalase Portofolio & <span className="text-gradient">Implementasi Sistem</span>
          </h2>
          <p className="section-subtitle">
            Koleksi proyek rekayasa perangkat lunak terpilih, dirancang dengan arsitektur bersih, kehandalan backend, dan estetika visual modern.
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
              {cat}
            </button>
          ))}
        </div>

        {/* 
          BENTO GRID CONTAINER:
          Tata letak asimetris, rapi, dengan sudut membulat (border-radius: 24px)
          dan animasi hover CSS murni (terangkat lembut + bayangan melembut).
        */}
        <div className="bento-grid">
          {filteredProjects.map((project, index) => {
            // Proyek pertama (SPMB) dijadikan Flagship Bento Card (Span 2 kolom) saat filter "Semua"
            const isFeatured = project.id === 1 && activeCategory === 'Semua';

            if (isFeatured) {
              return (
                <article
                  key={project.id}
                  className="bento-card bento-span-2 bento-card-featured reveal-on-scroll"
                  id={`project-card-${project.id}`}
                >
                  {/* Media Unggulan */}
                  <div className="bento-featured-media media-static-crisp">
                    <span className="bento-badge featured">⭐ PROYEK UTAMA / FLAGSHIP</span>
                    <img
                      src={project.image}
                      alt={`Tangkapan layar antarmuka ${project.title}`}
                      className="project-img"
                      loading="lazy"
                      decoding="async"
                      width="720"
                      height="450"
                    />
                  </div>

                  {/* Konten Flagship */}
                  <div className="bento-content">
                    <div>
                      <h3 className="bento-title">{project.title}</h3>
                      <p className="bento-description">{project.description}</p>

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
                        title="Lihat Kode Sumber di GitHub"
                      >
                        <Icon name="github" size={16} />
                        <span>Kode Sumber</span>
                      </a>

                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bento-link demo"
                        title="Buka Repositori Proyek"
                      >
                        <span>Eksplorasi Proyek</span>
                        <Icon name="external" size={15} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            }

            // Kartu Bento Standar / Kompak (Span 1 kolom)
            return (
              <article
                key={project.id}
                className="bento-card bento-span-1 reveal-on-scroll"
                id={`project-card-${project.id}`}
              >
                <div className="bento-compact-media media-static-crisp">
                  <span className="bento-badge">{project.category}</span>
                  <img
                    src={project.image}
                    alt={`Tangkapan layar antarmuka ${project.title}`}
                    className="project-img"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="340"
                  />
                </div>

                <div className="bento-content">
                  <div>
                    <h3 className="bento-title">{project.title}</h3>
                    <p className="bento-description">{project.description}</p>

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
                    >
                      <Icon name="github" size={16} />
                      <span>Kode Sumber</span>
                    </a>

                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bento-link demo"
                    >
                      <span>Lihat Detail</span>
                      <Icon name="external" size={15} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}

          {/* 
            BENTO HIGHLIGHT CARD:
            Kartu Informasi Tambahan yang melengkapi tata letak Bento Grid asimetris
          */}
          {activeCategory === 'Semua' && (
            <div className="bento-card bento-span-2 bento-card-info reveal-on-scroll">
              <div className="bento-info-header">
                <span className="section-badge" style={{ marginBottom: '8px' }}>
                  Filosofi Rekayasa
                </span>
                <h3 className="bento-info-title">
                  Standar Kode Bersih, Modular & Tangguh
                </h3>
                <p className="bento-info-subtitle">
                  Setiap baris kode dirancang untuk kemudahan pemeliharaan jangka panjang, performa stabil 60 FPS, dan pengalaman pengguna yang memuaskan.
                </p>
              </div>

              <div className="bento-features-list">
                <div className="bento-feature-item">
                  <span className="bento-feature-icon">⚡</span>
                  <div className="bento-feature-text">
                    <h5>Laragon & React Stack</h5>
                    <p>Lingkungan server lokal cepat dipadu dengan reaktivitas komponen modular.</p>
                  </div>
                </div>

                <div className="bento-feature-item">
                  <span className="bento-feature-icon">🛡️</span>
                  <div className="bento-feature-text">
                    <h5>Arsitektur MVC & Keamanan</h5>
                    <p>Validasi ketat pada backend Laravel dan sanitasi input database MySQL.</p>
                  </div>
                </div>

                <div className="bento-feature-item">
                  <span className="bento-feature-icon">🧠</span>
                  <div className="bento-feature-text">
                    <h5>AI-Assisted Engineering</h5>
                    <p>Akselerasi debugging dan optimasi logika via Google Antigravity & LLMs.</p>
                  </div>
                </div>

                <div className="bento-feature-item">
                  <span className="bento-feature-icon">🎨</span>
                  <div className="bento-feature-text">
                    <h5>Glassmorphism & Responsive</h5>
                    <p>Estetika visual modern yang tetap ringan, ramah sentuhan, dan aksesibel.</p>
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
                  <span>Kunjungi Semua Repositori</span>
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
