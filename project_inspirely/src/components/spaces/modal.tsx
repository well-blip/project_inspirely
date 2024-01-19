// import React, { useState } from 'react';

// interface Card {
//   title: string;
//   content: string;
//   backgroundImage?: string;
// }

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onAddSpace: (space: Card) => void;
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onAddSpace }) => {
//   const [teamName, setTeamName] = useState('');
//   const [participants, setParticipants] = useState('');

//   const handleSubmit = () => {
//     onAddSpace({ title: teamName, content: `Participants: ${participants}` });
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span>
//         <h2>Create Team</h2>
//         <input type="text" placeholder="Team Name" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
//         <textarea placeholder="Participants" value={participants} onChange={(e) => setParticipants(e.target.value)} />
//         <button onClick={handleSubmit}>Create</button>
//       </div>
//     </div>
//   );
// };

// export default Modal;

// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';

interface Card {
  teamName: string;
  teamMakerName: string;
  notifications: string[];
  backgroundImage?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddSpace: (space: Card) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onAddSpace }) => {
  const [teamName, setTeamName] = useState('');
  const [teamMakerName, setTeamMakerName] = useState('');
  const [notifications, setNotifications] = useState<string[]>([]);
  const [backgroundImage, setBackgroundImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Example of fetching notifications (replace with your actual logic)
    const fetchNotifications = async () => {
      // Fetch notifications from an API or use static data
      const fetchedNotifications = ["Notification 1", "Notification 2"];
      setNotifications(fetchedNotifications);
    };

    fetchNotifications();
  }, []);

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
    onAddSpace({ teamName, teamMakerName, notifications, backgroundImage });
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
