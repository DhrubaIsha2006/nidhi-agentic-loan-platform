import { motion } from "framer-motion";

interface Decision {
  amount: number;
  emi: number;
  tenure: number;
}

interface DecisionCardProps {
  applicationStatus: "approved" | "rejected" | string;
  decision: Decision | null;
  reason?: string;
}

export default function DecisionCard({
  applicationStatus,
  decision,
  reason,
}: DecisionCardProps) {
  // ⛔ DO NOT RENDER unless backend explicitly approves
  if (applicationStatus !== "approved" || !decision) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-green-500/10 border border-green-500/30 p-6"
    >
      <h3 className="text-xl font-semibold text-green-400">
        Loan Approved 🎉
      </h3>

      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Approved Amount</span>
          <span>₹{decision.amount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>EMI</span>
          <span>₹{decision.emi.toLocaleString()} / month</span>
        </div>
        <div className="flex justify-between">
          <span>Tenure</span>
          <span>{decision.tenure} months</span>
        </div>
      </div>

      {reason && (
        <p className="mt-4 text-xs text-gray-300">
          Reason: {reason}
        </p>
      )}
    </motion.div>
  );
}
