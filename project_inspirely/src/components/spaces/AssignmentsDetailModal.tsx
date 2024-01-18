// AssignmentsDetailModal.tsx

import React from "react";
import "./AssignmentDetailsModal.css";

interface AssignmentDetailsModalProps {
  assignment: {
    name: string;
    dueDate: string;
    description: string;
  };
  onClose: () => void; // Add a prop for handling modal close
}

const AssignmentsDetailModal: React.FC<AssignmentDetailsModalProps> = ({
  assignment,
  onClose,
}) => {
  return (
    <div className="assignment-details-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>{" "}
        {/* Close button */}
        <h2>{assignment.name}</h2>
        <p>Due Date: {assignment.dueDate}</p>
        <p>{assignment.description}</p>
      </div>
    </div>
  );
};

export default AssignmentsDetailModal;
