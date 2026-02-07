// "use client";
// import ChatBubble from "@/components/ChatBubble";
// import ChatInput from "@/components/ChatInput";

// export default function ChatPage() {
//   return (
//     <div className="flex flex-col h-screen p-6">
//       <div className="flex-1 space-y-3 overflow-y-auto">
//         <ChatBubble from="bot" text="Hi! How much loan do you need?" />
//         <ChatBubble from="user" text="₹2,00,000" />
//         <ChatBubble from="bot" text="Please upload your salary slip for verification." />
//       </div>
//       <ChatInput />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ChatBubble from "@/components/ChatBubble";
import ChatInput from "@/components/ChatInput";
import UserContextCard from "@/components/UserContextCard";
import UploadCard from "@/components/UploadCard";
import DecisionCard from "@/components/DecisionCard";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      message:
        "Hello 👋 I’m Nidhi. I’ll guide you through your loan application step by step.",
    },
  ]);

  return (
    <div className="min-h-screen bg-[#0B1020] text-white flex flex-col">
      <Navbar />

      <div className="flex-1 px-6 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* LEFT PANEL */}
        <div className="lg:col-span-1 space-y-6">
          <UserContextCard />
          <UploadCard />
        </div>

        {/* CHAT AREA */}
        <div className="lg:col-span-3 flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 px-2">
            {messages.map((m, i) => (
              <ChatBubble key={i} role={m.role} message={m.message} />
            ))}

            {/* Final decision shown inline like Streamlit */}
            <DecisionCard />
          </div>

          <ChatInput onSend={() => {}} />
        </div>
      </div>
    </div>
  );
}

