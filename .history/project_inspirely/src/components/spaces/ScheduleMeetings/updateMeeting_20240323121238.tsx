// UpdateMeetingContent.tsx
import React, { useState, useEffect } from 'react';
import { db } from '../../../../firebase';
import { collection, query, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import Popup from './Popup';
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

  const handleUpdateMeeting = (updatedMeeting) => {
    // Logic to update the meeting data in your application
    // For this example, let's assume we have a function to update meetings in state
    // You should replace this with your actual update logic
    const updatedMeetings = meetings.map((m) =>
      m.id === updatedMeeting.id ? updatedMeeting : m
    );
    setMeetings(updatedMeetings);
  };
  return (
    <div>
      <h3>Scheduled Meetings</h3>
      {meetings.map((meeting) => (
        <div key={meeting.id} className="meeting-card" onClick={() => setSelectedMeeting(meeting)}>
          {selectedMeeting && selectedMeeting.id === meeting.id && (
            <Popup meeting={meeting} onUpdate={handleUpdateMeeting} />
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
