import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import './Homepage.css';

function HomePage() {
    const navigate = useNavigate();

    const goToChatbot = () => {
        // Navigate to "/chatbot" or any route you’ve set for your chatbot page
        navigate('/chatbot');
    };

    return (
        <div className="homepage-container">
            <div className="content-wrapper">
                <h1>Welcome to AiSpaces</h1>
                <p>Your one-stop hub for AI-driven creativity.</p>
                <button className="bot-button" onClick={goToChatbot}>
                    Go to AiSpaces Bot
                </button>
            </div>
        </div>
    );
}

export default HomePage;