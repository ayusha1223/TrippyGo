import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import MessageBubble from "./MessageBubble";
import { askAI } from "../services/aiService";
import ChatInput from "./ChatInput";

export default function AIChat() {

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text:
        "👋 Hi! I'm TrippyGo AI.\n\nAsk me anything about Nepal, destinations, trekking, hotels, weather or travel planning.",
    },
  ]);

  async function sendMessage(message) {

  if (!message.trim()) return;

  setMessages((prev) => [
    ...prev,
    {
      sender: "user",
      text: message,
    },
  ]);

  try {

    const response = await askAI(message);

    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        text: response.answer,
      },
    ]);

  } catch (error) {

    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        text: "Sorry, I couldn't reach the AI server.",
      },
    ]);

  }

}

  return (
    <div
      className="
      bg-white
      rounded-3xl
      shadow-xl
      overflow-hidden
      h-[78vh]
      flex
      flex-col
      "
    >

      {/* Header */}

      <div
        className="
        bg-[#1A5F7A]
        text-white
        p-6
        flex
        items-center
        gap-4
        "
      >

        <div
          className="
          w-14
          h-14
          rounded-full
          bg-white
          flex
          items-center
          justify-center
          text-[#1A5F7A]
          "
        >
          <FaRobot size={22} />
        </div>

        <div>

          <h2 className="text-2xl font-bold">
            TrippyGo AI
          </h2>

          <p className="text-white/80">
            Online
          </p>

        </div>

      </div>

      {/* Messages */}

     <div
  className="
    flex-1
    overflow-y-auto
    bg-[#F8FAFC]
    p-8
  "
>
  <div className="max-w-4xl mx-auto space-y-6">

    {messages.map((msg, index) => (
      <MessageBubble
        key={index}
        sender={msg.sender}
        text={msg.text}
      />
    ))}

  </div>
</div>

      {/* Input */}

      <ChatInput onSend={sendMessage} />

    </div>
  );
}
