// Popup.tsx
import React, { useState } from 'react';
import './popup.css'; // Import CSS file

const Popup = ({ meeting, onUpdate }) => {
  const [editedMeeting, setEditedMeeting] = useState({ ...meeting });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedMeeting({ ...editedMeeting, [name]: value });
  };

  const handleSubmit = () => {
    onUpdate(editedMeeting);
  };

  return (
    <div className="popup-container">
      <h2>Edit Meeting Details</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={editedMeeting.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Date and Time:</label>
        <input
          type="text"
          name="dateTime"
          value={editedMeeting.dateTime}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Meeting Type:</label>
        <input
          type="text"
          name="meeting_type"
          value={editedMeeting.meeting_type}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Space:</label>
        <input
          type="text"
          name="space"
          value={editedMeeting.space}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>Save Changes</button>
    </div>
  );
};

export default Popup;
