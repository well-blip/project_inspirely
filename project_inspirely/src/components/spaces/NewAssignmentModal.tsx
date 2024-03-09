// NewAssignmentModal.tsx

import React, { useState } from "react";
import "./NewAssignmentModal.css"; // Make sure to create and style this CSS file accordingly

interface NewAssignmentModalProps {
  onClose: () => void;
  onSave: (assignment: {
    name: string;
    dueDate: string;
    description: string;
  }) => void;
}

const NewAssignmentModal: React.FC<NewAssignmentModalProps> = ({
  onClose,
  onSave,
}) => {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ name, dueDate, description });
  };

  return (
    <div className="new-assignment-modal-backdrop" onClick={onClose}>
      <div
        className="new-assignment-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close" onClick={onClose}>
          &times;
        </button>
        <h2>New Assignment</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button type="submit" className="save">
            Save Assignment
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewAssignmentModal;
