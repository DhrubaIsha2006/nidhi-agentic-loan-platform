interface MetricCardProps {
  title: string;
  value: string;
  sub?: string;
  gradient: string;
}

export default function MetricCard({
  title,
  value,
  sub,
  gradient,
}: MetricCardProps) {
  return (
    <div
      className={`rounded-2xl p-5 bg-gradient-to-br ${gradient}
                  border border-gray-800`}
    >
      <p className="text-xs text-gray-300">{title}</p>
      <h2 className="text-2xl font-bold mt-1">{value}</h2>
      {sub && <p className="text-xs text-gray-300 mt-1">{sub}</p>}
    </div>
  );
}
