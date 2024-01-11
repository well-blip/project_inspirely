// src/App.tsx
import React from 'react';
import "./sidebar.css"

function Sidebar() {
    const randomGroups = ['MA210', 'CH230', 'CS50', 'PS120'];
  return (
      <div className="sidebar" id="sidebar">
        {/* Sidebar content goes here */}
        <h2>Sidebar</h2>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Spaces</a>
          <ul>
            {/* Map through the array of random group names to create dropdown items */}
            {randomGroups.map((group, index) => (
              <li key={index}><a href="#">{group}</a></li>
            ))}
          </ul>
          </li>
          <li><a href="#">Schedule</a></li>
          <li><a href="#">Chat</a></li>
          <li><a href="#">Notification</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
  );
}

export default Sidebar;
