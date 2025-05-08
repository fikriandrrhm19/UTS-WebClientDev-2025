# Soal 3 - Pengembangan Website dengan HTML, CSS dan JavaScript

<p align="center"> 
    <img src="https://github.com/user-attachments/assets/372b1184-eeec-49c6-b3d4-bda141437df6" alt="Soal 3" width="640" height="auto"> 
    <img src="https://github.com/user-attachments/assets/d8a21e75-0e4c-43a8-a67e-1d67c0692d09" alt="Referensi Tampilan Akhir Website" width="640" height="auto">
</p>

Folder ini merupakan hasil pengerjaan `Soal 3` Ujian Tengah Semester (UTS) mata kuliah Web Client Development. Soal ini bertujuan untuk meningkatkan tampilan dan fungsionalitas sebuah website dengan menambahkan styling menggunakan CSS, interaktivitas menggunakan JavaScript, serta memastikan desain responsif berdasarkan referensi desain Figma.

## Deskripsi

Dalam soal 3 ini, saya diminta untuk:

- Memperbaiki bug pada proyek yang ada.
- Melengkapi styling yang hilang berdasarkan desain Figma.
- Mengimplementasikan best practices yang telah dipelajari di kelas.

## Persiapan

Berikut adalah persiapan yang diperlukan:
- File website, termasuk `index.html`, `style.css`, `script.js`, dan koleksi gambar pendukung, yang dapat ditemukan di repositori [ini](https://github.com/cakrawala-university/web-client-development).
- Tampilan akhir website mengacu pada desain yang tersedia di tautan Figma [ini](https://www.figma.com/design/CAawvDkcG4AIoMWvHwrQvo/workoutaja?node-id=0-1&t=CfOIRcJJPeT5PykW-1).
- Teks editor seperti VSCode, Sublime Text, atau lainnya.
- Git untuk mengkloning repositori dan mengunggah kode ke GitHub.

## Struktur Folder

Berikut adalah struktur folder proyek beserta penjelasannya:

```
Soal-3/
├── src/
│   ├── js/                 # Direktori untuk file JavaScript
│   │   ├── script.js       # File untuk menangani interaktivitas halaman
│   ├── css/                # Direktori untuk file CSS
│   │   ├── style.css       # File untuk mengatur tampilan dan tata letak halaman
├── images/                 # Direktori untuk menyimpan gambar dan ikon
│   ├── icons/              # Subdirektori untuk ikon
│   │   ├── whatsapp-icon.svg
│   ├── balls.svg
│   ├── logo.svg
│   ├── woman.svg
├── index.html              # File HTML yang berisi struktur halaman
├── README.md               
```

## Modifikasi yang Dilakukan

Saya telah melakukan beberapa perubahan untuk menyelesaikan soal 3 ini:

- **Penambahan CSS**. Meningkatkan tampilan dengan styling modern, termasuk animasi dan efek responsif.
- **Implementasi JavaScript**. Menambahkan interaktivitas seperti efek tombol dan navigasi yang dinamis.
- **Desain Responsif**. Menyesuaikan tata letak untuk perangkat desktop, tablet, dan ponsel.
- **Peningkatan Struktur HTML**. Mengoptimalkan organisasi elemen untuk aksesibilitas dan maintainability.

## Fitur Website

Pada hasil akhir memiliki fitur berikut:

- **Navigasi Interaktif**. Menu responsif dengan efek hover.
- **Desain Menarik**. Kombinasi warna sesuai desain Figma dan tambahan animasi.
- **Efek Transisi**. Elemen seperti teks dan gambar muncul dengan `fade-in` saat halaman dimuat.
- **Tombol Interaktif**. Tombol berubah warna saat diklik atau dihover.
- **Desain Responsif**. Tata letak yang fleksibel untuk tampilan optimal di berbagai perangkat.

## Langkah-langkah Pengerjaan

Berikut adalah langkah-langkah yang saya lakukan untuk menyelesaikan soal 3:
1. Mengkloning Repositori ke Komputer Lokal

    Langkah pertama adalah mengkloning repositori ke komputer lokal menggunakan perintah:
    ```
    git clone https://github.com/cakrawala-university/web-client-development.git
    ```

    Setelah proses kloning selesai, pindahkan folder website ke direktori yang sesuai:

    ```
    cd web-client-development
    mv * ../Soal-3/
    ```

2. Menyesuaikan Tampilan dengan CSS

    Awalnya, website tidak memiliki styling CSS, sehingga tampilannya sangat sederhana (seperti gambar di bawah):
    <p align="center"> <img src="https://github.com/user-attachments/assets/1f0dba74-0792-4a5f-bb2a-2d97a6af5209" alt="Akses Pertama Website" width="640" height="auto"> </p>

    Untuk meningkatkan desain, saya melakukan penyesuaian di `style.css` dan `index.html`:

    - Menambahkan `box-sizing: border-box;` pada selector `*` untuk mengontrol ukuran elemen.
    - Mengatur `max-width: 1680px` dan `width: 85%` pada `.page` untuk responsivitas.
    - Menghapus bullet point pada menu dengan `list-style: none;` di `nav ul`.
    -  Menghapus garis bawah pada tautan navigasi dengan `text-decoration: none;` di `nav ul li a`.
    - Menyesuaikan ukuran font dan warna teks sesuai desain Figma.
    - Menambahkan efek hover pada tautan dan tombol.
    - Memberikan padding, warna, dan border-radius pada tombol sesuai desain.
    - Menyesuaikan elemen `<button>` tanpa atribut `alt` (karena hanya berlaku untuk gambar).
    - Menambahkan `cursor: pointer` pada tombol untuk meningkatkan interaksi pengguna.
    - Menghapus elemen duplikat seperti `<a href="#">`.
    - Menambahkan kelas `.hero-image` untuk mengontrol ukuran gambar secara responsif.

    Setelah perubahan, website tampak lebih rapi seperti gambar berikut:
    <p align="center"> <img src="https://github.com/user-attachments/assets/e61831e5-0f39-48e6-a146-b15f7d78d5fc" alt="Setelah Penyesuaian CSS" width="640" height="auto"> </p>

    Selain itu, saya memastikan tata letak responsif di berbagai ukuran layar:
    <p align="center"> <img src="https://github.com/user-attachments/assets/9c9be7d6-5656-46a9-8f75-4ff70b03971b" alt="Setelah Penambahan CSS Responsif" width="640" height="auto"> </p>

3. Menambahkan Interaktivitas dengan JavaScript

    Untuk meningkatkan pengalaman pengguna, saya menambahkan file `script.js` dengan fitur interaktif seperti animasi tombol, efek navigasi, dan transisi halaman. Berikut implementasinya:

    - Saya menggunakan `document.querySelector` untuk mengambil elemen kunci:
    
        ```
        document.addEventListener("DOMContentLoaded", function () {
            const startButton = document.querySelector(".text button");
            const navLinks = document.querySelectorAll("nav ul li a");
            const pageContent = document.querySelector("main");
            const heroImage = document.querySelector(".hero-image");
        ```

    - Untuk memberikan feedback visual saat tombol "Start" diklik, saya menambahkan animasi perubahan warna:
        ```
        let isClicked = false;
        startButton.addEventListener("click", function () {
            isClicked = true;
            startButton.style.backgroundColor = "#3d6655";
            setTimeout(() => {
                startButton.style.backgroundColor = "#69B99D";
            }, 300);
        });
        ```
    Penjelasan: Warna tombol berubah menjadi `#3d6655` saat diklik, lalu kembali ke `#69B99D` setelah `300ms`.
    
    - Saya menambahkan efek hover yang berubah setelah tombol diklik:
        ```
        startButton.addEventListener("mouseenter", function () {
            if (isClicked) {
                startButton.style.backgroundColor = "#4a8a77";
            }
        });
        startButton.addEventListener("mouseleave", function () {
            if (isClicked) {
                startButton.style.backgroundColor = "#69B99D";
            }
        });
        ```
    Penjelasan: Jika tombol sudah diklik, warna hover berubah ke `#4a8a77`, lalu kembali ke `#69B99D` saat kursor meninggalkan tombol.

    - Untuk navigasi yang lebih intuitif, saya menambahkan efek perubahan transparansi saat tautan diklik:
        ```
        navLinks.forEach(link => {
            link.addEventListener("click", function () {
                navLinks.forEach(nav => nav.style.opacity = "0.5");
                this.style.opacity = "1";
            });
        });
        ```
    Penjelasan: Saat tautan diklik, opacity tautan lain menjadi `0.5`, sementara tautan aktif menjadi `1` untuk menunjukkan halaman yang dipilih.

    - Saya menambahkan efek **fade-in** pada elemen utama saat halaman dimuat:
        ```
        setTimeout(() => {
            pageContent.classList.add("visible");
            heroImage.classList.add("visible");
            document.body.classList.add("loaded");
        }, 200);
        ```
    Penjelasan: Efek ini memberikan transisi dengan penundaan `200ms` untuk konten dan gambar utama.

4. Mengoptimalkan Responsivitas

    Saya menambahkan media query di `style.css` untuk memastikan website berfungsi baik di berbagai ukuran layar:

    - **>1024px**: Layout dua kolom dengan menu horizontal.
    - **≤1024px**: Layout satu kolom, teks ditengah, gambar menyesuaikan.
    - **≤768px**: Ukuran font dan elemen mengecil.
    - **≤480px**: Penyesuaian lebih lanjut untuk layar kecil, termasuk ukuran dekorasi.

    Hasilnya dapat dilihat pada video berikut:
    <p align="center"> <img src="https://github.com/user-attachments/assets/ae539a77-0dd8-4e7f-9445-7162e9cc0b1f" alt="Tampilan Responsif" width="640" height="auto"> </p>

## Tantangan dan Solusi
### Tantangan yang Dihadapi
- Menyesuaikan tata letak agar responsif di semua perangkat namun tetap sesuai dengan desain Figma.
- Mengatasi bug pada animasi JavaScript yang tidak konsisten.
- Memastikan elemen `#balls` tidak mengganggu konten pada layar kecil.

### Solusi yang Diterapkan
- Menggunakan media query yang tepat untuk menyesuaikan ukuran elemen pada berbagai breakpoint.
- Mengganti animasi JavaScript dengan CSS untuk konsistensi.
- Menyesuaikan posisi dan ukuran `#balls` dengan media query agar tidak mengganggu layout.

## Artikel Terkait

Saya telah menulis artikel di Medium dengan topik "Penggunaan HTML, CSS, dan JavaScript dalam Membuat Website" sebagai bagian dari proyek ini. Artikel tersebut membahas cara mengintegrasikan HTML, CSS, dan JavaScript untuk menciptakan website yang interaktif dan responsif, termasuk implementasi yang diterapkan pada Soal 3.

[Baca artikelnya di Medium](https://medium.com/@fikri.andrhm/penggunaan-html-css-javascript-dalam-membuat-website-f754553618ab).