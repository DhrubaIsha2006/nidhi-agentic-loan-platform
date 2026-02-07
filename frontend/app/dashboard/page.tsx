// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function Dashboard() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="p-10 space-y-6"
//     >
//       <h1 className="text-2xl">Welcome, Riya 👋</h1>

//       <div className="grid grid-cols-3 gap-4">
//         <div className="bg-[#121A33] p-4 rounded-xl">Income<br />₹45,000</div>
//         <div className="bg-[#121A33] p-4 rounded-xl">Credit Score<br />780</div>
//         <div className="bg-[#121A33] p-4 rounded-xl">
//           Status<br />
//           <span className="text-yellow-400">In Progress</span>
//         </div>
//       </div>

//       <Link href="/chat">
//         <button className="bg-[#6AE3FF] text-black px-6 py-3 rounded-xl">
//           Continue Application
//         </button>
//       </Link>
//     </motion.div>
//   );
// }
"use client";
import BackButton from "@/components/dashboard/BackButton";
import DocumentsCard from "@/components/dashboard/DocumentsCard";
import AccountOverview from "@/components/dashboard/AccountOverview";
import PendingTasks from "@/components/dashboard/PendingTasks";
import RecentActivity from "@/components/dashboard/RecentActivity";
import QuickActions from "@/components/dashboard/QuickActions";

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-[#0B1020] text-white px-8 py-6">
      <BackButton />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}
        <DocumentsCard />

        {/* RIGHT */}
        <div className="lg:col-span-2 space-y-6">
          <AccountOverview />
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
