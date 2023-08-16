const express = require("express");
const app = express();
const { PORT = 3001 } = process.env;
const http = require("http").Server(app);
const cors = require("cors");
const socketIo = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5173",
  },
});
app.use(cors());
app.get("/", (req, res) => {
  res.json({
    message: "Hello",
  });
});
const users = [];

socketIo.on("connection", (socket) => {
  console.log(`${socket.id} user connected`);
  
  socket.on("message", (data) => {
   socketIo.emit("response", data)
  });
  socket.on("newUser", (data) => {
    users.push(data)
    console.log("users", users)
    socketIo.emit("responseNewUser", users)

  })
  socket.on("disconnect", () => {
    console.log(`${socket.id} user disconnect`)
       
  });
});
http.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
