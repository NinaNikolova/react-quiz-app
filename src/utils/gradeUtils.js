export const calculateGrade = (scorePercent) => {
    if (scorePercent >= 90) return { grade: 6, word: 'Excellent' };
    if (scorePercent >= 80) return { grade: 5, word: 'Very Good' };
    if (scorePercent >= 70) return { grade: 4, word: 'Good' };
    if (scorePercent >= 60) return { grade: 3.5, word: 'Satisfactory' };
    if (scorePercent >= 50) return { grade: 3, word: 'Passable' };
    return { grade: 2, word: 'Fail' };
};