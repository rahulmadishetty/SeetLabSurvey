import React from 'react';
import { Link } from 'react-router-dom';

const SurveyPanel = ({ survey, onScheduleClick }) => {
  return (
    <div className="survey-panel">
      <h3>{survey.title}</h3>
      <p>{survey.description}</p>
      <button onClick={onScheduleClick}>Schedule</button>
      <Link to={`/take-survey/${survey.id}`}>Take Survey</Link>
      <Link to={`/reports/${survey.id}`}>Results</Link>
    </div>
  );
};

export default SurveyPanel;
