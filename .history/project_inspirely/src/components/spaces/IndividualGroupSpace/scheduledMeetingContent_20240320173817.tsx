import React, { useState, useEffect } from "react";
import { db } from "../../../../firebase"; // Import the db object from firebase.tsx
import { collection, query, onSnapshot } from "firebase/firestore";

const ScheduledMeetingContent = () => {
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
      {meetings.map((meetings) => (
        <div key={meetings.id} className="meeting-card">
          <p>Date: {meetings.date}</p>
          <p>Time: {meetings.time}</p>
         <p>Title: {meetings.title}</p>
         <p>Meeting type: {meeting.meetingtype}</p>
         <p>Space: {meeting.Space} </p>
          {/* Add more details to display if needed */}
        </div>
      ))}
    </div>
  );
};

export default ScheduledMeetingContent;
