export default function QuizSelector({ selectedQuiz, handleQuizChange }) {
    return (
        <div className="quiz-selector">
            <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
                <option value="mysql1">Intro to Databases: Data Definition and Datatypes</option>
                <option value="mysql2">Basic CRUD in MySQL Server</option>
                <option value="mysql3">Built-in Functions</option>
                <option value="mysql4">Data Aggregation</option>
                <option value="mysql5">Table Relations</option>
                <option value="mysql6">Joins, Subqueries and Indices</option>
                <option value="mysql7">Database Programmability</option>
            </select>
        </div>
    )
}