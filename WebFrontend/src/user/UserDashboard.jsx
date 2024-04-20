import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import useAuth hook

const UserDashboard = () => {
  const { authToken } = useAuth(); // Use the authToken from AuthContext
  const navigate = useNavigate();
  const [surveys, setSurveys] = useState([]);
  const [showSchedulePopup, setShowSchedulePopup] = useState(false);
  const [scheduledDate, setScheduledDate] = useState('');
  const [currentSurveyId, setCurrentSurveyId] = useState(null);

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/surveys/', {
          headers: { Authorization: `Bearer ${authToken}` } // Pass the auth token in headers
        });
        setSurveys(response.data);
      } catch (error) {
        console.error('Error fetching surveys:', error);
      }
    };

    fetchSurveys();
  }, [authToken]);

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
        <div key={survey._id} className="survey-panel">
          <h3>{survey.title}</h3>
          <button onClick={() => openSchedulePopup(survey._id)}>Schedule</button>
          <button onClick={() => takeSurvey(survey._id)}>Take Survey</button>
          <button onClick={() => navigate(`/survey-results/${survey._id}`)}>Results</button>
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
