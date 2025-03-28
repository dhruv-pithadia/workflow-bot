import React, { useState } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import './Chatbot.css';

function Chatbot() {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hello! How can I assist you today?' }
    ]);

    const handleSend = (text) => {
        if (!text.trim()) return;
        // Append the user message
        setMessages((prev) => [...prev, { sender: 'user', text }]);
        // Simulate a bot response after a short delay
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { sender: 'bot', text: `You said: ${text}` }
            ]);
        }, 500);
    };

    return (
        <div className="chatbot-container">
            <header className="chatbot-header">
                <h1>AiSpaces Bot</h1>
            </header>
            <MessageList messages={messages} />
            <ChatInput onSend={handleSend} />
        </div>
    );
}

export default Chatbot;