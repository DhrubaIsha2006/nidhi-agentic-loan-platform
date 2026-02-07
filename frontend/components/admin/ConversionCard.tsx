export default function ConversionCard() {
  return (
    <div className="rounded-2xl bg-[#121A33] border border-gray-800 p-6">
      <h3 className="font-semibold mb-4">Conversion Funnel</h3>

      {[
        { label: "Visitors", value: 100 },
        { label: "Conversations", value: 65 },
        { label: "Converted", value: 28 },
      ].map((item, i) => (
        <div key={i} className="mb-3">
          <div className="flex justify-between text-xs mb-1">
            <span>{item.label}</span>
            <span>{item.value}%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full">
            <div
              className="h-2 bg-gradient-to-r from-[#6AE3FF] to-purple-500 rounded-full"
              style={{ width: `${item.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
