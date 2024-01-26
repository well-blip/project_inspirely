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
import GroupChatSection from "./GroupChatSection";
import AssignmentCard from "./AssignmentCard"; // Import the AssignmentCard component
import AssignmentsDetailModal from "./AssignmentsDetailModal";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineChat } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";



interface GroupPageProps {
  groupName?: string;
  groupContent?: { title: string; content: string }[];
}

const GroupPage: React.FC<GroupPageProps> = ({ groupName, groupContent }) => {
  // Dummy data for assignments
  const upcomingAssignments = [
    {
      name: "Assignment 1",
      dueDate: "January 15, 2023",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      name: "Assignment 2",
      dueDate: "February 1, 2023",
      description: "Consectetur adipiscing elit.",
    },
    {
      name: "Assignment 3",
      dueDate: "February 15, 2023",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Assignment 4",
      dueDate: "March 1, 2023",
      description: "Ut enim ad minim veniam.",
    },
    {
      name: "Assignment 5",
      dueDate: "March 15, 2023",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  // State for the selected section
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  // Default to "No Name" if groupName is not provided
  const displayGroupName = groupName || "Group";

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
              <FaRegFileAlt style={{ marginRight: '8px' }} />
              Files
            </button>

            <button
              className="sidebar-button"
              onClick={() => handleButtonClick("Group Chat")}
            >
              <MdOutlineChat style={{ marginRight: '8px' }}/>
              Group Chat
            </button>
            <button
              className="sidebar-button"
              onClick={() => handleButtonClick("Assignments")}
            >
              <MdOutlineAssignment style={{ marginRight: '8px' }} />
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
                <GroupChatSection />
              </div>
            )}
            {selectedSection === "Assignments" && (
              <div>
                <h3>Upcoming Assignments</h3>
                {upcomingAssignments.map((assignment, index) => (
                  <AssignmentCard key={index} assignment={assignment} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;
