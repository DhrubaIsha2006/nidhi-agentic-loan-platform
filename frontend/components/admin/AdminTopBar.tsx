"use client";
import { motion } from "framer-motion";

export default function AdminTopBar() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between px-8 py-4
                 bg-[#0B1020]/80 backdrop-blur border-b border-gray-800"
    >
      <div>
        <h1 className="text-xl font-bold">LoanBot — Admin</h1>
        <p className="text-xs text-gray-400">
          Operational dashboard · manage pending sanctions & measure bot performance
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-4 py-2 rounded-xl bg-[#121A33] border border-gray-700 text-sm">
          User view
        </button>
        <button className="px-4 py-2 rounded-xl bg-pink-600 text-sm font-medium">
          Logout
        </button>
      </div>
    </motion.div>
  );
}
