# Product Requirements Document (PRD)

## Proyek: Website Portofolio Pribadi (Modern & Profesional)

**Target Eksekutor:** Antigravity AI Agent

## 1. Ringkasan Eksekutif (Executive Summary)

Pengembangan website portofolio pribadi *Single Page Application* (SPA) atau multi-halaman yang dirancang untuk menampilkan identitas profesional, proyek unggulan, dan keahlian teknis. Desain harus minimalis, modern, elegan, dan menonjolkan profesionalisme. Sistem harus ringan, cepat, dan menjaga integritas aset visual secara mutlak.

## 2. Arsitektur Sistem & Tumpukan Teknologi (Tech Stack)

Agen DIWAJIBKAN untuk secara ketat mematuhi batasan teknologi berikut:

* **Frontend Framework:** React (Hanya menggunakan React murni atau bundler standar seperti Vite; pastikan arsitektur komponen modular dan efisien).

* **Styling:** CSS murni atau kerangka kerja utilitas CSS (seperti Tailwind CSS) yang dioptimalkan.

* **Local Environment:** Aplikasi harus kompatibel dan dirancang untuk dijalankan di atas **Laragon**.

* **Animasi:** Native CSS (Transitions & Keyframes) dan Web APIs standar (Intersection Observer).

* **ATURAN KETAT (PROHIBITED):** DILARANG KERAS menggunakan, menginstal, atau mengintegrasikan **Inertia.js** di dalam proyek ini.

## 3. Kebutuhan Fungsional per Bagian (Functional Requirements)

### 3.1. Navigasi (Header/Navbar)

* Menu navigasi *sticky* yang menampilkan tautan ke: Beranda, Tentang, Proyek, Keahlian, dan Kontak.

* Tombol "Download CV" yang menonjol.

* Desain responsif dengan *hamburger menu* untuk tampilan *mobile*.

### 3.2. Halaman Utama (Hero Section)

* **Tipografi:** Judul besar (*headline*) yang mencolok, sub-judul yang menjelaskan peran/profesi.

* **CTA (Call to Action):** Tombol utama (misal: "Lihat Karya Saya") dan tombol sekunder (misal: "Hubungi Saya").

### 3.3. Tentang Saya (About Section)

* Narasi profesional singkat.

* Penempatan foto profil utama.

* Tautan ke profil profesional (LinkedIn, GitHub).

### 3.4. Etalase Proyek (Portfolio/Projects Section)

* Tata letak sistem *Grid* yang responsif.

* Setiap kartu proyek (Project Card) memuat:

  * Gambar/Tangkapan layar proyek.

  * Judul dan deskripsi singkat.

  * Label/Tag teknologi yang digunakan (misal: React, Node.js).

  * Tautan (URL) ke repositori (GitHub) dan *Live Demo* (jika ada).

### 3.5. Keahlian & Teknologi (Skills & Tools)

* Menampilkan logo/ikon teknologi yang dikuasai.

* Daftar wajib: Laragon, Antigravity, React, dan teknologi relevan lainnya.

* **Aturan Ikon:** Gunakan logo resmi yang akurat tanpa distorsi.

### 3.6. Kontak (Contact Section)

* Informasi alamat email langsung (mailto:).

* Formulir kontak sederhana (Nama, Email, Pesan, Tombol Kirim) - *opsional untuk dihubungkan ke backend/layanan pihak ketiga*.

* Tautan ke media sosial.

## 4. Panduan Aset Visual & Integritas Media (CRITICAL)

Bagian ini adalah **Prioritas Utama** dan tidak boleh dilanggar oleh Agen.

* **Render Asli (Native Rendering):** Foto harus dirender secara langsung dari sumber aslinya.

* **Resolusi & Rasio Asli:** Rasio aspek dari kamera (khususnya iPhone) harus dipertahankan secara utuh 100%. Jangan pernah merusak proporsi gambar (`aspect-ratio: auto` atau `object-fit: contain/cover` harus digunakan dengan sangat hati-hati agar tidak memotong subjek utama).

* **Tanpa Manipulasi (No Manipulation):**

  * DILARANG menambahkan filter CSS (seperti `grayscale`, `sepia`, `blur`, dll) pada foto profil dan galeri utama.

  * DILARANG mengubah margin bawaan secara sewenang-wenang yang merusak estetika asli foto.

  * DILARANG melakukan *cropping* paksa.

* **Integritas Logo:** Semua logo alat pihak ketiga harus proporsional dan mewakili merek aslinya.

## 5. Spesifikasi Animasi (UI/UX Animations)

Gerakan harus mematuhi prinsip *Subtle & Purposeful* (Ringan, Halus, Bertujuan).

* **Teknologi:** Gunakan CSS Transitions, CSS Keyframes, dan Intersection Observer API bawaan browser. Hindari *library* animasi berat (seperti Framer Motion atau GSAP) kecuali diwajibkan untuk performa.

* **Batasan Properti:** Hanya gunakan *GPU-accelerated properties* yaitu `transform` (seperti `translate`, `scale`) dan `opacity`. Hindari pemicu *layout thrashing* (seperti menganimasi `width`, `height`, `top`, `left`, `margin`).

* **Detail Transisi:**

  * *Hover Buttons & Links:* Transisi *ease-in-out* 0.2s - 0.3s.

  * *Page Load (Hero):* *Staggered Fade-Up* (Elemen muncul berurutan, `opacity: 0` ke `1`, `translateY: 15px` ke `0`).

  * *Scroll Reveal:* Kartu proyek muncul saat masuk viewport (Intersection Observer).

  * *Card Hover:* Efek melayang ringan (`translateY: -5px` dan `box-shadow` melembut).

* **Pengecualian Media:** Foto profil dan gambar galeri DIKECUALIKAN dari animasi interaktif (*hover/parallax*) untuk menjaga ketajaman visual.

* **Aksesibilitas (a11y):** Wajib menerapkan media query `@media (prefers-reduced-motion: reduce)` untuk mematikan atau menyederhanakan animasi bagi pengguna yang membutuhkannya.

## 6. Kebutuhan Non-Fungsional (Non-Functional Requirements)

* **Responsivitas (Mobile-First):** UI harus sempurna di resolusi 320px (Mobile) hingga 1920px+ (Desktop).

* **Kinerja (Performance):**

  * Waktu muat (Load time) < 3 detik.

  * Animasi berjalan stabil di 60 FPS.

  * Terapkan *Lazy Loading* (`loading="lazy"`) pada gambar di luar *viewport* awal, kecuali gambar *Hero/Profile* yang harus dimuat secepat mungkin (prioritas).

* **Aksesibilitas & SEO:**

  * Wajib memberikan atribut `alt` pada semua tag `<img>`.

  * Gunakan struktur tag HTML semantik (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).

  * Siapkan meta tags dasar (Title, Description, Open Graph).

## 7. Instruksi Eksekusi Khusus untuk AI Agent (Antigravity)

1. Baca dan validasi semua "ATURAN KETAT (PROHIBITED)" sebelum mulai membuat kode (khususnya larangan penggunaan Inertia.js dan manipulasi gambar).

2. Bila diminta membuat kode berbasis React, kumpulkan logika aplikasi, komponen, dan gaya (styling) secara terstruktur.

3. Pastikan *output* kode yang dihasilkan mematuhi aturan animasi berkinerja tinggi (hanya `transform` dan `opacity`).

4. Siapkan komentar (comments) dalam kode untuk area di mana pengguna perlu memasukkan aset manual (seperti direktori gambar atau URL resume).