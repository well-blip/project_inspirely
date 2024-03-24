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

import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar";
import "./GroupPage.css";
import FilesSectionContent from "./FilesSectionContent";
import GroupChatSection from "./GroupChatSection";
import ScheduledMeetingContent from "./scheduledMeetingContent";
import AssignmentCard from "./AssignmentCard";
import AssignmentsDetailModal from "./AssignmentsDetailModal";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineChat, MdOutlineAssignment, MdOutlineSchedule } from "react-icons/md";
import NewAssignmentModal from "./NewAssignmentModal";
import { db } from "../../../../firebase";
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import { Button, Modal, Box, IconButton } from '@mui/material';
import ScheduleMeeting from "../scheduleMeeting";
import CloseIcon from '@mui/icons-material/Close';
import BoxBasic from "../../../../../docColab/components/listTemp";


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
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [showNewAssignmentModal, setShowNewAssignmentModal] = useState(false);
  const [showScheduleMeetingModal, setShowScheduleMeetingModal] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "assignments"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedAssignments: Assignment[] = [];
      querySnapshot.forEach((doc) => {
        fetchedAssignments.push({
          id: doc.id,
          ...(doc.data() as Omit<Assignment, "id">),
        });
      });
      setAssignments(fetchedAssignments);
    });
    return () => unsubscribe();
  }, []);

  const displayGroupName = groupName || "Group";

  const handleButtonClick = (section: string) => {
    setSelectedSection(section);
  };

  const handleOpenScheduleMeetingModal = () => {
    setShowScheduleMeetingModal(true);
  };

  const handleCloseScheduleMeetingModal = () => {
    setShowScheduleMeetingModal(false);
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '120%', // Adjust width as per your requirement
    maxWidth: 600, // Maximum width for responsiveness
    maxHeight: '100vh', // Maximum height for responsiveness
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="group-page-container">
      <Sidebar />
      <div className="group-page-content">
        <div className="content-header">
          <h2 className="group-title">{displayGroupName}</h2>
          <div className="header-buttons" style={{ marginLeft: "auto", padding: "10px" }}>
            <button className="button" onClick={handleOpenScheduleMeetingModal}>Schedule Meeting</button>
            <button className="button" onClick={() => window.open('http://localhost:9000', '_blank')}>Join Meeting</button>
            <button className="button" onClick={() => window.open('http://localhost:9000', '_blank')}>Start Meeting</button>
            {/* <button className="button">Profile</button> */}
          </div>
        </div>
        <hr className="divider" />
        <br />
        <div className="main-content-area">
          <div className="secondary-sidebar">
            <button className="sidebar-button" onClick={() => handleButtonClick("Files")}>
              <FaRegFileAlt style={{ marginRight: "8px" }} />
              Files
            </button>

            <button className="sidebar-button" onClick={() => {window.location.replace("http://localhost:3000")}}>
              <MdOutlineChat style={{ marginRight: "8px" }} />
              Group Chat
            </button>
            <button className="sidebar-button" onClick={() => handleButtonClick("Assignments")}>
              <MdOutlineAssignment style={{ marginRight: "8px" }} />
              Assignments
            </button>

            <button className="sidebar-button" onClick={() => handleButtonClick("Meetings")}>
              <MdOutlineSchedule style={{ marginRight: "8px" }} />
              Scheduled Meetings
            </button>
          </div>
          <div className="vertical-divider"></div>
          <div className="section-content">
            {selectedSection === "Files" && (
              <div>
                <BoxBasic />
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
                <button className="button" onClick={() => setShowNewAssignmentModal(true)}>
                  New Assignment
                </button>
                <br />
                <br />
                {showNewAssignmentModal && (
                  <NewAssignmentModal
                    onClose={() => setShowNewAssignmentModal(false)}
                    onSave={async (newAssignment) => {
                      try {
                        const docRef = await addDoc(collection(db, "assignments"), {
                          name: newAssignment.name,
                          dueDate: newAssignment.dueDate,
                          description: newAssignment.description,
                        });
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
            {selectedSection === "Meetings" && (
              <div>
                <ScheduledMeetingContent />
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal
        open={showScheduleMeetingModal}
        onClose={handleCloseScheduleMeetingModal}
        aria-labelledby="schedule-meeting-modal-title"
      >
        <Box sx={modalStyle}>
          <ScheduleMeeting />
          {/* Close button */}
          <IconButton
            aria-label="close"
            style={{ position: 'absolute', top: 0, right: 0 }}
            onClick={handleCloseScheduleMeetingModal}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
};

export default GroupPage;