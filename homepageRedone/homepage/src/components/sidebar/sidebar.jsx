import React from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarAlt,
  faComments,
  faBell,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { PiHouseBold } from "react-icons/pi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import { PiChatsBold } from "react-icons/pi";
import { PiBellSimpleBold } from "react-icons/pi";
import { PiGearBold } from "react-icons/pi";
import { signOut } from 'firebase/auth';
import { auth } from '../../../../../inspirely/src/firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from "../../assets/Logo.png";

// import {useNavigate} from "react-router-dom";

function Sidebar() {
  const user = JSON.parse(localStorage.getItem('user'));
  const userEmail = user ? user.email : null;
  console.log(userEmail);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.replace("http://localhost:3001/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="sidebar" id="sidebar" style={{ marginLeft: "12px" }}>
      <div className="sidebar-top">
        {/* <img src={logo} alt="App Logo" className="sidebar-logo" /> */}
      </div>
      <hr className="divider" />
      <div className="sidebar-bottom">
        <h1 style={{ fontSize: '10px' }}>{userEmail}</h1>

        <button onClick={handleLogout} style={{
          fontSize: '0.75rem', // smaller font size
          borderRadius: '0.5rem', // rounded corners
          padding: '0.5rem 1rem', // padding for spacing


        }}>Logout</button>
        <div className="options" >
          <p className="tiny-heading"> MAIN </p>

          <a href="Homepage">
            <button className="sidebar-button">
              <span style={{ fontWeight: 'bold', color: 'black' }}>
                <PiHouseBold style={{ marginRight: "6px" }} />
                Dashboard </span>
            </button>
          </a>

          <a href="http://localhost:9000" target="_blank" >
            <button className="sidebar-button">
              <span style={{ fontWeight: 'bold', color: 'black' }}>
                <PiHouseBold style={{ marginRight: "6px" }} />
                Meet </span>
            </button>
          </a>

          <a href="http://localhost:3003/spaces">
            <button className="sidebar-button">
              <span style={{ fontWeight: 'bold', color: 'black' }}>
                <MdOutlinePeopleAlt style={{ marginRight: "6px" }} />
                Spaces </span>
            </button>
          </a>

          <a href="http://localhost:3003/group">
            <button className="sidebar-button">
              <span style={{ fontWeight: 'bold', color: 'black' }}>
                <MdCalendarMonth style={{ marginRight: "6px" }} />
                Schedule </span>
            </button>
          </a>

          <a href="http://localhost:1234">
            <button className="sidebar-button">
              <span style={{ fontWeight: 'bold', color: 'black' }}>
                <PiChatsBold style={{ marginRight: "6px" }} />
                Chat </span>
            </button>
          </a>


          <p className="tiny-heading"> SETTINGS </p>
          <button className="sidebar-button">
            <span style={{ fontWeight: 'bold', color: 'black' }}>
              <PiBellSimpleBold style={{ marginRight: "6px" }} />
              Notification </span>
          </button>
          <button className="sidebar-button">
            <span style={{ fontWeight: 'bold', color: 'black' }}>
              <PiGearBold style={{ marginRight: "6px" }} />
              Settings </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
