export const calculateResult = (isCorrect, result) => {
    return isCorrect
        ? {
            ...result,
            score: result.score + 1,
            correctAnswers: result.correctAnswers + 1,
        }
        : {
            ...result,
            wrongAnswers: result.wrongAnswers + 1,
        };
};