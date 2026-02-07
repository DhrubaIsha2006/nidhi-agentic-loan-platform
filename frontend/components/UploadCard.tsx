// "use client";
// import { motion } from "framer-motion";

// export default function UploadCard({
//   label,
//   description,
// }: {
//   label: string;
//   description: string;
// }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.03 }}
//       className="bg-[#121A33] border border-gray-700 p-4 rounded-xl cursor-pointer"
//     >
//       <p className="font-semibold">{label}</p>
//       <p className="text-sm text-gray-400">{description}</p>
//     </motion.div>
//   );
// }
import { motion } from "framer-motion";

export default function UploadCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-2xl border border-dashed border-gray-700
                 bg-[#0B1020] p-6 text-center"
    >
      <div className="text-[#6AE3FF] text-3xl mb-3">📄</div>
      <h4 className="font-semibold">Upload Salary Slip</h4>
      <p className="text-xs text-gray-400 mt-1">
        PDF or Image supported
      </p>

      <button
        className="mt-4 px-4 py-2 rounded-xl bg-[#6AE3FF]
                   text-black text-sm font-medium"
      >
        Choose File
      </button>
    </motion.div>
  );
}
