import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageThemeContext = createContext(null);

export const LanguageThemeProvider = ({ children }) => {
  // Ambil preferensi bahasa dari localStorage atau default 'id'
  const [lang, setLangState] = useState(() => {
    try {
      const savedLang = localStorage.getItem('portfolio_lang');
      return savedLang === 'en' ? 'en' : 'id';
    } catch {
      return 'id';
    }
  });

  // Ambil preferensi tema dari localStorage atau default 'dark'
  const [theme, setThemeState] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('portfolio_theme');
      return savedTheme === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  // Sinkronisasi atribut data-theme pada <html> dan <body> saat tema berubah
  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      if (theme === 'light') {
        document.documentElement.classList.add('light-theme');
        document.documentElement.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      } else {
        document.documentElement.classList.add('dark-theme');
        document.documentElement.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      }
      localStorage.setItem('portfolio_theme', theme);
    } catch (e) {
      console.warn('Could not persist theme to localStorage', e);
    }
  }, [theme]);

  // Sinkronisasi atribut lang pada <html> saat bahasa berubah
  useEffect(() => {
    try {
      document.documentElement.setAttribute('lang', lang);
      localStorage.setItem('portfolio_lang', lang);
    } catch (e) {
      console.warn('Could not persist language to localStorage', e);
    }
  }, [lang]);

  const setLang = (newLang) => {
    setLangState(newLang === 'en' ? 'en' : 'id');
  };

  const toggleLang = () => {
    setLangState(prev => (prev === 'id' ? 'en' : 'id'));
  };

  const setTheme = (newTheme) => {
    setThemeState(newTheme === 'light' ? 'light' : 'dark');
  };

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Kamus bahasa aktif
  const t = translations[lang] || translations.id;

  const value = {
    lang,
    setLang,
    toggleLang,
    theme,
    setTheme,
    toggleTheme,
    t,
  };

  return (
    <LanguageThemeContext.Provider value={value}>
      {children}
    </LanguageThemeContext.Provider>
  );
};

export const useLanguageTheme = () => {
  const context = useContext(LanguageThemeContext);
  if (!context) {
    throw new Error('useLanguageTheme must be used within a LanguageThemeProvider');
  }
  return context;
};
