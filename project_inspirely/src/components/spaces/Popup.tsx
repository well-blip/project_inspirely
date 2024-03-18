// import React from 'react';
// import './Popup.css'; 
// import { PiGearBold } from "react-icons/pi";
// import { PiTrashBold } from "react-icons/pi";

// interface PopupProps {
//   onClose: () => void;
//   onDelete: () => void;
//   onSettings: () => void;
// }

// const Popup: React.FC<PopupProps> = ({ onClose, onDelete, onSettings }) => {
//   return (
//     <div className="popup-container" onClick={onClose}>
//       <div className="popup" onClick={e => e.stopPropagation()}>
//         <ul>
//           <li onClick={onSettings}><PiGearBold style={{ marginRight: '6px' }}/></li>
//           <li onClick={onDelete}><PiTrashBold style={{ marginRight: '6px' }}/></li>
//         </ul>
//         <button className="close-btn" onClick={onClose}>✕</button>
//       </div>
//     </div>
//   );
// };

// export default Popup;

import React from 'react';
import './Popup.css'; 
import { PiGearBold } from "react-icons/pi";
import { PiTrashBold } from "react-icons/pi";

interface PopupProps {
  onClose: () => void;
  onDelete: () => void;
  onSettings: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose, onDelete, onSettings }) => {
  return (
    <div className="popup-container" onClick={onClose}>
      <div className="popup" onClick={e => e.stopPropagation()}>
      <button className="close-btn" onClick={onClose}> ✕ </button>
        <ul>
          <li onClick={onSettings}>
            <PiGearBold />
          </li>
          <li onClick={onDelete}>
            <PiTrashBold />
          </li>
        </ul>
        {/* <button className="close-btn" onClick={onClose}>✕</button> */}
      </div>
    </div>
  );
};

export default Popup;
