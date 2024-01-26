
import React, { useState, useEffect } from 'react';
import './modal.css';

interface Card {
  id: string;
  teamName: string;
  teamMakerName: string;
  participants: string[];
  notifications: string[];
  backgroundImage?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddSpace: (space: Card) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onAddSpace }) => {
  const [teamName, setTeamName] = useState<string>('');
  const [teamMakerName, setTeamMakerName] = useState<string>('');
  const [participantEmail, setParticipantEmail] = useState<string>('');
  const [participants, setParticipants] = useState<string[]>([]);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [backgroundImage, setBackgroundImage] = useState<string>();

  useEffect(() => {
    // Simulate fetching notifications (replace with actual API call logic)
    const fetchNotifications = async () => {
      // Dummy data to simulate notifications
      const fetchedNotifications = ["Class test on Tuesday"];
      setNotifications(fetchedNotifications);
    };

    fetchNotifications();
  }, []);

  const handleAddParticipant = () => {
    if (participantEmail && !participants.includes(participantEmail)) {
      setParticipants([...participants, participantEmail]);
      setParticipantEmail(''); // Clear input after adding
    }
  };

  const handleBackgroundImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setBackgroundImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const newSpace: Card = {
      id: crypto.randomUUID(),
      teamName,
      teamMakerName,
      participants,
      notifications,
      backgroundImage,
    };
    onAddSpace(newSpace);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-content" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Create Team</h2>
        <input
          type="text"
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Team Maker Name"
          value={teamMakerName}
          onChange={(e) => setTeamMakerName(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleBackgroundImageChange}
        />
        <input
          type="email"
          placeholder="Add Participant Email"
          value={participantEmail}
          onChange={(e) => setParticipantEmail(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleAddParticipant();
            }
          }}
        />
        <button onClick={handleAddParticipant}>Add Participant</button>
        {participants.length > 0 && (
          <div className="participants-list">
            {participants.map((participant, index) => (
              <div key={index}>{participant}</div>
            ))}
          </div>
        )}
        <div className="notifications">
          {notifications.map((notification, index) => (
            <div key={index}>{notification}</div>
          ))}
        </div>
        <button onClick={handleSubmit}>Create</button>
      </div>
    </div>
  );
};

export default Modal;
