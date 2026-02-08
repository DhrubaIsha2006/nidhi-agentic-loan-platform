// // // "use client";
// // // import Link from "next/link";
// // // import { motion } from "framer-motion";

// // // const users = [
// // //   { name: "Riya Sharma", income: "₹45,000", score: 780 },
// // //   { name: "Aman Verma", income: "₹30,000", score: 640 },
// // // ];

// // // export default function Login() {
// // //   return (
// // //     <div className="p-10">
// // //       <h2 className="text-2xl mb-6">Select Demo User</h2>
// // //       <div className="grid gap-4">
// // //         {users.map((u, i) => (
// // //           <motion.div
// // //             key={i}
// // //             whileHover={{ scale: 1.03 }}
// // //             className="bg-[#121A33] p-4 rounded-xl"
// // //           >
// // //             <p className="font-semibold">{u.name}</p>
// // //             <p className="text-gray-400 text-sm">
// // //               Income: {u.income} · Credit: {u.score}
// // //             </p>
// // //             <Link href="/dashboard">
// // //               <button className="mt-3 text-[#6AE3FF]">Continue →</button>
// // //             </Link>
// // //           </motion.div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import Link from "next/link";
// // import Navbar from "@/components/Navbar";

// // export default function LoginPage() {
// //   const [role, setRole] = useState<"user" | "admin">("user");

// //   return (
// //     <div className="min-h-screen bg-[#0B1020] text-white flex flex-col">
     

// //       <div className="flex-1 flex items-center justify-center px-6">
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="w-full max-w-md bg-[#121A33]/80 backdrop-blur 
// //                      border border-gray-800 rounded-3xl p-8"
// //         >
// //           {/* Role Switch */}
// //           <div className="relative flex bg-[#0B1020] rounded-xl p-1 mb-8">
// //             <motion.div
// //               layout
// //               className="absolute top-1 bottom-1 w-1/2 bg-[#6AE3FF] rounded-lg"
// //               style={{
// //                 left: role === "user" ? "4px" : "50%",
// //               }}
// //             />
// //             <button
// //               onClick={() => setRole("user")}
// //               className={`relative z-10 w-1/2 py-2 text-sm font-medium ${
// //                 role === "user" ? "text-black" : "text-gray-400"
// //               }`}
// //             >
// //               User
// //             </button>
// //             <button
// //               onClick={() => setRole("admin")}
// //               className={`relative z-10 w-1/2 py-2 text-sm font-medium ${
// //                 role === "admin" ? "text-black" : "text-gray-400"
// //               }`}
// //             >
// //               Admin
// //             </button>
// //           </div>

// //           {/* Heading */}
// //           <motion.h2
// //             key={role}
// //             initial={{ opacity: 0, y: 10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             className="text-2xl font-semibold mb-2 text-center"
// //           >
// //             {role === "user" ? "User Login" : "Admin Login"}
// //           </motion.h2>

// //           <p className="text-sm text-gray-400 text-center mb-6">
// //             {role === "user"
// //               ? "Access your loan application and status"
// //               : "Review applications and decisions"}
// //           </p>

// //           {/* Login Form */}
// //           <form className="space-y-4">
// //             <input
// //               type="email"
// //               placeholder={
// //                 role === "user" ? "Email address" : "Admin email"
// //               }
// //               className="w-full px-4 py-3 rounded-xl bg-[#0B1020]
// //                          border border-gray-700 outline-none
// //                          focus:border-[#6AE3FF]"
// //             />

// //             <input
// //               type="password"
// //               placeholder="Password"
// //               className="w-full px-4 py-3 rounded-xl bg-[#0B1020]
// //                          border border-gray-700 outline-none
// //                          focus:border-[#6AE3FF]"
// //             />

// //             <Link
// //               href={role === "user" ? "/dashboard" : "/admin/dashboard"}
// //             >
// //               <motion.button
// //                 whileHover={{ scale: 1.03 }}
// //                 whileTap={{ scale: 0.97 }}
// //                 type="button"
// //                 className="w-full mt-4 py-3 rounded-xl
// //                            bg-[#6AE3FF] text-black font-semibold"
// //               >
// //                 Login as {role === "user" ? "User" : "Admin"}
// //               </motion.button>
// //             </Link>
// //           </form>

// //           {/* Demo Hint */}
// //           <p className="text-xs text-gray-500 text-center mt-6">
// //             Demo credentials • No real authentication required
// //           </p>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Navbar from "@/components/Navbar";

// export default function LoginPage() {
//   const [role, setRole] = useState<"user" | "admin">("user");

//   return (
//     <div className="min-h-screen bg-[#0B1020] text-white flex flex-col">
//       <Navbar />

//       {/* Main Section */}
//       <div className="flex-1 flex items-center justify-center px-6 py-16">
//         <div className="relative w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">

//           {/* LEFT: Branding */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="relative rounded-3xl p-10 bg-gradient-to-br 
//                        from-[#121A33] to-[#0B1020] border border-gray-800"
//           >
//             {/* Ambient glow */}
//             <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#6AE3FF]/15 blur-[120px]" />

//             <h1 className="text-4xl font-bold leading-tight">
//               Welcome to <br />
//               <span className="text-[#6AE3FF]">NIDHI</span>
//             </h1>

//             <p className="mt-6 text-gray-400 text-lg leading-relaxed">
//               A next-generation loan intelligence platform enabling
//               faster decisions, transparent credit, and human-like
//               experiences.
//             </p>

//             <div className="mt-10 space-y-4 text-sm text-gray-300">
//               <div>✔ AI-assisted credit evaluation</div>
//               <div>✔ Secure & compliant workflows</div>
//               <div>✔ Built for NBFCs & users alike</div>
//             </div>
//           </motion.div>

//           {/* RIGHT: Login Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="relative rounded-3xl bg-[#121A33]/80 
//                        backdrop-blur-xl border border-gray-800 p-10"
//           >
//             {/* Subtle glow */}
//             <div className="absolute -top-10 right-0 w-40 h-40 bg-[#6AE3FF]/10 blur-[80px]" />

//             {/* Role Switch – Classy Fintech Tabs */}
//             <div className="flex justify-center mb-10">
//               <div className="flex gap-12 relative">
//                 {(["user", "admin"] as const).map((item) => {
//                   const active = role === item;
//                   return (
//                     <button
//                       key={item}
//                       onClick={() => setRole(item)}
//                       className={`relative pb-2 text-lg font-medium transition-colors
//                         ${
//                           active
//                             ? "text-white"
//                             : "text-gray-500 hover:text-gray-300"
//                         }`}
//                     >
//                       {item === "user" ? "User" : "Admin"}

//                       {active && (
//                         <>
//                           <motion.div
//                             layoutId="active-role"
//                             className="absolute left-0 -bottom-1 w-full h-[2px] 
//                                        bg-[#6AE3FF] rounded-full"
//                             transition={{ duration: 0.3 }}
//                           />
//                           <div
//                             className="absolute -bottom-3 left-1/2 -translate-x-1/2 
//                                        w-20 h-6 bg-[#6AE3FF]/20 blur-xl"
//                           />
//                         </>
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Title */}
//             <motion.h2
//               key={role}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-3xl font-semibold mb-2"
//             >
//               {role === "user" ? "User Access" : "Admin Access"}
//             </motion.h2>

//             <p className="text-gray-400 mb-8">
//               {role === "user"
//                 ? "View your loan journey and decisions"
//                 : "Manage applications and approvals"}
//             </p>

//             {/* Form */}
//             <form className="space-y-5">
//               <input
//                 type="email"
//                 placeholder={role === "user" ? "Email address" : "Admin email"}
//                 className="w-full px-5 py-4 rounded-2xl bg-[#0B1020]
//                            border border-gray-700 outline-none
//                            focus:border-[#6AE3FF] transition"
//               />

//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full px-5 py-4 rounded-2xl bg-[#0B1020]
//                            border border-gray-700 outline-none
//                            focus:border-[#6AE3FF] transition"
//               />

//               <Link
//                 href={role === "user" ? "/dashboard" : "/admin/dashboard"}
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.04 }}
//                   whileTap={{ scale: 0.97 }}
//                   type="button"
//                   className="w-full mt-4 py-4 rounded-2xl
//                              bg-[#6AE3FF] text-black font-semibold text-lg"
//                 >
//                   Continue as {role === "user" ? "User" : "Admin"}
//                 </motion.button>
//               </Link>
//             </form>

           
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { login } from "@/lib/session";

export default function LoginPage() {
  const [role, setRole] = useState<"user" | "admin">("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0B1020] text-white flex flex-col">
      <Navbar />

      {/* Main Section */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="relative w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT: Branding */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-10 bg-gradient-to-br 
                       from-[#121A33] to-[#0B1020] border border-gray-800"
          >
            {/* Ambient glow */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#6AE3FF]/15 blur-[120px]" />

            <h1 className="text-4xl font-bold leading-tight">
              Welcome to <br />
              <span className="text-[#6AE3FF]">NIDHI</span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              A next-generation loan intelligence platform enabling
              faster decisions, transparent credit, and human-like
              experiences.
            </p>

            <div className="mt-10 space-y-4 text-sm text-gray-300">
              <div>✔ AI-assisted credit evaluation</div>
              <div>✔ Secure & compliant workflows</div>
              <div>✔ Built for NBFCs & users alike</div>
            </div>
          </motion.div>

          {/* RIGHT: Login Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-[#121A33]/80 
                       backdrop-blur-xl border border-gray-800 p-10"
          >
            {/* Subtle glow */}
            <div className="absolute -top-10 right-0 w-40 h-40 bg-[#6AE3FF]/10 blur-[80px]" />

            {/* Role Switch – Classy Fintech Tabs */}
            <div className="flex justify-center mb-10">
              <div className="flex gap-12 relative">
                {(["user", "admin"] as const).map((item) => {
                  const active = role === item;
                  return (
                    <button
                      key={item}
                      onClick={() => setRole(item)}
                      className={`relative pb-2 text-lg font-medium transition-colors
                        ${
                          active
                            ? "text-white"
                            : "text-gray-500 hover:text-gray-300"
                        }`}
                    >
                      {item === "user" ? "User" : "Admin"}

                      {active && (
                        <>
                          <motion.div
                            layoutId="active-role"
                            className="absolute left-0 -bottom-1 w-full h-[2px] 
                                       bg-[#6AE3FF] rounded-full"
                            transition={{ duration: 0.3 }}
                          />
                          <div
                            className="absolute -bottom-3 left-1/2 -translate-x-1/2 
                                       w-20 h-6 bg-[#6AE3FF]/20 blur-xl"
                          />
                        </>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Title */}
            <motion.h2
              key={role}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-semibold mb-2"
            >
              {role === "user" ? "User Access" : "Admin Access"}
            </motion.h2>

            <p className="text-gray-400 mb-8">
              {role === "user"
                ? "View your loan journey and decisions"
                : "Manage applications and approvals"}
            </p>

            {/* Form */}
            <div className="space-y-5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={role === "user" ? "Email address" : "Admin email"}
                className="w-full px-5 py-4 rounded-2xl bg-[#0B1020]
                           border border-gray-700 outline-none
                           focus:border-[#6AE3FF] transition"
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-5 py-4 rounded-2xl bg-[#0B1020]
                           border border-gray-700 outline-none
                           focus:border-[#6AE3FF] transition"
              />

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    login(role, email || "demo@nidhi.ai");
                    router.push(
                      role === "user" ? "/dashboard" : "/admin/dashboard"
                    );
                  }, 1200);
                }}
                className="w-full mt-4 py-4 rounded-2xl
                           bg-[#6AE3FF] text-black font-semibold text-lg"
              >
                {loading
                  ? "Authenticating..."
                  : `Continue as ${role === "user" ? "User" : "Admin"}`}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
