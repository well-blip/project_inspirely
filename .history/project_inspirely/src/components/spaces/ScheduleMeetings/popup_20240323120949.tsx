import React, { useState } from 'react';
import './popup.css'; // Import CSS file

const Popup = ({ meeting, onUpdate }) => {
  const [editedMeeting, setEditedMeeting] = useState({ ...meeting });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedMeeting({ ...editedMeeting, [name]: value });
  };

  const handleSubmit = () => {
    onUpdate(editedMeeting);
    setIsEditing(false); // Close the popup after saving changes
  };

  const handleCancel = () => {
    setIsEditing(false); // Close the popup without saving changes
  };

  const handleEdit = () => {
    setIsEditing(true); // Enable editing mode
  };

  return (
    <div className="popup-container">
      {isEditing ? (
        <>
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
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <h2>Meeting Details</h2>
          <div>
            <strong>Title:</strong> {meeting.title}
          </div>
          <div>
            <strong>Date and Time:</strong> {meeting.dateTime}
          </div>
          <div>
            <strong>Meeting Type:</strong> {meeting.meeting_type}
          </div>
          <div>
            <strong>Space:</strong> {meeting.space}
          </div>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Popup;
