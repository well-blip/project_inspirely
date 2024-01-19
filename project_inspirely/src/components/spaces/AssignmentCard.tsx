// AssignmentCard.tsx
import React, { useState } from "react";
import "./AssignmentCard.css";
import AssignmentDetailsModal from "./AssignmentsDetailModal";

interface AssignmentCardProps {
  assignment: {
    name: string;
    dueDate: string;
    description: string;
    // Add more details as needed
  };
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
      {/* Add more details as needed */}
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
