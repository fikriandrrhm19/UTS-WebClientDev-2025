# Soal 2 - Penggunaan Git dan Skrip JavaScript/TypeScript

<p align="center"> <img src="https://github.com/user-attachments/assets/aab70f80-6b5f-4b5c-bf9b-8a3bce5259df" alt="soal-2" width="640" height="auto"> </p>

Folder ini merupakan hasil pengerjaan `Soal 2` Ujian Tengah Semester (UTS) mata kuliah Web Client Development yang bertujuan untuk memahami penggunaan Git sebagai alat version control serta mengimplementasikan fungsi dasar menggunakan JavaScript dan TypeScript. Tugas mencakup pengelolaan repository dengan Git dan pemrograman untuk operasi matematika, konversi satuan, serta manipulasi string.

## Tujuan
- Menerapkan konsep dasar Git dalam pengelolaan kode, termasuk inisialisasi repository, branching, dan pull request.
- Mengembangkan skrip JavaScript dan TypeScript yang modular dan terstruktur untuk menyelesaikan masalah pemrograman.
- Menerapkan best practices dalam penulisan kode dan organisasi proyek.

## Teknologi yang Digunakan

- JavaScript (ES6+)
- TypeScript
- Node.js
- Git

## Struktur Folder
```
Soal-2/
├── src/
│   ├── js/                   # Kode JavaScript
│   │   ├── checkOddOrEven.js
│   │   ├── checkPalindrome.js
│   │   ├── convertCmToKm.js
│   │   ├── convertFahrenheitToCelsius.js
│   │   ├── removeFirstOccurrence.js
│   │   └── main.js           # Entry point JavaScript
│   ├── ts/                   # Kode TypeScript
│   │   ├── checkOddOrEven.ts
│   │   ├── checkPalindrome.ts
│   │   ├── convertCmToKm.ts
│   │   ├── convertFahrenheitToCelsius.ts
│   │   ├── removeFirstOccurrence.ts
│   │   └── main.ts           # Entry point TypeScript
├── README.md
```

## Prasyarat

Pastikan Anda telah menginstal:
- Node.js: Versi v18 atau lebih baru untuk menjalankan kode JavaScript.
- TypeScript: Instal dengan perintah npm install typescript --save-dev untuk kompilasi kode TS.
- Git: Diperlukan untuk version control.

## Cara Menjalankan Proyek

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
### Pendekatan Solusi
Setiap tugas dipecahkan melalui fungsi terpisah untuk menjaga modularitas. Prinsip Single Responsibility diterapkan agar setiap fungsi fokus pada satu tugas. Untuk Task 1, alur kerja Git mengikuti GitHub Flow dengan inisialisasi repository, pengelolaan branch, dan integrasi melalui pull request.

### Fitur Utama

1. Task 1 - Git Workflow:
    - Inisialisasi repository lokal dan pengaturan koneksi ke GitHub.
    - Pembuatan branch baru, commit perubahan, dan push ke remote repository.
    - Pembuatan pull request untuk mengintegrasikan perubahan ke branch utama.

2. Task 2 - Skrip Pemrograman:
    - `checkOddOrEven`: Mengecek apakah suatu bilangan ganjil atau genap.
    - `checkPalindrome`: Memverifikasi apakah string merupakan palindrom.
    - `convertCmToKm`: Mengonversi satuan antara centimeter dan kilometer.
    - `convertFahrenheitToCelsius`: Mengonversi suhu dari Fahrenheit ke Celsius.
    - `removeFirstOccurrence`: Menghapus kemunculan pertama substring dari string.

### Struktur Kode

- Kode JavaScript disimpan di `src/js/`, kode TypeScript di `src/ts/`.
- File `main.js` dan `main.ts` berfungsi sebagai entry point untuk menjalankan semua fungsi.
- Setiap fungsi dipisahkan dalam file masing-masing untuk meningkatkan keterbacaan dan modularitas.

### Contoh Output

Berikut adalah contoh output saat menjalankan main.js (Task 2):
text
```
======================================================================

Mengecek apakah 1000 genap: true
Mengecek apakah 1001 genap: false

======================================================================

Apakah "madam" palindrom? Ya
Apakah "fikri" palindrom? Tidak

======================================================================

500000 cm sama dengan 5 km
3 km sama dengan 300000 cm

======================================================================

Suhu input: 100°F
Suhu setelah dikonversi: 37.8°C

======================================================================

Teks asli: "Hello World!"
Setelah menghapus "ell": "Ho World!"
Teks asli: "Fikri Andra Andra Irham"
Setelah menghapus "Andra" pertama: "Fikri  Andra Irham"
```

### Hasil Task 1 - Git Workflow

Berikut adalah langkah-langkah dan hasil implementasi Task 1:

1. **Installing Git**. Sebelum memulai dengan Git, kita perlu menginstalnya sesuai dengan sistem operasi yang digunakan.
    - **Linux**
        - **Debian/Ubuntu:**
            ```
            sudo apt-get install git
            ```
        - **Fedora:**
            ```
            sudo yum install git
            ```
      Verifikasi instalasi:
      ```
      git --version
      ```

    - **Windows**
      Unduh Git dari [git-scm.com](https://git-scm.com) dan ikuti proses instalasi.

    - **MacOS**
      Gunakan Homebrew untuk menginstal Git:
      ```
      brew install git
      ```
      Verifikasi instalasi:
      ```
      git --version
      ```
 
2. **Initializing a Git Repository**. Mulai dengan Git dengan membuat repository baru.
    - Buat direktori baru dan inisialisasi Git:
        ```
        mkdir learn-js-ts-by-doing && cd learn-js-ts-by-doing
        git init
        ```
        <p align="center">
        <img src="https://github.com/user-attachments/assets/2e5b94cf-4d73-4502-9114-f6579800395e" alt="image">
        <img src="https://github.com/user-attachments/assets/948588f8-84c8-4f7b-bb28-c711a15a5691" alt="image">
        </p>
    - Tambahkan file dan lakukan commit pertama: 
        ```
        touch index.js
        git add .
        git commit -m "<description>"
        ```
        <p align="center">
        <img src="https://github.com/user-attachments/assets/26b1a1ae-776b-4dd5-9dc2-289f49084249" alt="image">
        <img src="https://github.com/user-attachments/assets/294aa580-81f0-4327-a7ee-d07bd9f94484" alt="image">
        </p>

    - Hubungkan repository lokal ke GitHub:
        ```
        git remote add origin git@github.com:fikriandrrhm19/learn-js-ts-by-doing.git
        git push -u origin main
        ```

3. **Creating and Managing Branches**. Branching memungkinkan kita bekerja pada fitur baru tanpa mengganggu codebase utama.

    - Buat branch baru:
        ```
        git branch <branch_name>
        ```
        <p align="center">
        <img src="https://github.com/user-attachments/assets/90b379e6-d185-47e5-acae-b06f33d5c60d" alt="image">
        <img src="https://github.com/user-attachments/assets/a9922fc0-fd11-43b0-9daf-5bfa86a1459d" alt="image">
        </p>

    - Beralih ke branch baru:
        ```
        git checkout <branch_name>
        ```

    - Lakukan perubahan di branch, commit, dan push ke GitHub:
        ```
        git add .
        git commit -m "Added feature X"
        git push origin <branch_name>
        ```
        <p align="center">
        <img src="https://github.com/user-attachments/assets/a52e43a3-8dec-4214-a539-507a34d6c17b" alt="image">
        </p>

    - Gabungkan branch ke `main`:
        ```
        git checkout main
        git merge <branch_name>
        git push origin main
        ```

4. **Make a Pull Request, Review the Code, and Merge the Changes**. Karena commit sudah dilakukan baik secara lokal maupun di GitHub, metode yang digunakan adalah fetch untuk mengambil perubahan terbaru sebelum menggabungkan.

    - Pastikan semua perubahan distage dan di-commit sebelum mengambil pembaruan:
        ```
        git add .
        git status
        git commit -m “<description>”
        ```
        <p align="center">
        <img src="https://github.com/user-attachments/assets/16e32906-007c-431a-9574-5a525605e0cf" alt="image">
        </p>

    - Gambar di bawah menunjukkan perbedaan antara commit di kedua repository.
        <p align="center">
        <img src="https://github.com/user-attachments/assets/2a5487b5-a815-463f-9363-40b74f48d70c" alt="image">
        </p>

    - Ambil perubahan terbaru dari remote repository:
        ```
        git fetch origin main
        ```

    - Gabungkan perubahan ke branch lokal:
        ```
        git merge main origin/main
        ```

        Langkah ini mengintegrasikan pembaruan dari branch remote ke repository lokal.

        <p align="center">
        <img src="https://github.com/user-attachments/assets/9c571784-6598-44c3-962e-96d6012badef" alt="image">
        <img src="https://github.com/user-attachments/assets/229e8047-ba00-47e6-b5b3-5e2dab99e148" alt="image">
        </p>

    - Setelah menyelesaikan langkah-langkah ini, repository berhasil diperbarui dengan perubahan terbaru.

## Tantangan dan Solusi
### Tantangan yang Dihadapi
- Memastikan konversi suhu akurat dengan pembulatan yang tepat.
- Menangani string dengan format beragam saat pengecekan palindrom.
- Mengelola branching dan pull request dengan benar menggunakan Git.
- Memahami alur GitHub Flow untuk kolaborasi kode.

### Solusi yang Diterapkan
- Menggunakan `toFixed(1)` untuk pembulatan suhu ke satu desimal.
- Menggunakan `split().reverse().join()` untuk pengecekan palindrom yang efisien.
- Mengikuti GitHub Flow dengan pembuatan branch baru, commit, dan pull request untuk integrasi kode.
- Memastikan setiap commit memiliki pesan yang deskriptif untuk memudahkan pelacakan.

## Artikel Terkait

Saya telah menulis artikel di Medium dengan topik "Mengenal Git dan Apa Perbedaannya dengan GitHub" sebagai bagian dari proyek ini. Artikel tersebut membahas konsep Git dan GitHub, alur kerja GitHub Flow yang diterapkan dalam Soal 2.

[Baca artikelnya di Medium](https://medium.com/@fikri.andrhm/mengenal-git-dan-apa-perbedaannya-dengan-github-bcb72922077c).