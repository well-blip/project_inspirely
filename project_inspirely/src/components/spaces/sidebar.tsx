import React from 'react';
import "./sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBookOpen, faCalendarAlt, faComments, faBell, faCog } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/logo.png"; 

function Sidebar() {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-top">
        <img src={logo} alt="App Logo" className="sidebar-logo" />
      </div>
      <hr className="divider" />
      <div className="sidebar-bottom">
        <p className='tiny-heading'> MAIN </p>
        <button className="sidebar-button"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</button>
        <button className="sidebar-button"><FontAwesomeIcon icon={faBookOpen} /> Spaces</button>
        <button className="sidebar-button"><FontAwesomeIcon icon={faCalendarAlt} /> Schedule</button>
        <button className="sidebar-button"><FontAwesomeIcon icon={faComments} /> Chat</button>
        <p className='tiny-heading'> SETTINGS </p>
        <button className="sidebar-button"><FontAwesomeIcon icon={faBell} /> Notification</button>
        <button className="sidebar-button"><FontAwesomeIcon icon={faCog} /> Settings</button>
      </div>
    </div>
  );
}

export default Sidebar;
