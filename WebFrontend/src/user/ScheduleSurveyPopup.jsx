import React, { useState } from 'react';

const ScheduleSurveyPopup = ({ visible, onClose, survey }) => {
  const [scheduledTime, setScheduledTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Scheduling survey:', survey.title, 'for', scheduledTime);
    onClose();
  };

  if (!visible) return null;

  return (
    <div className="popup">
      <div className="popup-inner">
        <h3>Schedule Survey: {survey?.title}</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="scheduleTime">Choose a time:</label>
          <input
            type="datetime-local"
            id="scheduleTime"
            value={scheduledTime}
            onChange={(e) => setScheduledTime(e.target.value)}
            required
          />
          <button type="submit">Schedule</button>
          <button onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleSurveyPopup;
