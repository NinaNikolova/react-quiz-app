export default function QuizSelector({ selectedQuiz, handleQuizChange }) {
    return (
        <div className="quiz-selector">
            <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
                <option value="mysql1">Abstraction</option>
                <option value="mysql2">Encapsulation</option>
                <option value="mysql3">Inheritance</option>
                <option value="mysql4">Interfaces and Abstraction</option>
                <option value="mysql5">Polymorphism</option>
                <option value="mysql6">SOLID</option>
                <option value="mysql7">Reflection and Annotation</option>
                <option value="mysql8">Exceptions and Error Handling</option>
                <option value="mysql9">Debugging Techniques</option>
                <option value="mysql10">Unit Testing</option>
                <option value="mysql11">Test Driven Development</option>
                <option value="mysql12">Design Patterns</option>
            </select>
        </div>
    )
}