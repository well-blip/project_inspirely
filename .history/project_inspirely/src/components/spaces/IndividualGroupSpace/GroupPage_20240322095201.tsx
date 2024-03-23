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
//Hello world
// GroupPage.tsx

import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar";
import "./GroupPage.css";
import FilesSectionContent from "./FilesSectionContent";
import GroupChatSection from "./GroupChatSection";
import ScheduledMeetingContent from "./scheduledMeetingContent";
import AssignmentCard from "./AssignmentCard"; // Import the AssignmentCard component
import AssignmentsDetailModal from "./AssignmentsDetailModal";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineChat, MdOutlineAssignment, MdOutlineSchedule } from "react-icons/md";
import NewAssignmentModal from "./NewAssignmentModal";
import { db } from "../../../../firebase"; // Import the db object from firebase.tsx
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import ScheduleMeeting from "../scheduleMeeting";
import { Button, Modal, Box } from '@mui/material';

export interface Assignment {
  id?: string;
  name: string;
  dueDate: string;
  description: string;
}

interface GroupPageProps {
  groupName?: string;
  groupContent?: { title: string; content: string }[];
}

const GroupPage: React.FC<GroupPageProps> = ({ groupName, groupContent }) => {
  // Dummy data for assignments
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  // State for the selected section
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [showNewAssignmentModal, setShowNewAssignmentModal] = useState(false);

  useEffect(() => {
    // Define a query for the "assignments" collection
    const q = query(collection(db, "assignments"));

    // Set up a real-time subscription using onSnapshot
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedAssignments: Assignment[] = [];
      querySnapshot.forEach((doc) => {
        // Push each fetched assignment into the array, include Firestore document ID
        fetchedAssignments.push({
          id: doc.id,
          ...(doc.data() as Omit<Assignment, "id">),
        });
      });
      // Update the state with the fetched assignments
      setAssignments(fetchedAssignments);
    });

    // Return a cleanup function to unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // Default to "No Name" if groupName is not provided
  const displayGroupName = groupName || "Group";

  const handleButtonClick = (section: string) => {
    setSelectedSection(section);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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
          >di
            <Button onClick={handleOpenModal}>Schedule Meeting</Button>
            <Modal
               open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ScheduleMeeting />
        </Box>
      </Modal>
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
              <FaRegFileAlt style={{ marginRight: "8px" }} />
              Files
            </button>

            <button
              className="sidebar-button"
              onClick={() => handleButtonClick("Group Chat")}
            >
              <MdOutlineChat style={{ marginRight: "8px" }} />
              Group Chat
            </button>
            <button
              className="sidebar-button"
              onClick={() => handleButtonClick("Assignments")}
            >
              <MdOutlineAssignment style={{ marginRight: "8px" }} />
              Assignments
            </button>
            {/* Added button for Scheduled Meetings */}
            <button
              className="sidebar-button"
              onClick={() => handleButtonClick("Meetings")}
            >
              <MdOutlineSchedule style={{ marginRight: "8px" }} />
              Scheduled Meetings
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
                <button
                  className="button"
                  onClick={() => setShowNewAssignmentModal(true)}
                >
                  New Assignment
                </button>{" "}
                <br></br>
                <br></br>
                {showNewAssignmentModal && (
                  <NewAssignmentModal
                    onClose={() => setShowNewAssignmentModal(false)}
                    onSave={async (newAssignment) => {
                      try {
                        const docRef = await addDoc(
                          collection(db, "assignments"),
                          {
                            name: newAssignment.name,
                            dueDate: newAssignment.dueDate,
                            description: newAssignment.description,
                          }
                        );
                        console.log("Document written with ID: ", docRef.id);
                        setAssignments((currentAssignments) => [
                          ...currentAssignments,
                          { ...newAssignment, id: docRef.id },
                        ]);
                        setShowNewAssignmentModal(false);
                      } catch (e) {
                        console.error("Error adding document: ", e);
                      }
                    }}
                  />
                )}
                {assignments.map((assignment, index) => (
                  <AssignmentCard key={index} assignment={assignment} />
                ))}
              </div>
            )}
            {/* Add your logic to display scheduled meetings */}
            {selectedSection === "Meetings" && (
              <div>
                <ScheduledMeetingContent/>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;