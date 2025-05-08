const PI = 3.14159265358979323846;

function calculateCircleProperties(radius) {
    const diameter = 2 * radius;
    const circumference = PI * diameter;
    const area = PI * radius * radius;
    return {
        diameter: diameter,
        circumference: circumference.toFixed(4),
        area: Math.floor(area * 1000) / 1000
    };
}

export { calculateCircleProperties };