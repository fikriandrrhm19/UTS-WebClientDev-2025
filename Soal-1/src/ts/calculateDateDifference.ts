function calculateDateDifference(date1: Date, date2: Date): number {
    const diffTime: number = Math.abs(date2.getTime() - date1.getTime());
    return Math.round(diffTime / (1000 * 3600 * 24));
}

export { calculateDateDifference };