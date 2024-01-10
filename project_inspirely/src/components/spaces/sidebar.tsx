// src/App.tsx
import React from 'react';
import "./sidebar.css"

function Sidebar() {
  return (
      <div className="sidebar" id="sidebar">
        {/* Sidebar content goes here */}
        <h2>Sidebar</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
  );
}

export default Sidebar;
