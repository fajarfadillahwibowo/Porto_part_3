/**
 * =========================================================================
 * PORTOFOLIO DATA & KONFIGURASI
 * =========================================================================
 * Anda dapat mengedit seluruh data pribadi, foto, proyek, dan kontak
 * langsung dari file ini tanpa perlu mengubah kode komponen lain.
 */

export const personalInfo = {
  // Nama lengkap & Panggilan
  name: "Fajar Fadillah Wibowo",
  shortName: "Fajar",
  nickname: "FFW",

  // Headline & Profesi Utama
  title: "Junior Web Developer & Full-Stack Developer",
  tagline: "Pengembangan Aplikasi Web Berbasis Fullstack: Laravel, PHP, React.js & MySQL",
  
  // Narasi singkat di Hero
  heroDescription: 
    "Mahasiswa Informatika Universitas Nurul Huda dengan penguasaan pada pengembangan aplikasi web berbasis Fullstack (Laravel, PHP, JavaScript, React.js, Tailwind CSS, dan MySQL). Siap beradaptasi dan membangun solusi digital yang efisien.",

  // Narasi mendalam di Section 'Tentang Saya'
  aboutBio: [
    "Saya adalah Mahasiswa Informatika di Universitas Nurul Huda dengan spesialisasi pengembangan web berbasis Fullstack, mencakup ekosistem Laravel, PHP, JavaScript, React.js, dan basis data MySQL.",
    "Memiliki pengalaman langsung dalam merancang, membangun, dan mengoptimalkan sistem informasi web melalui proyek akademik, sistem penerimaan murid baru (SPMB), tata kelola data desa (PAMSIMAS), hingga proyek freelance.",
    "Aktif memanfaatkan AI Tools (Antigravity IDE, Claude, ChatGPT, Gemini) untuk akselerasi riset teknis, debugging, dan peningkatan produktivitas rekayasa perangkat lunak."
  ],

  // Metadata profil
  location: "OKU Timur, Sumatera Selatan",
  status: "Tersedia untuk Proyek & Full-Time",
  experienceYears: "2+ Tahun",
  projectsCompleted: "3+ Proyek Utama",
  clientSatisfaction: "100%",

  // Link File CV Resmi
  cvUrl: "./CV-Fajar-Fadillah-Wibowo.pdf",

  // Path Foto Profil Utama
  profileImage: "./fajar-profile.jpg",

  // Tautan Media Sosial & Kontak Langsung
  socials: {
    github: "https://github.com/fajarfadillahwibowo",
    linkedin: "https://linkedin.com/in/fajarfadillahwibowo",
    whatsapp: "https://wa.me/6285607746031",
    email: "fajarfadillahwibowo@gmail.com"
  }
};

export const navLinks = [
  { id: "beranda", label: "Beranda" },
  { id: "tentang", label: "Tentang" },
  { id: "keahlian", label: "Keahlian" },
  { id: "proyek", label: "Proyek" },
  { id: "kontak", label: "Kontak" }
];

export const skillsData = [
  {
    category: "Lingkungan & Workflow Utama (Wajib)",
    skills: [
      {
        name: "Laragon",
        level: "Expert",
        badge: "Core Stack",
        description: "Lingkungan lokal cepat terisolasi untuk PHP, MySQL, Apache & Node.js",
        iconId: "laragon"
      },
      {
        name: "Antigravity",
        level: "Advanced",
        badge: "AI Agentic",
        description: "Google DeepMind Agentic Coding AI & akselerasi rekayasa perangkat lunak",
        iconId: "antigravity"
      },
      {
        name: "React",
        level: "Expert",
        badge: "Core Frontend",
        description: "Arsitektur komponen modular, hooks kustom, dan optimasi render",
        iconId: "react"
      }
    ]
  },
  {
    category: "Frontend & Desain Sistem",
    skills: [
      {
        name: "JavaScript (ES6+)",
        level: "Expert",
        badge: "Language",
        description: "Vanilla JS modern, Async/Await, Web APIs, dan DOM Optimization",
        iconId: "javascript"
      },
      {
        name: "CSS3 / Modern CSS",
        level: "Expert",
        badge: "Styling",
        description: "CSS Grid, Flexbox, Keyframes, Custom Properties & Glassmorphism",
        iconId: "css3"
      },
      {
        name: "Vite",
        level: "Advanced",
        badge: "Bundler",
        description: "Next-gen frontend tooling, instant HMR, dan bundle yang optimal",
        iconId: "vite"
      }
    ]
  },
  {
    category: "Backend, Database & Tooling",
    skills: [
      {
        name: "Node.js",
        level: "Advanced",
        badge: "Runtime",
        description: "REST API, Express server, microservices, dan asynchronous I/O",
        iconId: "nodejs"
      },
      {
        name: "PHP",
        level: "Advanced",
        badge: "Backend",
        description: "Pemrograman backend modular, MVC, dan integrasi Laragon server",
        iconId: "php"
      },
      {
        name: "MySQL",
        level: "Advanced",
        badge: "Database",
        description: "Relational database design, query indexing, dan optimasi transaksi",
        iconId: "mysql"
      },
      {
        name: "Git",
        level: "Advanced",
        badge: "VCS",
        description: "Version control, branching strategy, code reviews, dan GitHub CI",
        iconId: "git"
      }
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Sistem Penerimaan Murid Baru (SPMB)",
    category: "Full-Stack",
    description: "Sistem pendaftaran murid baru berbasis web yang mengotomatisasi proses seleksi dan administrasi penerimaan dengan antarmuka responsif dan backend terintegrasi.",
    image: "./project-1.jpg",
    tags: ["Laravel 13", "PHP 8.4", "React.js", "Tailwind CSS", "MySQL"],
    demoUrl: "https://github.com/fajarfadillahwibowo/spmb-laravel-react",
    githubUrl: "https://github.com/fajarfadillahwibowo/spmb-laravel-react",
    featured: true
  },
  {
    id: 2,
    title: "Website PAMSIMAS Desa (Air Minum & Sanitasi)",
    category: "Web App",
    description: "Platform digital untuk manajemen data penyediaan air minum dan sanitasi berbasis masyarakat tingkat desa dengan pengelolaan basis data terstruktur.",
    image: "./project-2.jpg",
    tags: ["Laravel 12", "PHP 8.4", "Tailwind CSS", "MySQL", "JavaScript"],
    demoUrl: "https://github.com/fajarfadillahwibowo/pamsimas-desa",
    githubUrl: "https://github.com/fajarfadillahwibowo/pamsimas-desa",
    featured: true
  },
  {
    id: 3,
    title: "Sistem Repository Media Mahasiswa",
    category: "Full-Stack",
    description: "Sistem penyimpanan dan pengelolaan arsip media mahasiswa berbasis web dengan fitur unggah, kategorisasi, dan pencarian data media secara efisien.",
    image: "./project-3.jpg",
    tags: ["Laravel 12", "PHP 8.3", "Bootstrap CSS", "MySQL", "JavaScript"],
    demoUrl: "https://github.com/fajarfadillahwibowo/repository-media-mahasiswa",
    githubUrl: "https://github.com/fajarfadillahwibowo/repository-media-mahasiswa",
    featured: true
  }
];
