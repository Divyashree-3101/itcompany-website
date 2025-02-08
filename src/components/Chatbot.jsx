import React, { useState } from "react";
import axios from "axios";
import "../website.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY; 
      if (!apiKey) {
        throw new Error("API key is missing. Check your .env file.");
      }

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: newMessages.map((msg) => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.text,
          })),
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      setMessages([
        ...newMessages,
        { text: response.data.choices[0].message.content, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([
        ...newMessages,
        { text: "I'm having trouble responding. Please try again later.", sender: "bot" },
      ]);
    }
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chat-toggle-btn" onClick={toggleChat}>
          💬 Chat with Us
        </button>
      )}

      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <span>Chatbot</span>
            <button onClick={toggleChat} className="close-btn">✖</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your message..."
            />
            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

