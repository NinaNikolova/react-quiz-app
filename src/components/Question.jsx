import React, { useState, useEffect } from 'react';

export default function Question({ question, choices, answerIdx, onAnwswerClick, correctAnswer, imageURL }) {
    const [selectedChoice, setSelectedChoice] = useState(null);

    useEffect(() => {
        setSelectedChoice(null);
    }, [question]);

    const handleClick = (choice, index) => {
        if (selectedChoice === null) {
            setSelectedChoice(choice);
            onAnwswerClick(choice, index);
        }
    };
    return (
        <>
            <h2>{question}</h2>
            {imageURL && (
                <img src={imageURL} alt="Question illustration" className="question-image" />
            )}
            <ul>
                {choices.map((choice, index) => (
                    <li
                        key={choice}
                        onClick={() => handleClick(choice, index)}
                        className={answerIdx === index ? "selected-answer" : null}
                        style={{
                            backgroundColor:
                                selectedChoice && selectedChoice === choice
                                    ? choice === correctAnswer
                                        ? 'green'
                                        : 'red'
                                    : '',
                            color: selectedChoice && selectedChoice === choice ? 'white' : '',
                        }}
                    >
                        {choice}
                        {selectedChoice && selectedChoice === choice && (
                            choice === correctAnswer ? ' 😊' : ' ❌'
                        )}
                    </li>
                ))}
            </ul>
        </>
    )
}
