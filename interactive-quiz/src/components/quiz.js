import React, { useState } from 'react';
import Question from './questions';
import Result from './result';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Rome', 'Berlin'],
      answer: 'Paris',
    },

    {
        question: 'What is the capital of your mom?',
        options: ['Paris', 'London', 'fuhhh', 'Berlin'],
        answer: 'fuhh',
    },
  
    // Add more questions here
  ];

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  return (
    <div>
      {isQuizFinished ? (
        <Result score={score} totalQuestions={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
