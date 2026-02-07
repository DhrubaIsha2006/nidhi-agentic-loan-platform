export default function QuickActions() {
  return (
    <div className="rounded-2xl bg-[#121A33] border border-gray-800 p-6 space-y-3">
      <h3 className="font-semibold">Quick Actions</h3>

      <button className="w-full py-2 rounded-xl bg-gradient-to-r
                         from-purple-500 to-blue-500 text-sm font-medium">
        Assign unassigned
      </button>

      <button className="w-full py-2 rounded-xl bg-gray-800 text-sm">
        Send reminder emails
      </button>

      <button className="w-full py-2 rounded-xl bg-gray-800 text-sm">
        Export pending list
      </button>
    </div>
  );
}
