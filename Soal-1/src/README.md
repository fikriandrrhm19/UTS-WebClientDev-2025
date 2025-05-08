# Soal 1 - Dasar JavaScript dan TypeScript

<p align="center">
  <img src="https://github.com/user-attachments/assets/dc6e4a65-183f-499d-88fc-51861f95142b" alt="soal-1" width="640" height="auto">
</p>

## Ringkasan Proyek
Folder ini merupakan hasil pengerjaan `Soal 1` Ujian Tengah Semester (UTS) mata kuliah Web Client Development yang bertujuan untuk mengimplementasikan berbagai fungsi dasar menggunakan JavaScript dan TypeScript. Fungsi-fungsi tersebut mencakup operasi geometri, manipulasi tanggal, serta pemrosesan string.

### Tujuan
- Menerapkan konsep dasar JavaScript dan TypeScript dalam bentuk fungsi yang modular dan terstruktur.
- Menerapkan praktik terbaik (best practices) dalam penulisan kode dan organisasi proyek.
- Meningkatkan pemahaman terhadap perbedaan dan keunggulan antara JavaScript dan TypeScript.

### Teknologi yang Digunakan
- JavaScript (ES6+)
- TypeScript
- Node.js

## Struktur Folder
```
Soal-1/
├── src/
│   ├── js/                     # Kode JavaScript
│   │   ├── calculateRectangleArea.js
│   │   ├── calculateCircleProperties.js
│   │   ├── calculateTriangleAngle.js
│   │   ├── calculateDateDifference.js
│   │   ├── getInitials.js
│   │   └── main.js             # Entry point JavaScript
│   ├── ts/                     # Kode TypeScript
│   │   ├── calculateRectangleArea.ts
│   │   ├── calculateCircleProperties.ts
│   │   ├── calculateTriangleAngle.ts
│   │   ├── calculateDateDifference.ts
│   │   ├── getInitials.ts
│   │   └── main.ts             # Entry point TypeScript
├── README.md
```

## Prasyarat

Pastikan Anda telah menginstal:

- Node.js v18 atau versi lebih baru
- TypeScript (bisa diinstal global dengan perintah npm install -g typescript)


### Cara Menjalankan Proyek
1. JavaScript

   - Jalankan kode utama:
     ```
     node src/js/main.js
     ```


2. TypeScript

   - Inisialisasi konfigurasi TypeScript (jika belum ada tsconfig.json):
     ```
     tsc --init
     ```

   - Kompilasi kode TypeScript:
     ```
     tsc
     ```

   - Jalankan kode yang telah dikompilasi:
     ```
     node src/js/main.js
     ```


## Detail Implementasi
### Pendekatan
- Setiap permasalahan dipecahkan melalui fungsi yang terpisah untuk menjaga modularitas.
- Prinsip Single Responsibility diterapkan agar setiap fungsi fokus pada satu tugas.
- Kode TypeScript menggunakan anotasi tipe eksplisit untuk meningkatkan kejelasan dan keandalan.

### Fitur Utama
- **calculateRectangleArea**: Menghitung luas persegi panjang berdasarkan panjang dan lebar.
- **calculateCircleProperties**: Menghitung diameter, keliling, dan luas lingkaran berdasarkan jari-jari.
- **calculateTriangleAngle**: Menghitung sudut ketiga segitiga berdasarkan dua sudut yang diberikan.
- **calculateDateDifference**: Menghitung selisih hari antara dua tanggal.
- **getInitials**: Mengekstrak inisial dari nama lengkap.

### Organisasi Kode
- Kode JavaScript disimpan di `src/js/`, kode TypeScript di `src/ts/`.
- File `main.js` dan `main.ts` berfungsi sebagai entry point untuk menjalankan semua fungsi.
- Setiap fungsi dipisahkan dalam file masing-masing untuk meningkatkan keterbacaan dan modularitas.

### Contoh Output
Berikut adalah contoh output saat menjalankan `main.js`:
```
======================================================================

Luas Persegi Panjang: ↴
Panjang: 5, Lebar: 3 → Luas = 15

======================================================================

Properti Lingkaran: ↴
Jari-jari: 5 → Diameter: 10, Keliling: 31.4159, Luas: 78.539

======================================================================

Sudut yang diberikan: a = 80°, b = 65° → Sudut ketiga adalah: 35°

======================================================================

Selisih hari antara 2024-03-19 dan 2024-03-21 → 2 hari

======================================================================

Inisial dari John Doe: JD
Inisial dari fikri Andra irham: FAI
```

## Tantangan dan Solusi
### Tantangan

- Diperlukan konversi dan pembulatan angka desimal agar hasil tampil konsisten dan mudah dibaca.
- Format input tanggal yang tidak konsisten dapat menyebabkan error pemrosesan pada objek Date.
- Nama pengguna bisa terdiri dari dua, tiga, atau lebih kata, serta mengandung huruf kecil yang perlu dikapitalisasi dengan benar.
- Harus mendeklarasikan tipe data secara eksplisit agar aman dari kesalahan runtime dan menjaga kejelasan kode.

### Solusi

- Menggunakan `toFixed(2)` untuk menampilkan dua angka di belakang koma pada hasil lingkaran.
- Menggunakan konstruktor `new Date()` dengan format `ISO (YYYY-MM-DD)` untuk pemrosesan yang konsisten.
- Menggunakan kombinasi `split()`, `map()`, dan `toUpperCase()` agar dapat menangani nama beragam panjang dengan huruf kapital yang seragam.
- Menentukan parameter dan return type (`: number`, `: string`) agar lebih eksplisit dan terbantu saat debugging.

## Artikel Terkait

Saya juga telah menulis artikel di Medium dengan topik "Perbedaan JavaScript dan TypeScript" sebagai bagian dari proyek ini. Artikel tersebut membahas perbandingan, fitur penting, dan studi kasus dari proyek ini.

[Baca artikelnya di Medium](https://medium.com/@fikri.andrhm/javascript-atau-typescript-panduan-untuk-developer-pemula-5b23c6fe1289) .
