// Inside the component where you render the "Group Chat" section content
import React, { useState } from "react";
import "./GroupChatSection.css";

const GroupChatSection = () => {
  // Sample data for chat messages
  const [messages, setMessages] = useState([
    { user: "User1", content: "Hello everyone!" },
    { user: "User2", content: "Hi there!" },
    { user: "User1", content: "How is everyone doing?" },
    // Add more messages as needed
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { user: "CurrentUser", content: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div>
      <h3>Group Chat</h3>
      <div className="chat-display">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            <span className="user">{message.user}:</span>
            <span className="content">{message.content}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <textarea
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        ></textarea>
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default GroupChatSection;
