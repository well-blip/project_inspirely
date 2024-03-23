import React, { useState, useEffect } from "react";
import { db } from "../../../../firebase"; // Import the db object from firebase.tsx
import { collection, query, onSnapshot } from "firebase/firestore";
import './updateMeeting.css';
import './scheduleMeeting';

const UpdatedMeetingContent = () => {
    const [meetings, setMeetings] = useState([]);
  
    useEffect(() => {
      const q = query(collection(db, "meetings"));
  
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const fetchedMeetings = [];
        querySnapshot.forEach((doc) => {
          const meetingData = doc.data();
          // Convert timestamp fields to JavaScript Date objects
          const dateTime = meetingData.dateTime.toDate(); // Assuming dateTime is a Firestore Timestamp field
          fetchedMeetings.push({
            id: doc.id,
            ...meetingData,
            dateTime: dateTime,
          });
        });
        setMeetings(fetchedMeetings);
      });
  
      return () => unsubscribe();
    }, []);
  
    return (
      <div>
        <h3>Scheduled Meetings</h3>
        {meetings.map((meeting) => (
          <div key={meeting.id} className="meeting-card">
            <h4>{meeting.title}</h4>
            {/* Render date and time as a formatted string */}
            <p>Date and Time: {meeting.dateTime.toLocaleString()}</p>
            <p>Meeting Type: {meeting.meeting_type}</p>
            <p>Space: {meeting.space}</p>
          </div>
        ))}
      </div>
    );
};

export default UpdatedMeetingContent;
