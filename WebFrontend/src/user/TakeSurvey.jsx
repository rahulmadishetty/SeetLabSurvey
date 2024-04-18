import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles.css'; // Ensure this is the correct path to your styles

const TakeSurvey = () => {
  const { surveyId } = useParams();
  const [responses, setResponses] = useState({});
  
  const questions = [
    { id: 1, text: 'The service was satisfactory.' },
    { id: 2, text: 'The product met my expectations.' },
    // Add more questions as needed
  ];

  const handleResponseChange = (questionId, response) => {
    setResponses({ ...responses, [questionId]: response });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Survey responses for survey ${surveyId}:`, responses);
    // Here you would send the responses to the backend
  };

  return (
    <div className="survey-container">
      <h1>Survey {surveyId}</h1>
      <form onSubmit={handleSubmit} className="survey-form">
        {questions.map((question) => (
          <div key={question.id} className="survey-question">
            <p>{question.text}</p>
            <div className="survey-options">
              <label>
                <input 
                  type="radio" 
                  name={`question-${question.id}`} 
                  onChange={() => handleResponseChange(question.id, true)} 
                  checked={responses[question.id] === true} 
                /> True
              </label>
              <label>
                <input 
                  type="radio" 
                  name={`question-${question.id}`} 
                  onChange={() => handleResponseChange(question.id, false)} 
                  checked={responses[question.id] === false} 
                /> False
              </label>
            </div>
          </div>
        ))}
        <button type="submit" className="submit-btn">Submit Survey</button>
      </form>
    </div>
  );
};

export default TakeSurvey;
