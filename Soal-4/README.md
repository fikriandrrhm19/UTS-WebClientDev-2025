# Soal 4 - Pengembangan Website dengan React dan Framework CSS

<p align="center"> 
    <img src="https://github.com/user-attachments/assets/908fe764-d291-4b83-abac-799d0cc586cc" alt="Soal 4" width="640" height="auto"> 
</p>

Folder ini merupakan hasil pengerjaan `Soal 4` Ujian Tengah Semester (UTS) mata kuliah Web Client Development. Soal ini bertujuan untuk mengembangkan sebuah website portofolio pribadi yang terdiri dari **Landing Page** dan **Contact Page** berdasarkan desain Figma yang diberikan. Proyek ini menggunakan `React`, `Vite`, dan `Tailwind CSS`, serta menerapkan best practices yang telah dipelajari di kelas.

## Deskripsi

Dalam Soal 4 ini, saya diminta untuk:

- Mengimplementasikan **Landing Page** dan **Contact Page** berdasarkan desain Figma yang tersedia di tautan [ini](https://www.figma.com/design/rdUyThdkuA3XXuUwRYuGpN/intro-react?t=70iprKTSPAEFipdi-1).
- Menggunakan `React` dengan `Vite` untuk development cepat dan efisien.
- Mengintegrasikan Tailwind CSS untuk styling yang responsif.
- Menerapkan best practices seperti:
  - Struktur komponen yang modular dan reusable.
  - Pemisahan fungsi antara layout dan fitur.

## Persiapan
Berikut adalah persiapan yang diperlukan untuk menjalankan proyek ini:

- `Node.js v18` atau lebih tinggi untuk kompatibilitas dengan Vite dan dependensi lainnya.
- File proyek, termasuk struktur folder, kode sumber, dan aset gambar, yang dapat ditemukan di repositori ini.
- Desain Figma sebagai referensi tampilan akhir.
- Teks editor seperti VSCode untuk development.
- `Git` untuk mengkloning repositori dan mengunggah kode ke GitHub.

## Struktur Folder
Berikut adalah struktur folder proyek beserta penjelasannya:
```
Soal-4/
├── public/                     # Aset statis seperti font dan gambar
│   └── assets/
│       ├── fonts/              # Font kustom
│       │   └── NeueMontreal-Regular.woff2
│       └── images/             # Gambar yang digunakan di website
│           ├── fikri.jpg
│           ├── hero.png
│           ├── image_1.png
│           ├── image_2.png
│           ├── image_3.png
│           ├── image_4.jpeg
│           ├── image_5.png
│           ├── logo.png
│           ├── patrick.jpeg
│           ├── steve.png
├── src/                        # Source code aplikasi
│   ├── components/             # Komponen React yang reusable
│   │   ├── features/           # Komponen untuk fitur utama halaman
│   │   │   ├── About.jsx
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── StickyGreeting.jsx
│   │   │   ├── RecentWork/
│   │   │   │   ├── ProjectCard.jsx
│   │   │   │   ├── RecentWork.jsx
│   │   │   ├── Thoughts/
│   │   │   │   ├── ReflectionCard.jsx
│   │   │   │   ├── Thoughts.jsx
│   │   ├── layout/             # Komponen untuk tata letak global
│   │   │   ├── Footer.jsx
│   │   │   ├── FooterBottom.jsx
│   │   │   ├── Navbar.jsx
│   ├── pages/                  # Halaman utama aplikasi
│   │   ├── ContactPage.jsx
│   │   ├── LandingPage.jsx
│   ├── routes/                 # Konfigurasi routing
│   │   ├── App.jsx
│   ├── styles/                 # File styling
│   │   ├── index.css
│   ├── Main.jsx                # File utama untuk rendering aplikasi
├── index.html                  # File HTML utama
├── tailwind.config.js          # Konfigurasi Tailwind CSS
├── postcss.config.js           # Konfigurasi PostCSS untuk Tailwind CSS
├── vite.config.js              # Konfigurasi Vite
├── package.json                # Metadata proyek dan dependensi
├── README.md                   # Dokumentasi proyek
```

## Tahapan yang Telah Dilakukan
Saya telah melakukan beberapa langkah untuk menyelesaikan Soal 4 ini:

1. Pengembangan Komponen agar Modular:
    - Membagi komponen ke dalam folder `layout/` untuk tata letak global (seperti `Navbar` dan `Footer`) dan `features/` untuk fitur utama halaman (seperti `Hero`, `RecentWork`, dan `Thoughts`).
    - Memecah komponen seperti `RecentWork` dan `Thoughts` menjadi komponen yang lebih kecil (`ProjectCard` dan `ReflectionCard`) untuk meningkatkan reusability.

2. Styling dengan Tailwind CSS:
    - Menggunakan Tailwind CSS untuk styling yang responsif dan konsisten dengan desain Figma.
    - Menambahkan animasi kustom seperti **animate-scroll** dan **animate-wave** di `index.css`.

3. Desain Responsif:
    - Memastikan tata letak responsif untuk berbagai ukuran layar (desktop, tablet, dan ponsel) menggunakan Tailwind CSS.

4. Best Practices:
    - Menggunakan struktur folder yang terorganisir guna skalabilitas.
    - Memberikan nama file dan folder yang deskriptif.
    - Mengoptimalkan performa dengan Vite.

## Fitur Website
Website ini memiliki fitur berikut:

1. Landing Page:
    - **Hero Section**. Menampilkan gambar utama dengan animasi dan pesan.
    - **About Section**. Informasi pribadi.
    - **Recent Work Section**. Daftar proyek dengan gambar dan tautan eksternal.
    - **Thoughts Section**. Kutipan dari berbagai sumber.
    - **Footer**. Tautan kontak dan informasi media sosial.

2. Contact Page:
    - Informasi kontak pribadi dan tautan media sosial.

3. Navigasi Responsif:
    - Navbar dengan menu hamburger untuk layar kecil.
    - Efek animasi saat beralih antar halaman menggunakan **Framer Motion**.

## Langkah-langkah Pengerjaan
Berikut adalah langkah-langkah yang saya lakukan untuk menyelesaikan Soal 4:

1. Inisialisasi Proyek:
    - Membuat proyek baru menggunakan Vite dengan perintah:
      ```
      npm create vite@latest Soal-4 -- --template react
      cd Soal-4
      ```

    - Menginstall dependensi yang diperlukan:
      ```
      npm install tailwindcss postcss autoprefixer react-router-dom framer-motion lucide-react react-icons
      ```

    - Menginisialisasi Tailwind CSS:
      ```
      npx tailwindcss init -p
      ```
3. Menyusun Struktur Folder:

    - Membuat folder `components/`, `pages/`, dan `styles/` untuk pengorganisiran kode yang lebih baik.
    - Memisahkan komponen ke dalam subfolder `features/` dan `layout/`.

4. Mengimplementasikan Desain Figma:

    - Mengacu pada desain Figma untuk membuat `LandingPage` dengan bagian `Hero`, `About`, `Recent Work`, `Thoughts`, dan `Footer`.
    - Mengembangkan `ContactPage` dengan formulir kontak, informasi pribadi, dan tautan media sosial.
    - Menggunakan Tailwind CSS untuk styling yang sesuai dengan desain Figma.

5. Menambahkan Interaktivitas:

    - Menggunakan **Framer Motion** untuk animasi pada `Hero` dan `Navbar`.
    - Mengimplementasikan efek interaktif seperti **StickyGreeting** dan menu hamburger pada `Navbar`.

6. Mengunggah ke GitHub:

    - Melakukan commit dengan Git dan mengunggah kode:
      ```
      git add .
      git commit -m "Initial commit for Soal 4"
      git remote add origin https://github.com/fikriandrrhm19/intro-site.git
      git push -u origin main
      ```

## Tantangan dan Solusi
### Tantangan yang Dihadapi

- Menyesuaikan tata letak agar sesuai dengan desain Figma namun tetap responsif juga di berbagai perangkat.
- Mengelompokkan komponen agar modular dan mudah dikelola.

### Solusi yang Diterapkan

- Menggunakan Tailwind CSS untuk styling yang responsif dengan breakpoint yang sesuai.
- Membagi komponen yang banyak/besar menjadi bagian kecil (misalnya, ProjectCard dan ReflectionCard) agar tetap modularitas.

## Artikel Terkait
Saya telah menulis artikel di Medium dengan topik "Integrasi React, Vite, dan Tailwind dalam Satu Website" sebagai bagian dari proyek ini. Artikel tersebut membahas langkah-langkah development website menggunakan teknologi tersebut, termasuk implementasi yang diterapkan pada Soal 4.

[Baca artikelnya di Medium](https://medium.com/@fikri.andrhm/integrasi-react-vite-dan-tailwind-dalam-satu-website-ae51dac832d6).
