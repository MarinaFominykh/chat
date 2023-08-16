import React, { useState, useEffect } from "react";
import "./ChatPage.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Body } from "./components/Body/Body";
import { MessageWindow } from "./components/MessageWindow/MessageWindow";

export const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("response", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <div className="chat">
      <Sidebar socket={socket} />
      <main className="main">
        <Body messages={messages} />
        <MessageWindow socket={socket} />
      </main>
    </div>
  );
};
