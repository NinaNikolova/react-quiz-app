import { useState } from "react";
import { resultInitalState } from "./constants";

const Quiz = ({ bel, mat, hist, lit, geo, chp }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState('bel');
  const [wrongQuestions, setWrongQuestions] = useState([])
  const questions = (() => {
    switch (selectedQuiz) {
      case 'bel':
        return bel;
      case 'mat':
        return mat;
      case 'hist':
        return hist;
      case 'lit':
        return lit;
      case 'geo':
        return geo;
      case 'chp':
        return chp;
      default:
        return [];
    }
  })();
  const { question, choices, correctAnswer } = questions[currentQuestion];

  const onAnwswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
      setWrongQuestions((prev) => [
        ...prev,
        { question, correctAnswer, chosenAnswer: answer },
      ]);
    }
  };

  const handleQuizChange = (event) => {
    setSelectedQuiz(event.target.value);

  };

  const onClickNext = () => {
    setAnswerIdx(null);
    setResult((prev) =>
      answer
        ? {
          ...prev,
          score: prev.score + 5,
          correctAnswers: prev.correctAnswers + 1,
        }
        : {
          ...prev,
          wrongAnswers: prev.wrongAnswers + 1,
        }
    );

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };


  const onTryAgain = () => {
    setResult(resultInitalState);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <h2>Тестове-входно ниво за 6-клас</h2>

      <div className="quiz-selector">
        <label htmlFor="quiz-select">Избери предмет:</label>
        <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
          <option value="bel">Български език</option>
          <option value="mat">Математика</option>
          <option value="lit">Литература</option>
          <option value="hist">История</option>
          <option value="chp">Човек и природа</option>
          <option value="geo">География</option>
        </select>
      </div>
      {!showResult ? (
        <>
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-question">/{questions.length}</span>
          <h2>{question}</h2>
          <ul>
            {choices.map((choice, index) => (
              <li
                onClick={() => onAnwswerClick(choice, index)}
                key={choice}
                className={answerIdx === index ? "selected-answer" : null}
              >
                {choice}
              </li>
            ))}
          </ul>
          <div className="footer">
            <button onClick={onClickNext} disabled={answerIdx === null}>
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Questions: <span>{questions.length}</span>
          </p>
          <p>
            Total Score: <span>{result.score}</span>
          </p>
          <p>
            Correct Answers: <span>{result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers: <span>{result.wrongAnswers}</span>
          </p>
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
      )}
    </div>
  );
};

export default Quiz;
