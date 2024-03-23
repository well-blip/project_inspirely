import React, { useState } from "react";
import "./NewAssignmentModal.css"; // Make sure to update your CSS accordingly
import { Assignment } from "./AssignmentCard";

interface NewAssignmentModalProps {
  onClose: () => void;
  onSave: (assignment: Assignment) => void; // Use the shared Assignment interface
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
        <h4>New Assignment</h4>
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
          <br></br>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <div className="form-buttons">
            <button type="button" className="cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save">
              Save Assignment
            </button>
          </div>
        </form>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default NewAssignmentModal;
