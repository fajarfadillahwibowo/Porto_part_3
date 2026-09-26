import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroProfile from './components/HeroProfile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CvModal from './components/CvModal';
import { useScrollReveal } from './hooks/useScrollReveal';
import { LanguageThemeProvider } from './context/LanguageThemeContext';

import './styles/index.css';
import './styles/animations.css';

/**
 * Komponen Konten Portofolio
 */
function PortfolioContent() {
  useScrollReveal();
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="portfolio-app">
      <Navbar onOpenCv={() => setIsCvModalOpen(true)} />

      <main id="main-content">
        <HeroProfile onOpenCv={() => setIsCvModalOpen(true)} />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />

      {/* Floating Quick Action WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Modal Pratinjau Dokumen CV Resmi */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}

/**
 * Komponen Utama Aplikasi Portofolio (SPA)
 * Dilengkapi Provider Tema (Dark / Light) dan Multibahasa (ID / EN)
 */
export default function App() {
  return (
    <LanguageThemeProvider>
      <PortfolioContent />
    </LanguageThemeProvider>
  );
}
