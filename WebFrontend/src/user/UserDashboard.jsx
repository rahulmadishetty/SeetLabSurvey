import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const surveys = [
  { id: 1, title: 'Customer Satisfaction Survey' },
  { id: 2, title: 'Product Feedback Survey' },
  // Add more surveys as needed
];

const UserDashboard = () => {
  const [showSchedulePopup, setShowSchedulePopup] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState(null);

  const scheduleSurvey = (surveyId) => {
    setSelectedSurvey(surveyId);
    setShowSchedulePopup(true);
  };

  const closePopup = () => {
    setShowSchedulePopup(false);
    setSelectedSurvey(null);
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <div className="survey-list">
        {surveys.map((survey) => (
          <div key={survey.id} className="survey-panel">
            <h3>{survey.title}</h3>
            <button onClick={() => scheduleSurvey(survey.id)}>Schedule</button>
            <Link to={`/take-survey/${survey.id}`}>Take Survey</Link>
            <Link to={`/survey-results/${survey.id}`}>Results</Link>
          </div>
        ))}
      </div>

      {showSchedulePopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Schedule Survey: {surveys.find(s => s.id === selectedSurvey)?.title}</h2>
            <p>Select a date and time for when you would like to take this survey.</p>
            {/* A basic input for scheduling, replace with a date-time picker as needed */}
            <input type="datetime-local" />
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
