// GroupPage.tsx

//Example Usage
// const MyGroupComponent: React.FC = () => {
//     const myGroupContent = [
//       { title: 'Announcements', content: 'Important announcements will be posted here.' },
//       { title: 'Assignments', content: 'View and submit assignments in this section.' },
//       { title: 'Discussion Forum', content: 'Engage in discussions with your classmates.' },
//     ];

//     return <GroupPage groupName="My Group" groupContent={myGroupContent} />;
//   };

// GroupPage.tsx

// GroupPage.tsx

import React from "react";
import Sidebar from "./sidebar";
import "./GroupPage.css";

interface GroupPageProps {
  groupName?: string;
  groupContent?: { title: string; content: string }[];
}

const GroupPage: React.FC<GroupPageProps> = ({ groupName, groupContent }) => {
  // Default to "No Name" if groupName is not provided
  const displayGroupName = groupName || "No Name";

  return (
    <div className="group-page-container">
      <Sidebar />

      <div className="group-page-content">
        {/* Header section */}
        <div className="content-header">
          <h2 className="group-title">{displayGroupName}</h2>
          {/* Buttons for Schedule, Join, Start Meeting, Profile */}
          <div
            className="header-buttons"
            style={{ marginLeft: "auto", padding: "10px" }}
          >
            <button className="button">Schedule Meeting</button>
            <button className="button">Join Meeting</button>
            <button className="button">Start Meeting</button>
            <button className="button">Profile</button>
          </div>
        </div>
        <hr className="divider" />

        {/* Main content area */}
        <div className="main-content-area">
          {/* Sidebar for Files, Group Chat, Assignments */}
          <div className="secondary-sidebar">
            <button className="sidebar-button">Files</button>
            <button className="sidebar-button">Group Chat</button>
            <button className="sidebar-button">Assignments</button>
          </div>
          <div className="vertical-divider"></div>

          {/* Content area for each section */}
          <div className="section-content">
            {/* Content for Files section */}
            {/* You can add specific components or content here */}

            {/* Content for Group Chat section */}
            {/* You can add specific components or content here */}

            {/* Content for Assignments section */}
            {/* You can add specific components or content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;
