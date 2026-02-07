// // // "use client";

// // // import { motion } from "framer-motion";
// // // import Link from "next/link";

// // // type NavbarProps = {
// // //   isLoggedIn?: boolean;
// // //   role?: "user" | "admin";
// // //   name?: string;
// // // };

// // // export default function Navbar({
// // //   isLoggedIn = false,
// // //   role,
// // //   name,
// // // }: NavbarProps) {
// // //   return (
// // //     <motion.nav
// // //       initial={{ y: -20, opacity: 0 }}
// // //       animate={{ y: 0, opacity: 1 }}
// // //       transition={{ duration: 0.4 }}
// // //       className="w-full px-8 py-4 flex items-center justify-between
// // //                  bg-[#0B1020]/80 backdrop-blur-md border-b border-gray-800"
// // //     >
// // //       {/* LEFT: LOGO + NAME */}
// // //       <Link href="/">
// // //         <div className="flex items-center gap-3 cursor-pointer">
// // //           {/* Logo */}
// // //           <div className="w-9 h-9 rounded-full bg-[#6AE3FF]/20 flex items-center justify-center">
// // //             <div className="w-4 h-4 rounded-full bg-[#6AE3FF]" />
// // //           </div>

// // //           {/* App Name */}
// // //           <span className="text-xl font-bold tracking-wide">
// // //             Nidhi
// // //           </span>
// // //         </div>
// // //       </Link>

// // //       {/* RIGHT: AUTH SECTION */}
// // //       <div className="flex items-center gap-4">
// // //         {!isLoggedIn ? (
// // //           <Link href="/login">
// // //             <motion.button
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               className="px-5 py-2 rounded-xl border border-[#6AE3FF]
// // //                          text-[#6AE3FF] font-medium"
// // //             >
// // //               Login
// // //             </motion.button>
// // //           </Link>
// // //         ) : (
// // //           <div className="flex items-center gap-3">
// // //             {/* Role Badge */}
// // //             <span
// // //               className={`px-3 py-1 rounded-full text-sm capitalize
// // //                 ${
// // //                   role === "admin"
// // //                     ? "bg-purple-500/20 text-purple-400"
// // //                     : "bg-green-500/20 text-green-400"
// // //                 }`}
// // //             >
// // //               {role}
// // //             </span>

// // //             {/* User/Admin Name */}
// // //             <div className="flex items-center gap-2 bg-[#121A33] px-3 py-1.5 rounded-xl">
// // //               <div className="w-7 h-7 rounded-full bg-[#6AE3FF]/20 flex items-center justify-center text-sm font-semibold text-[#6AE3FF]">
// // //                 {name?.charAt(0).toUpperCase()}
// // //               </div>
// // //               <span className="text-sm">{name}</span>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </motion.nav>
// // //   );
// // // }
// // "use client";

// // import { motion } from "framer-motion";
// // import Link from "next/link";

// // type NavbarProps = {
// //   isLoggedIn?: boolean;
// //   role?: "user" | "admin";
// //   name?: string;
// // };

// // export default function Navbar({
// //   isLoggedIn = false,
// //   role,
// //   name,
// // }: NavbarProps) {
// //   return (
// //     <motion.nav
// //       initial={{ y: -30, opacity: 0 }}
// //       animate={{ y: 0, opacity: 1 }}
// //       transition={{ duration: 0.6, ease: "easeOut" }}
// //       className="relative w-full px-8 py-4 flex items-center justify-between
// //                  bg-[#0B1020]/80 backdrop-blur-xl border-b border-gray-800 overflow-hidden"
// //     >
// //       {/* 🔹 Subtle fintech grid background */}
// //       <div
// //         className="absolute inset-0 opacity-[0.04] pointer-events-none"
// //         style={{
// //           backgroundImage:
// //             "linear-gradient(to right, #6AE3FF 1px, transparent 1px), linear-gradient(to bottom, #6AE3FF 1px, transparent 1px)",
// //           backgroundSize: "40px 40px",
// //         }}
// //       />

// //       {/* 🔹 Animated glow line */}
// //       <motion.div
// //         animate={{ x: ["-100%", "100%"] }}
// //         transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
// //         className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#6AE3FF] to-transparent opacity-70"
// //       />

// //       {/* LEFT: LOGO + APP NAME */}
// //       <Link href="/">
// //         <div className="relative z-10 flex items-center gap-3 cursor-pointer">
// //           {/* Logo */}
// //           <motion.div
// //             animate={{ scale: [1, 1.05, 1] }}
// //             transition={{ repeat: Infinity, duration: 3 }}
// //             className="w-10 h-10 rounded-full bg-[#6AE3FF]/20 flex items-center justify-center"
// //           >
// //             <div className="w-4 h-4 rounded-full bg-[#6AE3FF]" />
// //           </motion.div>

// //           {/* App Name */}
// //           <div className="flex flex-col leading-none">
// //             <span className="text-xl font-bold tracking-wide">
// //               Nidhi
// //             </span>
// //             <span className="text-[11px] text-gray-400 tracking-wider">
// //               AI LENDING PLATFORM
// //             </span>
// //           </div>
// //         </div>
// //       </Link>

// //       {/* RIGHT: AUTH / STATUS */}
// //       <div className="relative z-10 flex items-center gap-4">
// //         {!isLoggedIn ? (
// //           <Link href="/login">
// //             <motion.button
// //               whileHover={{ scale: 1.06 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="px-5 py-2 rounded-xl border border-[#6AE3FF]
// //                          text-[#6AE3FF] font-medium
// //                          hover:bg-[#6AE3FF]/10 transition"
// //             >
// //               Login
// //             </motion.button>
// //           </Link>
// //         ) : (
// //           <div className="flex items-center gap-4">
// //             {/* System Live Indicator */}
// //             <div className="flex items-center gap-2 text-xs text-gray-400">
// //               <span className="relative flex h-2 w-2">
// //                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
// //                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
// //               </span>
// //               Live
// //             </div>

// //             {/* Role Badge */}
// //             <span
// //               className={`px-3 py-1 rounded-full text-xs uppercase tracking-wide
// //                 ${
// //                   role === "admin"
// //                     ? "bg-purple-500/20 text-purple-400"
// //                     : "bg-green-500/20 text-green-400"
// //                 }`}
// //             >
// //               {role}
// //             </span>

// //             {/* User/Admin Profile */}
// //             <motion.div
// //               whileHover={{ scale: 1.03 }}
// //               className="flex items-center gap-2 bg-[#121A33]
// //                          px-3 py-1.5 rounded-xl border border-gray-700"
// //             >
// //               <div className="w-7 h-7 rounded-full bg-[#6AE3FF]/20 flex items-center justify-center text-sm font-semibold text-[#6AE3FF]">
// //                 {name?.charAt(0).toUpperCase()}
// //               </div>
// //               <span className="text-sm">{name}</span>
// //             </motion.div>
// //           </div>
// //         )}
// //       </div>
// //     </motion.nav>
// //   );
// // }
// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { getSession, logout, Session } from "@/lib/auth";

// export default function Navbar() {
//   const [session, setSession] = useState<Session | null>(null);

//   useEffect(() => {
//     setSession(getSession());
//   }, []);

//   return (
//     <nav className="w-full px-8 py-4 flex items-center justify-between
//                     bg-[#0B1020]/80 backdrop-blur-md border-b border-gray-800">
//       {/* Logo */}
//       <Link href="/" className="flex items-center gap-2">
//         <div className="w-3 h-3 rounded-full bg-[#6AE3FF]" />
//         <span className="text-lg font-bold">
//           NIDHI<span className="text-[#6AE3FF]">.</span>
//         </span>
//       </Link>

//       {/* Right */}
//       {session ? (
//         <div className="flex items-center gap-4">
//           <span className="text-sm text-gray-400 capitalize">
//             {session.role}
//           </span>

//           <div className="px-3 py-1 rounded-full bg-[#121A33] text-sm">
//             {session.name}
//           </div>

//           <button
//             onClick={() => {
//               logout();
//               location.href = "/";
//             }}
//             className="text-sm text-red-400 hover:text-red-300"
//           >
//             Logout
//           </button>
//         </div>
//       ) : (
//         <Link href="/login" className="text-sm text-[#6AE3FF]">
//           Login
//         </Link>
//       )}
//     </nav>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSession, logout, Session } from "@/lib/auth";

export default function Navbar() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(getSession());
  }, []);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full px-8 py-4 flex items-center justify-between
                 bg-[#0B1020]/80 backdrop-blur-xl border-b border-gray-800 overflow-hidden"
    >
      {/* 🔹 Subtle fintech grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #6AE3FF 1px, transparent 1px), linear-gradient(to bottom, #6AE3FF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* 🔹 Animated glow line */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#6AE3FF] to-transparent opacity-70"
      />

      {/* LEFT: LOGO + APP NAME */}
      <Link href="/">
        <div className="relative z-10 flex items-center gap-3 cursor-pointer">
          {/* Logo */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="w-10 h-10 rounded-full bg-[#6AE3FF]/20 flex items-center justify-center"
          >
            <div className="w-4 h-4 rounded-full bg-[#6AE3FF]" />
          </motion.div>

          {/* App Name */}
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-wide">
              Nidhi
            </span>
            <span className="text-[11px] text-gray-400 tracking-wider">
              AI LENDING PLATFORM
            </span>
          </div>
        </div>
      </Link>

      {/* RIGHT: AUTH / STATUS */}
      <div className="relative z-10 flex items-center gap-4">
        {!session ? (
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-xl border border-[#6AE3FF]
                         text-[#6AE3FF] font-medium
                         hover:bg-[#6AE3FF]/10 transition"
            >
              Login
            </motion.button>
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            {/* System Live Indicator */}
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Live
            </div>

            {/* Role Badge */}
            <span
              className={`px-3 py-1 rounded-full text-xs uppercase tracking-wide
                ${
                  session.role === "admin"
                    ? "bg-purple-500/20 text-purple-400"
                    : "bg-green-500/20 text-green-400"
                }`}
            >
              {session.role}
            </span>

            {/* User/Admin Profile */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2 bg-[#121A33]
                         px-3 py-1.5 rounded-xl border border-gray-700"
            >
              <div className="w-7 h-7 rounded-full bg-[#6AE3FF]/20 flex items-center justify-center text-sm font-semibold text-[#6AE3FF]">
                {session.name.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm">{session.name}</span>
            </motion.div>

            {/* Logout */}
            <button
              onClick={() => {
                logout();
                location.href = "/";
              }}
              className="text-xs text-red-400 hover:text-red-300"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </motion.nav>
  );
}

