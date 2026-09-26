import React from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';
import '../styles/footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="site-footer" aria-label="Footer Website">
      <div className="container">
        <div className="footer-top">
          {/* Footer Brand */}
          <div className="footer-brand">
            <div className="brand-avatar-box">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="brand-avatar-img"
                width="40"
                height="40"
              />
            </div>
            <div>
              <div className="brand-name">{personalInfo.name}</div>
              <div className="brand-role">{personalInfo.title}</div>
            </div>
          </div>

          {/* Quick Nav */}
          <ul className="footer-nav">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Back to Top */}
          <button
            type="button"
            className="btn-back-top"
            onClick={scrollToTop}
            aria-label="Kembali ke atas halaman"
          >
            <span>↑ Kembali ke Atas</span>
          </button>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. Seluruh hak cipta dilindungi.
          </p>

          <div className="footer-attribution">
            <span>Dijalankan di atas <strong>Laragon</strong> & dioptimalkan dengan <strong>React</strong> & <strong>Antigravity</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
