import { checkOddOrEven } from './checkOddOrEven.js';
import { checkPalindrome } from './checkPalindrome.js';
import { convertCmToKm, convertKmToCm } from './convertCmToKm.js';
import { convertFahrenheitToCelsius } from './convertFahrenheitToCelsius.js';
import { removeFirstOccurrence } from './removeFirstOccurrence.js';
import { printSeparator } from './printSeparator.js';

printSeparator();

// Pengecekan Ganjil atau Genap
const num1 = 1000;
const num2 = 1001;
console.log(`Mengecek apakah ${num1} genap: ${checkOddOrEven(num1)}`);
console.log(`Mengecek apakah ${num2} genap: ${checkOddOrEven(num2)}`);

printSeparator();

// Pengecekan Palindrom
const str1 = "madam";
const str2 = "fikri";
console.log(`Apakah "${str1}" palindrom? ${checkPalindrome(str1) ? "Ya" : "Tidak"}`);
console.log(`Apakah "${str2}" palindrom? ${checkPalindrome(str2) ? "Ya" : "Tidak"}`);

printSeparator();

// Konversi Cm ke Km
const centimeter = 500000;
const kilometer = 3;
console.log(`${centimeter} cm sama dengan ${convertCmToKm(centimeter)} km`);
console.log(`${kilometer} km sama dengan ${convertKmToCm(kilometer)} cm`);

printSeparator();

// Konversi Fahrenheit ke Celsius
const fahrenheit = 100;
const celsius = convertFahrenheitToCelsius(fahrenheit);
console.log(`Suhu input: ${fahrenheit}°F`);
console.log(`Suhu setelah dikonversi: ${celsius}°C`);

printSeparator();

// Hapus Kemunculan Pertama
const text = "Hello World!";
const fullName = "Fikri Andra Andra Irham";
console.log(`Teks asli: "${text}"`);
console.log(`Setelah menghapus "ell": "${removeFirstOccurrence(text, "ell")}"`);
console.log(`Teks asli: "${fullName}"`);
console.log(`Setelah menghapus "Andra" pertama: "${removeFirstOccurrence(fullName, "Andra")}"`);