import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const surveys = [
  { id: 1, title: 'Customer Satisfaction Survey' },
  { id: 2, title: 'Product Feedback Survey' },
  // Add more surveys as needed
];

const UserDashboard = () => {
  const navigate = useNavigate();
  const [showSchedulePopup, setShowSchedulePopup] = useState(false);
  const [scheduledDate, setScheduledDate] = useState('');
  const [currentSurveyId, setCurrentSurveyId] = useState(null);

  const openSchedulePopup = (surveyId) => {
    setCurrentSurveyId(surveyId);
    setShowSchedulePopup(true);
  };

  const closeSchedulePopup = () => {
    setShowSchedulePopup(false);
    setCurrentSurveyId(null);
  };

  const handleDateChange = (e) => setScheduledDate(e.target.value);

  const submitSchedule = () => {
    console.log(`Survey ${currentSurveyId} scheduled for: ${scheduledDate}`);
    closeSchedulePopup();
    // Proceed with scheduling logic
  };

  const takeSurvey = (surveyId) => {
    navigate(`/take-survey/${surveyId}`);
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      {surveys.map((survey) => (
        <div key={survey.id} className="survey-panel">
          <h3>{survey.title}</h3>
          <button onClick={() => openSchedulePopup(survey.id)}>Schedule</button>
          <button onClick={() => takeSurvey(survey.id)}>Take Survey</button>
          <button className="results-link" onClick={() => navigate(`/survey-results/${survey.id}`)}>Results</button>
        </div>
      ))}

      {showSchedulePopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Schedule Survey</h2>
            <input type="datetime-local" value={scheduledDate} onChange={handleDateChange} />
            <button onClick={submitSchedule}>Confirm</button>
            <button onClick={closeSchedulePopup}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
