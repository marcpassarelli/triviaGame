import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useContext
} from 'react';

import { getQuestions } from '../apiHandler/apiHandler';
import { QuizInfoContext } from './QuizInfoContext';

export const QuestionsContext = createContext();

const QuestionsProvider = ({ children }) => {
  const context = useContext(QuizInfoContext);

  const [questions, setQuestions] = useState([]);
  const [questionsAnswered, setQuestionsAnswered] = useState([]);

  const loadQuestions = () => {
    const difficulty = context.infoQuiz.difficulty;
    getQuestions(difficulty).then((data) => {
      setQuestions(data);
    });
  };

  const addQuestionAnswered = (questionNumber, answer) => {
    const newQuestionAnswered = {
      question: questions[questionNumber].question,
      correct:
        questions[questionNumber].correct_answer === answer ? true : false,
      correctAnswer: questions[questionNumber].correct_answer
    };

    setQuestionsAnswered([...questionsAnswered, newQuestionAnswered]);
  };

  const resetQuestions = () => {
    setQuestionsAnswered([]);
    setQuestions([]);
  };

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        questionsAnswered,
        addQuestionAnswered,
        loadQuestions,
        resetQuestions
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsProvider;
