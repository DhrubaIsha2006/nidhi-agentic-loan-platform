"use client";

import AdminTopBar from "@/components/admin/AdminTopBar";
import MetricCard from "@/components/admin/MetricCard";
import PendingTable from "@/components/admin/PendingTable";
import ConversationCard from "@/components/admin/ConversationCard";
import QuickActions from "@/components/admin/QuickActions";

import { useAdminApplications } from "@/hooks/useAdminApplications";
import { resolveApplication } from "@/lib/api";

export default function AdminDashboard() {
  const { applications, loading, reload } = useAdminApplications();

  async function handleResolve(applicationId: string) {
    await resolveApplication(applicationId);
    reload(); // refresh admin view after action
  }

  return (
    <div className="min-h-screen bg-[#0B1020] text-white">
      <AdminTopBar />

      <div className="px-8 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          <MetricCard
            title="Total Users"
            value="12,450"
            gradient="from-purple-500/30 to-blue-500/30"
          />
          <MetricCard
            title="Active (30d)"
            value="3,870"
            gradient="from-blue-500/30 to-cyan-500/30"
          />
          <QuickActions />
        </div>

        {/* MAIN */}
        <div className="lg:col-span-3 space-y-6">
          {loading ? (
            <div className="text-gray-400">Loading pending applications…</div>
          ) : (
            <PendingTable
              applications={applications.map((app) => ({
                id: app.application_id,
                name: app.name,
                amount: app.amount,
                reason: app.reason,
                submittedAt: app.submitted_at,
                assignedTo: app.assigned_to,
                priority:
                  app.priority === "HIGH"
                    ? "High"
                    : app.priority === "MEDIUM"
                    ? "Medium"
                    : "Critical",
              }))}
              onResolve={handleResolve}
            />
          )}

          <ConversationCard
  totalApplications={applications.length}
  underReview={
    applications.filter(
      (app) => app.status === "under_review"
    ).length
  }
  approved={
    applications.filter(
      (app) => app.status === "approved"
    ).length
  }
/>

        </div>
      </div>
    </div>
  );
}
