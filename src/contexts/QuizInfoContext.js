import React, { createContext, useState } from 'react';

export const QuizInfoContext = createContext();

const QuizInfoProvider = ({ children }) => {
  const [infoQuiz, setInfoQuiz] = useState({ difficulty: 'medium' });

  const saveInfoQuiz = (difficulty) => {
    setInfoQuiz({ difficulty });
  };

  return (
    <QuizInfoContext.Provider value={{ infoQuiz, saveInfoQuiz }}>
      {children}
    </QuizInfoContext.Provider>
  );
};

export default QuizInfoProvider;
