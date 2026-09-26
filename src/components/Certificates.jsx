import React, { useState } from 'react';
import { certificatesData } from '../data/portfolioData';
import { useLanguageTheme } from '../context/LanguageThemeContext';
import { Icon } from './TechIcons';
import '../styles/certificates.css';

export default function Certificates() {
  const { lang, t } = useLanguageTheme();
  const [selectedCert, setSelectedCert] = useState(null);

  const openLightbox = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedCert(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="sertifikat" className="section-padding certificates-section" aria-label={t.certificates.sectionBadge}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-center reveal-on-scroll">
          <div className="section-pill-badge">
            <Icon name="award" size={15} />
            <span>{t.certificates.sectionBadge}</span>
          </div>
          <h2 className="section-title">
            {t.certificates.sectionTitlePart1}{' '}
            <span className="gradient-text">{t.certificates.sectionTitleGradient}</span>
          </h2>
          <p className="section-subtitle">
            {t.certificates.sectionSubtitle}
          </p>
        </div>

        {/* Certificates Grid Showcase */}
        <div className="certificates-grid">
          {certificatesData.map((cert, index) => {
            const isNvidia = cert.id === 'nvidia-dli';
            const badgeLabel = lang === 'en' && cert.badgeEn ? cert.badgeEn : cert.badge;
            const desc = lang === 'en' && cert.descriptionEn ? cert.descriptionEn : cert.description;
            const dateStr = lang === 'en' && cert.issueDateEn ? cert.issueDateEn : cert.issueDate;

            return (
              <article
                key={cert.id}
                className={`certificate-card reveal-on-scroll reveal-delay-${index + 1} ${isNvidia ? 'cert-nvidia' : 'cert-unuha'}`}
              >
                {/* Visual Certificate Preview Header */}
                <div className="cert-preview-box" onClick={() => openLightbox(cert)}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="cert-img-cover"
                    loading="lazy"
                  />
                  <div className="cert-overlay-hover">
                    <span className="btn-zoom-preview">
                      <Icon name="zoom-in" size={18} />
                      <span>{t.certificates.viewFull}</span>
                    </span>
                  </div>

                  {/* Top Floating Badge */}
                  <div className="cert-floating-badge">
                    <Icon name="shield-check" size={14} />
                    <span>{cert.type}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="cert-body">
                  <div className="cert-meta-top">
                    <div className="cert-issuer-badge">
                      <Icon name={isNvidia ? 'sparkles' : 'academic'} size={15} />
                      <span>{cert.issuer}</span>
                    </div>
                    <span className="cert-status-tag">{badgeLabel}</span>
                  </div>

                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-desc">{desc}</p>

                  {/* Detailed Meta Items */}
                  <div className="cert-details-list">
                    <div className="cert-detail-row">
                      <span className="detail-label">{t.certificates.recipient}:</span>
                      <span className="detail-value font-semibold">{cert.recipient}</span>
                    </div>
                    <div className="cert-detail-row">
                      <span className="detail-label">{t.certificates.credentialId}:</span>
                      <span className="detail-value mono-id">{cert.credentialId}</span>
                    </div>
                    <div className="cert-detail-row">
                      <span className="detail-label">{t.certificates.date}:</span>
                      <span className="detail-value">{dateStr}</span>
                    </div>
                  </div>

                  {/* Skills / Technology Tags */}
                  <div className="cert-tags-wrap">
                    {cert.tags.map((tag) => (
                      <span key={tag} className="cert-tag-pill">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="cert-actions-bar">
                    <button
                      type="button"
                      className="btn-cert-primary"
                      onClick={() => openLightbox(cert)}
                    >
                      <Icon name="zoom-in" size={16} />
                      <span>{t.certificates.viewFull}</span>
                    </button>

                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cert-secondary"
                        title="Verifikasi langsung ke portal NVIDIA DLI"
                      >
                        <Icon name="external" size={15} />
                        <span>{t.certificates.verifyOnline}</span>
                      </a>
                    )}

                    {cert.pdfUrl && (
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cert-icon"
                        title="Unduh / Buka Dokumen Asli (PDF)"
                        download
                      >
                        <Icon name="download" size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal Pratinjau Sertifikat */}
      {selectedCert && (
        <div
          className="cert-modal-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
        >
          <div
            className="cert-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cert-modal-header">
              <div className="modal-header-left">
                <span className="modal-issuer">{selectedCert.issuer}</span>
                <h3 className="modal-title">{selectedCert.title}</h3>
              </div>
              <button
                type="button"
                className="btn-modal-close"
                onClick={closeLightbox}
                aria-label={t.certificates.close}
              >
                <Icon name="x" size={20} />
              </button>
            </div>

            <div className="cert-modal-body">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="cert-modal-image"
              />
            </div>

            <div className="cert-modal-footer">
              <div className="cert-modal-info">
                <span><strong>{t.certificates.recipient}:</strong> {selectedCert.recipient}</span>
                <span><strong>{t.certificates.credentialId}:</strong> {selectedCert.credentialId}</span>
              </div>
              <div className="cert-modal-cta">
                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cert-secondary"
                  >
                    <Icon name="external" size={15} />
                    <span>{t.certificates.verifyOnline}</span>
                  </a>
                )}
                {selectedCert.pdfUrl ? (
                  <a
                    href={selectedCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cert-primary"
                    download
                  >
                    <Icon name="download" size={16} />
                    <span>Unduh PDF</span>
                  </a>
                ) : (
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cert-primary"
                    download
                  >
                    <Icon name="download" size={16} />
                    <span>Unduh Gambar</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
