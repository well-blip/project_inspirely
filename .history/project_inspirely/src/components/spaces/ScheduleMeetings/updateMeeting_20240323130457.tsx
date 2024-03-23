// UpdateMeetingContent.tsx
import React, { useState, useEffect } from 'react';
import { db } from '../../../../firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import Popup from './Popup';
import './updateMeeting.css';

const UpdateMeetingContent = () => {
  const [meetings, setMeetings] = useState([]);
  const [selectedMeetingId, setSelectedMeetingId] = useState(null);

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

  const handleMeetingClick = (meetingId) => {
    setSelectedMeetingId(meetingId);
  };

  const handleClosePopup = () => {
    setSelectedMeetingId(null);
  };

  return (
    <div>
      <h3>Scheduled Meetings</h3>
      {meetings.map((meeting) => (
        <div key={meeting.id} className="meeting-card" onClick={() => handleMeetingClick(meeting.id)}>
          {/* Display meeting details */}
          <h4>{meeting.title}</h4>
          <p>Date and Time: {new Date(meeting.dateTime.seconds * 1000).toLocaleString()}</p>
          <p>Meeting Type: {meeting.meeting_type}</p>
              <p>Space: {meeting.space}</p>
              <p>Link: {meeting.li}</p>
        </div>
      ))}
      {/* Render the Popup component if a meeting is selected */}
      {selectedMeetingId && (
        <Popup meeting={meetings.find(meeting => meeting.id === selectedMeetingId)} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default UpdateMeetingContent;
