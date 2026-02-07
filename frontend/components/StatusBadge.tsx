type Status = "approved" | "pending" | "rejected";

const colorMap = {
  approved: "bg-green-500/20 text-green-400",
  pending: "bg-yellow-500/20 text-yellow-400",
  rejected: "bg-red-500/20 text-red-400",
};

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm capitalize ${colorMap[status]}`}
    >
      {status}
    </span>
  );
}
