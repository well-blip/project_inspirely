// AssignmentsDetailModal.tsx

import React from "react";
import "./AssignmentDetailsModal.css";
import { Assignment } from "./AssignmentCard";

interface AssignmentDetailsModalProps {
  assignment: Assignment; // Use the shared Assignment interface
  onClose: () => void;
}

const AssignmentsDetailModal: React.FC<AssignmentDetailsModalProps> = ({
  assignment,
  onClose,
}) => {
  const handleModalClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
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
