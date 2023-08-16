import { Route, Routes } from "react-router-dom";
import "./App.css";
import socketIO from "socket.io-client";
import { Home } from "./components/Home/Home";
import { ChatPage } from "./components/chat/ChatPage";

const socket = socketIO.connect("http://localhost:3001");

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home socket={socket} />}></Route>
      <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
    </Routes>
  );
}

export default App;
