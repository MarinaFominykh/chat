import React, { useState, useEffect } from "react";
import "./Sidebar.css";

export const Sidebar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("responseNewUser", (data) => {
      setUsers(data);
    });
  }, [socket, users]);

  const filteredList = users.filter(
    (value, index, self) =>
      index ===
      self.findIndex(
        (t) => t.user === value.user && t.socketID === value.socketID
      )
  );
  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">
        <ul className="sidebar__users">
          {users.map((user) => (
            <li key={user.socketID}>{user.user}</li>
          ))}
        </ul>
      </h2>
    </aside>
  );
};
