import React from 'react';
import { Link } from 'react-router-dom';

const SurveyPanel = ({ survey, onSchedule }) => {
  return (
    <div className="survey-panel">
      <h2>{survey.title}</h2>
      <button onClick={onSchedule}>Schedule</button>
      <Link to={`/take-survey/${survey.id}`}>Take Survey</Link>
      <Link to={`/survey-results/${survey.id}`}>Results</Link>
    </div>
  );
};

export default SurveyPanel;
