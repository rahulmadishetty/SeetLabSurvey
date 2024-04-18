import React from 'react';
import { useParams } from 'react-router-dom';

const TakeSurvey = () => {
  let { surveyId } = useParams();
  // You would fetch the survey questions based on surveyId here
  const questions = [
    // Mock questions
    { id: 1, text: "Do you like our product?", options: ["True", "False"] },
    // ...other questions
  ];

  return (
    <div className="take-survey">
      <h1>Survey Questions</h1>
      {/* Render survey questions here */}
      {questions.map((question) => (
        <div key={question.id} className="question">
          <p>{question.text}</p>
          {/* Render options here */}
          <div>
            {question.options.map((option, index) => (
              <label key={index}>
                <input type="radio" name={`question_${question.id}`} value={option} />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button>Submit Survey</button>
    </div>
  );
};

export default TakeSurvey;
