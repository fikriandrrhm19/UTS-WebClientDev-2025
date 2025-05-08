import { calculateRectangleArea } from './calculateRectangleArea.js';
import { calculateCircleProperties } from './calculateCircleProperties.js';
import { calculateTriangleAngle } from './calculateTriangleAngle.js';
import { calculateDateDifference } from './calculateDateDifference.js';
import { getInitials } from './getInitials.js';
import { printSeparator } from './printSeparator.js';

printSeparator();

const areaRect = calculateRectangleArea(5, 3);
console.log("Luas Persegi Panjang: ↴");
console.log(`Panjang: 5, Lebar: 3 → Luas = ${areaRect}`);

printSeparator();

const circleProps = calculateCircleProperties(5);
console.log("Properti Lingkaran: ↴");
console.log(`Jari-jari: 5 → Diameter: ${circleProps.diameter}, Keliling: ${circleProps.circumference}, Luas: ${circleProps.area}`);

printSeparator();

const thirdAngle = calculateTriangleAngle(80, 65);
console.log(`Sudut yang diberikan: a = 80°, b = 65° → Sudut ketiga adalah: ${thirdAngle}°`);

printSeparator();

const date1 = new Date("2024-03-19");
const date2 = new Date("2024-03-21");
const diffDays = calculateDateDifference(date1, date2);
console.log(`Selisih hari antara ${date1.toISOString().slice(0, 10)} dan ${date2.toISOString().slice(0, 10)} → ${diffDays} hari`);

printSeparator();

const initials1 = getInitials("John Doe");
const initials2 = getInitials("fikri Andra irham");
console.log(`Inisial dari John Doe: ${initials1}`);
console.log(`Inisial dari fikri Andra irham: ${initials2}`);