// UpdateMeetingContent.tsx
import React, { useState, useEffect } from 'react';
import { db } from '../../../../firebase';
//import '../../../../firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import Popup from './Popup';
import './updateMeeting.css';


  

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
    // Check if timestamp is a Firestore timestamp object
    if (timestamp instanceof timestamp) {
      return timestamp.toDate().toLocaleString();
    } else if (timestamp instanceof Date) {
      return timestamp.toLocaleString();
    } else {
      // Handle other cases where timestamp is not recognized
      return '';
    }
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
