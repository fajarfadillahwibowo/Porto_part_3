import React, { useState, useEffect, useRef } from 'react';
import { useLanguageTheme } from '../context/LanguageThemeContext';

/**
 * HeroTerminal Component
 * Pengganti interaktif dan beranimasi untuk pilar teks statis.
 * Menampilkan terminal rekayasa perangkat lunak interaktif dengan:
 * - Tab interaktif: developer.ts, terminal.sh, status.json
 * - Animasi border-beam futuristik
 * - Auto-rotation dengan jeda saat hover/interaksi
 * - Fitur salin cuplikan kode langsung
 * - Kursor terminal berkedip dinamis
 */
export default function HeroTerminal() {
  const { language, t } = useLanguageTheme();
  const [activeTab, setActiveTab] = useState('developer'); // 'developer' | 'terminal' | 'metrics'
  const [copied, setCopied] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  const termData = t?.hero?.terminal || {
    badge: 'LIVE REPL',
    tabs: {
      developer: 'developer.ts',
      terminal: 'terminal.sh',
      metrics: 'status.json',
    },
    developerCode: {
      comment: language === 'en' ? '// 🚀 Scalable Web Engineering Blueprint' : '// 🚀 Cetak Biru Rekayasa Web Skalabel',
      name: 'Fajar Fadillah Wibowo',
      role: 'Web Developer & Software Engineer',
      stack: ['Laravel 11', 'React.js', 'MySQL', 'Tailwind'],
      architecture: language === 'en' ? 'Modular MVC & High-Throughput REST APIs' : 'Arsitektur Modular & API Berkinerja Tinggi',
      status: language === 'en' ? 'Ready for High-Impact Roles & Projects ⚡' : 'Siap untuk Proyek & Tantangan Berdampak Tinggi ⚡',
    },
    terminalLines: language === 'en' ? [
      '$ fajar-dev build --target=production --opt-speed',
      '[INFO] Initializing modular architecture & schema...',
      '✓ Backend: Clean Architecture & Optimized SQL Queries',
      '✓ Frontend: Responsive UI & Sub-100ms Response Time',
      '✓ Status: 0 Errors | 100% Ready for Production Deployment 🚀',
    ] : [
      '$ fajar-dev build --target=production --opt-speed',
      '[INFO] Memuat arsitektur modular & skema database...',
      '✓ Backend: Clean Architecture & Optimasi Query SQL',
      '✓ Frontend: Antarmuka Responsif & Respons Sub-100ms',
      '✓ Status: 0 Galat | 100% Siap untuk Penerapan Produksi 🚀',
    ],
    metrics: language === 'en' ? {
      uptime: '99.98% System Reliability',
      experience: '2+ Years Engineering Experience',
      focus: 'Turning Business Complexity into Scalable Code',
      availability: 'Open for New Innovations & Collaboration',
    } : {
      uptime: '99.98% Keandalan Sistem',
      experience: '2+ Tahun Pengalaman Rekayasa',
      focus: 'Mengubah Kompleksitas Bisnis Menjadi Kode Efisien',
      availability: 'Terbuka untuk Kolaborasi & Proyek Baru',
    },
    copied: language === 'en' ? 'Copied!' : 'Disalin!',
    copyTooltip: language === 'en' ? 'Copy snippet' : 'Salin kode',
  };

  const tabs = [
    { id: 'developer', label: termData.tabs.developer, icon: 'code' },
    { id: 'terminal', label: termData.tabs.terminal, icon: 'terminal' },
    { id: 'metrics', label: termData.tabs.metrics, icon: 'json' },
  ];

  // Auto-cycle antar tab setiap 6.5 detik jika tidak sedang di-hover pengguna
  useEffect(() => {
    if (isPaused) return;

    autoPlayRef.current = setInterval(() => {
      setActiveTab((prev) => {
        if (prev === 'developer') return 'terminal';
        if (prev === 'terminal') return 'metrics';
        return 'developer';
      });
    }, 6500);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused]);

  // Handle salin kode ke clipboard
  const handleCopy = () => {
    let textToCopy = '';
    if (activeTab === 'developer') {
      textToCopy = `${termData.developerCode.comment}
const engineer = {
  name: "${termData.developerCode.name}",
  role: "${termData.developerCode.role}",
  stack: ${JSON.stringify(termData.developerCode.stack)},
  architecture: "${termData.developerCode.architecture}",
  status: "${termData.developerCode.status}"
};`;
    } else if (activeTab === 'terminal') {
      textToCopy = termData.terminalLines.join('\n');
    } else {
      textToCopy = JSON.stringify(termData.metrics, null, 2);
    }

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  };

  return (
    <div
      className="hero-dev-terminal-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Interactive Developer Console"
    >
      {/* Animated glowing border beam frame */}
      <div className="terminal-border-beam" aria-hidden="true"></div>

      <div className="hero-dev-terminal">
        {/* Terminal Header Bar */}
        <div className="terminal-titlebar">
          <div className="terminal-window-controls" aria-hidden="true">
            <span className="window-dot dot-close"></span>
            <span className="window-dot dot-min"></span>
            <span className="window-dot dot-expand"></span>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="terminal-tabs-list" role="tablist">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`terminal-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsPaused(true);
                  }}
                >
                  <span className="terminal-tab-icon">
                    {tab.icon === 'code' && (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    )}
                    {tab.icon === 'terminal' && (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="4 17 10 11 4 5" />
                        <line x1="12" y1="19" x2="20" y2="19" />
                      </svg>
                    )}
                    {tab.icon === 'json' && (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 14a2 2 0 0 0-2-2 2 2 0 0 0 2-2V4a2 2 0 0 1 2-2h2" />
                        <path d="M4 10a2 2 0 0 1-2 2 2 2 0 0 1 2 2v6a2 2 0 0 0 2 2h2" />
                        <path d="M20 14a2 2 0 0 1 2-2 2 2 0 0 1-2-2V4a2 2 0 0 0-2-2h-2" />
                        <path d="M20 10a2 2 0 0 0 2 2 2 2 0 0 0-2 2v6a2 2 0 0 1-2 2h-2" />
                      </svg>
                    )}
                  </span>
                  <span className="terminal-tab-label">{tab.label}</span>
                  {isActive && !isPaused && (
                    <span className="tab-progress-indicator" aria-hidden="true"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Action buttons & live radar badge */}
          <div className="terminal-actions">
            <button
              type="button"
              className="terminal-copy-btn"
              onClick={handleCopy}
              title={termData.copyTooltip}
              aria-label={termData.copyTooltip}
            >
              {copied ? (
                <>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="copy-label success">{termData.copied}</span>
                </>
              ) : (
                <>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                  <span className="copy-label">Copy</span>
                </>
              )}
            </button>

            <div className="terminal-live-badge" title="Live Interactive State">
              <span className="live-radar-dot"></span>
              <span className="live-text">{termData.badge}</span>
            </div>
          </div>
        </div>

        {/* Terminal Content Body */}
        <div className="terminal-body" tabIndex="0">
          {activeTab === 'developer' && (
            <div className="code-view anim-code-stream" key="tab-developer">
              <div className="code-line line-comment">
                <span className="line-num">1</span>
                <span className="code-text comment">{termData.developerCode.comment}</span>
              </div>
              <div className="code-line">
                <span className="line-num">2</span>
                <span className="code-text">
                  <span className="syntax-keyword">const</span> <span className="syntax-def">engineer</span> = &#123;
                </span>
              </div>
              <div className="code-line indent">
                <span className="line-num">3</span>
                <span className="code-text">
                  <span className="syntax-prop">name:</span> <span className="syntax-string">"{termData.developerCode.name}"</span>,
                </span>
              </div>
              <div className="code-line indent">
                <span className="line-num">4</span>
                <span className="code-text">
                  <span className="syntax-prop">role:</span> <span className="syntax-string">"{termData.developerCode.role}"</span>,
                </span>
              </div>
              <div className="code-line indent">
                <span className="line-num">5</span>
                <span className="code-text">
                  <span className="syntax-prop">coreStack:</span> [
                  {termData.developerCode.stack.map((item, idx) => (
                    <span key={idx}>
                      <span className="syntax-string">"{item}"</span>
                      {idx < termData.developerCode.stack.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                  ],
                </span>
              </div>
              <div className="code-line indent">
                <span className="line-num">6</span>
                <span className="code-text">
                  <span className="syntax-prop">architecture:</span> <span className="syntax-string">"{termData.developerCode.architecture}"</span>,
                </span>
              </div>
              <div className="code-line indent">
                <span className="line-num">7</span>
                <span className="code-text">
                  <span className="syntax-prop">status:</span> <span className="syntax-string">"{termData.developerCode.status}"</span>
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">8</span>
                <span className="code-text">&#125;;</span>
                <span className="terminal-cursor" aria-hidden="true"></span>
              </div>
            </div>
          )}

          {activeTab === 'terminal' && (
            <div className="code-view anim-code-stream" key="tab-terminal">
              {termData.terminalLines.map((line, idx) => {
                const isCommand = line.startsWith('$');
                const isCheck = line.startsWith('✓');
                const isInfo = line.startsWith('[INFO]');
                return (
                  <div className="code-line terminal-log-line" key={idx}>
                    <span className="line-num">{idx + 1}</span>
                    <span className="code-text">
                      {isCommand && (
                        <>
                          <span className="term-prompt">$</span>{' '}
                          <span className="term-cmd">{line.substring(2)}</span>
                        </>
                      )}
                      {isCheck && (
                        <>
                          <span className="term-success">✓</span>{' '}
                          <span className="term-text">{line.substring(2)}</span>
                        </>
                      )}
                      {isInfo && (
                        <>
                          <span className="term-info">[INFO]</span>{' '}
                          <span className="term-text">{line.substring(6)}</span>
                        </>
                      )}
                      {!isCommand && !isCheck && !isInfo && (
                        <span className="term-text">{line}</span>
                      )}
                    </span>
                    {idx === termData.terminalLines.length - 1 && (
                      <span className="terminal-cursor" aria-hidden="true"></span>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'metrics' && (
            <div className="code-view anim-code-stream" key="tab-metrics">
              <div className="code-line">
                <span className="line-num">1</span>
                <span className="code-text">&#123;</span>
              </div>
              <div className="code-line indent">
                <span className="line-num">2</span>
                <span className="code-text">
                  <span className="syntax-prop">"uptime":</span> <span className="syntax-string">"{termData.metrics.uptime}"</span>,
                </span>
              </div>
              <div className="code-line indent">
                <span className="line-num">3</span>
                <span className="code-text">
                  <span className="syntax-prop">"experience":</span> <span className="syntax-string">"{termData.metrics.experience}"</span>,
                </span>
              </div>
              <div className="code-line indent">
                <span className="line-num">4</span>
                <span className="code-text">
                  <span className="syntax-prop">"focus":</span> <span className="syntax-string">"{termData.metrics.focus}"</span>,
                </span>
              </div>
              <div className="code-line indent">
                <span className="line-num">5</span>
                <span className="code-text">
                  <span className="syntax-prop">"availability":</span> <span className="syntax-string">"{termData.metrics.availability}"</span>
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">6</span>
                <span className="code-text">&#125;</span>
                <span className="terminal-cursor" aria-hidden="true"></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
