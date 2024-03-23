// UpdateMeetingContent.tsx
import React, { useState, useEffect } from 'react';
import { db } from '../../../../firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import Popup from './Popup';
import './updateMeeting.css';

const formatDate = (timestamp) => {
    if (timestamp && timestamp.toDate) { // Check if timestamp is a Firestore timestamp object
      const date = timestamp.toDate(); // Convert Firestore timestamp to JavaScript Date object
      return date.toLocaleString(); // Format date as a string
    } else if (timestamp instanceof Date) { // Check if timestamp is already a JavaScript Date object
      return timestamp.toLocaleString(); // Format date as a string
    } else {
      return ''; // Handle case where timestamp is neither a Firestore timestamp nor a JavaScript Date object
    }
  };

const UpdateMeetingContent = () => {
  const [meetings, setMeetings] = useState([]);
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  useEffect(() => {
    const q = query(collection(db, 'meetings'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedMeetings = [];
      querySnapshot.forEach((doc) => {
        fetchedMeetings.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setMeetings(fetchedMeetings);
    });
    return () => unsubscribe();
  }, []);

  const handleMeetingClick = (meeting) => {
    setSelectedMeeting(meeting);
  };

  const handleClosePopup = () => {
    setSelectedMeeting(null);
  };

  const formatDate = (timestamp) => {
    const date = timestamp.toDate(); // Convert Firestore timestamp to JavaScript Date object
    return date.toLocaleString(); // Format date as a string
  };

  return (
    <div>
      <h3>Scheduled Meetings</h3>
      {meetings.map((meeting) => (
        <div key={meeting.id} className="meeting-card" onClick={() => handleMeetingClick(meeting)}>
          {/* Display meeting details */}
          <h4>{meeting.title}</h4>
          <p>Date and Time: {formatDate(meeting.dateTime)}</p> {/* Format the date */}
          <p>Meeting Type: {meeting.meeting_type}</p>
          <p>Space: {meeting.space}</p>
        </div>
      ))}
      {/* Render the Popup component if a meeting is selected */}
      {selectedMeeting && (
        <Popup meeting={selectedMeeting} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default UpdateMeetingContent;
