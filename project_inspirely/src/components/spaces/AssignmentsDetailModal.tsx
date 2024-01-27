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

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div className="assignment-details-modal" onClick={onClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <button className="close" onClick={onClose}>
          &times;
          </button>
        {/* </span>{" "}
        Close button */}
        <h2>{assignment.name}</h2>
        <p>Due Date: {assignment.dueDate}</p>
        <p>{assignment.description}</p>
      </div>
    </div>
  );
};

export default AssignmentsDetailModal;
