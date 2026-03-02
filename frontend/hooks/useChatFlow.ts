import { useState } from "react";
import { sendChatMessage, uploadSalarySlip } from "@/lib/api";
import { getSessionId } from "@/lib/session";
import { Stage } from "@/types";

/* =======================
   Types
======================= */

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

/* =======================
   Hook
======================= */

export function useChatFlow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [stage, setStage] = useState<Stage>("CHAT");
  const [loading, setLoading] = useState(false);

  // 🔑 backend-authoritative state
  const [applicationStatus, setApplicationStatus] =
    useState<ApplicationStatus>("initiated");

  const [decision, setDecision] = useState<LoanDecision | null>(null);
  const [requiresDocuments, setRequiresDocuments] = useState(false);

  /* =======================
     Send chat message
  ======================= */

  async function sendMessage(text: string) {
    setLoading(true);
    const sessionId = getSessionId();

    // Optimistic user message
    setMessages((prev) => [...prev, { role: "user", text }]);

    try {
      const res = await sendChatMessage(sessionId, text);

      // 🧠 Always trust backend response
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: res.reply },
      ]);

      if (res.stage) setStage(res.stage);
      if (res.application_status) {
        setApplicationStatus(res.application_status);
      }

      if (res.decision) {
        setDecision(res.decision);
      }

      if (typeof res.requires_documents === "boolean") {
        setRequiresDocuments(res.requires_documents);
      }
    } finally {
      setLoading(false);
    }
  }

  /* =======================
     Upload salary slip
  ======================= */

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

      if (res.application_status) {
        setApplicationStatus(res.application_status);
      }

      if (res.decision) {
        setDecision(res.decision);
      }

      setRequiresDocuments(false);
    } finally {
      setLoading(false);
    }
  }

  /* =======================
     Public API
  ======================= */

  return {
    messages,
    stage,
    loading,

    // 🔑 backend truth exposed
    applicationStatus,
    decision,
    requiresDocuments,

    sendMessage,
    submitSalarySlip,
  };
}
