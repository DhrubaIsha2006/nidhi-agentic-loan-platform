import { v4 as uuidv4 } from "uuid";

/**
 * Session shape expected by Navbar / UI
 */
export interface Session {
  sessionId: string;
  isAuthenticated: boolean;
  name?: string;
  role?: "user" | "admin";
}

const SESSION_KEY = "nidhi_session_id";

/**
 * Internal low-level session id getter
 */
export function getSessionId(): string {
  if (typeof window === "undefined") {
    return "";
  }

  let sessionId = localStorage.getItem(SESSION_KEY);

  if (!sessionId) {
    sessionId = uuidv4();
    localStorage.setItem(SESSION_KEY, sessionId);
  }

  return sessionId;
}

/**
 * High-level session object for UI
 */
export function getSession(): Session | null {
  if (typeof window === "undefined") return null;

  const sessionId = getSessionId();

  return {
    sessionId,
    isAuthenticated: true, // demo assumption (no auth yet)
     name: "Guest User", // demo-safe default
     role: "user", // 👈 default demo role
  };
}

/**
 * Logout / reset session
 */
export function logout() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SESSION_KEY);
}
