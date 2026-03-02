interface AccountOverviewProps {
  applicationStatus: string;
  stage: string;
}

export default function AccountOverview({
  applicationStatus,
  stage,
}: AccountOverviewProps) {
  const progressMap: Record<string, number> = {
    CHAT: 20,
    COLLECTING_INFO: 40,
    DOCUMENTS_REQUIRED: 60,
    UNDER_REVIEW: 80,
    DECISION_MADE: 100,
  };

  const progress = progressMap[stage] ?? 20;

  return (
    <div className="rounded-2xl bg-[#121A33] border border-gray-800 p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">Application Overview</h3>
          <p className="text-xs text-gray-400">
            Status: {applicationStatus.replace("_", " ")}
          </p>
        </div>

        <p className="text-sm text-gray-300">
          Stage<br />
          {stage.replace("_", " ")}
        </p>
      </div>

      {/* Progress */}
      <div className="mt-4">
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-[#6AE3FF] to-purple-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-xs text-gray-400 mt-2">
          {progress}% completed · Application in progress
        </p>
      </div>

      <div className="flex gap-3 mt-5">
        {applicationStatus === "documents_required" && (
          <button className="px-4 py-2 rounded-xl bg-[#6AE3FF] text-black text-sm">
            Upload documents
          </button>
        )}

        {applicationStatus === "under_review" && (
          <button
            disabled
            className="px-4 py-2 rounded-xl bg-gray-800 text-sm text-gray-400 cursor-not-allowed"
          >
            Awaiting review
          </button>
        )}
      </div>
    </div>
  );
}
