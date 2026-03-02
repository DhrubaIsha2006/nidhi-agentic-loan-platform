interface ConversationCardProps {
  totalApplications: number;
  underReview: number;
  approved: number;
}

export default function ConversationCard({
  totalApplications,
  underReview,
  approved,
}: ConversationCardProps) {
  const calcPercent = (value: number) =>
    totalApplications === 0
      ? 0
      : Math.round((value / totalApplications) * 100);

  const data = [
    { label: "Applications", value: calcPercent(totalApplications) },
    { label: "Under Review", value: calcPercent(underReview) },
    { label: "Approved", value: calcPercent(approved) },
  ];

  return (
    <div className="rounded-2xl bg-[#121A33] border border-gray-800 p-6">
      <h3 className="font-semibold mb-4">Application Funnel</h3>

      {data.map((item, i) => (
        <div key={i} className="mb-3">
          <div className="flex justify-between text-xs mb-1">
            <span>{item.label}</span>
            <span>{item.value}%</span>
          </div>

          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-2 bg-gradient-to-r from-[#6AE3FF] to-purple-500 rounded-full transition-all"
              style={{ width: `${item.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
