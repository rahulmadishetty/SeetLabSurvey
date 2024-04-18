import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const surveys = [
  { id: 1, title: 'Customer Satisfaction Survey' },
  { id: 2, title: 'Product Feedback Survey' },
  // Add more surveys as needed
];

const UserDashboard = () => {
  const [showSchedulePopup, setShowSchedulePopup] = useState(false);
  const [scheduledDate, setScheduledDate] = useState('');

  const openSchedulePopup = () => setShowSchedulePopup(true);
  const closeSchedulePopup = () => setShowSchedulePopup(false);

  const handleDateChange = (e) => setScheduledDate(e.target.value);

  const submitSchedule = (surveyId) => {
    console.log(`Survey ${surveyId} scheduled for: ${scheduledDate}`);
    closeSchedulePopup();
    // Proceed with scheduling logic
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      {surveys.map((survey) => (
        <div key={survey.id} className="survey-panel">
          <h3>{survey.title}</h3>
          <button onClick={openSchedulePopup}>Schedule</button>
          <button className="button-link">
            <Link to={`/take-survey/${survey.id}`}>Take Survey</Link>
          </button>
          <Link to={`/survey-results/${survey.id}`}>Results</Link>
        </div>
      ))}

      {showSchedulePopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Schedule Survey</h2>
            <input type="datetime-local" value={scheduledDate} onChange={handleDateChange} />
            <button onClick={() => submitSchedule(survey.id)}>Confirm</button>
            <button onClick={closeSchedulePopup}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
