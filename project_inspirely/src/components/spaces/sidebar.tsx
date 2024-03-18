import React from 'react';
import "./sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarAlt, faComments, faBell, faCog } from '@fortawesome/free-solid-svg-icons';
import { PiHouseBold } from "react-icons/pi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import { PiChatsBold } from "react-icons/pi";
import { PiBellSimpleBold } from "react-icons/pi";
import { PiGearBold } from "react-icons/pi";



import logo from "../../assets/logo.png"; 

// import {useNavigate} from "react-router-dom";

function Sidebar() {
  // let navigate = useNavigate();

  // const navToSpace = () => {
  //   navigate("/spaces"); // This will navigate to the Spaces component
  // };
  // const navToDash = () => {
  //   navigate("/group"); // This will navigate to the Spaces component
  // };

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-top">
        <img src={logo} alt="App Logo" className="sidebar-logo" />
      </div>
      <hr className="divider" />
      <div className="sidebar-bottom">
        <p className='tiny-heading'> MAIN </p>
        <button className="sidebar-button">
          <PiHouseBold style={{ marginRight: '6px' }}/> 
          Dashboard
          </button>
        <button className="sidebar-button">
          <MdOutlinePeopleAlt style={{ marginRight: '6px' }}/> 
          Spaces
        </button>
        <button className="sidebar-button">          
        <MdCalendarMonth style={{ marginRight: '6px' }}/> 
         Schedule
         </button>
        <button className="sidebar-button">
        <PiChatsBold style={{ marginRight: '6px' }}/> 
          Chat
          </button>
        <p className='tiny-heading'> SETTINGS </p>
        <button className="sidebar-button">
        <PiBellSimpleBold style={{ marginRight: '6px' }}/> 
           Notification
           </button>
        <button className="sidebar-button">
        <PiGearBold style={{ marginRight: '6px' }}/> 
          Settings
          </button>
      </div>
    </div>
  );
}

export default Sidebar;
