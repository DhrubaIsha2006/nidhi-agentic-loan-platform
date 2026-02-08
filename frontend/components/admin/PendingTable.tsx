interface PendingApplication {
  id: string;
  name: string;
  amount: number;
  reason: string;
  submittedAt: string;
  assignedTo?: string;
  priority: "Critical" | "High" | "Medium";
}

interface PendingTableProps {
  applications: PendingApplication[];
}

export default function PendingTable({ applications }: PendingTableProps) {
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
          {applications.length === 0 ? (
            <tr>
              <td colSpan={7} className="text-center py-6 text-gray-400">
                No pending applications 🎉
              </td>
            </tr>
          ) : (
            applications.map((app) => (
              <tr key={app.id} className="h-14">
                <td>{app.name}</td>
                <td>₹{app.amount.toLocaleString()}</td>
                <td className="text-gray-300">{app.reason}</td>
                <td>{app.submittedAt}</td>
                <td>{app.assignedTo ?? "Unassigned"}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs
                      ${
                        app.priority === "Critical"
                          ? "bg-red-500/20 text-red-400"
                          : app.priority === "High"
                          ? "bg-orange-500/20 text-orange-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                  >
                    {app.priority}
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
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
