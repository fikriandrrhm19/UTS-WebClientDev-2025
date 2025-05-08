import { checkOddOrEven } from './checkOddOrEven';
import { checkPalindrome } from './checkPalindrome';
import { convertCmToKm, convertKmToCm } from './convertCmToKm';
import { convertFahrenheitToCelsius } from './convertFahrenheitToCelsius';
import { removeFirstOccurrence } from './removeFirstOccurrence';
import { printSeparator } from './printSeparator';

printSeparator();

// Pengecekan Ganjil atau Genap
const num1: number = 1000;
const num2: number = 1001;
console.log(`Mengecek apakah ${num1} genap: ${checkOddOrEven(num1)}`);
console.log(`Mengecek apakah ${num2} genap: ${checkOddOrEven(num2)}`);

printSeparator();

// Pengecekan Palindrom
const str1: string = "madam";
const str2: string = "fikri";
console.log(`Apakah "${str1}" palindrom? ${checkPalindrome(str1) ? "Ya" : "Tidak"}`);
console.log(`Apakah "${str2}" palindrom? ${checkPalindrome(str2) ? "Ya" : "Tidak"}`);

printSeparator();

// Konversi Cm ke Km
const centimeter: number = 100000;
const kilometer: number = 3;
console.log(`${centimeter} cm sama dengan ${convertCmToKm(centimeter)} km`);
console.log(`${kilometer} km sama dengan ${convertKmToCm(kilometer)} cm`);

printSeparator();

// Konversi Fahrenheit ke Celsius
const fahrenheit: number = 100;
const celsius: number = convertFahrenheitToCelsius(fahrenheit);
console.log(`Suhu input: ${fahrenheit}°F`);
console.log(`Suhu setelah dikonversi: ${celsius}°C`);

printSeparator();

// Hapus Kemunculan Pertama
const text: string = "Hello World!";
const fullName: string = "Fikri Andra Andra Irham";
console.log(`Teks asli: "${text}"`);
console.log(`Setelah menghapus "ell": "${removeFirstOccurrence(text, "ell")}"`);
console.log(`Teks asli: "${fullName}"`);
console.log(`Setelah menghapus "Andra" pertama: "${removeFirstOccurrence(fullName, "Andra")}"`);