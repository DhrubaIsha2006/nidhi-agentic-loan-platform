"use client";

import BackButton from "@/components/dashboard/BackButton";
import DocumentsCard from "@/components/dashboard/DocumentsCard";
import AccountOverview from "@/components/dashboard/AccountOverview";
import PendingTasks from "@/components/dashboard/PendingTasks";
import RecentActivity from "@/components/dashboard/RecentActivity";
import QuickActions from "@/components/dashboard/QuickActions";
import { useChatFlow } from "@/hooks/useChatFlow";

export default function UserDashboard() {
  const { stage, applicationStatus } = useChatFlow();

  return (
    <div className="min-h-screen bg-[#0B1020] text-white px-8 py-6">
      <BackButton />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}
        <DocumentsCard />

        {/* RIGHT */}
        <div className="lg:col-span-2 space-y-6">
          <AccountOverview
            applicationStatus={applicationStatus ?? "in_progress"}
            stage={stage}
          />

          <PendingTasks />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RecentActivity />
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}
