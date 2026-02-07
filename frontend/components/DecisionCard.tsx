import { motion } from "framer-motion";

export default function DecisionCard() {
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
          <span>₹5,00,000</span>
        </div>
        <div className="flex justify-between">
          <span>EMI</span>
          <span>₹22,800 / month</span>
        </div>
        <div className="flex justify-between">
          <span>Tenure</span>
          <span>24 months</span>
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-300">
        Reason: Stable income, healthy credit score, and low risk profile.
      </p>
    </motion.div>
  );
}
