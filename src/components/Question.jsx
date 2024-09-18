import React from 'react'

export default function Question({ question, choices, answerIdx, onAnwswerClick }) {
    return (
        <>
            <h2>{question}</h2>
            <ul>
                {choices.map((choice, index) => (
                    <li
                        key={choice}
                        onClick={() => onAnwswerClick(choice, index)}
                        className={answerIdx === index ? "selected-answer" : null}
                    >
                        {choice}
                    </li>
                ))}
            </ul>
        </>
    )
}
