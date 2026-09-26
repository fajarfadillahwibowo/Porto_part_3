import React, { useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Icon } from './TechIcons';
import '../styles/cv-modal.css';

export default function CvModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    // Kunci scroll halaman belakang saat modal terbuka
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Tutup saat tombol Escape ditekan
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="cv-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Pratinjau Curriculum Vitae"
    >
      <div
        className="cv-modal-window"
        onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam modal menutup dialog
      >
        {/* Modal Header */}
        <div className="cv-modal-header">
          <div className="cv-modal-title-box">
            <div className="cv-modal-icon-badge">
              <Icon name="briefcase" size={18} />
            </div>
            <div>
              <h3 className="cv-modal-title">Curriculum Vitae</h3>
              <p className="cv-modal-subtitle">{personalInfo.name} — PDF Resmi</p>
            </div>
          </div>

          <div className="cv-modal-actions">
            {/* Tombol Buka di Tab Baru */}
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-modal-action btn-modal-secondary"
              title="Buka dokumen di tab baru browser"
            >
              <Icon name="external" size={15} />
              <span>Buka di Tab Baru</span>
            </a>

            {/* Tombol Download yang Nyata */}
            <a
              href={personalInfo.cvUrl}
              download="CV-Fajar-Fadillah-Wibowo.pdf"
              className="btn-modal-action btn-modal-download"
              id="modal-download-cv-btn"
              title="Unduh berkas CV sekarang"
            >
              <Icon name="download" size={15} />
              <span>Download CV</span>
            </a>

            {/* Tombol Tutup */}
            <button
              type="button"
              className="btn-modal-close"
              onClick={onClose}
              aria-label="Tutup Pratinjau"
              title="Tutup (Esc)"
            >
              <Icon name="x" size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body / Pratinjau PDF Naskah Asli */}
        <div className="cv-modal-body">
          <iframe
            src={`${personalInfo.cvUrl}#toolbar=1&navpanes=0&view=FitH`}
            title="Pratinjau Curriculum Vitae Fajar Fadillah Wibowo"
            className="cv-pdf-frame"
          />
        </div>
      </div>
    </div>
  );
}
