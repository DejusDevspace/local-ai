import React from "react";
import { FaPaperPlane } from "react-icons/fa6";

const ChatContainer = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col lg:h-[700px] lg:w-[900px] shadow-2xl bg-tone rounded-xl p-4 gap-4">
        <div className="flex justify-start">
          <div className="bg-chat min-w-[50%] p-4 rounded-4xl rounded-bl-xl">
            <p>AI message</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-chat min-w-[50%] p-4 rounded-4xl rounded-br-xl">
            <p>Human message</p>
          </div>
        </div>
      </div>
      <div>
        <form action="" className="flex gap-4 w-full">
          <input
            type="text"
            placeholder="Type your message..."
            className="bg-tone text-start p-4 rounded-full w-[90%] h-[48px] border-chat focus:border-blue-700 focus:outline"
          />
          <button
            type="submit"
            className="rounded-full bg-gray-400 p-4 cursor-pointer"
            disabled={true}
          >
            <FaPaperPlane className="text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatContainer;
