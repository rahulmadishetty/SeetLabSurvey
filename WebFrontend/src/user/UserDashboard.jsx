import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SurveyPanel from './SurveyPanel'; // Component representing each survey panel
import ScheduleSurveyPopup from './ScheduleSurveyPopup'; // Popup component to schedule surveys

// Mock data for surveys
const mockSurveys = [
  {
    id: 1,
    title: 'Customer Satisfaction Survey',
    description: 'Survey regarding customer service satisfaction.'
  },
  {
    id: 2,
    title: 'Product Feedback Survey',
    description: 'Survey for collecting feedback on our product.'
  }
  // ...additional surveys
];

const UserDashboard = () => {
  const [scheduling, setScheduling] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState(null);

  const handleScheduleClick = (surveyId) => {
    // Logic to handle scheduling here, for now, we'll just show a popup
    const survey = mockSurveys.find(s => s.id === surveyId);
    setSelectedSurvey(survey);
    setScheduling(true);
  };

  const closePopup = () => {
    setScheduling(false);
    setSelectedSurvey(null);
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <div className="survey-list">
        {mockSurveys.map(survey => (
          <SurveyPanel
            key={survey.id}
            survey={survey}
            onScheduleClick={() => handleScheduleClick(survey.id)}
          />
        ))}
      </div>
      {scheduling && <ScheduleSurveyPopup survey={selectedSurvey} onClose={closePopup} />}
    </div>
  );
};

export default UserDashboard;
