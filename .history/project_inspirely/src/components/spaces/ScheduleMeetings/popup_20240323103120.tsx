// Popup.tsx
import React, { useState, useEffect } from 'react';
import './popup.css'; // Import CSS file
import { AiOutlineClose } from 'react-icons/ai'; // Import close icon from react-icons
import DatePicker from 'react-datepicker'; // Import DatePicker component
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../../firebase'; // Import the db object from firebase.tsx
import { toDate } from 'date-fns'; // Import toDate function from date-fns

const Popup = ({ meeting, onClose }) => {
  const [editedMeeting, setEditedMeeting] = useState({ ...meeting });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('12:00');

  useEffect(() => {
    // Convert Firestore Timestamp to JavaScript Date
    if (meeting.dateTime instanceof Date) {
      setSelectedDate(meeting.dateTime);
    } else if (meeting.dateTime?.toDate) {
      setSelectedDate(meeting.dateTime.toDate());
    }
  }, [meeting.dateTime]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setEditedMeeting({ ...editedMeeting, dateTime: date }); // Update dateTime in editedMeeting
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    setEditedMeeting({ ...editedMeeting, dateTime: combineDateTime(selectedDate, e.target.value) });
  };

  const combineDateTime = (date, time) => {
    const dateString = date.toLocaleDateString();
    return `${dateString} ${time}`;
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
        <label>Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
        />
      </div>
      <div>
        <label>Time:</label>
        <input
          type="time"
          value={selectedTime}
          onChange={handleTimeChange}
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
