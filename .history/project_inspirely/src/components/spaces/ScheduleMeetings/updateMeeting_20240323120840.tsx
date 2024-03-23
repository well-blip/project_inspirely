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

  const handleUpdateMeeting = async (updatedMeeting) => {
    try {
      await updateDoc(doc(db, 'meetings', updatedMeeting.id), updatedMeeting);
      // Update the local state to reflect changes
      const updatedMeetings = meetings.map((meeting) =>
        meeting.id === updatedMeeting.id ? updatedMeeting : meeting
      );
      setMeetings(updatedMeetings);
      setSelectedMeeting(null); // Close the popup after updating
    } catch (error) {
      console.error('Error updating meeting:', error);
    }
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
