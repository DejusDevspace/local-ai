import React from "react";
import ChatContainer from "./ChatContainer";

const ChatMain = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <h1 className="text-3xl mt-2 text-white">
        AI <span className="text-chat-assistant">Chatbot</span>
      </h1>
      <ChatContainer />
    </div>
  );
};

export default ChatMain;
