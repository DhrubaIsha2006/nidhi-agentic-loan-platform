export type Stage = "CHAT" | "UNDERWRITE" | "VERIFY";

export interface ChatResponse {
  reply: string;
  stage: Stage;
}

export interface UploadResponse {
  reply: string;
  status: "APPROVED" | "REJECTED";
}

export interface AdminLog {
  step: string;
  decision?: any;
  slip_type?: string;
}

export interface AdminApplication {
  session_id: string;
  user: string;
  status: string;
  requested_amount: number;
  stage: string;
  admin_log: AdminLog[];
}
