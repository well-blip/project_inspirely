import React, { useState } from "react";
import "./AssignmentCard.css";
import AssignmentDetailsModal from "./AssignmentsDetailModal";

// Define and export the Assignment interface
export interface Assignment {
  id?: string; // Optional, as it's assigned by Firestore upon creation
  name: string;
  dueDate: string;
  description: string;
}

interface AssignmentCardProps {
  assignment: Assignment; // Use the Assignment interface
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({ assignment }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleCloseModal = () => {
    setShowDetails(false);
  };

  return (
    <div className="assignment-card" onClick={handleShowDetails}>
      <h4>{assignment.name}</h4>
      <p>Due Date: {assignment.dueDate}</p>
      {showDetails && (
        <AssignmentDetailsModal
          assignment={assignment}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default AssignmentCard;
