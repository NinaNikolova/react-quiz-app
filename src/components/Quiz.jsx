import { useState } from "react";
import { resultInitalState } from "../constants";
import QuizSelector from "./QuizSelector";
import Result from "./Result";
import Question from "./Question";

const Quiz = ({ mysql1, mysql2, mysql3, mysql4, mysql5, mysql6, mysql7 }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState('mysql1');
  const [wrongQuestions, setWrongQuestions] = useState([]);

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
          score: prev.score + 1,
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
    setCurrentQuestion(0);
    setAnswerIdx(null);
    setAnswer(null);
    setWrongQuestions([]);
  };

  return (
    <div className="quiz-container">
      <h2>MySQL quiz</h2>

      <QuizSelector selectedQuiz={selectedQuiz} handleQuizChange={handleQuizChange} />
      {!showResult ? (
        <>
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-question">/{questions.length}</span>
          <Question
            question={question}
            choices={choices}
            answerIdx={answerIdx}
            onAnwswerClick={onAnwswerClick}
          />
          <div className="footer">
            <button onClick={onClickNext} disabled={answerIdx === null}>
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <Result result={result} questionsLength={questions.length} wrongQuestions={wrongQuestions} onTryAgain={onTryAgain} />
      )}
    </div>
  );
};

export default Quiz;
