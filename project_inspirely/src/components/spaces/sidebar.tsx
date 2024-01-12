// import { useState } from 'react';
// import "./sidebar.css";
// import logo from "../../assets/logo.png"; // Make sure the path is correct

// function Sidebar() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const randomGroups = ['MA210 Algebra 1', 'CH230 Chemistry', 'CS50 Computer Science', 'PS120 Physics', 'EN050 English FL', 'BO200 Biology I'];

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//    return (
//     <div className="sidebar" id="sidebar">
//       <div className="sidebar-top">
//         <img src={logo} alt="App Logo" className="sidebar-logo" />
//       </div>
//       <hr className="divider" />
//        <div className="sidebar-bottom">
//          <p className='tiny-heading'> MAIN </p>
//         <button className="sidebar-button">Dashboard</button>
//         <button className="sidebar-button" onClick={toggleDropdown}>Spaces</button>
//         {isDropdownOpen && (
//           <div className="dropdown">
//             {randomGroups.map((group, index) => (
//               <button key={index} className="sidebar-button dropdown-button">{group}</button>
//             ))}
//           </div>
//         )}
//          <button className="sidebar-button">Schedule</button>
//          <button className="sidebar-button">Chat</button>
//          <p className='tiny-heading'> SETTINGS </p>
//         <button className="sidebar-button">Notification</button>
//         <button className="sidebar-button">Settings</button>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

import React, { useState } from 'react';
import "./sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBookOpen, faCalendarAlt, faComments, faBell, faCog } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/logo.png"; // Make sure the path is correct

function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const randomGroups = ['MA210 Algebra 1', 'CH230 Chemistry', 'CS50 Computer Science', 'PS120 Physics', 'EN050 English FL', 'BO200 Biology I'];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-top">
        <img src={logo} alt="App Logo" className="sidebar-logo" />
      </div>
      <hr className="divider" />
      <div className="sidebar-bottom">
        <p className='tiny-heading'> MAIN </p>
        <button className="sidebar-button"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</button>
        <button className="sidebar-button" onClick={toggleDropdown}><FontAwesomeIcon icon={faBookOpen} /> Spaces</button>
        {isDropdownOpen && (
          <div className="dropdown">
            {randomGroups.map((group, index) => (
              <button key={index} className="sidebar-button dropdown-button">{group}</button>
            ))}
          </div>
        )}
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
