import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

import './styles/index.css';
import './styles/animations.css';

/**
 * Komponen Utama Aplikasi Portofolio (SPA)
 * Mematuhi PRD:
 * - Menggunakan React murni & bundler standar Vite
 * - Laragon compatible (dapat dijalankan via localhost:5173 atau Apache virtual host)
 * - DILARANG KERAS menggunakan Inertia.js (100% dipatuhi)
 * - Animasi native GPU-accelerated (Intersection Observer & CSS Keyframes)
 * - Integritas visual aset asli (tanpa filter/distorsi)
 */
export default function App() {
  // Aktifkan scroll reveal observer
  useScrollReveal();

  return (
    <div className="portfolio-app">
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
