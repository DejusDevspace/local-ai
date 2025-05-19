import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";

const ChatContainer = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI assistant. How can I help you today?",
    },
  ]);
  // console.log(messages);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    console.log("form submitted, i guess...");
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col lg:h-[700px] lg:w-[900px] shadow-2xl bg-tone rounded-xl p-4 gap-4">
        {messages.map((message, index) => {
          return (
            <div
              key={index}
              className={`flex ${
                message.role === "assistant" ? "justify-start" : "justify-end"
              }`}
            >
              <div className="bg-chat max-w-[80%] p-4 rounded-4xl rounded-br-sm">
                <p>{message.content}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <form action="" className="flex gap-4 w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={handleInputChange}
            className="bg-tone text-start p-4 rounded-full w-[90%] h-[48px] border-chat focus:border-blue-700 focus:outline"
          />
          <button
            type="submit"
            className="rounded-full bg-gray-400 p-4 cursor-pointer"
          >
            <FaPaperPlane className="text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatContainer;
