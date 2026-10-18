import React, { useEffect, useState } from "react";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    function receiveMessage(data) { setMessageList((list) => [...list, data]); }
    socket.on("receive_message", receiveMessage);
    return () => socket.off("receive_message", receiveMessage);
  }, [socket]);

  function sendMessage(event) {
    event.preventDefault();
    const message = currentMessage.trim();
    if (!message) return;

    const messageData = {
      room,
      author: username,
      message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    socket.emit("send_message", messageData);
    setCurrentMessage("");
  }

  return <section className="chat-window" aria-label={`Live chat room ${room}`}>
    <header className="chat-header"><div><p className="eyebrow">Connected</p><h1>Live support</h1></div><span className="chat-room">Room {room}</span></header>
    <div className="chat-body" role="log" aria-live="polite" aria-label="Chat messages">
      {messageList.length === 0 && <div className="chat-empty"><span aria-hidden="true">✦</span><p>You’re connected. Start the conversation when you’re ready.</p></div>}
      {messageList.map((messageContent, index) => <div className={`message ${username === messageContent.author ? "message--self" : "message--other"}`} key={`${messageContent.author}-${messageContent.time}-${index}`}>
        <div><div className="message-content"><p>{messageContent.message}</p></div><div className="message-meta"><span>{messageContent.time}</span><span>{messageContent.author}</span></div></div>
      </div>)}
    </div>
    <form className="chat-footer" onSubmit={sendMessage}><label className="sr-only" htmlFor="chat-message">Message</label><input id="chat-message" type="text" value={currentMessage} placeholder="Write a message…" onChange={(event) => setCurrentMessage(event.target.value)} /><button type="submit" aria-label="Send message">Send <span aria-hidden="true">↑</span></button></form>
  </section>;
}

export default Chat;
