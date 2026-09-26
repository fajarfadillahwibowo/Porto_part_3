# Panduan & Dokumentasi Portofolio Pribadi Modern

Aplikasi website portofolio profesional berbasis **React** dan **Vite**, dirancang untuk kompatibilitas penuh dengan lingkungan lokal **Laragon**.

---

## 🚀 Cara Menjalankan di Laragon

### 1. Menjalankan Server Pengembangan (Vite Dev Server)
Untuk pengembangan dengan fitur *Hot Module Replacement* (HMR):
```bash
npm run dev
```
Buka browser di: [http://localhost:5173](http://localhost:5173)

### 2. Menjalankan Langsung Melalui Laragon (Apache / Virtual Host)
Proyek ini sudah dilengkapi dengan konfigurasi otomatis `.htaccess` dan `index.php`.
1. Jalankan perintah build produksi:
   ```bash
   npm run build
   ```
2. Pastikan Apache di Laragon dalam status **Started**.
3. Akses melalui domain lokal Laragon Anda:
   - [http://portofolio.test](http://portofolio.test) (atau `http://localhost/Portofolio/dist`)

---

## 📁 Struktur Proyek & Panduan Kustomisasi

Seluruh data konten dapat diubah dengan mudah pada satu file konfigurasi:
`src/data/portfolioData.js`

| Kebutuhan | Lokasi File | Keterangan |
|---|---|---|
| **Data Profil & Bio** | `src/data/portfolioData.js` | Ubah nama, profesi, bio, tautan sosial, dan kontak |
| **Foto Profil** | `public/profile-sample.jpg` | Ganti dengan foto asli Anda (aspek rasio kamera asli 3:4 / 4:3 dipertahankan 100% tanpa filter) |
| **Berkas CV / Resume** | `public/cv-sample.pdf` | Ganti dengan berkas PDF CV asli Anda |
| **Daftar Proyek** | `src/data/portfolioData.js` | Tambah/edit judul, deskripsi, tag teknologi, link GitHub & Demo |
| **Gambar Proyek** | `public/project-1.jpg`, dst. | Simpan tangkapan layar proyek Anda di folder `public/` |
| **Ikon Teknologi** | `src/components/TechIcons.jsx` | Ikon SVG resmi tanpa distorsi (Laragon, Antigravity, React, dll.) |

---

## 🛡️ Kepatuhan Ketat terhadap PRD (`prd_portofolio_web.md`)

- **Bebas Inertia.js (100% Compliant):** Tidak ada dependensi atau kode Inertia.js.
- **Integritas Visual Asli:**
  - Aspek rasio asli sensor foto (khususnya portrait iPhone) dipertahankan utuh.
  - Bebas dari filter CSS (`grayscale`, `sepia`, `blur`).
  - Foto profil dan gambar galeri dikecualikan dari animasi interaktif hover/scale untuk menjaga ketajaman visual.
- **Animasi Ringan & 60 FPS:**
  - Hanya menggunakan properti GPU-accelerated (`transform` dan `opacity`).
  - Bebas dari library animasi berat (Framer Motion / GSAP dihindari sesuai PRD).
  - Scroll reveal otomatis menggunakan *native Web API* `IntersectionObserver`.
  - Aksesibilitas gerak: Didukung `@media (prefers-reduced-motion: reduce)`.
- **Aksesibilitas & SEO:**
  - Struktur HTML semantik (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
  - Atribut `alt` pada seluruh gambar dan ID unik pada elemen interaktif.
  - Tag meta SEO dan Open Graph lengkap di `index.html`.
