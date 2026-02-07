export type Role = "user" | "admin";

export type Session = {
  role: Role;
  name: string;
  email: string;
};

export function login(role: Role, email: string): Session {
  const session: Session =
    role === "user"
      ? {
          role: "user",
          name: "Rohan Sharma",
          email,
        }
      : {
          role: "admin",
          name: "NBFC Admin",
          email,
        };

  localStorage.setItem("nidhi_session", JSON.stringify(session));
  return session;
}

export function getSession(): Session | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem("nidhi_session");
  return raw ? JSON.parse(raw) : null;
}

export function logout() {
  localStorage.removeItem("nidhi_session");
}
