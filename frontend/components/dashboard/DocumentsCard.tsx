import { motion } from "framer-motion";

export default function DocumentsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-[#121A33] border border-gray-800 p-6 space-y-5"
    >
      <div>
        <h3 className="font-semibold">Your Documents</h3>
        <p className="text-xs text-gray-400">
          Files used for verification · quick actions available
        </p>
      </div>

      {/* Files */}
      <div className="space-y-3">
        {[
          { name: "salary_proof.pdf", status: "Verified", color: "green" },
          { name: "id_card.jpg", status: "Pending", color: "purple" },
        ].map((doc, i) => (
          <div
            key={i}
            className="flex items-center justify-between
                       bg-[#0B1020] border border-gray-700
                       rounded-xl px-4 py-3"
          >
            <div>
              <p className="text-sm">{doc.name}</p>
              <p className="text-xs text-gray-400">Uploaded · 1.2 MB</p>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-xs
              ${
                doc.color === "green"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-purple-500/20 text-purple-400"
              }`}
            >
              {doc.status}
            </span>
          </div>
        ))}
      </div>

      {/* Upload */}
      <div className="border border-dashed border-gray-600 rounded-xl
                      p-4 text-center text-sm text-gray-400">
        Click or drop files here  
        <br />
        <span className="text-xs">PDF / JPG / PNG supported</span>
      </div>

      {/* Sanction */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-700">
        <div>
          <p className="text-xs text-gray-400">Sanctioned Amount</p>
          <p className="text-lg font-semibold">₹1,50,000</p>
        </div>

        <div className="px-4 py-2 rounded-xl bg-purple-500 text-black font-semibold">
          EMI ₹4,200
        </div>
      </div>
    </motion.div>
  );
}
