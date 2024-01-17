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

import React, { useState } from "react";
import Sidebar from "./sidebar";
import "./GroupPage.css";
import FilesSectionContent from "./FilesSectionContent";

interface GroupPageProps {
  groupName?: string;
  groupContent?: { title: string; content: string }[];
}

const GroupPage: React.FC<GroupPageProps> = ({ groupName, groupContent }) => {
  // State for the selected section
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  // Default to "No Name" if groupName is not provided
  const displayGroupName = groupName || "No Name";

  const handleButtonClick = (section: string) => {
    setSelectedSection(section);
  };

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
        <br></br>
        {/* Main content area */}
        <div className="main-content-area">
          {/* Sidebar for Files, Group Chat, Assignments */}
          <div className="secondary-sidebar">
            <button
              className="sidebar-button"
              onClick={() => handleButtonClick("Files")}
            >
              Files
            </button>
            <button
              className="sidebar-button"
              onClick={() => handleButtonClick("Group Chat")}
            >
              Group Chat
            </button>
            <button
              className="sidebar-button"
              onClick={() => handleButtonClick("Assignments")}
            >
              Assignments
            </button>
          </div>
          <div className="vertical-divider"></div>

          {/* Content area for each section */}
          <div className="section-content">
            {/* Conditional rendering based on the selected section */}
            {selectedSection === "Files" && (
              <div>
                <FilesSectionContent />
              </div>
            )}
            {selectedSection === "Group Chat" && (
              <div>
                {/* Content for Group Chat section */}
                {/* Add specific components or content here */}
                <p>This is the Group Chat section content.</p>
              </div>
            )}
            {selectedSection === "Assignments" && (
              <div>
                {/* Content for Assignments section */}
                {/* Add specific components or content here */}
                <p>This is the Assignments section content.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;
