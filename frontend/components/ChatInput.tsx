import { useState } from "react";

interface ChatInputProps {
  disabled?: boolean;
  onSend: (text: string) => void;
}

export default function ChatInput({ disabled, onSend }: ChatInputProps) {
  const [text, setText] = useState("");

  function handleSend() {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  }

  return (
    <div className="flex gap-2 mt-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={disabled}
        placeholder="Type your message..."
        className="flex-1 px-4 py-3 rounded-xl bg-[#121A33] border border-gray-700 text-sm"
      />
      <button
        onClick={handleSend}
        disabled={disabled}
        className="px-4 py-3 rounded-xl bg-[#6AE3FF] text-black text-sm"
      >
        Send
      </button>
    </div>
  );
}
