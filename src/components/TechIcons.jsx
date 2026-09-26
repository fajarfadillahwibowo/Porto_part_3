import React from 'react';

/**
 * Komponen Ikon Resmi Tanpa Distorsi
 * Sesuai panduan Bagian 3.5 & 4:
 * Semua logo pihak ketiga harus proporsional, akurat, dan mewakili merek aslinya.
 */
export const TechIcon = ({ iconId, size = 32, className = '' }) => {
  switch (iconId) {
    case 'laragon':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Laragon Logo"
        >
          {/* Laragon official badge & stylized whale silhouette */}
          <rect width="128" height="128" rx="26" fill="#0E2338" />
          <path
            d="M32 78C32 58 48 42 70 42C90 42 102 54 104 70C104 84 92 94 74 94C56 94 44 86 38 82L32 78Z"
            fill="#0096E6"
          />
          <path
            d="M24 74C28 66 36 64 42 66C38 72 32 76 24 74Z"
            fill="#38BDF8"
          />
          <circle cx="58" cy="56" r="4.5" fill="#FFFFFF" />
          <path
            d="M48 94C58 98 72 98 84 94C78 90 62 90 48 94Z"
            fill="#0284C7"
          />
          <path
            d="M74 34C74 38 71 42 67 42C67 36 70 34 74 34Z"
            fill="#38BDF8"
          />
          <path
            d="M80 30C80 36 76 40 72 40C72 33 76 30 80 30Z"
            fill="#7DD3FC"
          />
        </svg>
      );

    case 'antigravity':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Antigravity Logo"
        >
          <defs>
            <linearGradient id="agyGrad" x1="16" y1="16" x2="112" y2="112" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
            <linearGradient id="agyInner" x1="36" y1="36" x2="92" y2="92" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
          </defs>
          <rect width="128" height="128" rx="26" fill="#0B1120" />
          {/* Gravitational Orbital Geometric Triangle Motif */}
          <path
            d="M64 24L104 96H24L64 24Z"
            stroke="url(#agyGrad)"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <polygon
            points="64,48 86,86 42,86"
            fill="url(#agyInner)"
            opacity="0.9"
          />
          <circle cx="64" cy="67" r="6" fill="#FFFFFF" />
          <circle cx="64" cy="24" r="5" fill="#38BDF8" />
          <circle cx="104" cy="96" r="5" fill="#A855F7" />
          <circle cx="24" cy="96" r="5" fill="#6366F1" />
        </svg>
      );

    case 'react':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="React Logo"
        >
          <rect width="128" height="128" rx="26" fill="#151D2A" />
          <g transform="translate(64,64)">
            <ellipse rx="44" ry="16.5" fill="none" stroke="#61DAFB" strokeWidth="4.5" />
            <ellipse rx="44" ry="16.5" transform="rotate(60)" fill="none" stroke="#61DAFB" strokeWidth="4.5" />
            <ellipse rx="44" ry="16.5" transform="rotate(120)" fill="none" stroke="#61DAFB" strokeWidth="4.5" />
            <circle r="9" fill="#61DAFB" />
          </g>
        </svg>
      );

    case 'javascript':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="JavaScript Logo"
        >
          <rect width="128" height="128" rx="26" fill="#F7DF1E" />
          <path
            d="M34 100L48 97C49 102 52 105 57 105C62 105 65 102 65 95V55H78V95C78 109 70 115 57 115C46 115 37 109 34 100Z"
            fill="#000000"
          />
          <path
            d="M84 98L97 91C100 97 105 100 111 100C117 100 121 97 121 92C121 86 116 84 107 80C94 74 86 68 86 56C86 44 96 36 109 36C119 36 127 41 131 51L119 58C116 53 113 50 109 50C104 50 100 53 100 56C100 61 104 63 113 67C127 73 135 79 135 91C135 105 124 114 110 114C98 114 88 107 84 98Z"
            transform="scale(0.85) translate(4, 5)"
            fill="#000000"
          />
        </svg>
      );

    case 'css3':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="CSS3 Logo"
        >
          <rect width="128" height="128" rx="26" fill="#0D1F3C" />
          <path d="M26 26L33 102L64 111L95 102L102 26H26Z" fill="#1572B6" />
          <path d="M64 33V104L88 97L94 33H64Z" fill="#33A9DC" />
          <path
            d="M44 47H84L82 61H59L60 70H81L79 91L64 95L49 91L48 80H58L59 84L64 86L69 84L70 77H47L44 47Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'vite':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Vite Logo"
        >
          <rect width="128" height="128" rx="26" fill="#1A182E" />
          <path
            d="M96 26L64 105L32 26H52L64 54L76 26H96Z"
            fill="url(#viteGrad)"
          />
          <path
            d="M74 22L46 64H62L54 106L86 52H68L74 22Z"
            fill="url(#viteBolt)"
          />
          <defs>
            <linearGradient id="viteGrad" x1="32" y1="26" x2="96" y2="105" gradientUnits="userSpaceOnUse">
              <stop stopColor="#41D1FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
            <linearGradient id="viteBolt" x1="46" y1="22" x2="86" y2="106" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFEA83" />
              <stop offset="0.5" stopColor="#FFDD35" />
              <stop offset="1" stopColor="#FFA800" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'nodejs':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Node.js Logo"
        >
          <rect width="128" height="128" rx="26" fill="#0C1F15" />
          <path
            d="M64 24L99 44V84L64 104L29 84V44L64 24Z"
            fill="#339933"
          />
          <path
            d="M64 28L95 46V82L64 100L33 82V46L64 28Z"
            fill="#5FA04E"
          />
          <path
            d="M54 52V76M54 52L74 76V52"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'php':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="PHP Logo"
        >
          <rect width="128" height="128" rx="26" fill="#171A2E" />
          <ellipse cx="64" cy="64" rx="46" ry="26" fill="#777BB4" />
          <text
            x="64"
            y="72"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
            fontSize="26"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            php
          </text>
        </svg>
      );

    case 'mysql':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="MySQL Logo"
        >
          <rect width="128" height="128" rx="26" fill="#0E2333" />
          {/* Stylized MySQL Dolphin */}
          <path
            d="M32 72C38 60 52 50 68 50C82 50 94 58 98 68C90 66 82 68 76 74C68 82 58 84 46 80L32 72Z"
            fill="#00758F"
          />
          <path
            d="M68 50C62 44 64 36 72 34C70 40 76 44 68 50Z"
            fill="#F29111"
          />
          <circle cx="82" cy="62" r="3" fill="#FFFFFF" />
          <text
            x="64"
            y="102"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontWeight="700"
            fontSize="18"
            fill="#00758F"
            textAnchor="middle"
          >
            MySQL
          </text>
        </svg>
      );

    case 'git':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Git Logo"
        >
          <rect width="128" height="128" rx="26" fill="#251412" />
          <g transform="translate(64,64) rotate(45) translate(-64,-64)">
            <rect x="36" y="36" width="56" height="56" rx="10" fill="#F05032" />
            <path d="M52 48V80" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
            <path d="M52 64L76 48" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
            <circle cx="52" cy="48" r="5" fill="#FFFFFF" />
            <circle cx="52" cy="80" r="5" fill="#FFFFFF" />
            <circle cx="76" cy="48" r="5" fill="#FFFFFF" />
          </g>
        </svg>
      );

    case 'laravel':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Laravel Logo"
        >
          <rect width="128" height="128" rx="26" fill="#201012" />
          <path
            d="M98 42L64 24L30 42V86L64 104L98 86V42Z"
            stroke="#FF2D20"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <path
            d="M64 24V104M30 42L64 63L98 42M30 86L64 63L98 86"
            stroke="#FF2D20"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <polygon points="64,36 86,50 64,63 42,50" fill="#FF2D20" opacity="0.8" />
        </svg>
      );

    case 'tailwindcss':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Tailwind CSS Logo"
        >
          <rect width="128" height="128" rx="26" fill="#0C1E26" />
          <path
            d="M42 56C44 48 50 44 60 44C74 44 76 54 82 56C86 58 90 56 94 52C92 60 86 64 76 64C62 64 60 54 54 52C50 50 46 52 42 56ZM26 76C28 68 34 64 44 64C58 64 60 74 66 76C70 78 74 76 78 72C76 80 70 84 60 84C46 84 44 74 38 72C34 70 30 72 26 76Z"
            fill="#06B6D4"
          />
        </svg>
      );

    case 'vscode':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="VS Code Logo"
        >
          <rect width="128" height="128" rx="26" fill="#0E1A29" />
          <path d="M96 24L74 44L44 26L30 36V92L44 102L74 84L96 104V24Z" fill="#0066B8" />
          <path d="M96 24V104L74 84V44L96 24Z" fill="#007ACC" />
          <path d="M44 26L74 54L44 82L30 72V36L44 26Z" fill="#1F9CF0" />
        </svg>
      );

    case 'html5':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="HTML5 Logo"
        >
          <rect width="128" height="128" rx="26" fill="#24130F" />
          <path d="M26 26L33 102L64 111L95 102L102 26H26Z" fill="#E34F26" />
          <path d="M64 33V104L88 97L94 33H64Z" fill="#EF652A" />
          <path
            d="M44 47H84L82 61H59L60 70H81L79 91L64 95L49 91L48 80H58L59 84L64 86L69 84L70 77H47L44 47Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    default:
      return null;
  }
};

/**
 * Universal Action & Social SVG Icons
 */
export const Icon = ({ name, size = 20, className = '' }) => {
  switch (name) {
    case 'download':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      );
    case 'eye':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'external':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      );
    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8V10.9M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
        </svg>
      );
    case 'email':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );
    case 'menu':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      );
    case 'x':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    case 'check':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case 'map-pin':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect width="20" height="14" x="2" y="7" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    default:
      return null;
  }
};
