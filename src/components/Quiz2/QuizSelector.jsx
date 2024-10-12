export default function QuizSelector({ selectedQuiz, handleQuizChange }) {
    return (
        <div className="quiz-selector">
            <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
                <option value="mysql1">Java DB Apps Intro</option>
                <option value="mysql2">ORM Fundamentals</option>
                <option value="mysql3">Intro to Hibernate</option>
                <option value="mysql4">Hibernate Code First</option>
                <option value="mysql5">Spring Data Intro</option>
                <option value="mysql6">Spring Data Advanced Querying</option>
                <option value="mysql7">Spring Data Auto Mapping Objects</option>
                <option value="mysql6">JSON Processing</option>
                <option value="mysql7">XML Processing</option>
            </select>
        </div>
    )
}