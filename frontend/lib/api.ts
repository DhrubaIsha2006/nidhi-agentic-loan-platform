import { Stage } from "@/types";

const API_BASE = "http://127.0.0.1:8000";

export interface LoanDecision {
  amount: number;
  emi: number;
  tenure: number;
}

export interface ChatResponse {
  reply: string;
  stage?: Stage;

  application_status?: 
    | "initiated"
    | "collecting_info"
    | "underwriting"
    | "docs_required"
    | "approved"
    | "rejected";

  decision?: LoanDecision;
  requires_documents?: boolean;
}

export async function sendChatMessage(
  sessionId: string,
  text: string
): Promise<ChatResponse> {
  const res = await fetch(`${API_BASE}/chat/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      session_id: sessionId,
      message: text,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to send chat message");
  }

  return res.json();
}

export async function uploadSalarySlip(
  sessionId: string,
  slipType: "happy" | "borderline" | "reject"
): Promise<ChatResponse> {
  const res = await fetch(`${API_BASE}/document/upload`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      session_id: sessionId,
      slip_type: slipType,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to upload salary slip");
  }

  return res.json();
}
