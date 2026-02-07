export default function PendingTasks() {
  return (
    <div className="rounded-2xl bg-[#121A33] border border-gray-800 p-6">
      <h3 className="font-semibold mb-4">
        Pending Tasks <span className="text-xs text-gray-400">· 2 pending</span>
      </h3>

      {[
        "EMI due · Oct 2025",
        "Upload bank statement",
      ].map((task, i) => (
        <div
          key={i}
          className="flex justify-between items-center
                     bg-[#0B1020] border border-gray-700
                     rounded-xl px-4 py-3 mb-3"
        >
          <p className="text-sm">{task}</p>
          <div className="flex gap-2">
            <button className="text-xs bg-gray-700 px-3 py-1 rounded-lg">
              Mark done
            </button>
            <button className="text-xs bg-[#6AE3FF] text-black px-3 py-1 rounded-lg">
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
