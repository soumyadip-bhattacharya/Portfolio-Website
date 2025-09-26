import React, { useState, useEffect, useRef } from 'react';

const AiAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedVoice, setSelectedVoice] = useState(null);
    // 1. New state to track if the initial welcome has been played
    const hasWelcomed = useRef(false);
    const chatBoxRef = useRef(null);

    // Effect to find and set a preferred female voice
    useEffect(() => {
        const setVoice = () => {
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                let femaleVoice = voices.find(voice => voice.name === 'Google UK English Female') || voices.find(voice => voice.lang === 'en-US' && voice.name.includes('Female'));
                setSelectedVoice(femaleVoice || voices[0]);
            }
        };
        setVoice();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = setVoice;
        }
    }, []);

    const speak = (text) => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    };

    // 2. This function now handles opening the chat and the welcome message
    const openChatAndWelcome = () => {
        setIsOpen(true);
        // Only speak the welcome message the very first time the chat is opened
        if (!hasWelcomed.current) {
            const welcomeText = "Hello! I'm Sigma, Soumyadip's AI assistant. Welcome to his portfolio! Feel free to ask me anything about his skills or projects.";
            setMessages([{ sender: 'ai', text: welcomeText }]);
            speak(welcomeText);
            hasWelcomed.current = true; // Mark as welcomed
        }
    };
    
    // ... (Your handleFormSubmit and other logic remains the same) ...
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const userInput = e.target.elements.userInput.value;
        if (!userInput.trim()) return;

        const newMessages = [...messages, { sender: 'user', text: userInput }];
        setMessages(newMessages);
        setIsLoading(true);
        e.target.reset();

        try {
            const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/assistant`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: userInput })
            });
            const data = await response.json();
            
            setMessages([...newMessages, { sender: 'ai', text: data.reply }]);
            speak(data.reply);

        } catch (error) {
            console.error("Error communicating with AI assistant:", error);
            setMessages([...newMessages, { sender: 'ai', text: "Sorry, I'm having trouble connecting right now." }]);
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <>
            {/* 3. The FAB now calls the new function */}
            <button className={`ai-fab ${isOpen ? 'hidden' : ''}`} onClick={openChatAndWelcome}>
                <i className='bx bxs-bot'></i>
            </button>

            <div className={`ai-chat-window ${isOpen ? 'open' : ''}`}>
                <div className="chat-header">
                    <h3>AI Assistant</h3>
                    <button onClick={() => setIsOpen(false)}><i className='bx bx-x'></i></button>
                </div>
                <div className="chat-box" ref={chatBoxRef}>
                    {messages.map((msg, index) => (
                        <div key={index} className={`chat-message ${msg.sender}`}>
                            {msg.text}
                        </div>
                    ))}
                    {isLoading && <div className="chat-message ai loading"><span></span><span></span><span></span></div>}
                </div>
                <form className="chat-input" onSubmit={handleFormSubmit}>
                    <input type="text" name="userInput" placeholder="Ask about skills, projects..." autoComplete="off" />
                    <button type="submit"><i className='bx bxs-send'></i></button>
                </form>
            </div>
        </>
    );
};

export default AiAssistant;

