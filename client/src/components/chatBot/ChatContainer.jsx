import React from "react";

const ChatContainer = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col lg:h-[700px] lg:w-[900px] shadow-2xl bg-tone rounded-lg p-4 gap-4">
        <div className="flex justify-start">
          <div className="bg-chat min-w-[50%] p-4 rounded-lg">
            <p>AI message</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-chat min-w-[50%] p-4 rounded-lg">
            <p>Human message</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Bottom of container</h2>
      </div>
    </div>
  );
};

export default ChatContainer;
