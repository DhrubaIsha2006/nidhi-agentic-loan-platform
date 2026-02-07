import { motion } from "framer-motion";

export default function UserContextCard() {
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
          <span className="text-white">Rohit Sharma</span>
        </div>
        <div className="flex justify-between">
          <span>Monthly Income</span>
          <span className="text-white">₹60,000</span>
        </div>
        <div className="flex justify-between">
          <span>Credit Score</span>
          <span className="text-green-400">742</span>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-700">
        <div className="flex justify-between text-sm">
          <span>Loan Amount</span>
          <span>₹5,00,000</span>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span>Tenure</span>
          <span>24 months</span>
        </div>
      </div>

      <span className="inline-block mt-4 px-3 py-1 text-xs rounded-full
                       bg-yellow-500/20 text-yellow-400">
        In Progress
      </span>
    </motion.div>
  );
}
