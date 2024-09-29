import React from 'react';
import { calculateGrade } from '../utils/gradeUtils';
export default function Result({ result, questionsLength, wrongQuestions, onTryAgain }) {

    const scorePercent = (result.score / questionsLength) * 100;
    const { grade, word, emoji } = calculateGrade(scorePercent);

    return (
        <div className="result">
            <h3>Result</h3>
            <p>Total Questions: <span>{questionsLength}</span></p>
            <p>Total Score: <span>{scorePercent.toFixed(2)}%</span></p>
            <p>Grade: <span>{word} ({grade}) {emoji}</span></p>
            <p>Wrong Answers: <span>{result.wrongAnswers}</span></p>

            {wrongQuestions.length > 0 && (
                <div className="wrong-answers">
                    <h4>Wrong Answers</h4>
                    <ul>
                        {wrongQuestions.map((item, index) => (
                            <li key={index}>
                                <span> {item.imageURL && (
                                    <img src={item.imageURL} alt="Question illustration" className="question-image" />
                                )}</span>
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
