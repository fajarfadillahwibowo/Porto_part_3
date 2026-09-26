import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Icon } from './TechIcons';
import { ShinyButton } from '@/components/ui/shiny-button';
import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulasi pengiriman data formulir
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 800);
  };

  return (
    <section className="section" id="kontak" aria-label="Kontak dan Diskusi">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header reveal-on-scroll">
          <span className="section-badge">Hubungi Saya</span>
          <h2 className="section-title">
            Mari Mulai <span className="text-gradient">Kolaborasi Baru</span>
          </h2>
          <p className="section-subtitle">
            Apakah Anda memiliki ide proyek, tawaran kerja, atau sekadar ingin mendiskusikan teknologi? Pintu komunikasi saya selalu terbuka.
          </p>
        </div>

        <div className="contact-layout">
          {/* Kolom Informasi & Kontak Langsung */}
          <div className="contact-info-col reveal-on-scroll">
            {/* Email Card Langsung */}
            <div className="contact-card-item">
              <div className="contact-card-icon">
                <Icon name="email" size={22} />
              </div>
              <div className="contact-card-content">
                <h4>Email Langsung</h4>
                <p>Kirimkan surat elektronik kapan saja.</p>
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="contact-direct-link"
                  id="direct-email-link"
                >
                  <span>{personalInfo.socials.email}</span>
                  <Icon name="arrow-right" size={14} />
                </a>
              </div>
            </div>

            {/* WhatsApp / Chat Card */}
            <div className="contact-card-item">
              <div className="contact-card-icon">
                <Icon name="whatsapp" size={22} />
              </div>
              <div className="contact-card-content">
                <h4>WhatsApp Messenger</h4>
                <p>Respon instan untuk diskusi cepat & konsultasi.</p>
                <a
                  href={personalInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-direct-link"
                  id="direct-whatsapp-link"
                >
                  <span>Hubungi via WhatsApp</span>
                  <Icon name="external" size={14} />
                </a>
              </div>
            </div>

            {/* Lokasi & Domisili */}
            <div className="contact-card-item">
              <div className="contact-card-icon">
                <Icon name="map-pin" size={22} />
              </div>
              <div className="contact-card-content">
                <h4>Lokasi & Ketersediaan</h4>
                <p>{personalInfo.location} — {personalInfo.status}</p>
                <span className="skill-badge">Remote / Hybrid Friendly</span>
              </div>
            </div>

            {/* Social Pills */}
            <div className="contact-social-pills">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                id="social-pill-github"
              >
                <Icon name="github" size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                id="social-pill-linkedin"
              >
                <Icon name="linkedin" size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                id="social-pill-wa"
              >
                <Icon name="whatsapp" size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Kolom Formulir Kontak Interaktif */}
          <div className="contact-form-col reveal-on-scroll reveal-delay-2">
            <h3 className="form-title">Kirimkan Pesan</h3>
            <p className="form-subtitle">
              Isi form berikut, dan saya akan merespon kembali secepat mungkin.
            </p>

            {status === 'success' && (
              <div className="form-success-box" role="alert">
                <Icon name="check" size={20} />
                <span>Pesan Anda telah berhasil dikirim! Saya akan segera menghubungi Anda.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} id="portfolio-contact-form">
              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="Misal: John Doe"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Alamat Email *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="nama@perusahaan.com"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Pesan Anda *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Ceritakan tentang proyek atau ide kolaborasi Anda..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div style={{ marginTop: '12px' }}>
                <ShinyButton
                  type="submit"
                  id="btn-submit-contact"
                  disabled={status === 'submitting'}
                  className="w-full"
                  style={{ width: '100%' }}
                >
                  {status === 'submitting' ? (
                    <span>Mengirimkan Pesan...</span>
                  ) : (
                    <>
                      <span>Kirim Pesan Sekarang</span>
                      <Icon name="arrow-right" size={18} />
                    </>
                  )}
                </ShinyButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
