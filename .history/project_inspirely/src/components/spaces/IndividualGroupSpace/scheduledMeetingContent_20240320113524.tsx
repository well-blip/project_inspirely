import React from "react";
import "./scheduledMeetingContent.css";
import { useState } from "react";

interface Assignment {
  id?: string;
  name: string;
  dueDate: string;
  description: string;
}

interface AssignmentNotificationCardProps {
  assignment: Assignment;
}

const ScheduledMeetingContent: React.FC<AssignmentNotificationCardProps> = ({
  assignment,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="assignment-notification-card notification-display">
        <div className="sender-time">
          <span className="sender">
            Assignment "{assignment.name}" is created!{" "}
          </span>
          <span className="time">
            Assignment is due on {assignment.dueDate}
          </span>
        </div>
        <div className="content">
          <p>Description: {assignment.description}</p>
        </div>
        <span className="c-button" onClick={handleClose}>
          Close
        </span>
      </div>
    )
  );
};

export default ScheduledMeetingContent;
