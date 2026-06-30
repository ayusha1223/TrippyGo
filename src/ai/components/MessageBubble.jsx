export default function MessageBubble({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[75%]
          px-5
          py-4
          rounded-3xl
          whitespace-pre-wrap
          leading-7
          shadow-md

          ${
            isUser
              ? "bg-[#1A5F7A] text-white rounded-br-md"
              : "bg-white text-gray-800 rounded-bl-md"
          }
        `}
      >
        {text}
      </div>
    </div>
  );
}