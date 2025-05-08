export function convertFahrenheitToCelsius(fahrenheit: number): number {
    const celsius: number = (fahrenheit - 32) * 5 / 9;
    return Number(celsius.toFixed(1));
}