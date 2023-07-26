import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chat, setchat] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chats");
    setchat(data);
  };

  useEffect(() => {
    fetchChats();
  },[]);

  return (
    <div>
      {chat.map((chat_ele) => (
        <div>{chat_ele.chatName} </div>
      ))}
    </div>
  );
};

export default ChatPage;
