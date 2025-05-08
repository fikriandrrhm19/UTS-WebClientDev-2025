function calculateDateDifference(date1, date2) {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.round(diffTime / (1000 * 3600 * 24));
}

export { calculateDateDifference };