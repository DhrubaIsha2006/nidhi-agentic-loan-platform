// export default function AdminDashboard() {
//   return (
//     <div className="p-10">
//       <h1 className="text-2xl mb-6">Admin Dashboard</h1>

//       <div className="bg-[#121A33] p-4 rounded-xl space-y-2">
//         <p><b>Riya Sharma</b> – Approved</p>
//         <p className="text-gray-400 text-sm">
//           Reason: Stable income, good credit
//         </p>
//       </div>
//     </div>
//   );
// }
import AdminTopBar from "@/components/admin/AdminTopBar";
import MetricCard from "@/components/admin/MetricCard";
import PendingTable from "@/components/admin/PendingTable";
import ConversionCard from "@/components/admin/ConversionCard";
import QuickActions from "@/components/admin/QuickActions";

export default function AdminDashboard() {
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
          <PendingTable />
          <ConversionCard />
        </div>
      </div>
    </div>
  );
}
