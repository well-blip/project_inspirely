import React, { SetStateAction, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './scheduleMeeting.css';
import { addDocument, db } from '../../../../firebase';
import Sidebar from "../../spaces/sidebar";
import { RiCalendarCheckLine } from 'react-icons/ri'; // Schedule New Meeting icon
import { RiEdit2Line } from 'react-icons/ri'; // Update Meeting Details icon

const ScheduleMeeting = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingType, setMeetingType] = useState('public'); // Default to 'public'
  const [selectedSpace, setSelectedSpace] = useState('');
  const [showScheduleMeeting, setShowScheduleMeeting] = useState(false); // State to control the visibility of the schedule meeting section
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    // Retrieve data from the database when component mounts
    fetchMeetings();
  }, []);

  const fetchMeetings = async () => {
    try {
      const meetingsRef = await db.collection('meetings').get();
      const fetchedMeetings = meetingsRef.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMeetings(fetchedMeetings);
    } catch (error) {
      console.error('Error fetching meetings: ', error);
    }
  };

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
    // Perform any additional actions upon scheduling meeting
    // For example, show success message, clear form fields, etc.
  };

  // Generate time slots every 30 minutes
  const timeSlots = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      timeSlots.push(time);
    }
  }

  const handleScheduleNewMeetingClick = () => {
    setShowScheduleMeeting(true); // Set state to show the schedule meeting section
  };

  const handleEditMeetingDetails = (meeting) => {
    // Handle edit option for meeting details
    // You can implement a modal or another component for editing
    console.log('Edit meeting details:', meeting);
  };

  const handleButtonClick = (action) => {
    // Placeholder function for handling button clicks
    console.log("Button clicked:", action);
  };

  return (
    <div className="schedule_page-container">
      <Sidebar />
      <div className="schedule_page-content">
        <div className="secondary-sidebar">
          <button className="sidebar-button" onClick={handleScheduleNewMeetingClick}>
            <RiCalendarCheckLine style={{ marginRight: "8px" }} />
            Schedule New Meeting
          </button>
          <button className="sidebar-button" onClick={() => handleButtonClick("Update Meeting Details")}>
            <RiEdit2Line style={{ marginRight: "8px" }} />
            Update Meeting Details
          </button>
        </div>
        <div className="vertical-divider"></div>
        {showScheduleMeeting && (
          <div className="schedule-meeting">
            <div className="calendar-section">
              <h2>Schedule Meeting</h2>
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
        )}
        {!showScheduleMeeting && (
          <div className="meeting-details-container">
            {meetings.map(meeting => (
              <div key={meeting.id} className="meeting-card">
                <h3>{meeting.title}</h3>
                <p>Date: {meeting.dateTime}</p>
                <p>Meeting Type: {meeting.meetingType}</p>
                <p>Space: {meeting.space}</p>
                <button onClick={() => handleEditMeetingDetails(meeting)}>Edit</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleMeeting;
