export const getQuestions = (selectedQuiz, quizzes) => {
    switch (selectedQuiz) {
        case 'mysql1':
            return quizzes.mysql1;
        case 'mysql2':
            return quizzes.mysql2;
        case 'mysql3':
            return quizzes.mysql3;
        case 'mysql4':
            return quizzes.mysql4;
        case 'mysql5':
            return quizzes.mysql5;
        case 'mysql6':
            return quizzes.mysql6;
        case 'mysql7':
            return quizzes.mysql7;
        case 'mysql8':
            return quizzes.mysql6;
        case 'mysql9':
            return quizzes.mysql7;
        case 'mysql10':
            return quizzes.mysql10;
        case 'mysql11':
            return quizzes.mysql11;
        case 'mysql12':
            return quizzes.mysql12;
        case 'mysql13':
            return quizzes.mysql13;

        default:
            return [];
    }
};