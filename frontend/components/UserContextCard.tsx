import { motion } from "framer-motion";

interface UserContext {
  name?: string;
  monthlyIncome?: number;
  creditScore?: number;
  requestedAmount?: number;
  tenure?: number;
}

interface UserContextCardProps {
  user: UserContext;
  applicationStatus: string;
}

export default function UserContextCard({
  user,
  applicationStatus,
}: UserContextCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="rounded-2xl bg-[#121A33] border border-gray-800 p-6 space-y-5"
    >
      <h3 className="text-lg font-semibold">Applicant Snapshot</h3>

      <div className="space-y-2 text-sm text-gray-300">
        <div className="flex justify-between">
          <span>Name</span>
          <span className="text-white">
            {user.name ?? "—"}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Monthly Income</span>
          <span className="text-white">
            {user.monthlyIncome
              ? `₹${user.monthlyIncome.toLocaleString()}`
              : "—"}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Credit Score</span>
          <span className="text-green-400">
            {user.creditScore ?? "—"}
          </span>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-700">
        <div className="flex justify-between text-sm">
          <span>Loan Amount</span>
          <span>
            {user.requestedAmount
              ? `₹${user.requestedAmount.toLocaleString()}`
              : "—"}
          </span>
        </div>

        <div className="flex justify-between text-sm mt-2">
          <span>Tenure</span>
          <span>
            {user.tenure ? `${user.tenure} months` : "—"}
          </span>
        </div>
      </div>

      <span
        className={`inline-block mt-4 px-3 py-1 text-xs rounded-full
          ${
            applicationStatus === "approved"
              ? "bg-green-500/20 text-green-400"
              : applicationStatus === "rejected"
              ? "bg-red-500/20 text-red-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
      >
        {applicationStatus.replace("_", " ")}
      </span>
    </motion.div>
  );
}
