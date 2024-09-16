import { useState } from "react";
import { resultInitalState } from "./constants";

const Quiz = ({ mysql1, mysql2, mysql3, mysql4, mysql5, mysql6, mysql7 }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState('mysql1');
  const [wrongQuestions, setWrongQuestions] = useState([])
  const questions = (() => {
    switch (selectedQuiz) {
      case 'mysql1':
        return mysql1;
      case 'mysql2':
        return mysql2;
      case 'mysql3':
        return mysql3;
      case 'mysql4':
        return mysql4;
      case 'mysql5':
        return mysql5;
      case 'mysql6':
        return mysql6;
      case 'mysql7':
        return mysql7;
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
      <h2>MySQL quiz</h2>

      <div className="quiz-selector">

        <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
          <option value="mysql1">Intro to Databases: Data Definition and Datatypes</option>
          <option value="mysql2">Basic CRUD in MySQL Server</option>
          <option value="mysql3">Built-in Functions</option>
          <option value="mysql4">Data Aggregation</option>
          <option value="mysql4">Table Relations</option>
          <option value="mysql5">Joins, Subqueries and Indices</option>
          <option value="mysql6">Database Programmability</option>
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
