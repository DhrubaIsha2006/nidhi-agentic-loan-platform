// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export default function LandingPage() {
//   return (
//     <div className="min-h-screen bg-[#0B1020] text-white flex flex-col">
//       <Navbar />
//       {/* <Navbar isLoggedIn role="user" name="Riya Sharma" /> */}


//       {/* HERO SECTION */}
//       <main className="flex-1 flex items-center justify-center px-6">
//         <div className="max-w-4xl text-center space-y-8">

//           {/* Floating Accent */}
//           <motion.div
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 4 }}
//             className="mx-auto w-16 h-16 rounded-full bg-[#6AE3FF]/20 flex items-center justify-center"
//           >
//             <div className="w-6 h-6 rounded-full bg-[#6AE3FF]" />
//           </motion.div>

//           {/* Title */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-5xl font-bold leading-tight"
//           >
//             Smarter Loan Decisions.
//             <br />
//             <span className="text-[#6AE3FF]">Powered by Conversational AI.</span>
//           </motion.h1>

//           {/* Subtitle */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="text-gray-400 text-lg max-w-2xl mx-auto"
//           >
//             NIDHI helps NBFCs approve loans faster, smarter, and more transparently
//             using AI-driven conversations and explainable decision flows.
//           </motion.p>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             <Link href="/chat">
//               <button className="px-8 py-4 rounded-2xl bg-[#6AE3FF] text-black font-semibold text-lg hover:scale-105 transition">
//                 Start Loan Chat →
//               </button>
//             </Link>
//           </motion.div>

//           {/* Feature Highlights */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12"
//           >
//             {[
//               {
//                 title: "Conversational UX",
//                 desc: "Feels like talking to a human, not filling a form.",
//               },
//               {
//                 title: "Instant Decisions",
//                 desc: "Happy-path approvals in seconds.",
//               },
//               {
//                 title: "Explainable AI",
//                 desc: "Clear reasons behind every decision.",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-[#121A33] p-6 rounded-2xl border border-gray-800"
//               >
//                 <h3 className="font-semibold mb-2">{item.title}</h3>
//                 <p className="text-sm text-gray-400">{item.desc}</p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </main>

//       {/* FOOTER */}
//       <Footer />
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B1020] text-white flex flex-col overflow-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* SPACE AFTER NAVBAR */}
      <div className="h-16" />

      {/* ================= GLOBAL AMBIENT BACKGROUND ================= */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-20%] left-[20%] w-[900px] h-[600px] bg-[#6AE3FF]/10 blur-[180px]" />
        <div className="absolute top-[35%] right-[10%] w-[700px] h-[500px] bg-purple-500/10 blur-[160px]" />
        <div className="absolute bottom-[-20%] left-[30%] w-[800px] h-[600px] bg-cyan-400/5 blur-[200px]" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative px-6">
        <div className="max-w-6xl mx-auto text-center space-y-8 pt-20 pb-28">

          {/* Trust pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full 
                       bg-[#121A33]/80 backdrop-blur border border-gray-800
                       text-sm text-gray-300 mx-auto"
          >
            <span className="text-green-400">●</span>
            AI-powered lending demo for NBFCs
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Intelligent Loan Decisions,
            <br />
            <span className="text-[#6AE3FF]">
              Delivered Through Conversation
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
            NIDHI enables NBFCs to assess creditworthiness, handle document
            verification, and make explainable loan decisions using a
            conversational AI interface.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4 pt-2"
          >
            <Link href="/chat">
              <button className="px-8 py-4 rounded-2xl bg-[#6AE3FF] text-black font-semibold text-lg hover:scale-105 transition">
                Start Loan Chat →
              </button>
            </Link>

            <Link href="/admin/dashboard">
              <button className="px-8 py-4 rounded-2xl border border-gray-700 text-gray-300 hover:border-[#6AE3FF] transition">
                View Admin Demo
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="relative px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-24">

          {[
            {
              title: "Conversational Credit Flow",
              desc: "Applicants interact naturally while risk is evaluated in real time.",
            },
            {
              title: "Multimodal Verification",
              desc: "Document checks are triggered only when needed.",
            },
            {
              title: "Explainable Decisions",
              desc: "Every decision is transparent and auditable.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#121A33]/80 backdrop-blur
                         p-8 rounded-2xl border border-gray-800"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= METRICS ================= */}
      <section className="relative px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center py-24">

          {[
            { value: "< 5s", label: "Decision Time" },
            { value: "60%", label: "Faster Approvals" },
            { value: "100%", label: "Explainability" },
            { value: "AI-Driven", label: "Workflow" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-4xl font-bold text-[#6AE3FF]">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SPACE BEFORE FOOTER */}
      <div className="h-16" />

      <Footer />
    </div>
  );
}
