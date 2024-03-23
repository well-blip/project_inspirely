import React, { SetStateAction, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './scheduleMeeting.css';
import { addDocument, db } from '../../../../firebase';
import Sidebar from "../../spaces/sidebar";
import { FaRegFileAlt } from 'react-icons/fa';
import { MdOutlineChat } from 'react-icons/md';
import { RiCalendarCheckLine } from 'react-icons/ri'; // Schedule New Meeting icon
import { RiEdit2Line } from 'react-icons/ri'; // Update Meeting Details icon


const ScheduleMeeting = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingType, setMeetingType] = useState('public'); // Default to 'public'
  const [selectedSpace, setSelectedSpace] = useState('');

  const handleDateChange = (date: SetStateAction<Date>) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedTime(e.target.value);
  };

  const handleTitleChange = (e) => {
    setMeetingTitle(e.target.value);
  };

  const handleMeetingTypeChange = (e) => {
    setMeetingType(e.target.value);
    // Clear selected space when changing meeting type
    setSelectedSpace('');
  };

  const handleSpaceChange = (e) => {
    setSelectedSpace(e.target.value);
  };

  const handleScheduleMeeting = () => {
    const formattedDateTime = `${selectedDate.toDateString()} ${selectedTime}`;
    
    addDocument({
      title: meetingTitle,
      dateTime: formattedDateTime,
      meetingType: meetingType,
      space: selectedSpace
    });
    // Create a document in Firestore collection
    // db.collection('meetings').add({
    //   title: meetingTitle,
    //   dateTime: formattedDateTime,
    //   meeting_type: meetingType,
    //   space: selectedSpace
    // })
    // .then((docRef) => {
    //   console.log("Document written with ID: ", docRef.id);
    //   alert('Meeting scheduled successfully!');
    // })
    // .catch((error) => {
    //   console.error('Error scheduling meeting: ', error);
    //   alert('Error scheduling meeting. Please try again later.');
    // });
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

      <div className="schedule_page-container">
          <Sidebar />
          <div className="schedule_page-content">
              <div className="secondary-sidebar">
                  <button
              className="sidebar-button"
              onClick={() => handleButtonClick("Files")}
            >
              <FaRegFileAlt style={{ marginRight: "8px" }} />
              Files
            </button>

            <button
              className="sidebar-button"
              onClick={() => handleButtonClick("Group Chat")}
            >
              <MdOutlineChat style={{ marginRight: "8px" }} />
              Group Chat
            </button></div>
              
     </div>
      <div className="schedule-meeting">
      <div className="calendar-section">
        <h2>Schedule Meeting </h2>
        <div className="date-picker">
          <label> Select Date: </label>
          <DatePicker selected={selectedDate} onChange={handleDateChange} showPopperArrow={false} />
        </div>
        <div className="time-picker">
          <label> Select Time: </label>
          <select value={selectedTime} onChange={handleTimeChange}>
            {timeSlots.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
        <div className="meeting-type">
          <label>Meeting Type: </label>
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
            <label>Select Space: </label>
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
          <label>Title: </label>
          <input type="text" value={meetingTitle} onChange={handleTitleChange} />
        </div>
      </div>
      <button className="schedule-meeting-button" onClick={handleScheduleMeeting}>Schedule Meeting</button>
      </div>
  </div>
  );
};

export default ScheduleMeeting;