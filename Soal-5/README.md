# Soal 5 - Pengembangan Aplikasi dengan React Hooks
 
<p align="center"> 
    <img src="https://github.com/user-attachments/assets/a84dcbdb-2f83-44cf-a296-72640c891eea" alt="Soal 5" width="640" height="auto"> 
</p>

Folder ini merupakan hasil pengerjaan `Soal 5` Ujian Tengah Semester (UTS) mata kuliah Web Client Development. Soal ini bertujuan untuk membuat sebuah aplikasi web dengan menggunakan React Hooks berdasarkan desain Figma yang diberikan. Proyek ini dibangun dari nol menggunakan React, Vite, dan Tailwind CSS, serta menerapkan best practices yang telah dipelajari di kelas.

## Deskripsi
Dalam Soal 5 ini, saya diminta untuk:

- Membuat aplikasi berdasarkan desain Figma yang tersedia di tautan [ini](https://www.figma.com/design/S1iYVBgIO2eGKPR9Sj15PN/react-hooks?t=70iprkTSPAEFipdi-1).
- Mengimplementasikan `React Hooks` untuk mengelola state dan logika aplikasi.
- Menggunakan `React` dengan `Vite` untuk development yang cepat dan efisien.
- Mengintegrasikan Tailwind CSS untuk styling yang responsif.
- Menerapkan best practices seperti:
  - Struktur komponen yang modular dan reusable.
  - Penggunaan `custom hooks` untuk logika data.
  - Pemisahan fungsi antar komponen dan utilitas.

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
Soal-5/
├── public/                     # Aset statis seperti gambar dan logo
│   └── image/
│       ├── pokeball.gif
│       └── pokemon_logo.png
├── src/                        # Kode sumber aplikasi
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
│   ├── hooks/                  # Custom React hooks
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
├── README.md                   # Dokumentasi proyek
```

## Tahapan yang Telah Dilakukan
Saya telah melakukan beberapa langkah untuk menyelesaikan Soal 5 ini:

1. Inisialisasi Proyek:
    - Membuat proyek baru dari nol menggunakan Vite dengan perintah:
      ```
      npm create vite@latest Soal-5 -- --template react
      cd Soal-5
      ```

    - Menginstall dependensi yang diperlukan:
      ```
      npm install tailwindcss postcss autoprefixer react-router-dom framer-motion lucide-react
      ```

    - Menginisialisasi Tailwind CSS:
      ```
      npx tailwindcss init -p
      ```

2. Menyusun Struktur Folder:
    - Membuat folder `components/`, `pages/`, `hooks/`, `styles/`, dan `utils/` untuk pengorganisiran kode yang lebih baik.
    - Memisahkan komponen ke dalam subfolder `common/`, `home/`, dan `pokemon/` untuk modularitas.

3. Mengimplementasikan Desain Figma:
    - Mengacu pada desain Figma untuk membuat **Home** dengan fitur pencarian, grid Pokémon, dan pagination.
    - Mengembangkan **Detail** untuk menampilkan informasi detail Pokémon.
    - Menggunakan Tailwind CSS untuk styling sesuai dengan desain.

4. Mengimplementasikan React Hooks:
    - Menggunakan `useState` dan `useEffect` di `usePokemons.js` untuk mengambil dan mengelola data Pokémon dari PokéAPI.
    - Menggunakan `useNavigate` di **BackButton.jsx** untuk navigasi.
    - Menggunakan `useState` di **Home.jsx** untuk mengelola state halaman seperti pencarian dan pagination.

5. Menambahkan Interaktivitas:
    - Menggunakan `Framer Motion` untuk animasi pada **PokemonGrid** dan **Pagination**.
    - Mengimplementasikan tombol "**Scroll to Top**" dengan animasi di **ScrollToTopButton.jsx**.
    - Menambahkan toggle view mode dan sorting di **Header** dan **ViewModeToggle**.

6. Mengunggah ke GitHub:
    - Melakukan commit dengan Git dan mengunggah kode:
      ```
      git add .
      git commit -m "Initial commit for Soal 5"
      git push -u origin main
      ```

## Fitur Aplikasi
Aplikasi ini memiliki fitur berikut:

1. Home Page:
    - **Header**: Pencarian Pokémon dengan batas 12 karakter dan opsi sorting.
    - **PokemonGrid**: Tampilan grid atau list Pokémon dengan animasi loading.
    - **Pagination**: Navigasi halaman dengan efek hover.
    - **ViewModeToggle**: Pilihan antara mode single dan double column.

2. Detail Page:
    - Informasi detail Pokémon termasuk gambar, statistik, dan tipe.
    - Tombol "Back" untuk kembali ke halaman utama.

3. Navigasi Responsif:
    - Desain responsif dengan Tailwind CSS untuk berbagai ukuran layar.
    - Tombol "Scroll to Top" dengan tambahan animasi.

## Hasil Akses
Berikut adalah tampilan aplikasi setelah dijalankan:
 
<p align="center"> 
    <img src="https://github.com/user-attachments/assets/1f59bb1f-1c6e-48b6-81a6-ae32e9c8e965" width="720" /> 
</p> 
<p align="center">
    <img src="https://github.com/user-attachments/assets/818062c5-1548-40e5-b7aa-e197fc3bf740" width="720" />
</p>
 
## Tantangan dan Solusi
### Tantangan yang Dihadapi
- Mengelola banyak data dari PokéAPI dengan efisien.
- Memastikan animasi dan interaktivitas tetap berjalan dengan baik di berbagai perangkat.

### Solusi yang Diterapkan
- Menggunakan custom hook `usePokemons` untuk fetching data secara asynchronous.
- Mengoptimalkan animasi dengan **Framer Motion** dan menyesuaikan transisi guna performa lebih baik.

## Artikel Terkait
Saya telah menulis artikel di Medium berjudul "Bye Class, Hello Hooks! Belajar React Lebih Clean dan Modular" sebagai bagian dari proyek ini. Artikel tersebut menjelaskan cara menggunakan `React Hooks` untuk membuat kode yang lebih clean dan modular, yang diterapkan dalam development aplikasi ini.

[Baca artikelnya di Medium](https://medium.com/@fikri.andrhm/bye-class-hello-hooks-belajar-react-lebih-clean-dan-modular-465db12945f5).