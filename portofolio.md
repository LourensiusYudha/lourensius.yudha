# Product Requirements Document (PRD)
**Nama Proyek:** Landing Page Portofolio Personal 
**Pemilik Proyek:** Lourensius Yudha Kristianto
**Status:** Final / Siap Dikembangkan
**Versi:** 9.0

---

## 1. Visi & Tujuan Produk
Membangun sebuah *landing page* portofolio statis yang modern, dwibahasa (ID/EN), adaptif (Gelap/Terang), dan interaktif. Tujuan utamanya adalah menonjolkan rekam jejak profesional di bidang **IT Support, Database Management, dan peran Supervisor (SPV)** untuk perusahaan skala nasional maupun multinasional.

## 2. Arsitektur & Lingkungan Teknologi
*   **Framework Frontend:** Next.js (React).
*   **Styling:** Tailwind CSS.
*   **Animasi & Interaksi:** Framer Motion (animasi & transisi modal) & Studio Freight Lenis (*inertia scrolling*).
*   **Fitur Tambahan (Client-side):** 
    *   `next-themes`: Untuk manajemen perpindahan tema (*Dark/Light mode*) tanpa *flicker*.
    *   `i18next` / React Context: Untuk perpindahan bahasa statis (Indonesia - Inggris).
*   **Metode Deployment:** *Static HTML Export* (menghasilkan *file* statis).
*   **Hosting:** Domain dan *hosting* pribadi.
*   **Copywriting:** Pendek, terstruktur, dan langsung pada intinya.

## 3. Desain Sistem (UI/UX Guidelines)
*   **Skema Warna (Tema Adaptif):**
    *   *Dark Mode (Graphite & Gold):* Background `zinc-900`, teks `white` & `zinc-400`, aksen `amber-500`.
    *   *Light Mode (Onyx & Clean White):* Background `white` & `zinc-50`, teks `zinc-900` & `zinc-600`, aksen `amber-500`.
*   **Tipografi:** *Font Sans-Serif* modern yang bersih (Inter / Plus Jakarta Sans).
*   **Animasi:** Efek *momentum scroll* dengan pembobotan fisika, efek *fade-in/slide-up*, dan *micro-interactions* pada tombol.
*   **Interaksi Proyek:** *Card* proyek bersifat *clickable* yang akan memicu transisi jendela **Modal/Overlay** berisi dokumentasi.
*   **Aset Visual:** Penggunaan tipografi bersih, foto profil profesional yang elegan, dan *screenshot* proyek berkualitas tinggi di dalam modal.

## 4. Struktur Konten (Wireframe Alur Halaman)

### A. Sticky Navigation Header
*   **Logo/Nama:** Lourensius Yudha K.
*   **Tautan Anchor:** Tentang | Keahlian | Proyek | Kontak.
*   **Fitur Toggle:** Tombol *Switch* Bahasa `[ ID / EN ]` & Tombol *Switch* Tema `[ Ikon Matahari / Bulan ]`.

### B. Hero Section
*   **Headline:** IT Support, Database Specialist & Supervisor.
*   **Foto Profil:** Foto potret profesional Lourensius Yudha K. (diletakkan tepat setelah judul/headline). Foto menggunakan gaya *clean* atau *cut-out* (tanpa latar belakang ramai) agar menyatu dengan nuansa premium.
*   **Sub-headline:** Fokus pada kelancaran operasional IT, pengelolaan basis data yang efisien, serta memimpin tim teknis dalam mencapai target kerja perusahaan.
*   **Call-to-Action:** Tombol "Unduh CV" dan "Lihat Proyek".

### C. Tech Stack Banner
*   **Deskripsi Visual:** Baris horizontal teks teknologi yang merespons (*hover effect*) saat disorot kursor.
*   **Konten:** WINDOWS | MYSQL | PHP 8.2 | LARAVEL 12 | BOOTSTRAP 5.3

### D. Section Tentang Saya
*   **Pengalaman Profesional:** 2 tahun pengalaman kerja terbukti di bidang operasional IT Support dan pemeliharaan sistem *database*.
*   **Fokus Kerja:** Memastikan infrastruktur sistem berjalan optimal, menangani *troubleshooting* perangkat keras/lunak, dan menjaga integritas data.
*   **Kepemimpinan & Manajemen Tim:** Terbiasa berperan sebagai Supervisor (SPV) dalam mengelola, mengarahkan, dan memastikan kelancaran operasional tim sehari-hari.

### E. Section Keahlian Teknis (Grid 3 Kolom)
*   **IT & Operations:** IT Support & *Troubleshooting*, Team Leadership & Supervising, Hardware & Software Maintenance, Windows OS Environment.
*   **Database:** IT Database Management, MySQL, Query Optimization.
*   **Development:** Laravel 12 & PHP 8.2, API Integrations, Bootstrap 5.3.

### F. Section Proyek & Pengalaman (Clickable Card Layout)
*Setiap card di bawah ini memiliki tombol "Lihat Detail/Dokumentasi" atau dapat diklik langsung.*
*   **Infrastruktur IT (Grand Opening Cabang Gorontalo):** (Lead IT Support). Merancang dan mengeksekusi instalasi infrastruktur *hardware*, jaringan, hingga kesiapan *database* dari nol untuk peluncuran cabang baru.
*   **Sistem Manajemen Inventori:** (Developer & DB Admin). Membangun sistem kustom untuk pencatatan transaksi masuk/keluar dan pemantauan stok barang menggunakan Laravel 12 dan MySQL.
*   **Seven Cloud:** (Supervisor Operasional). Memimpin operasional bisnis independen, mengawasi rantai pasokan, produksi, hingga alur logistik *e-commerce*.

### G. Tampilan Dokumentasi Proyek (Modal Overlay)
*Saat card proyek diklik, modal popup premium akan muncul menampilkan:*
*   **Header:** Judul Proyek & Peran (Role).
*   **Galeri/Media:** *Screenshot* aplikasi, foto instalasi *hardware* di lapangan, atau dokumentasi visual lainnya.
*   **Tantangan & Solusi:** Paragraf singkat mengenai masalah teknis yang dihadapi dan solusi yang diimplementasikan.
*   **Tech Stack Khusus Proyek:** Tag/label teknologi spesifik yang digunakan pada proyek tersebut.
*   **Tautan Eksternal (Opsional):** Tombol menuju repositori GitHub atau tautan langsung jika aplikasi/sistem *live*.
*   **Tombol Tutup (Close):** Untuk kembali ke *landing page* tanpa kehilangan posisi *scroll*.

### H. Section Kontak & Footer
*   **Ajakan:** Tertarik berkolaborasi? Hubungi saya.
*   **Tautan:** Tombol menuju Email, LinkedIn, dan GitHub.
*   **Footer:** © 2026 Lourensius Yudha Kristianto.

## 5. Persyaratan Non-Fungsional (SEO, Aset & Analitik)
*   **SEO, Open Graph, & i18n Meta:** Konfigurasi *metadata* profesional, *thumbnail* elegan, dan penanda *alternate language* agar mesin pencari mendeteksi dukungan dua bahasa.
*   **Aset Dokumen:** Berkas CV dalam format PDF dwibahasa (atau dua tautan terpisah untuk CV ID dan CV EN) yang *ATS-friendly*.
*   **Web Analytics:** Menyematkan Google Analytics 4 (GA4) secara ringan untuk memantau kunjungan rekruter.

## 6. Kriteria Kesuksesan (Release Checklist)
*   **Visual Hero:** Foto profil termuat dengan cepat (*lazy loaded* / dioptimasi oleh Next/Image) tanpa merusak tata letak *headline*.
*   **Fungsi Detail Proyek (Modal):** Klik pada *card* proyek memicu transisi modal dokumentasi menggunakan Framer Motion secara mulus.
*   **Fungsi Toggle:** Pergantian tema (Gelap/Terang) dan bahasa (ID/EN) instan tanpa *page reload*.
*   **Performa & Animasi:** Efek *inertia scroll* dan animasi berjalan di 60fps. Skor Google Lighthouse >90.
*   **Fungsi Ekspor:** Proses `next build` berjalan lancar untuk *hosting* pribadi.
*   **Responsivitas:** Halaman, *modal*, foto, dan *toggle* menyesuaikan secara sempurna di perangkat *mobile*, *tablet*, dan *desktop*.