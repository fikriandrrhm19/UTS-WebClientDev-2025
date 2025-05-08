const PI: number = 3.14159265358979323846;

interface CircleProperties {
    diameter: number;
    circumference: string;
    area: number;
}

function calculateCircleProperties(radius: number): CircleProperties {
    const diameter: number = 2 * radius;
    const circumference: number = PI * diameter;
    const area: number = PI * radius * radius;
    return {
        diameter,
        circumference: circumference.toFixed(4),
        area: Math.floor(area * 1000) / 1000
    };
}

export { calculateCircleProperties };