import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ScheduleMeeting.css';
import { db } from '../../../firebase';

interface ScheduleMeetingProps {
  onClose: () => void;
}

const ScheduleMeeting: React.FC<ScheduleMeetingProps> = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingType, setMeetingType] = useState('public'); // Default to 'public'
  const [selectedSpace, setSelectedSpace] = useState('');

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeetingTitle(e.target.value);
  };

  const handleMeetingTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeetingType(e.target.value);
    // Clear selected space when changing meeting type
    setSelectedSpace('');
  };

  const handleSpaceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSpace(e.target.value);
  };

  const handleScheduleMeeting = () => {
    const formattedDateTime = `${selectedDate.toDateString()} ${selectedTime}`;
    
    // Create a document in Firestore collection
    db.collection('meetings').add({
      title: meetingTitle,
      date
      Time: selectedTime,
      meeting_type: meetingType,
      Space: selectedSpace
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      alert('Meeting scheduled successfully!');
      onClose(); // Close the modal after scheduling the meeting
    })
    .catch((error) => {
      console.error('Error scheduling meeting: ', error);
      alert('Error scheduling meeting. Please try again later.');
    });
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
    <div className="schedule-meeting">
      <div className="calendar-section">
        <h2>Schedule Meeting</h2>
        <div className="date-picker">
          <label>Select Date:</label>
          <DatePicker selected={selectedDate} onChange={handleDateChange} showPopperArrow={false} />
        </div>
        <div className="time-picker">
          <label>Select Time:</label>
          <select value={selectedTime} onChange={handleTimeChange}>
            {timeSlots.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
        <div className="meeting-type">
          <label>Meeting Type:</label>
          <div>
            <label>
              <input type="radio" value="public" checked={meetingType === 'public'} onChange={handleMeetingTypeChange} />
              Public   
            </label>
            <label>
              <input type="radio" value="spaces" checked={meetingType === 'spaces'} onChange={handleMeetingTypeChange} />
              Spaces
            </label>
          </div>
        </div>
        {meetingType === 'spaces' && (
          <div className="space-selection">
            <label>Select Space:</label>
            <select value={selectedSpace} onChange={handleSpaceChange}>
              <option value="">Select a space</option>
              <option value="Space A">Space A</option>
              <option value="Space B">Space B</option>
              <option value="Space C">Space C</option>
            </select>
          </div>
        )}
      </div>
      <div className="details-section">
        <h2>Meeting Details</h2>
        <div className="meeting-details">
          <label>Title:</label>
          <input type="text" value={meetingTitle} onChange={handleTitleChange} />
        </div>
      </div>
      <div className="form-buttons">
        <button className="cancel" onClick={onClose}>Cancel</button>
        <button className="save" onClick={handleScheduleMeeting}>Schedule Meeting</button>
      </div>
    </div>
  );
};

export default ScheduleMeeting;
