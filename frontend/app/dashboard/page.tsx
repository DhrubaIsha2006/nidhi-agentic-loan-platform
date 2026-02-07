"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-10 space-y-6"
    >
      <h1 className="text-2xl">Welcome, Riya 👋</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#121A33] p-4 rounded-xl">Income<br />₹45,000</div>
        <div className="bg-[#121A33] p-4 rounded-xl">Credit Score<br />780</div>
        <div className="bg-[#121A33] p-4 rounded-xl">
          Status<br />
          <span className="text-yellow-400">In Progress</span>
        </div>
      </div>

      <Link href="/chat">
        <button className="bg-[#6AE3FF] text-black px-6 py-3 rounded-xl">
          Continue Application
        </button>
      </Link>
    </motion.div>
  );
}
