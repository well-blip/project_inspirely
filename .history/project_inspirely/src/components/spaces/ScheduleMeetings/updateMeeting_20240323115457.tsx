// UpdateMeetingContent.tsx
import React, { useState, useEffect, SetStateAction } from 'react';
import { db } from '../../../../firebase';
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

  const handleMeetingClick = (meeting: SetStateAction<null>) => {
    setSelectedMeeting(meeting);
  };

  const handleClosePopup = () => {
    setSelectedMeeting(null);
  };

  return (
    <div>
      <h3>Scheduled Meetings</h3>
      {meetings.map((meeting) => (
        <div key={meeting.id} className="meeting-card" onClick={() => handleMeetingClick(meeting)}>
          {/* Display meeting details */}
          <h4>{meeting.title}</h4>
          <p>Date and Time: {meeting.dateTime}</p>
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
