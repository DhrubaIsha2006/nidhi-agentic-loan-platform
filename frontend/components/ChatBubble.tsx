// "use client";
// import { motion } from "framer-motion";

// export default function ChatBubble({
//   from,
//   text,
// }: {
//   from: "user" | "bot";
//   text: string;
// }) {
//   const isUser = from === "user";

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 8 }}
//       animate={{ opacity: 1, y: 0 }}
//       className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm ${
//         isUser
//           ? "ml-auto bg-[#6AE3FF] text-black rounded-br-none"
//           : "mr-auto bg-[#121A33] text-white rounded-bl-none"
//       }`}
//     >
//       {text}
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";

interface ChatBubbleProps {
  role: "user" | "bot";
  message: string;
}

export default function ChatBubble({ role, message }: ChatBubbleProps) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[75%] px-5 py-3 rounded-2xl text-sm leading-relaxed
        ${
          isUser
            ? "bg-[#6AE3FF] text-black rounded-br-md shadow-md"
            : "bg-[#151C34] text-gray-200 rounded-bl-md border border-gray-800"
        }`}
      >
        {message}
      </div>
    </motion.div>
  );
}

