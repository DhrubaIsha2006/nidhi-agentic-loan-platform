interface ChatBubbleProps {
  role: "user" | "assistant";
  message: string;
}

export default function ChatBubble({ role, message }: ChatBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm
          ${
            isUser
              ? "bg-[#6AE3FF] text-black"
              : "bg-[#121A33] border border-gray-800 text-white"
          }`}
      >
        {message}
      </div>
    </div>
  );
}
