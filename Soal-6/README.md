# Soal 6 - Penyempurnaan Aplikasi dengan React Hooks dan State Management
 
<p align="center"> 
    <img src="https://github.com/user-attachments/assets/db86aa91-3d2c-44e4-9c41-b4ab1e5f1495" alt="Soal 6" width="640" height="auto"> 
</p>

Folder ini merupakan hasil pengerjaan `Soal 6` Ujian Tengah Semester (UTS) mata kuliah Web Client Development. Soal ini melanjutkan proyek dari Soal 5 dengan menambahkan fitur baru pada aplikasi web PokéTrove menggunakan **React Hooks** dan **state management** berdasarkan desain Figma yang diberikan. Proyek ini dikembangkan menggunakan React, Vite, dan Tailwind CSS, serta menerapkan best practices yang telah dipelajari di kelas.

## Deskripsi
Dalam Soal 6 ini, saya diminta untuk:
- Menyempurnakan aplikasi berdasarkan desain Figma yang tersedia di tautan [ini](https://www.figma.com/design/S1iYVBgIO2eGKPR9Sj15PN/react-hooks?t=70iprkTSPAEFipdi-1).
- Menambahkan fitur layout switch antara tampilan 2 kolom dan 1 kolom pada halaman daftar Pokémon.
- Mengimplementasikan `localStorage` untuk caching data Pokémon (daftar dan detail).
- Menambahkan filter berdasarkan tipe Pokémon menggunakan Context API untuk state management.
- Menggunakan **React Hooks** untuk mengelola state dan logika aplikasi.
- Menerapkan best practices seperti:
  - Struktur komponen yang modular dan reusable.
  - Penggunaan custom hooks untuk logika data.
  - State management dengan Context API.

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
Soal-6/
├── public/                     # Aset statis seperti gambar dan logo
│   └── image/
│       ├── pokeball.gif
│       └── pokemon_logo.png
├── src/                        # Source code aplikasi
│   ├── App.jsx                 # Komponen utama aplikasi
│   ├── assets/                 # Aset statis seperti font
│   │   └── fonts/
│   │       ├── DMSans-Bold.ttf
│   │       ├── DMSans-Medium.ttf
│   │       └── DMSans-Regular.ttf
│   ├── components/             # Komponen React yang reusable
│   │   ├── common/             # Komponen umum
│   │   │   ├── Container.jsx
│   │   │   └── ScrollToTopButton.jsx
│   │   ├── home/               # Komponen untuk halaman utama
│   │   │   ├── Header/
│   │   │   │   ├── index.css
│   │   │   │   └── index.jsx
│   │   │   ├── Pagination.jsx
│   │   │   ├── PokemonGrid.jsx
│   │   │   └── ViewModeToggle.jsx
│   │   └── pokemon/            # Komponen untuk detail Pokémon
│   │       ├── Detail/
│   │       │   ├── BackButton.jsx
│   │       │   ├── PokemonHeader.jsx
│   │       │   ├── PokemonImage.jsx
│   │       │   └── PokemonInfo.jsx
│   │       ├── PlaceholderCard.jsx
│   │       └── PokemonCard/
│   │           ├── index.css
│   │           └── index.jsx
│   ├── context/                # State management menggunakan Context API
│   │   ├── PokemonFilterContext.jsx
│   │   └── ThemeContext.jsx
│   ├── hooks/                  # Custom React hooks
│   │   ├── usePokemonDetail.js
│   │   └── usePokemons.js
│   ├── main.jsx                # File utama untuk rendering aplikasi
│   ├── pages/                  # Halaman utama aplikasi
│   │   ├── Detail.jsx
│   │   └── Home.jsx
│   ├── routes/                 # Konfigurasi routing
│   │   └── AppRoutes.jsx
│   ├── styles/                 # File styling
│   │   ├── fonts/
│   │   │   └── sans.css
│   │   └── global.css
│   ├── utils/                  # Fungsi utilitas
│   │   └── sort.js
├── index.html                  # File HTML utama
├── tailwind.config.js          # Konfigurasi Tailwind CSS
├── postcss.config.js           # Konfigurasi PostCSS untuk Tailwind CSS
├── vite.config.js              # Konfigurasi Vite
├── package.json                # Metadata proyek dan dependensi
├── CHANGELOG.md                # Log perubahan proyek
├── LICENSE                     # Lisensi proyek
├── README.md                   # Dokumentasi proyek
```

## Tahapan yang Telah Dilakukan
Saya telah melakukan beberapa langkah untuk menyelesaikan Soal 6 ini, yaitu:

1. Melanjutkan Proyek Soal 5:
    - Menggunakan kode dari Soal 5 sebagai dasar proyek.
    - Memastikan semua fitur sebelumnya (pencarian, pagination, dan detail Pokémon) tetap berfungsi.

2. Menambahkan Layout Switch:
    - Meningkatkan fungsionalitas `ViewModeToggle` untuk mendukung tampilan 2 kolom dan 1 kolom pada ukuran layar smartphone.
    - Menyesuaikan **PokemonGrid** untuk menangani perubahan layout dengan Tailwind CSS.

3. Mengimplementasikan `localStorage` untuk **Caching**:
    - Menambahkan caching pada **usePokemons.js** untuk menyimpan daftar Pokémon ke `localStorage`.
    - Mengimplementasikan caching pada **usePokemonDetail.js** untuk menyimpan detail Pokémon ke `localStorage`, sehingga mengurangi panggilan API berulang.

4. Menambahkan **Filter** dengan Context API:
    - Membuat **PokemonFilterContext.jsx** untuk mengelola state filter tipe Pokémon secara global.
    - Menambahkan dropdown filter tipe pada **Header** untuk memfilter Pokémon berdasarkan tipe (misalnya, "fire", "water").

5. Meningkatkan Fitur Tema (Dark/Light Mode):
    - Menggunakan **ThemeContext.jsx** untuk mengelola tema (dark/light mode) dengan `localStorage`.
    - Menambahkan tombol toggle tema pada **Header** dengan ikon **Sun** dan **Moon**.

6. Mengunggah ke GitHub:
    - Melakukan commit dengan Git dan mengunggah kode:
      ```
      git add .
      git commit -m "Enhance Soal 5 with layout switch, localStorage, and filter for Soal 6"
      git push -u origin main
      ```

## Fitur Aplikasi
Aplikasi ini memiliki fitur berikut, termasuk peningkatan dari Soal 5:
1. Home Page:
    - **Header**. Pencarian Pokémon dengan batas 12 karakter, opsi sorting, filter berdasarkan tipe, dan toggle tema.
    - **PokemonGrid**. Tampilan grid atau list Pokémon dengan animasi loading, mendukung layout switch (2 kolom atau 1 kolom).
    - **Pagination**. Navigasi halaman dengan efek hover.
    - **ViewModeToggle**. Pilihan antara mode single dan double column.

2. Detail Page:
    - Informasi detail Pokémon termasuk gambar, statistik, dan tipe.
    - Tombol "**Back**" untuk kembali ke halaman utama.

3. Fitur Baru Soal 6:
    - **Layout Switch**. Toggle antara tampilan 2 kolom dan 1 kolom pada  ukuran layar smartphone.
    - `localStorage` Caching. Menyimpan data Pokémon (daftar dan detail) untuk mengurangi panggilan API.
    - Filter Tipe Pokémon. Filter berdasarkan tipe menggunakan Context API.
    - Dark/Light Mode. Toggle tema dengan persistence menggunakan localStorage.

4. Navigasi Responsif:
    - Desain responsif dengan Tailwind CSS untuk berbagai ukuran layar.
    - Tombol "Scroll to Top" dengan animasi.

## Hasil Akses
Berikut adalah tampilan aplikasi setelah dijalankan:
 
<p align="center"> 
    <img src="https://github.com/user-attachments/assets/21dccb1d-d238-4a34-bb6c-8be69bc88bf1" width="720" /> 
</p> 
<p align="center"> 
    <img src="https://github.com/user-attachments/assets/75d07372-98cf-47af-b08a-bc22a9e820e7" width="720" /> 
</p> 
<p align="center"> 
    <img src="https://github.com/user-attachments/assets/8f61cb3a-34df-4e45-8364-e218fc0080f2" width="720" /> 
</p> 
<p align="center">
    <img src="https://github.com/user-attachments/assets/8cdf46c6-39c9-4999-b5ab-5fb7cab9ce3d" width="720" />
</p>     

## Tantangan dan Solusi
### Tantangan yang Dihadapi
- Mengelola state filter tipe Pokémon secara global tanpa mengganggu fitur pencarian dan sorting.
- Memastikan caching dengan `localStorage` tetap efisien untuk data besar dari PokéAPI.
- Menyesuaikan desain untuk mendukung dark/light mode pada semua elemen UI.

### Solusi yang Diterapkan
- Menggunakan Context API (**PokemonFilterContext**) untuk mengelola state filter secara terpusat.
- Menambahkan validasi pada caching `localStorage` untuk memastikan data yang disimpan sesuai dengan jumlah yang diharapkan.
- Menggunakan Tailwind CSS dengan `dark:` modifier untuk mendukung transisi tema yang mulus.

## Artikel Terkait
Saya telah menulis artikel di Medium berjudul "Mengenal Lebih Dekat dengan State Management pada React" sebagai bagian dari proyek ini. Artikel tersebut membahas konsep dan penerapan state management di React, termasuk penggunaan Context API yang diterapkan dalam development aplikasi ini.

[Baca artikelnya di Medium](https://medium.com/@fikri.andrhm/mengenal-lebih-dekat-dengan-state-management-pada-react-7e4b685271de).

Live Demo: [https://ptrove.fyz.my.id/](https://ptrove.fyz.my.id/)