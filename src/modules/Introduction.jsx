import React, { useState } from 'react';

const Introduction = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      q: "What is the primary focus of private equity?",
      options: [
        "Investing in public companies",
        "Investing in private companies",
        "Day trading stocks",
        "Managing mutual funds"
      ],
      correct: 1
    },
    {
      q: "Who are the key stakeholders in a PE fund?",
      options: [
        "Employees and customers",
        "Shareholders and bondholders",
        "General Partners (GPs) and Limited Partners (LPs)",
        "Government and regulators"
      ],
      correct: 2
    },
    {
      q: "What is a key aspect of fund accounting?",
      options: [
        "Maximizing short-term profits",
        "Tracking capital flows and investments",
        "Minimizing tax liabilities",
        "Increasing market share"
      ],
      correct: 1
    }
  ];

  const handleAnswer = (questionIndex, answerIndex) => {
    setAnswers({...answers, [questionIndex]: answerIndex});
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div>
      <h2>Introduction to Private Equity Fund Accounting</h2>
      <p>Test your knowledge of PE fund basics:</p>
      {questions.map((q, i) => (
        <div key={i} style={{marginBottom: '20px'}}>
          <p><strong>{q.q}</strong></p>
          {q.options.map((option, j) => (
            <div key={j}>
              <input 
                type="radio" 
                id={`q${i}a${j}`} 
                name={`q${i}`} 
                value={j}
                checked={answers[i] === j}
                onChange={() => handleAnswer(i, j)}
              />
              <label htmlFor={`q${i}a${j}`}>{option}</label>
            </div>
          ))}
          {showResults && (
            <p style={{color: answers[i] === q.correct ? 'green' : 'red'}}>
              {answers[i] === q.correct ? 'Correct!' : 'Incorrect. The correct answer is: ' + q.options[q.correct]}
            </p>
          )}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Answers</button>
    </div>
  );
};

export default Introduction;