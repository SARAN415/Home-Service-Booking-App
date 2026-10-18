import React, { useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import { Link } from "react-router-dom";
import Chat from "./Chat";
import "./../Style/chat.css";

const socket = io.connect("http://localhost:3001");

function ChatHome() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [status, setStatus] = useState("");

  async function joinRoom(event) {
    event.preventDefault();
    if (!username.trim() || !room.trim()) { setStatus("Enter both your name and a room ID to continue."); return; }
    setStatus("");
    socket.emit("join_room", room.trim());
    try { await axios.post("http://localhost:3001/addchat", { chatid: username.trim(), roomid: room.trim() }); } catch { /* The room can still be used when activity logging is unavailable. */ }
    setShowChat(true);
  }

  return <main className="chat" id="main-content">
    {!showChat ? <section className="joinChatContainer" aria-labelledby="chat-title">
      <Link to="/home" className="chat-back">← Back to home</Link>
      <p className="eyebrow">Live support</p><h1 id="chat-title">Start a conversation.</h1><p className="chat-intro">Join a room to ask a question or get help with a booking.</p>
      <form className="chat-join-form" onSubmit={joinRoom}>
        <label htmlFor="chat-name">Your name<input id="chat-name" type="text" autoComplete="name" placeholder="Enter your name" value={username} onChange={(event) => setUsername(event.target.value)} /></label>
        <label htmlFor="chat-room">Room ID<input id="chat-room" type="text" placeholder="Enter your room ID" value={room} onChange={(event) => setRoom(event.target.value)} /></label>
        <button type="submit">Join chat <span aria-hidden="true">→</span></button>
        {status && <p className="form-status" role="alert">{status}</p>}
      </form>
    </section> : <Chat socket={socket} username={username.trim()} room={room.trim()} />}
  </main>;
}

export default ChatHome;
