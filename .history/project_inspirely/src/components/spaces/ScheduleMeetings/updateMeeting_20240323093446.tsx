import React, { useState, useEffect } from "react";
import { db } from "../../../../firebase"; // Import the db object from firebase.tsx
import { collection, query, onSnapshot } from "firebase/firestore";
import './';

const UpdateMeetingContent = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    // Define a query for the "meetings" collection
    const q = query(collection(db, "meetings"));

    // Set up a real-time subscription using onSnapshot
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedMeetings = [];
      querySnapshot.forEach((doc) => {
        // Push each fetched meeting into the array
        fetchedMeetings.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      // Update the state with the fetched meetings
      setMeetings(fetchedMeetings);
    });

    // Return a cleanup function to unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h3>Scheduled Meetings</h3>
      {meetings.map((meeting) => (
        <div key={meeting.id} className="meeting-card">
          <h4>{meeting.title}</h4>
          <p>Date and Time: {meeting.dateTime}</p>
         <p>Meeting Type: {meeting.meeting_type}</p>
         <p>Space: {meeting.space}</p>
        </div>
      ))}
    </div>
  );
};

export default UpdateMeetingContent;
