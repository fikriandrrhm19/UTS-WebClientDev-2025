export function convertFahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return Number(celsius.toFixed(1));
}