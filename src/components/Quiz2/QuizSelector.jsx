export default function QuizSelector({ selectedQuiz, handleQuizChange }) {
    return (
        <div className="quiz-selector">
            <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
                <option value="mysql1">Формални методи и формална система</option>
                <option value="mysql2">Z нотация.</option>
                <option value="mysql3">Множества. Запис и дефиниции в Z нотацията.</option>
                <option value="mysql4">Релации, функции, редици и индукция...</option>
                <option value="mysql5">Z нотация – схеми.</option>
                <option value="mysql6">Машини на състоянието</option>
                <option value="mysql7">Машини на състоянието - варианти</option>
            </select>
        </div>
    )
}