import React, { useState } from 'react';
import Modal from './modal'; 
import Popup from './Popup'; 
import './body.css'; 
// import './modal.css';
import { CgMoreO } from "react-icons/cg";
import { FaBell } from "react-icons/fa";




interface Card {
  id: string;
  teamName: string;
  teamMakerName: string;
  notifications: string[];
  participants: string[];
  backgroundImage?: string;
}

function Body() {
  const [cards, setCards] = useState<Card[]>([
  ]);

  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleNewGroupClick = () => {
    setModalOpen(true);
  };

  const addSpace = (newCard: Card) => {
    setCards([...cards, newCard]);
  };
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  
  // const deleteCard = (Card:any) => {
  //   setCards(cards.filter(card => card.id !== Card));
  //   setPopupVisible(false); 
  // };

  
  // const togglePopup = () => {
  //   setPopupVisible(!popupVisible);
  // };

  const togglePopup = (cardId?: string) => {
      setSelectedCardId(cardId || null); // If a cardId is provided, use it; otherwise, clear the selection
      setPopupVisible(!popupVisible);
  };

  const handleDeleteCard = () => {
    if (selectedCardId) {
      setCards(cards.filter(card => card.id !== selectedCardId));
      togglePopup(); // Hide popup after deletion
    }
  };

  const handleSettings = () => {
    // Implement settings functionality here
    console.log('Settings clicked for card ID:', selectedCardId);
    togglePopup(); // Hide popup after opening settings
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
    <div className="card" key={card.id}>
      <div className="upper-part" style={{ 
                backgroundImage: `url(${card.backgroundImage})`, 
                backgroundSize: 'cover' 
              }}>
        <div className="background-image" style={{ backgroundImage: `url(${card.backgroundImage})` }}></div>
        <h3 className='team-name'>{card.teamName}</h3>
         <p className='team-maker'>Author: {card.teamMakerName}</p>
      </div>
      <div className="lower-part">  
        <h4 className= "notifications-title"><FaBell />
</h4>
      <div className="header-buttons">
        <button className="button inline-button" onClick={handleNewGroupClick}>+ New Group</button>
        <button className="button inline-button">Ahmed, Hamid</button>
      </div>
        <ul>
          {card.notifications.map((notification, notificationIndex) => (
            <li key={index} className="notification-item">{notification}</li>
          ))}
        </ul>
        <div className="settings-text">
        <CgMoreO onClick={(e) => {
        e.stopPropagation(); 
        togglePopup(card.id);
          }} />
        </div>
        {popupVisible && selectedCardId === card.id && (
            <Popup
              onClose={() => togglePopup()}
              onDelete={handleDeleteCard}
              onSettings={handleSettings}
            />
          )}

      </div>
    </div>
  ))}
</div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onAddSpace={addSpace} />
    </div>
  );
}

export default Body;
