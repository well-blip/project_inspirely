// Popup.tsx
import React, { useState } from 'react';
import './popup.css'; // Import CSS file
import { AiOutlineClose } from 'react-icons/ai'; // Import close icon from react-icons
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../../firebase'; // Import the db object from firebase.tsx
import DatePicker from 'react-datepicker'; // Import date picker
import 'react-datepicker/dist/react-datepicker.css'; // Import date picker styles


const Popup = ({ meeting, onClose }) => {
  const [editedMeeting, setEditedMeeting] = useState({ ...meeting });
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Update the edited meeting object with the selected date
    setEditedMeeting({ ...editedMeeting, dateTime: date });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedMeeting({ ...editedMeeting, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const meetingRef = doc(db, 'meetings', meeting.id);
      await updateDoc(meetingRef, editedMeeting);
      onClose(); // Close the popup after updating the data
    } catch (error) {
      console.error('Error updating meeting:', error);
      // Handle error, e.g., show an error message to the user
    }
  };

  // Generate time slots every 30 minutes
  const timeSlots = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      timeSlots.push(time);
    }
  }

  return (
    <div className="popup-container">
      <div className="popup-header">
        <h2>Edit Meeting Details</h2>
        <button className="close-btn" onClick={onClose}><AiOutlineClose /></button>
      </div>
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
        <DatePicker selected={selectedDate} onChange={handleDateChange} showTimeSelect dateFormat="Pp" />
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
