export default function AccountOverview() {
  return (
    <div className="rounded-2xl bg-[#121A33] border border-gray-800 p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">Account Overview</h3>
          <p className="text-xs text-gray-400">Loan status: Active</p>
        </div>

        <p className="text-sm text-gray-300">Next due<br />Oct 05, 2025</p>
      </div>

      {/* Progress */}
      <div className="mt-4">
        <div className="h-2 bg-gray-800 rounded-full">
          <div className="h-2 w-[35%] rounded-full bg-gradient-to-r from-[#6AE3FF] to-purple-500" />
        </div>
        <p className="text-xs text-gray-400 mt-2">
          35% completed · 11 payments left
        </p>
      </div>

      <div className="flex gap-3 mt-5">
        <button className="px-4 py-2 rounded-xl bg-[#6AE3FF] text-black text-sm">
          Pay now
        </button>
        <button className="px-4 py-2 rounded-xl bg-gray-800 text-sm">
          Auto-pay settings
        </button>
      </div>
    </div>
  );
}
