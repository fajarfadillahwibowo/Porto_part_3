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

  // Headline & Profesi Utama (Fokus pada kapabilitas rekayasa & nilai bisnis)
  title: "Web Developer & Software Engineer",
  tagline: "Merancang & Membangun Produk Web Berkinerja Tinggi, Skalabel, dan Berorientasi Pengguna",
  
  // Narasi singkat di Hero
  heroDescription: 
    "Berdedikasi dalam menerjemahkan tantangan kompleks menjadi platform digital yang cepat, tangguh, dan elegan. Mengutamakan arsitektur sistem yang kokoh, kode yang bersih, serta pengalaman interaksi yang intuitif.",

  // Narasi mendalam di Profil Profesional
  aboutBio: [
    "Saya adalah seorang Web Developer & Software Engineer yang berfokus pada rekayasa perangkat lunak modern end-to-end — mulai dari perancangan arsitektur basis data, logika alur kerja sistem, hingga detail estetika antarmuka pengguna.",
    "Memiliki rekam jejak praktis dalam membangun sistem informasi skala institusi dan layanan masyarakat: seperti otomatisasi seleksi penerimaan murid baru, tata kelola data operasional terpusat, hingga platform pengarsipan digital.",
    "Mengedepankan prinsip clean code, efisiensi komputasi, dan riset teknologi mutakhir untuk memastikan setiap solusi yang dibangun memiliki skalabilitas tinggi, keamanan optimal, serta siap beradaptasi dengan kebutuhan masa depan."
  ],

  // Metadata profil
  location: "Indonesia",
  mapsUrl: "https://www.google.com/maps/place/Fajar+House/@-4.1219779,104.6592948,17z/data=!3m1!4b1!4m6!3m5!1s0x2e39230071d63375:0x616f9fe4fc332260!8m2!3d-4.1219779!4d104.6616247!16s%2Fg%2F11nr10f39f?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
  status: "Terbuka untuk Proyek & Kolaborasi",
  experienceYears: "2+ Tahun",
  projectsCompleted: "3+ Solusi Teruji",
  clientSatisfaction: "100%",
  phone: "085607746031",
  phoneFormatted: "+62 856-0774-6031",

  // Link File CV Resmi
  cvUrl: "./CV-Fajar-Fadillah-Wibowo.pdf",

  // Path Foto Profil Utama
  profileImage: "./fajar-profile.jpg",

  // Tautan Media Sosial & Kontak Langsung (Nomor resmi: 085607746031)
  socials: {
    github: "https://github.com/fajarfadillahwibowo",
    instagram: "https://www.instagram.com/fajarfdlwb_?stkn=ZDNlYmUwOXBzaTJ5&utm_source=qr",
    linkedin: "https://www.instagram.com/fajarfdlwb_?stkn=ZDNlYmUwOXBzaTJ5&utm_source=qr",
    whatsapp: "https://wa.me/6285607746031",
    email: "fajarfadillahwibowo@gmail.com",
    maps: "https://www.google.com/maps/place/Fajar+House/@-4.1219779,104.6592948,17z/data=!3m1!4b1!4m6!3m5!1s0x2e39230071d63375:0x616f9fe4fc332260!8m2!3d-4.1219779!4d104.6616247!16s%2Fg%2F11nr10f39f?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D"
  }
};

export const navLinks = [
  { id: "beranda", label: "Beranda" },
  { id: "keahlian", label: "Keahlian" },
  { id: "proyek", label: "Proyek" },
  { id: "sertifikat", label: "Sertifikat" },
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
    title: "Sistem Penerimaan Murid Baru (SPMB) MI Nurussalam",
    category: "Full-Stack",
    description: "Sistem pendaftaran murid baru berbasis web untuk MI Nurussalam Sidogede yang mengotomatisasi proses seleksi dan administrasi penerimaan dengan antarmuka responsif dan backend terintegrasi.",
    image: "./project-spmb.png",
    tags: ["Laravel 13", "PHP 8.4", "React.js", "Tailwind CSS", "MySQL"],
    demoUrl: "https://minurussalamsidogede.sch.id/",
    githubUrl: "https://github.com/fajarfadillahwibowo/spmb-laravel-react",
    featured: true
  },
  {
    id: 2,
    title: "Website PAMSIMAS Desa (Air Minum & Sanitasi)",
    category: "Web App",
    description: "Platform digital untuk manajemen data penyediaan air minum dan sanitasi berbasis masyarakat tingkat desa dengan pengelolaan basis data terstruktur.",
    image: "./project-pamsimas.png",
    tags: ["Laravel 12", "PHP 8.4", "Tailwind CSS", "MySQL", "JavaScript"],
    demoUrl: "https://github.com/fajarfadillahwibowo/pamsimas_desa",
    githubUrl: "https://github.com/fajarfadillahwibowo/pamsimas_desa",
    featured: true
  },
  {
    id: 3,
    title: "Sistem Repository Media Mahasiswa",
    category: "Full-Stack",
    description: "Sistem penyimpanan dan pengelolaan arsip media mahasiswa berbasis web dengan fitur unggah, kategorisasi, dan pencarian data media secara efisien.",
    image: "./project-3.jpg",
    tags: ["Laravel 12", "PHP 8.3", "Bootstrap CSS", "MySQL", "JavaScript"],
    demoUrl: "https://github.com/fajarfadillahwibowo/market_place_page",
    githubUrl: "https://github.com/fajarfadillahwibowo/market_place_page",
    featured: true
  }
];

export const certificatesData = [
  {
    id: "nvidia-dli",
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA Deep Learning Institute",
    issuerLogo: "nvidia",
    recipient: "Fajar Wibowo",
    credentialId: "xwDZS4T_TVO340_avBYSRg",
    issueDate: "14 Desember 2024",
    issueDateEn: "December 14, 2024",
    type: "Industry Certification",
    badge: "Competency Certified",
    badgeEn: "Competency Certified",
    description: "Sertifikasi resmi kompetensi pemodelan Deep Learning dari NVIDIA DLI, mencakup teknik arsitektur saraf tiruan, computer vision, data augmentation, dan akselerasi komputasi GPU.",
    descriptionEn: "Official competence certification in Deep Learning by NVIDIA DLI, covering neural network architectures, computer vision, data augmentation, and GPU hardware acceleration.",
    image: "./cert-nvidia-deep-learning.png",
    pdfUrl: "./cert-nvidia-deep-learning.pdf",
    verifyUrl: "https://learn.nvidia.com/certificates?id=xwDZS4T_TVO340_avBYSRg",
    tags: ["Deep Learning", "Neural Networks", "NVIDIA GPU", "AI", "Computer Vision"]
  },
  {
    id: "magang-unuha",
    title: "Sertifikat Kelulusan Magang Fakultas Sains & Teknologi",
    issuer: "Universitas Nurul Huda (UNUHA)",
    issuerLogo: "unuha",
    recipient: "Fajar Fadillah Wibowo",
    credentialId: "005/UNUHA.3/HK.04.00/I/2026",
    issueDate: "09 Desember 2025",
    issueDateEn: "December 09, 2025",
    type: "Academic Internship",
    badge: "Predikat LULUS (30 Hari / ±240 Jam)",
    badgeEn: "PASSED (30 Days / ±240 Hours)",
    description: "Sertifikat kelulusan program Magang Mandiri / Kampus Berdampak Fakultas Sains dan Teknologi Universitas Nurul Huda selama 30 hari kerja (± 240 jam kerja) dalam rekayasa teknologi dan implementasi sistem perangkat lunak.",
    descriptionEn: "Official graduation certificate from the Faculty of Science & Technology, Universitas Nurul Huda for the 30-day (±240 hours) High-Impact Internship program in software engineering and system implementation.",
    image: "./cert-magang-unuha.png",
    pdfUrl: null,
    verifyUrl: null,
    tags: ["Magang Mandiri", "Sains & Teknologi", "Software Engineering", "UNUHA", "Kampus Berdampak"]
  }
];

