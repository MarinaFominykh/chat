import "./Home.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", user);
    socket.emit("newUser", { user, socketID: socket.id });
    navigate("/chat");
  };
  return (
    <form onSubmit={handleSubmit} className="home__form">
      <h2 className="home__title">Вход в чат</h2>
      <label htmlFor="user"></label>
      <input
        className="home__input"
        type="text"
        id="user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button className="home__button" type="submit">
        Войти
      </button>
    </form>
  );
};
