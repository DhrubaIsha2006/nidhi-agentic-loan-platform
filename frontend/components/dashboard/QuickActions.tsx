export default function QuickActions() {
  return (
    <div className="rounded-2xl bg-[#121A33] border border-gray-800 p-6 space-y-3">
      <h3 className="font-semibold">Quick Actions</h3>

      <button className="w-full py-2 rounded-xl bg-gradient-to-r
                         from-purple-500 to-blue-500 font-medium">
        Download Sanction Letter
      </button>

      <button className="w-full py-2 rounded-xl bg-gray-800 text-sm">
        Request Call-back
      </button>

      <button className="w-full py-2 rounded-xl bg-gray-800 text-sm">
        Open Chat
      </button>
    </div>
  );
}
