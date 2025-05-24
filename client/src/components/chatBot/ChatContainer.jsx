import React, { useState, useEffect, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa6";

const ChatContainer = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI assistant. How can I help you today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  // Scroll to bottom of chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage = input.trim();
    setInput("");

    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `Sorry, an error occurred: ${data.error}`,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.response,
          },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, there was a problem connecting to the assistant.",
        },
      ]);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div
        className="flex flex-col lg:h-[700px] lg:w-[900px] shadow-2xl bg-secondary rounded-xl p-4 gap-6 overflow-scroll scrollbar-hide"
        ref={chatContainerRef}
      >
        {messages.map((message, index) => {
          const thoughts = message.content.includes("think")
            ? message.content.split("</think>")[1]
            : message.content;
          const response =
            message.role === "assistant" ? thoughts : message.content;
          return (
            <div
              key={index}
              className={`flex ${
                message.role === "assistant" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-4xl ${
                  message.role === "assistant"
                    ? "rounded-bl-sm bg-chat-assistant"
                    : "rounded-br-sm bg-chat-user"
                }`}
              >
                <p className="text-black">{response}</p>
              </div>
            </div>
          );
        })}
        {isLoading && (
          <div className="justify-start">
            <div
              className={`max-w-[80%] w-fit p-4 rounded-4xl rounded-bl-sm bg-chat-assistant`}
            >
              <p className="text-black">loading...</p>
            </div>
          </div>
        )}
      </div>
      <div>
        <form action="" className="flex gap-4 w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={handleInputChange}
            className="bg-chat-user text-start p-4 rounded-full w-[90%] h-[48px] border-chat focus:border-blue-700 focus:outline"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="rounded-full bg-gray-400 p-4 cursor-pointer"
            disabled={isLoading}
          >
            <FaPaperPlane className="text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatContainer;
