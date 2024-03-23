// Popup.tsx
import React from 'react';
import './'

const Popup = ({ meeting }) => {
  const handleEditMeeting = () => {
    // Add logic to handle editing meeting details
    // For example, you can open a modal or a new page with a form to edit meeting details
    // You can use the meeting data passed as props to populate the form
  };

  return (
    <div className="popup-container">
      <h2>Edit Meeting</h2>
      <div>
        <p>Title: {meeting.title}</p>
        <p>Date and Time: {meeting.dateTime}</p>
        <p>Meeting Type: {meeting.meeting_type}</p>
        <p>Space: {meeting.space}</p>
      </div>
      <button onClick={handleEditMeeting}>Edit</button>
    </div>
  );
};

export default Popup;
