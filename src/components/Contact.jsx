import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Icon } from './TechIcons';
import { ShinyButton } from '@/components/ui/shiny-button';
import { useLanguageTheme } from '../context/LanguageThemeContext';
import '../styles/contact.css';

export default function Contact() {
  const { lang, t } = useLanguageTheme();
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
          <span className="section-badge">{t.contact.sectionBadge}</span>
          <h2 className="section-title">
            {t.contact.sectionTitlePart1} <span className="text-gradient">{t.contact.sectionTitleGradient}</span>
          </h2>
          <p className="section-subtitle">
            {t.contact.sectionSubtitle}
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
                <h4>{lang === 'id' ? 'Email Langsung' : 'Direct Email'}</h4>
                <p>{lang === 'id' ? 'Kirimkan pesan elektronik kapan saja.' : 'Send an inquiry or project brief anytime.'}</p>
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
              <div className="contact-card-icon" style={{ background: 'rgba(37, 211, 102, 0.15)', color: '#25D366' }}>
                <Icon name="whatsapp" size={22} />
              </div>
              <div className="contact-card-content">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <h4>WhatsApp Messenger</h4>
                  <span style={{ fontSize: '0.72rem', background: 'rgba(37, 211, 102, 0.15)', color: '#25D366', padding: '2px 8px', borderRadius: '12px', fontWeight: 600 }}>085607746031</span>
                </div>
                <p>{t.contact.waDesc}</p>
                <a
                  href={personalInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-direct-link"
                  id="direct-whatsapp-link"
                >
                  <span>{t.contact.waBtn} (+62 856-0774-6031)</span>
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
                <h4>{lang === 'id' ? 'Lokasi & Status Kerja' : 'Location & Work Status'}</h4>
                <p>{personalInfo.location} — {t.hero.availability}</p>
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
            <h3 className="form-title">{t.contact.formSubmit.replace(' Sekarang', '').replace(' Now', '')}</h3>
            <p className="form-subtitle">
              {lang === 'id'
                ? 'Isi formulir berikut, dan saya akan merespon kembali secepat mungkin.'
                : 'Fill out the form below, and I will get back to you as soon as possible.'}
            </p>

            {status === 'success' && (
              <div className="form-success-box" role="alert">
                <Icon name="check" size={20} />
                <span>{t.contact.formSuccess}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} id="portfolio-contact-form">
              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    {t.contact.formName} *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder={t.contact.formNamePlaceholder}
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    {t.contact.formEmail} *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder={t.contact.formEmailPlaceholder}
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  {t.contact.formMessage} *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="5"
                  placeholder={t.contact.formMessagePlaceholder}
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
                    <span>{t.contact.formSending}</span>
                  ) : (
                    <>
                      <span>{t.contact.formSubmit}</span>
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
