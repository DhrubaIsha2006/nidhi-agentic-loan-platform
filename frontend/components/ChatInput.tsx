// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function ChatInput() {
//   const [value, setValue] = useState("");

//   return (
//     <div className="flex gap-2 pt-4 border-t border-gray-700">
//       <input
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         placeholder="Type your message…"
//         className="flex-1 bg-[#0B1020] border border-gray-700 rounded-xl px-4 py-2 outline-none"
//       />
//       <motion.button
//         whileTap={{ scale: 0.95 }}
//         className="bg-[#6AE3FF] text-black px-5 rounded-xl font-semibold"
//       >
//         Send
//       </motion.button>
//     </div>
//   );
// }
import { motion } from "framer-motion";
import { useState } from "react";

interface ChatInputProps {
  onSend: (msg: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const [value, setValue] = useState("");

  return (
    <div className="border-t border-gray-800 bg-[#0B1020] px-4 py-4">
      <div className="max-w-3xl mx-auto flex items-center gap-3">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-5 py-3 rounded-2xl bg-[#121A33]
                     border border-gray-700 outline-none
                     focus:border-[#6AE3FF] text-sm"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (!value.trim()) return;
            onSend(value);
            setValue("");
          }}
          className="px-5 py-3 rounded-2xl bg-[#6AE3FF] 
                     text-black font-semibold text-sm"
        >
          Send
        </motion.button>
      </div>
    </div>
  );
}
