interface UploadCardProps {
  onUpload: (type: "happy" | "borderline" | "reject") => void;
}

export default function UploadCard({ onUpload }: UploadCardProps) {
  return (
    <div className="rounded-2xl bg-[#121A33] border border-gray-800 p-6 space-y-4">
      <h3 className="font-semibold">Upload Salary Slip</h3>
      <p className="text-xs text-gray-400">
        PDF or image supported
      </p>

      {/* Demo buttons (judge-friendly) */}
      <div className="flex gap-2">
        <button
          onClick={() => onUpload("happy")}
          className="px-3 py-2 text-xs rounded-lg bg-green-500 text-black"
        >
          Happy Path
        </button>

        <button
          onClick={() => onUpload("borderline")}
          className="px-3 py-2 text-xs rounded-lg bg-yellow-500 text-black"
        >
          Borderline
        </button>

        <button
          onClick={() => onUpload("reject")}
          className="px-3 py-2 text-xs rounded-lg bg-red-500 text-black"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
