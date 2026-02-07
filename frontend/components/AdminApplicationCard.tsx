import StatusBadge from "./StatusBadge";

type Props = {
  name: string;
  amount: string;
  status: "approved" | "pending" | "rejected";
  reason: string;
};

export default function AdminApplicationCard({
  name,
  amount,
  status,
  reason,
}: Props) {
  return (
    <div className="bg-[#121A33] p-4 rounded-xl space-y-2">
      <div className="flex justify-between items-center">
        <p className="font-semibold">{name}</p>
        <StatusBadge status={status} />
      </div>
      <p className="text-sm text-gray-400">Amount: {amount}</p>
      <p className="text-xs text-gray-500">Reason: {reason}</p>
    </div>
  );
}
