import { calculateRectangleArea } from './calculateRectangleArea';
import { calculateCircleProperties } from './calculateCircleProperties';
import { calculateTriangleAngle } from './calculateTriangleAngle';
import { calculateDateDifference } from './calculateDateDifference';
import { getInitials } from './getInitials';
import { printSeparator } from './printSeparator';

printSeparator();

const areaRect: number = calculateRectangleArea(5, 3);
console.log("Luas Persegi Panjang: ↴");
console.log(`Panjang: 5, Lebar: 3 → Luas = ${areaRect}`);

printSeparator();

const circleProps = calculateCircleProperties(5);
console.log("Properti Lingkaran: ↴");
console.log(`Jari-jari: 5 → Diameter: ${circleProps.diameter}, Keliling: ${circleProps.circumference}, Luas: ${circleProps.area}`);

printSeparator();

const thirdAngle: number = calculateTriangleAngle(80, 65);
console.log(`Sudut yang diberikan: a = 80°, b = 65° → Sudut ketiga adalah: ${thirdAngle}°`);

printSeparator();

const date1: Date = new Date("2024-03-19");
const date2: Date = new Date("2024-03-21");
const diffDays: number = calculateDateDifference(date1, date2);
console.log(`Selisih hari antara ${date1.toISOString().slice(0, 10)} dan ${date2.toISOString().slice(0, 10)} → ${diffDays} hari`);

printSeparator();

const initials1: string = getInitials("John Doe");
const initials2: string = getInitials("fikri Andra irham");
console.log(`Inisial dari John Doe: ${initials1}`);
console.log(`Inisial dari fikri Andra irham: ${initials2}`);