const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User is connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(
      `User with ID: ${socket.id} and username: ${data.username} joined room: ${data.room}`
    );
  });

  socket.on("disconnection", (socket) => {
    console.log(`User is disconnected: ${socket.id}`);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});
