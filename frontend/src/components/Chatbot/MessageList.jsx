import React from 'react';
import './MessageList.css';

function MessageList({ messages }) {
    return (
        <div className="message-list-container">
            {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                    {msg.text}
                </div>
            ))}
        </div>
    );
}

export default MessageList;