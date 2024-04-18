import React from 'react';

const ScheduleSurveyPopup = ({ survey, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Schedule Survey: {survey.title}</h2>
        <button onClick={onClose}>Close</button>
        {/* Include date-time pickers and submission logic here */}
      </div>
    </div>
  );
};

export default ScheduleSurveyPopup;
