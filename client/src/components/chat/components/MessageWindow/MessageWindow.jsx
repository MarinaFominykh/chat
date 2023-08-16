import React, { useState } from "react";
import "./MessageWindow.css";

export const MessageWindow = ({ socket }) => {
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("user")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("user"),
        id: `${socket.id}-${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };
  return (
    <div className="window">
      <form onSubmit={handleSubmit} className="window__form">
        <input
          value={message}
          onChange={handleChange}
          type="text"
          className="window__message"
        />
        <button className="window__button">Отправить</button>
      </form>
    </div>
  );
};
