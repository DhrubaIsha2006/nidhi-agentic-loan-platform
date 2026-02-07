import Link from "next/link";
import { motion } from "framer-motion";

export default function BackButton() {
  return (
    <Link href="/chat">
      <motion.button
        whileHover={{ x: -4 }}
        className="text-sm text-gray-300 flex items-center gap-2"
      >
        ← Back to Chat
      </motion.button>
    </Link>
  );
}
