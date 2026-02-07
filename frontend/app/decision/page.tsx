"use client";
import { motion } from "framer-motion";

export default function Decision() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="h-screen flex items-center justify-center"
    >
      <div className="bg-[#121A33] p-8 rounded-2xl text-center space-y-4">
        <h2 className="text-2xl text-green-400">Loan Approved 🎉</h2>
        <p>Amount: ₹2,00,000</p>
        <p>EMI: ₹6,200 / month</p>
        <p className="text-gray-400">
          Reason: Stable income and strong credit profile
        </p>
      </div>
    </motion.div>
  );
}
