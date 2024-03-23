import sche;

// message was for message notifications

// Message structure
// interface Message {
//   sender: string;
//   time: string;
//   content: string;
// }

interface Assignment {
  id?: string;
  name: string;
  dueDate: string;
  description: string;
}

// import NotificationDisplay from "./NotificationDisplay"; // Unused component

// Notification component
const Notification: React.FC<{
  // messages: Message[]; //for the messages
  assignments: Assignment[]; //for all assignments pulled through firebase
}> = ({ assignments }) => {
  return (
    <div className="assignment-container">
      <div className="assignment-list">
        {assignments.map((assignment) => (
          <AssignmentNotificationCard
            key={assignment.id}
            assignment={assignment}
          />
        ))}
      </div>
    </div>
  );
};

export default Notification;

//Unused code for messages

// <div className="notification-container">
//   {messages.map((message, index) => (
//     <div key={index} className="notification">
//       <div>
//         <NotificationDisplay message={message}></NotificationDisplay>
//       </div>
//     </div>
//   ))}
// </div>
