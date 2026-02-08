import { useState } from "react";
import { sendChatMessage, uploadSalarySlip } from "@/lib/api";
import { getSessionId } from "@/lib/session";
import { Stage } from "@/types";

export interface Message {
  role: "user" | "assistant";
  text: string;
}

export interface LoanDecision {
  amount: number;
  emi: number;
  tenure: number;
}

export type ApplicationStatus =
  | "initiated"
  | "collecting_info"
  | "underwriting"
  | "docs_required"
  | "approved"
  | "rejected";

export function useChatFlow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [stage, setStage] = useState<Stage>("CHAT");
  const [loading, setLoading] = useState(false);

  // 🔑 NEW: backend-authoritative state
  const [applicationStatus, setApplicationStatus] =
    useState<ApplicationStatus>("initiated");

  const [decision, setDecision] = useState<LoanDecision | null>(null);
  const [requiresDocuments, setRequiresDocuments] = useState(false);

  async function sendMessage(text: string) {
    setLoading(true);

    const sessionId = getSessionId();

    setMessages((prev) => [...prev, { role: "user", text }]);

    try {
      const res = await sendChatMessage(sessionId, text);

      // 🧠 Always trust backend
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: res.reply },
      ]);

      if (res.stage) setStage(res.stage);
      if (res.application_status)
        setApplicationStatus(res.application_status);

      if (res.decision) setDecision(res.decision);
      if (res.requires_documents !== undefined)
        setRequiresDocuments(res.requires_documents);
    } finally {
      setLoading(false);
    }
  }

  async function submitSalarySlip(
    slipType: "happy" | "borderline" | "reject"
  ) {
    setLoading(true);

    const sessionId = getSessionId();

    try {
      const res = await uploadSalarySlip(sessionId, slipType);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: res.reply },
      ]);

      if (res.application_status)
        setApplicationStatus(res.application_status);

      if (res.decision) setDecision(res.decision);
      setRequiresDocuments(false);
    } finally {
      setLoading(false);
    }
  }

  return {
    messages,
    stage,
    loading,

    // 🔑 expose backend truth
    applicationStatus,
    decision,
    requiresDocuments,

    sendMessage,
   submitSalarySlip,
  };
}
