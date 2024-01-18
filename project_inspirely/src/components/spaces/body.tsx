// import "./body.css";
// import math from "../../assets/math.jpeg";

// function Body() {
//   const cards = [
//     // Dummy data for cards
//     { title: "MA210 Algebra 1", content: "New: Class test on Tuesday", backgroundImage: `url(${math})` },
//     { title: "CH230 Chemistry", content: "New: Assignment Organic Chem" },
//     { title: "CS50 Computer Science", content: "New: Mock test on Monday" },
//     { title: "PS120 Physics", content: "New: Class test on Tuesday" },
//     { title: "EN050 English FL", content: "New: Assignment due on Wednesday" },
//     { title: "BO200 Biology 1", content: "New: New assignment uploaded" },
//   ];

//   return (
//     <div className="main-content" id="mainContent">
//       <div className="content-header">
//         <h2 className="spaces-title">Spaces</h2>
//         <div className="header-buttons">
//           <button className="button">+ New Group</button>
//           <button className="button">Ahmed, Hamid</button>
//         </div>
//       </div>
//       <hr className="divider" /> {/* Divider line */}
//       <div className="spaces-grid">
//         {cards.map((card, index) => (
//           <div className="card" key={index} style={{ backgroundImage: card.backgroundImage }}>
//             <h3>{card.title}</h3>Zx
//             <p>{card.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Body;



import React, { useState } from 'react';
import Modal from './modal'; // Ensure this import path is correct
import './body.css'; // Ensure this import path is correct

interface Card {
  teamName: string;
  teamMakerName: string;
  notifications: string[];
  backgroundImage?: string;
}

function Body() {
  const [cards, setCards] = useState<Card[]>([
  ]);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleNewGroupClick = () => {
    setModalOpen(true);
  };

  const addSpace = (newCard: Card) => {
    setCards([...cards, newCard]);
  };

  return (
    <div className="main-content" id="mainContent">
       <div className="content-header">
         <h2 className="spaces-title">Spaces</h2>
         <div className="header-buttons">
         <button className="button" onClick={handleNewGroupClick}>+ New Group</button>
           <button className="button">Ahmed, Hamid</button>
         </div>
       </div>
      <hr className="divider" />
      <div className="spaces-grid">
  {cards.map((card, index) => (
    <div className="card" key={index}>
      <div className="upper-part">
        <div className="background-image" style={{ backgroundImage: `url(${card.backgroundImage})` }}></div>
        <h3>{card.teamName}</h3>
        <p>Team Maker: {card.teamMakerName}</p>
      </div>
      <div className="lower-part">
        <h4>Recent Notifications</h4>
        <ul>
          {card.notifications.map((notification, notificationIndex) => (
            <li key={notificationIndex}>{notification}</li>
          ))}
        </ul>
        <div className="settings-button">Settings</div>
      </div>
    </div>
  ))}
</div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onAddSpace={addSpace} />
    </div>
  );
}

export default Body;
