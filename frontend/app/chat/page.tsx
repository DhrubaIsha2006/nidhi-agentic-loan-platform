"use client";

import Navbar from "@/components/Navbar";
import ChatBubble from "@/components/ChatBubble";
import ChatInput from "@/components/ChatInput";
import UserContextCard from "@/components/UserContextCard";
import UploadCard from "@/components/UploadCard";
import DecisionCard from "@/components/DecisionCard";
import { useChatFlow } from "@/hooks/useChatFlow";

export default function ChatPage() {
  const {
    messages,
    stage,
    loading,
    sendMessage,
    submitSalarySlip,
    applicationStatus,
    userContext,
    decision,
  } = useChatFlow();

  return (
    <div className="min-h-screen bg-[#0B1020] text-white flex flex-col">
      <Navbar />

      <div className="flex-1 px-6 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* LEFT PANEL */}
        <div className="lg:col-span-1 space-y-6">
          <UserContextCard
            user={userContext ?? {}}
            applicationStatus={applicationStatus ?? "in_progress"}
          />

          {stage === "DOCUMENTS_REQUIRED" && (
            <UploadCard onUpload={submitSalarySlip} />
          )}
        </div>

        {/* CHAT AREA */}
        <div className="lg:col-span-3 flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 px-2">
            {messages.map((m, i) => (
              <ChatBubble key={i} role={m.role} message={m.text} />
            ))}

            {/* Decision ONLY when backend says so */}
            {decision && <DecisionCard decision={decision} />}
          </div>

          <ChatInput
            disabled={loading}
            onSend={(text) => sendMessage(text)}
          />
        </div>
      </div>
    </div>
  );
}
