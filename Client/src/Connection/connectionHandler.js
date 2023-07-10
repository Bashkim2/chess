import { socket } from "../App";

import { useState } from "react";

function ConnectionHandler() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", {
        username: username,
        room: room,
      });
    }
  };

  return (
    <div>
      <h3>Join A Chat</h3>
      <input
        type="text"
        placeholder="hej..."
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="room..."
        onChange={(e) => {
          setRoom(e.target.value);
        }}
      />
      <button onClick={joinRoom}>Join A Room</button>
    </div>
  );
}

export default ConnectionHandler;
