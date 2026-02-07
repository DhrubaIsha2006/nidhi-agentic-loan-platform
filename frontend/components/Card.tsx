import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#121A33] rounded-2xl p-5 shadow-md">
      {children}
    </div>
  );
}
