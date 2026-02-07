const rows = [
  {
    name: "A Sharma",
    amount: "₹1,80,000",
    reason: "Missing bank statement",
    date: "2025-10-12",
    assigned: "Unassigned",
    priority: "High",
  },
  {
    name: "R Gupta",
    amount: "₹2,50,000",
    reason: "Manual review required (high TI)",
    date: "2025-10-11",
    assigned: "Agent 3",
    priority: "Critical",
  },
  {
    name: "S Roy",
    amount: "₹90,000",
    reason: "Low credit score – needs call",
    date: "2025-10-09",
    assigned: "Unassigned",
    priority: "Medium",
  },
];

export default function PendingTable() {
  return (
    <div className="rounded-2xl bg-[#121A33] border border-gray-800 p-6">
      <h3 className="font-semibold mb-4">
        Pending Sanctions — Needs Admin Intervention
      </h3>

      <table className="w-full text-sm">
        <thead className="text-gray-400">
          <tr className="text-left">
            <th>Applicant</th>
            <th>Amount</th>
            <th>Reason</th>
            <th>Submitted</th>
            <th>Assigned</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-800">
          {rows.map((r, i) => (
            <tr key={i} className="h-14">
              <td>{r.name}</td>
              <td>{r.amount}</td>
              <td className="text-gray-300">{r.reason}</td>
              <td>{r.date}</td>
              <td>{r.assigned}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-xs
                  ${
                    r.priority === "Critical"
                      ? "bg-red-500/20 text-red-400"
                      : r.priority === "High"
                      ? "bg-orange-500/20 text-orange-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {r.priority}
                </span>
              </td>
              <td className="flex gap-2">
                <button className="px-3 py-1 rounded-lg bg-gray-700 text-xs">
                  Assign
                </button>
                <button className="px-3 py-1 rounded-lg bg-green-500 text-black text-xs">
                  Resolve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
