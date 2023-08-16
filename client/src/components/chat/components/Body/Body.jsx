import React from "react";
import { useNavigate } from "react-router-dom";
import "./Body.css";

export const Body = ({ messages }) => {
  const navigate = useNavigate();
  const handleLeave = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <header className="header">
        <button onClick={handleLeave} className="chat-button">
          Покинуть чат
        </button>
      </header>
      <div className="chat-container">
        {messages.map((message) =>
          message.name === localStorage.getItem("user") ? (
            <div key={message.id} className="chat-item">
              <p className="sender-name-left">Вы</p>
              <div className="message message-sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div key={message.id} className="chat-item">
              <p className="sender-name-right">{message.name}</p>
              <div className="message message-recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
