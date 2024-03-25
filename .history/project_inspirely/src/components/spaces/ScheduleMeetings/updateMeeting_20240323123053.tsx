// UpdateMeetingContent.tsx
import React, { useState, useEffect } from 'react';
import { db } from '../../../../firebase';
import { collection, query, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import './updateMeeting.css';

const UpdateMeetingContent = () => {
  const [meetings, setMeetings] = useState([]);
  const [selectedMeeting, setSelectedMeeting] = useState(null); // Track the currently edited meeting

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

  
  };
  return (
    <div>
      <h3>Scheduled Meetings</h3>
      // UpdateMeetingContent.tsx

{meetings.map((meeting) => (
  <div key={meeting.id} className="meeting-card" onClick={() => setSelectedMeeting(meeting)}>
    {selectedMeeting && selectedMeeting.id === meeting.id && (
    )}
    {/* Render meeting details */}
    <div>{meeting.title}</div>
    <div>{meeting.dateTime}</div>
    <div>{meeting.meeting_type}</div>
    <div>{meeting.space}</div>
  </div>
))}

    </div>
  );
};

export default UpdateMeetingContent;
