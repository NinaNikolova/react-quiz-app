import React from 'react';

export default function Result({ result, questionsLength, wrongQuestions, onTryAgain }) {
    return (
        <div className="result">
            <h3>Result</h3>
            <p>Total Questions: <span>{questionsLength}</span></p>
            <p>Total Score: <span>{(result.score / questionsLength * 100).toFixed(2)}%</span></p>
            <p>Correct Answers: <span>{result.correctAnswers}</span></p>
            <p>Wrong Answers: <span>{result.wrongAnswers}</span></p>

            {wrongQuestions.length > 0 && (
                <div className="wrong-answers">
                    <h4>Wrong Answers</h4>
                    <ul>
                        {wrongQuestions.map((item, index) => (
                            <li key={index}>
                                <p>Question: {item.question}</p>
                                <p>Correct Answer: {item.correctAnswer}</p>
                                <p>Your Answer: {item.chosenAnswer}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <button onClick={onTryAgain}>Try again</button>
        </div>
    )
}
