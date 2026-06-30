import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  function send() {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className="border-t bg-white p-5">

      <div className="flex items-end gap-4">

        <textarea
          rows="2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask TrippyGo AI anything..."
          className="
            flex-1
            resize-none
            rounded-2xl
            border
            border-gray-300
            p-4
            focus:outline-none
            focus:ring-2
            focus:ring-[#1A5F7A]
          "
        />

        <button
          onClick={send}
          className="
            h-14
            w-14
            rounded-2xl
            bg-[#1A5F7A]
            text-white
            flex
            items-center
            justify-center
            hover:bg-[#15485e]
            transition
          "
        >
          <FaPaperPlane />
        </button>

      </div>

    </div>
  );
}