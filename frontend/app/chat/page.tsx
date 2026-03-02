// // // // // "use client";
// // // // // // // // // // // "use client";

// // // // // // // // // // // import Navbar from "@/components/Navbar";
// // // // // // // // // // // import ChatBubble from "@/components/ChatBubble";
// // // // // // // // // // // import ChatInput from "@/components/ChatInput";
// // // // // // // // // // // import UserContextCard from "@/components/UserContextCard";
// // // // // // // // // // // import UploadCard from "@/components/UploadCard";
// // // // // // // // // // // import DecisionCard from "@/components/DecisionCard";
// // // // // // // // // // // import { useChatFlow } from "@/hooks/useChatFlow";

// // // // // // // // // // // export default function ChatPage() {
// // // // // // // // // // //   const {
// // // // // // // // // // //     messages,
// // // // // // // // // // //     stage,
// // // // // // // // // // //     loading,
// // // // // // // // // // //     sendMessage,
// // // // // // // // // // //     submitSalarySlip,
// // // // // // // // // // //     applicationStatus,
// // // // // // // // // // //     userContext,
// // // // // // // // // // //     decision,
// // // // // // // // // // //   } = useChatFlow();

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="min-h-screen bg-[#0B1020] text-white flex flex-col">
// // // // // // // // // // //       <Navbar />

// // // // // // // // // // //       <div className="flex-1 px-6 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
// // // // // // // // // // //         {/* LEFT PANEL */}
// // // // // // // // // // //         <div className="lg:col-span-1 space-y-6">
// // // // // // // // // // //           <UserContextCard
// // // // // // // // // // //             user={userContext ?? {}}
// // // // // // // // // // //             applicationStatus={applicationStatus ?? "in_progress"}
// // // // // // // // // // //           />

// // // // // // // // // // //           {stage === "DOCUMENTS_REQUIRED" && (
// // // // // // // // // // //             <UploadCard onUpload={submitSalarySlip} />
// // // // // // // // // // //           )}
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* CHAT AREA */}
// // // // // // // // // // //         <div className="lg:col-span-3 flex flex-col">
// // // // // // // // // // //           <div className="flex-1 overflow-y-auto space-y-4 px-2">
// // // // // // // // // // //             {messages.map((m, i) => (
// // // // // // // // // // //               <ChatBubble key={i} role={m.role} message={m.text} />
// // // // // // // // // // //             ))}

// // // // // // // // // // //             {/* Decision ONLY when backend says so */}
// // // // // // // // // // //             {decision && <DecisionCard decision={decision} />}
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <ChatInput
// // // // // // // // // // //             disabled={loading}
// // // // // // // // // // //             onSend={(text) => sendMessage(text)}
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // "use client";

// // // // // // // // // // import { useEffect, useState } from "react";

// // // // // // // // // // type Message = {
// // // // // // // // // //   sender: "user" | "bot";
// // // // // // // // // //   text: string;
// // // // // // // // // // };

// // // // // // // // // // export default function ChatPage() {
// // // // // // // // // //   const [messages, setMessages] = useState<Message[]>([]);
// // // // // // // // // //   const [input, setInput] = useState("");
// // // // // // // // // //   const [sessionId, setSessionId] = useState<string>("");

// // // // // // // // // //   // -------------------------
// // // // // // // // // //   // Start session ONCE
// // // // // // // // // //   // -------------------------
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const startSession = async () => {
// // // // // // // // // //       const res = await fetch("http://localhost:8000/session/start", {
// // // // // // // // // //         method: "POST",
// // // // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // // // //         body: JSON.stringify({ user_id: "user_001" }),
// // // // // // // // // //       });

// // // // // // // // // //       const data = await res.json();

// // // // // // // // // //       setSessionId(data.session_id);
// // // // // // // // // //       setMessages([{ sender: "bot", text: data.message }]);
// // // // // // // // // //     };

// // // // // // // // // //     startSession();
// // // // // // // // // //   }, []);

// // // // // // // // // //   // -------------------------
// // // // // // // // // //   // Send message
// // // // // // // // // //   // -------------------------
// // // // // // // // // //   const sendMessage = async () => {
// // // // // // // // // //     if (!input.trim() || !sessionId) return;

// // // // // // // // // //     const userText = input;
// // // // // // // // // //     setInput("");

// // // // // // // // // //     setMessages((prev) => [...prev, { sender: "user", text: userText }]);

// // // // // // // // // //     const res = await fetch("http://localhost:8000/chat/message", {
// // // // // // // // // //       method: "POST",
// // // // // // // // // //       headers: { "Content-Type": "application/json" },
// // // // // // // // // //       body: JSON.stringify({
// // // // // // // // // //         session_id: sessionId,
// // // // // // // // // //         message: userText,
// // // // // // // // // //       }),
// // // // // // // // // //     });

// // // // // // // // // //     const data = await res.json();

// // // // // // // // // //     setMessages((prev) => [
// // // // // // // // // //       ...prev,
// // // // // // // // // //       { sender: "bot", text: data.reply },
// // // // // // // // // //     ]);
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="flex flex-col h-screen bg-black text-white">
// // // // // // // // // //       {/* Messages */}
// // // // // // // // // //       <div className="flex-1 overflow-y-auto p-4 space-y-3">
// // // // // // // // // //         {messages.map((m, i) => (
// // // // // // // // // //           <div
// // // // // // // // // //             key={i}
// // // // // // // // // //             className={`max-w-[70%] px-4 py-2 rounded-lg ${
// // // // // // // // // //               m.sender === "user"
// // // // // // // // // //                 ? "ml-auto bg-blue-600"
// // // // // // // // // //                 : "mr-auto bg-gray-700"
// // // // // // // // // //             }`}
// // // // // // // // // //           >
// // // // // // // // // //             {m.text}
// // // // // // // // // //           </div>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Input */}
// // // // // // // // // //       <div className="p-4 border-t border-gray-700 flex gap-2">
// // // // // // // // // //         <input
// // // // // // // // // //           value={input}
// // // // // // // // // //           onChange={(e) => setInput(e.target.value)}
// // // // // // // // // //           placeholder="Type your message..."
// // // // // // // // // //           className="flex-1 px-4 py-2 rounded bg-gray-800 text-white outline-none"
// // // // // // // // // //         />

// // // // // // // // // //         <button
// // // // // // // // // //           type="button"
// // // // // // // // // //           onClick={sendMessage}
// // // // // // // // // //           className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
// // // // // // // // // //         >
// // // // // // // // // //           Send
// // // // // // // // // //         </button>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }


// // // // // // // // // "use client";

// // // // // // // // // import { useEffect, useState } from "react";

// // // // // // // // // type User = {
// // // // // // // // //   id: string;
// // // // // // // // //   name: string;
// // // // // // // // //   credit_score: number;
// // // // // // // // //   monthly_income: number;
// // // // // // // // //   preapproved_limit: number;
// // // // // // // // // };

// // // // // // // // // type Message = {
// // // // // // // // //   sender: "user" | "bot";
// // // // // // // // //   text: string;
// // // // // // // // // };

// // // // // // // // // export default function ChatPage() {
// // // // // // // // //   const [users, setUsers] = useState<User[]>([]);
// // // // // // // // //   const [selectedUser, setSelectedUser] = useState<User | null>(null);
// // // // // // // // //   const [sessionId, setSessionId] = useState<string>("");
// // // // // // // // //   const [messages, setMessages] = useState<Message[]>([]);
// // // // // // // // //   const [input, setInput] = useState("");
// // // // // // // // //   const [file, setFile] = useState<File | null>(null);

// // // // // // // // //   // -------------------------
// // // // // // // // //   // Fetch users from backend
// // // // // // // // //   // -------------------------
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     fetch("http://localhost:8000/users")
// // // // // // // // //       .then((res) => res.json())
// // // // // // // // //       .then((data) => setUsers(data));
// // // // // // // // //   }, []);

// // // // // // // // //   // -------------------------
// // // // // // // // //   // Start session when user selected
// // // // // // // // //   // -------------------------
// // // // // // // // //   // const startSession = async (user: User) => {
// // // // // // // // //   //   setSelectedUser(user);

// // // // // // // // //   //   const res = await fetch("http://localhost:8000/session/start", {
// // // // // // // // //   //     method: "POST",
// // // // // // // // //   //     headers: { "Content-Type": "application/json" },
// // // // // // // // //   //     body: JSON.stringify({ user_id: user.id }),
// // // // // // // // //   //   });

// // // // // // // // //   //   const data = await res.json();

// // // // // // // // //   //   setSessionId(data.session_id);
// // // // // // // // //   //   setMessages([{ sender: "bot", text: data.message }]);
// // // // // // // // //   // };

// // // // // // // // //   const startSession = async (user: any) => {
// // // // // // // // //   console.log("Starting session for:", user);

// // // // // // // // //   try {
// // // // // // // // //     const res = await fetch("http://localhost:8000/chat/session", {
// // // // // // // // //       method: "POST",
// // // // // // // // //       headers: { "Content-Type": "application/json" },
// // // // // // // // //       body: JSON.stringify({ user_id: user.id }),
// // // // // // // // //     });

// // // // // // // // //     if (!res.ok) {
// // // // // // // // //       throw new Error("Failed to create session");
// // // // // // // // //     }

// // // // // // // // //     const data = await res.json();

// // // // // // // // //     console.log("Session response:", data);

// // // // // // // // //     if (!data.session_id) {
// // // // // // // // //       throw new Error("No session_id returned from backend");
// // // // // // // // //     }

// // // // // // // // //     setSessionId(data.session_id);
// // // // // // // // //     setSelectedUser(user);
// // // // // // // // //     setMessages([]);

// // // // // // // // //   } catch (error) {
// // // // // // // // //     console.error("Session error:", error);
// // // // // // // // //   }
// // // // // // // // // };


// // // // // // // // //   // -------------------------
// // // // // // // // //   // Send chat message
// // // // // // // // //   // -------------------------
// // // // // // // // //   // const sendMessage = async () => {
// // // // // // // // //   //   if (!input.trim() || !sessionId) return;

// // // // // // // // //   //   const userText = input;
// // // // // // // // //   //   setInput("");

// // // // // // // // //   //   setMessages((prev) => [...prev, { sender: "user", text: userText }]);

// // // // // // // // //   //   const res = await fetch("http://localhost:8000/chat/message", {
// // // // // // // // //   //     method: "POST",
// // // // // // // // //   //     headers: { "Content-Type": "application/json" },
// // // // // // // // //   //     body: JSON.stringify({
// // // // // // // // //   //       session_id: sessionId,
// // // // // // // // //   //       message: userText,
// // // // // // // // //   //     }),
// // // // // // // // //   //   });

// // // // // // // // //   //   const data = await res.json();

// // // // // // // // //   //   setMessages((prev) => [
// // // // // // // // //   //     ...prev,
// // // // // // // // //   //     { sender: "bot", text: data.reply },
// // // // // // // // //   //   ]);
// // // // // // // // //   // };
// // // // // // // // // //   const sendMessage = async () => {
// // // // // // // // // //   if (!input.trim()) return;

// // // // // // // // // //   const userText = input;
// // // // // // // // // //   setInput("");

// // // // // // // // // //   // 👇 ALWAYS show user message immediately
// // // // // // // // // //   setMessages((prev) => [
// // // // // // // // // //     ...prev,
// // // // // // // // // //     { sender: "user", text: userText }
// // // // // // // // // //   ]);

// // // // // // // // // //   // 👇 If session not ready, don't block UI
// // // // // // // // // //   if (!sessionId) {
// // // // // // // // // //     console.error("Session not initialized yet");
// // // // // // // // // //     return;
// // // // // // // // // //   }

// // // // // // // // // //   try {
// // // // // // // // // //     const res = await fetch("http://localhost:8000/chat/message", {
// // // // // // // // // //       method: "POST",
// // // // // // // // // //       headers: { "Content-Type": "application/json" },
// // // // // // // // // //       body: JSON.stringify({
// // // // // // // // // //         session_id: sessionId,
// // // // // // // // // //         message: userText,
// // // // // // // // // //       }),
// // // // // // // // // //     });

// // // // // // // // // //     const data = await res.json();

// // // // // // // // // //     setMessages((prev) => [
// // // // // // // // // //       ...prev,
// // // // // // // // // //       { sender: "bot", text: data.reply },
// // // // // // // // // //     ]);

// // // // // // // // // //   } catch (err) {
// // // // // // // // // //     console.error("Chat error:", err);
// // // // // // // // // //   }
// // // // // // // // // // };
// // // // // // // // // const sendMessage = async () => {
// // // // // // // // //   if (!input.trim()) return;

// // // // // // // // //   if (!sessionId) {
// // // // // // // // //     console.error("No session ID available");
// // // // // // // // //     return;
// // // // // // // // //   }

// // // // // // // // //   const userText = input;
// // // // // // // // //   setInput("");

// // // // // // // // //   setMessages((prev) => [
// // // // // // // // //     ...prev,
// // // // // // // // //     { sender: "user", text: userText },
// // // // // // // // //   ]);

// // // // // // // // //   try {
// // // // // // // // //     const res = await fetch("http://localhost:8000/chat/message", {
// // // // // // // // //       method: "POST",
// // // // // // // // //       headers: { "Content-Type": "application/json" },
// // // // // // // // //       body: JSON.stringify({
// // // // // // // // //         session_id: sessionId,
// // // // // // // // //         message: userText,
// // // // // // // // //       }),
// // // // // // // // //     });

// // // // // // // // //     const data = await res.json();

// // // // // // // // //     setMessages((prev) => [
// // // // // // // // //       ...prev,
// // // // // // // // //       { sender: "bot", text: data.reply },
// // // // // // // // //     ]);

// // // // // // // // //   } catch (error) {
// // // // // // // // //     console.error("Message send error:", error);
// // // // // // // // //   }
// // // // // // // // // };



// // // // // // // // //   // -------------------------
// // // // // // // // //   // Upload file
// // // // // // // // //   // -------------------------
// // // // // // // // //   const uploadFile = async () => {
// // // // // // // // //     if (!file || !sessionId) return;

// // // // // // // // //     const formData = new FormData();
// // // // // // // // //     formData.append("session_id", sessionId);
// // // // // // // // //     formData.append("file", file);

// // // // // // // // //     const res = await fetch("http://localhost:8000/document/upload", {
// // // // // // // // //       method: "POST",
// // // // // // // // //       body: formData,
// // // // // // // // //     });

// // // // // // // // //     const data = await res.json();

// // // // // // // // //     setMessages((prev) => [
// // // // // // // // //       ...prev,
// // // // // // // // //       { sender: "bot", text: data.reply },
// // // // // // // // //     ]);

// // // // // // // // //     setFile(null);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="flex h-screen bg-gray-950 text-white">
// // // // // // // // //       {/* LEFT PANEL - USER INFO */}
// // // // // // // // //       <div className="w-1/3 border-r border-gray-800 p-6">
// // // // // // // // //         <h2 className="text-xl font-semibold mb-4">Select User</h2>

// // // // // // // // //         {users.map((user) => (
// // // // // // // // //           <div
// // // // // // // // //             key={user.id}
// // // // // // // // //             onClick={() => startSession(user)}
// // // // // // // // //             className="cursor-pointer bg-gray-800 p-4 rounded-lg mb-3 hover:bg-gray-700"
// // // // // // // // //           >
// // // // // // // // //             <p className="font-semibold">{user.name}</p>
// // // // // // // // //             <p>Credit Score: {user.credit_score}</p>
// // // // // // // // //             <p>Income: ₹{user.monthly_income}</p>
// // // // // // // // //             <p>Preapproved: ₹{user.preapproved_limit}</p>
// // // // // // // // //           </div>
// // // // // // // // //         ))}
// // // // // // // // //       </div>

// // // // // // // // //       {/* RIGHT PANEL - CHAT */}
// // // // // // // // //       <div className="flex flex-col flex-1">
// // // // // // // // //         <div className="flex-1 overflow-y-auto p-6 space-y-4">
// // // // // // // // //           {messages.map((m, i) => (
// // // // // // // // //             <div
// // // // // // // // //               key={i}
// // // // // // // // //               className={`max-w-[70%] px-4 py-2 rounded-lg ${
// // // // // // // // //                 m.sender === "user"
// // // // // // // // //                   ? "ml-auto bg-blue-600"
// // // // // // // // //                   : "mr-auto bg-gray-800"
// // // // // // // // //               }`}
// // // // // // // // //             >
// // // // // // // // //               {m.text}
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>

// // // // // // // // //         {/* INPUT AREA */}
// // // // // // // // //         <div className="border-t border-gray-800 p-4 space-y-3">
// // // // // // // // //           <div className="flex gap-2">
// // // // // // // // //             <input
// // // // // // // // //               value={input}
// // // // // // // // //               onChange={(e) => setInput(e.target.value)}
// // // // // // // // //               placeholder="Type your message..."
// // // // // // // // //               className="flex-1 px-4 py-2 rounded bg-gray-800 outline-none"
// // // // // // // // //             />
// // // // // // // // //             <button
// // // // // // // // //   type="button"
// // // // // // // // //   onClick={sendMessage}
// // // // // // // // //   disabled={!sessionId}
// // // // // // // // //   className={`px-4 py-2 rounded ${
// // // // // // // // //     sessionId ? "bg-blue-600" : "bg-gray-400 cursor-not-allowed"
// // // // // // // // //   }`}
// // // // // // // // // >
// // // // // // // // //   Send
// // // // // // // // // </button>

// // // // // // // // //           </div>

// // // // // // // // //           {/* FILE UPLOAD */}
// // // // // // // // //           <div className="flex gap-2 items-center">
// // // // // // // // //             <input
// // // // // // // // //               type="file"
// // // // // // // // //               onChange={(e) =>
// // // // // // // // //                 setFile(e.target.files ? e.target.files[0] : null)
// // // // // // // // //               }
// // // // // // // // //               className="text-sm"
// // // // // // // // //             />
// // // // // // // // //             <button
// // // // // // // // //               type="button"
// // // // // // // // //               onClick={uploadFile}
// // // // // // // // //               className="px-3 py-2 bg-green-600 rounded text-sm"
// // // // // // // // //             >
// // // // // // // // //               Upload Salary Slip
// // // // // // // // //             </button>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // "use client";

// // // // // // // // import { useEffect, useState } from "react";

// // // // // // // // export default function ChatPage() {
// // // // // // // //   const [users, setUsers] = useState<any[]>([]);
// // // // // // // //   const [selectedUser, setSelectedUser] = useState<any>(null);
// // // // // // // //   const [messages, setMessages] = useState<any[]>([]);
// // // // // // // //   const [input, setInput] = useState("");
// // // // // // // //   const [loadingUsers, setLoadingUsers] = useState(true);

// // // // // // // //   // Fetch users from FastAPI
// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchUsers = async () => {
// // // // // // // //       try {
// // // // // // // //         const res = await fetch("http://localhost:8000/users");
// // // // // // // //         const data = await res.json();
// // // // // // // //         setUsers(data);
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error("Failed to fetch users", error);
// // // // // // // //       } finally {
// // // // // // // //         setLoadingUsers(false);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchUsers();
// // // // // // // //   }, []);

// // // // // // // //   const sendMessage = async () => {
// // // // // // // //     if (!input.trim()) return;

// // // // // // // //     const userMessage = { role: "user", content: input };
// // // // // // // //     setMessages((prev) => [...prev, userMessage]);

// // // // // // // //     try {
// // // // // // // //       const res = await fetch("http://localhost:8000/chat", {
// // // // // // // //         method: "POST",
// // // // // // // //         headers: {
// // // // // // // //           "Content-Type": "application/json"
// // // // // // // //         },
// // // // // // // //         body: JSON.stringify({
// // // // // // // //           message: input,
// // // // // // // //           user_id: selectedUser.id
// // // // // // // //         })
// // // // // // // //       });

// // // // // // // //       const data = await res.json();

// // // // // // // //       setMessages((prev) => [
// // // // // // // //         ...prev,
// // // // // // // //         { role: "assistant", content: data.reply }
// // // // // // // //       ]);
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Chat error", error);
// // // // // // // //     }

// // // // // // // //     setInput("");
// // // // // // // //   };

// // // // // // // //   // ==========================
// // // // // // // //   // ACCOUNT SELECTION SCREEN
// // // // // // // //   // ==========================
// // // // // // // //   if (!selectedUser) {
// // // // // // // //     return (
// // // // // // // //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // // // // // // //         <div className="bg-white shadow-xl rounded-2xl p-10 w-[450px]">
// // // // // // // //           <h2 className="text-2xl font-semibold mb-2 text-center">
// // // // // // // //             Welcome to Nidhi AI
// // // // // // // //           </h2>
// // // // // // // //           <p className="text-sm text-gray-500 mb-6 text-center">
// // // // // // // //             Select your financial profile to continue
// // // // // // // //           </p>

// // // // // // // //           {loadingUsers ? (
// // // // // // // //             <p className="text-center text-gray-400">
// // // // // // // //               Fetching financial profiles...
// // // // // // // //             </p>
// // // // // // // //           ) : (
// // // // // // // //             <div className="space-y-4">
// // // // // // // //               {users.map((user) => (
// // // // // // // //                 <div
// // // // // // // //                   key={user.id}
// // // // // // // //                   onClick={() => setSelectedUser(user)}
// // // // // // // //                   className="p-4 border rounded-xl hover:shadow-md cursor-pointer transition"
// // // // // // // //                 >
// // // // // // // //                   <h3 className="font-semibold">{user.name}</h3>
// // // // // // // //                   <p className="text-sm text-gray-500">{user.email}</p>
// // // // // // // //                   <p className="text-xs text-gray-400 mt-1">
// // // // // // // //                     {user.loanProfile}
// // // // // // // //                   </p>
// // // // // // // //                 </div>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }

// // // // // // // //   // ==========================
// // // // // // // //   // CHAT UI
// // // // // // // //   // ==========================
// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen flex flex-col bg-gray-100">

// // // // // // // //       {/* Header */}
// // // // // // // //       <div className="bg-white shadow p-4 flex justify-between items-center">
// // // // // // // //         <div>
// // // // // // // //           <h2 className="font-semibold">Nidhi AI Assistant</h2>
// // // // // // // //           <p className="text-sm text-gray-500">
// // // // // // // //             Logged in as {selectedUser.name}
// // // // // // // //           </p>
// // // // // // // //         </div>

// // // // // // // //         <button
// // // // // // // //           onClick={() => {
// // // // // // // //             setSelectedUser(null);
// // // // // // // //             setMessages([]);
// // // // // // // //           }}
// // // // // // // //           className="text-sm text-red-500"
// // // // // // // //         >
// // // // // // // //           Switch Account
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {/* Messages */}
// // // // // // // //       <div className="flex-1 p-6 overflow-y-auto space-y-4">
// // // // // // // //         {messages.map((msg, index) => (
// // // // // // // //           <div
// // // // // // // //             key={index}
// // // // // // // //             className={`p-3 rounded-lg max-w-md ${
// // // // // // // //               msg.role === "user"
// // // // // // // //                 ? "bg-blue-600 text-white ml-auto"
// // // // // // // //                 : "bg-white shadow"
// // // // // // // //             }`}
// // // // // // // //           >
// // // // // // // //             {msg.content}
// // // // // // // //           </div>
// // // // // // // //         ))}
// // // // // // // //       </div>

// // // // // // // //       {/* Input */}
// // // // // // // //       <div className="p-4 bg-white flex gap-2">
// // // // // // // //         <input
// // // // // // // //           value={input}
// // // // // // // //           onChange={(e) => setInput(e.target.value)}
// // // // // // // //           className="flex-1 border rounded-lg px-4 py-2"
// // // // // // // //           placeholder="Ask about your loan..."
// // // // // // // //         />
// // // // // // // //         <button
// // // // // // // //           onClick={sendMessage}
// // // // // // // //           className="bg-blue-600 text-white px-4 py-2 rounded-lg"
// // // // // // // //         >
// // // // // // // //           Send
// // // // // // // //         </button>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // "use client";

// // // // // // // import { useEffect, useState } from "react";

// // // // // // // interface User {
// // // // // // //   id: string;
// // // // // // //   name: string;
// // // // // // //   email: string;
// // // // // // //   loanProfile: string;
// // // // // // // }

// // // // // // // export default function ChatPage() {
// // // // // // //   const [users, setUsers] = useState<User[]>([]);
// // // // // // //   const [selectedUser, setSelectedUser] = useState<User | null>(null);
// // // // // // //   const [sessionId, setSessionId] = useState<string | null>(null);
// // // // // // //   const [messages, setMessages] = useState<any[]>([]);
// // // // // // //   const [input, setInput] = useState("");
// // // // // // //   const [loadingUsers, setLoadingUsers] = useState(true);
// // // // // // //   const [startingSession, setStartingSession] = useState(false);

// // // // // // //   // 🔹 Fetch users only for selection UI
// // // // // // //   useEffect(() => {
// // // // // // //     const fetchUsers = async () => {
// // // // // // //       try {
// // // // // // //         const res = await fetch("http://localhost:8000/users");
// // // // // // //         const data = await res.json();
// // // // // // //         setUsers(data);
// // // // // // //       } catch (error) {
// // // // // // //         console.error("Failed to fetch users", error);
// // // // // // //       } finally {
// // // // // // //         setLoadingUsers(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchUsers();
// // // // // // //   }, []);

// // // // // // //   // 🔹 When user clicks → start backend session
// // // // // // //   // const handleUserSelect = async (user: User) => {
// // // // // // //   //   setStartingSession(true);

// // // // // // //   //   try {
// // // // // // //   //     const res = await fetch("http://127.0.0.1:8000/session/start", {
// // // // // // //   //       method: "POST",
// // // // // // //   //       headers: {
// // // // // // //   //         "Content-Type": "application/json",
// // // // // // //   //       },
// // // // // // //   //       body: JSON.stringify({
// // // // // // //   //         user_id: user.id,
// // // // // // //   //       }),
// // // // // // //   //     });

// // // // // // //   //     const data = await res.json();

// // // // // // //   //     if (data.error) {
// // // // // // //   //       alert("Failed to start session");
// // // // // // //   //       return;
// // // // // // //   //     }

// // // // // // //   //     setSessionId(data.session_id);
// // // // // // //   //     setSelectedUser(data.user);

// // // // // // //   //     // Initial bot welcome message
// // // // // // //   //     setMessages([
// // // // // // //   //       {
// // // // // // //   //         role: "assistant",
// // // // // // //   //         content: data.message,
// // // // // // //   //       },
// // // // // // //   //     ]);
// // // // // // //   //   } catch (error) {
// // // // // // //   //     console.error("Session start error", error);
// // // // // // //   //   } finally {
// // // // // // //   //     setStartingSession(false);
// // // // // // //   //   }
// // // // // // //   // };
// // // // // // //   const handleUserSelect = async (user: any) => {
// // // // // // //   try {
// // // // // // //     const res = await fetch("http://127.0.0.1:8000/session/start", {
// // // // // // //       method: "POST",
// // // // // // //       headers: {
// // // // // // //         "Content-Type": "application/json",
// // // // // // //       },
// // // // // // //       body: JSON.stringify({
// // // // // // //         user_id: user.id,
// // // // // // //       }),
// // // // // // //     });

// // // // // // //     if (!res.ok) {
// // // // // // //       const text = await res.text();
// // // // // // //       throw new Error(text);
// // // // // // //     }

// // // // // // //     const data = await res.json();

// // // // // // //     setSessionId(data.session_id);
// // // // // // //     setSelectedUser(user);

// // // // // // //   } catch (error) {
// // // // // // //     console.error("Session start error:", error);
// // // // // // //   }
// // // // // // // };
// // // // // // //   // 🔹 Send Chat Message (using session_id)
// // // // // // //   const sendMessage = async () => {
// // // // // // //     if (!input.trim() || !sessionId) return;

// // // // // // //     const userMessage = { role: "user", content: input };
// // // // // // //     setMessages((prev) => [...prev, userMessage]);

// // // // // // //     try {
// // // // // // //       const res = await fetch("http://localhost:8000/chat/message", {
// // // // // // //         method: "POST",
// // // // // // //         headers: {
// // // // // // //           "Content-Type": "application/json",
// // // // // // //         },
// // // // // // //         body: JSON.stringify({
// // // // // // //           message: input,
// // // // // // //           session_id: sessionId,
// // // // // // //         }),
// // // // // // //       });

// // // // // // //       const data = await res.json();

// // // // // // //       setMessages((prev) => [
// // // // // // //         ...prev,
// // // // // // //         { role: "assistant", content: data.reply },
// // // // // // //       ]);
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Chat error", error);
// // // // // // //     }

// // // // // // //     setInput("");
// // // // // // //   };

// // // // // // //   // ===============================
// // // // // // //   // ACCOUNT SELECTION SCREEN
// // // // // // //   // ===============================
// // // // // // //   if (!selectedUser) {
// // // // // // //     return (
// // // // // // //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // // // // // //         <div className="bg-white shadow-xl rounded-2xl p-10 w-[450px]">
// // // // // // //           <h2 className="text-2xl font-semibold mb-2 text-center">
// // // // // // //             Welcome to NIDHI AI
// // // // // // //           </h2>
// // // // // // //           <p className="text-sm text-gray-500 mb-6 text-center">
// // // // // // //             Select your financial profile to continue
// // // // // // //           </p>

// // // // // // //           {loadingUsers ? (
// // // // // // //             <p className="text-center text-gray-400">
// // // // // // //               Fetching financial profiles...
// // // // // // //             </p>
// // // // // // //           ) : (
// // // // // // //             <div className="space-y-4">
// // // // // // //               {users.map((user) => (
// // // // // // //                 <div
// // // // // // //                   key={user.id}
// // // // // // //                   onClick={() => handleUserSelect(user)}
// // // // // // //                   className="p-4 border rounded-xl hover:shadow-md cursor-pointer transition"
// // // // // // //                 >
// // // // // // //                   <h3 className="font-semibold">{user.name}</h3>
// // // // // // //                   <p className="text-sm text-gray-500">{user.email}</p>
// // // // // // //                   <p className="text-xs text-gray-400 mt-1">
// // // // // // //                     {user.loanProfile}
// // // // // // //                   </p>
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           {startingSession && (
// // // // // // //             <p className="text-center text-sm text-gray-400 mt-4">
// // // // // // //               Starting secure session...
// // // // // // //             </p>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   // ===============================
// // // // // // //   // CHAT UI
// // // // // // //   // ===============================
// // // // // // //   return (
// // // // // // //     <div className="min-h-screen flex flex-col bg-gray-100">

// // // // // // //       {/* Header */}
// // // // // // //       <div className="bg-white shadow p-4 flex justify-between items-center">
// // // // // // //         <div>
// // // // // // //           <h2 className="font-semibold">NIDHI AI Assistant</h2>
// // // // // // //           <p className="text-sm text-gray-500">
// // // // // // //             Logged in as {selectedUser.name}
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         <button
// // // // // // //           onClick={() => {
// // // // // // //             setSelectedUser(null);
// // // // // // //             setSessionId(null);
// // // // // // //             setMessages([]);
// // // // // // //           }}
// // // // // // //           className="text-sm text-red-500"
// // // // // // //         >
// // // // // // //           Switch Account
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       {/* Messages */}
// // // // // // //       <div className="flex-1 p-6 overflow-y-auto space-y-4">
// // // // // // //         {messages.map((msg, index) => (
// // // // // // //           <div
// // // // // // //             key={index}
// // // // // // //             className={`p-3 rounded-lg max-w-md ${
// // // // // // //               msg.role === "user"
// // // // // // //                 ? "bg-blue-600 text-white ml-auto"
// // // // // // //                 : "bg-white shadow"
// // // // // // //             }`}
// // // // // // //           >
// // // // // // //             {msg.content}
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>

// // // // // // //       {/* Input */}
// // // // // // //       <div className="p-4 bg-white flex gap-2">
// // // // // // //         <input
// // // // // // //           value={input}
// // // // // // //           onChange={(e) => setInput(e.target.value)}
// // // // // // //           className="flex-1 border rounded-lg px-4 py-2"
// // // // // // //           placeholder="Ask about your loan..."
// // // // // // //         />
// // // // // // //         <button
// // // // // // //           onClick={sendMessage}
// // // // // // //           className="bg-blue-600 text-white px-4 py-2 rounded-lg"
// // // // // // //         >
// // // // // // //           Send
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // "use client";

// // // // // // import { useEffect, useState } from "react";

// // // // // // interface User {
// // // // // //   id: string;
// // // // // //   name: string;
// // // // // //   email: string;
// // // // // //   loanProfile: string;
// // // // // // }

// // // // // // interface Message {
// // // // // //   role: "user" | "assistant";
// // // // // //   content: string;
// // // // // // }

// // // // // // export default function ChatPage() {
// // // // // //   const [users, setUsers] = useState<User[]>([]);
// // // // // //   const [selectedUser, setSelectedUser] = useState<User | null>(null);
// // // // // //   const [sessionId, setSessionId] = useState<string | null>(null);
// // // // // //   const [messages, setMessages] = useState<Message[]>([]);
// // // // // //   const [input, setInput] = useState("");
// // // // // //   const [loadingUsers, setLoadingUsers] = useState(true);
// // // // // //   const [startingSession, setStartingSession] = useState(false);

// // // // // //   const [file, setFile] = useState<File | null>(null);
// // // // // //   const [uploading, setUploading] = useState(false);

// // // // // //   // ===============================
// // // // // //   // Fetch Users
// // // // // //   // ===============================
// // // // // //   useEffect(() => {
// // // // // //     const fetchUsers = async () => {
// // // // // //       try {
// // // // // //         const res = await fetch("http://localhost:8000/users");
// // // // // //         const data = await res.json();
// // // // // //         setUsers(data);
// // // // // //       } catch (error) {
// // // // // //         console.error("Failed to fetch users", error);
// // // // // //       } finally {
// // // // // //         setLoadingUsers(false);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchUsers();
// // // // // //   }, []);

// // // // // //   // ===============================
// // // // // //   // Start Session
// // // // // //   // ===============================
// // // // // //   const handleUserSelect = async (user: User) => {
// // // // // //     setStartingSession(true);

// // // // // //     try {
// // // // // //       const res = await fetch("http://127.0.0.1:8000/session/start", {
// // // // // //         method: "POST",
// // // // // //         headers: {
// // // // // //           "Content-Type": "application/json",
// // // // // //         },
// // // // // //         body: JSON.stringify({
// // // // // //           user_id: user.id,
// // // // // //         }),
// // // // // //       });

// // // // // //       const data = await res.json();

// // // // // //       setSessionId(data.session_id);
// // // // // //       setSelectedUser(user);

// // // // // //       setMessages([
// // // // // //         {
// // // // // //           role: "assistant",
// // // // // //           content: data.message,
// // // // // //         },
// // // // // //       ]);
// // // // // //     } catch (error) {
// // // // // //       console.error("Session start error:", error);
// // // // // //     } finally {
// // // // // //       setStartingSession(false);
// // // // // //     }
// // // // // //   };

// // // // // //   // ===============================
// // // // // //   // Send Message
// // // // // //   // ===============================
// // // // // //   const sendMessage = async () => {
// // // // // //     if (!input.trim() || !sessionId) return;

// // // // // //     const userMessage: Message = { role: "user", content: input };
// // // // // //     setMessages((prev) => [...prev, userMessage]);

// // // // // //     try {
// // // // // //       const res = await fetch("http://localhost:8000/chat/message", {
// // // // // //         method: "POST",
// // // // // //         headers: {
// // // // // //           "Content-Type": "application/json",
// // // // // //         },
// // // // // //         body: JSON.stringify({
// // // // // //           message: input,
// // // // // //           session_id: sessionId,
// // // // // //         }),
// // // // // //       });

// // // // // //       const data = await res.json();

// // // // // //       setMessages((prev) => [
// // // // // //         ...prev,
// // // // // //         { role: "assistant", content: data.reply },
// // // // // //       ]);
// // // // // //     } catch (error) {
// // // // // //       console.error("Chat error", error);
// // // // // //     }

// // // // // //     setInput("");
// // // // // //   };

// // // // // //   // ===============================
// // // // // //   // Upload Salary Slip (Always Available)
// // // // // //   // ===============================
// // // // // //   const uploadSalarySlip = async () => {
// // // // // //     if (!file || !sessionId) return;

// // // // // //     setUploading(true);

// // // // // //     const formData = new FormData();
// // // // // //     formData.append("session_id", sessionId);
// // // // // //     formData.append("file", file);

// // // // // //     try {
// // // // // //       const res = await fetch("http://localhost:8000/upload/salary-slip", {
// // // // // //         method: "POST",
// // // // // //         body: formData,
// // // // // //       });

// // // // // //       const data = await res.json();

// // // // // //       setMessages((prev) => [
// // // // // //         ...prev,
// // // // // //         { role: "assistant", content: data.reply },
// // // // // //       ]);

// // // // // //       setFile(null);
// // // // // //     } catch (error) {
// // // // // //       console.error("Upload error", error);
// // // // // //     } finally {
// // // // // //       setUploading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   // ===============================
// // // // // //   // ACCOUNT SELECTION SCREEN
// // // // // //   // ===============================
// // // // // //   if (!selectedUser) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // // // // //         <div className="bg-white shadow-xl rounded-2xl p-10 w-[450px]">
// // // // // //           <h2 className="text-2xl font-semibold mb-2 text-center">
// // // // // //             Welcome to NIDHI AI
// // // // // //           </h2>
// // // // // //           <p className="text-sm text-gray-500 mb-6 text-center">
// // // // // //             Select your financial profile to continue
// // // // // //           </p>

// // // // // //           {loadingUsers ? (
// // // // // //             <p className="text-center text-gray-400">
// // // // // //               Fetching financial profiles...
// // // // // //             </p>
// // // // // //           ) : (
// // // // // //             <div className="space-y-4">
// // // // // //               {users.map((user) => (
// // // // // //                 <div
// // // // // //                   key={user.id}
// // // // // //                   onClick={() => handleUserSelect(user)}
// // // // // //                   className="p-4 border rounded-xl hover:shadow-md cursor-pointer transition"
// // // // // //                 >
// // // // // //                   <h3 className="font-semibold">{user.name}</h3>
// // // // // //                   <p className="text-sm text-gray-500">{user.email}</p>
// // // // // //                   <p className="text-xs text-gray-400 mt-1">
// // // // // //                     {user.loanProfile}
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           )}

// // // // // //           {startingSession && (
// // // // // //             <p className="text-center text-sm text-gray-400 mt-4">
// // // // // //               Starting secure session...
// // // // // //             </p>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   // ===============================
// // // // // //   // CHAT UI
// // // // // //   // ===============================
// // // // // //   return (
// // // // // //     <div className="min-h-screen flex flex-col bg-gray-100">

// // // // // //       {/* Header */}
// // // // // //       <div className="bg-white shadow p-4 flex justify-between items-center">
// // // // // //         <div>
// // // // // //           <h2 className="font-semibold">NIDHI AI Assistant</h2>
// // // // // //           <p className="text-sm text-gray-500">
// // // // // //             Logged in as {selectedUser.name}
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         <button
// // // // // //           onClick={() => {
// // // // // //             setSelectedUser(null);
// // // // // //             setSessionId(null);
// // // // // //             setMessages([]);
// // // // // //           }}
// // // // // //           className="text-sm text-red-500"
// // // // // //         >
// // // // // //           Switch Account
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {/* Messages */}
// // // // // //       <div className="flex-1 p-6 overflow-y-auto space-y-4">
// // // // // //         {messages.map((msg, index) => (
// // // // // //           <div
// // // // // //             key={index}
// // // // // //             className={`p-3 rounded-lg max-w-md ${
// // // // // //               msg.role === "user"
// // // // // //                 ? "bg-blue-600 text-white ml-auto"
// // // // // //                 : "bg-white shadow"
// // // // // //             }`}
// // // // // //           >
// // // // // //             {msg.content}
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       {/* Input + CONSTANT Upload Section */}
// // // // // //       <div className="p-4 bg-white space-y-4 border-t">

// // // // // //         {/* Chat Input */}
// // // // // //         <div className="flex gap-2">
// // // // // //           <input
// // // // // //             value={input}
// // // // // //             onChange={(e) => setInput(e.target.value)}
// // // // // //             className="flex-1 border rounded-lg px-4 py-2"
// // // // // //             placeholder="Ask about your loan..."
// // // // // //           />
// // // // // //           <button
// // // // // //             onClick={sendMessage}
// // // // // //             className="bg-blue-600 text-white px-4 py-2 rounded-lg"
// // // // // //           >
// // // // // //             Send
// // // // // //           </button>
// // // // // //         </div>

// // // // // //         {/* Always Visible Upload Section */}
// // // // // //         <div className="border rounded-lg p-4 bg-gray-50">
// // // // // //           <p className="text-sm font-medium mb-2">
// // // // // //             Upload Salary Slip (Optional)
// // // // // //           </p>

// // // // // //           <div className="flex gap-2 items-center">
// // // // // //             <input
// // // // // //               type="file"
// // // // // //               accept=".pdf,.jpg,.png"
// // // // // //               onChange={(e) =>
// // // // // //                 setFile(e.target.files ? e.target.files[0] : null)
// // // // // //               }
// // // // // //               className="text-sm"
// // // // // //             />

// // // // // //             <button
// // // // // //               onClick={uploadSalarySlip}
// // // // // //               disabled={!file || uploading}
// // // // // //               className="bg-green-600 text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
// // // // // //             >
// // // // // //               {uploading ? "Uploading..." : "Upload"}
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // import { useEffect, useState } from "react";

// // // // // // interface User {
// // // // // //   id: string;
// // // // // //   name: string;
// // // // // //   email: string;
// // // // // //   loanProfile: string;
// // // // // // }

// // // // // // interface Message {
// // // // // //   role: "user" | "assistant";
// // // // // //   content: string;
// // // // // // }

// // // // // // export default function ChatPage() {
// // // // // //   const [users, setUsers] = useState<User[]>([]);
// // // // // //   const [selectedUser, setSelectedUser] = useState<User | null>(null);
// // // // // //   const [sessionId, setSessionId] = useState<string | null>(null);
// // // // // //   const [messages, setMessages] = useState<Message[]>([]);
// // // // // //   const [input, setInput] = useState("");
// // // // // //   const [loadingUsers, setLoadingUsers] = useState(true);
// // // // // //   const [startingSession, setStartingSession] = useState(false);

// // // // // //   const [file, setFile] = useState<File | null>(null);
// // // // // //   const [uploading, setUploading] = useState(false);

// // // // // //   // ===============================
// // // // // //   // Fetch Users
// // // // // //   // ===============================
// // // // // //   useEffect(() => {
// // // // // //     const fetchUsers = async () => {
// // // // // //       try {
// // // // // //         const res = await fetch("http://localhost:8000/users");
// // // // // //         const data = await res.json();
// // // // // //         setUsers(data);
// // // // // //       } catch (error) {
// // // // // //         console.error("Failed to fetch users", error);
// // // // // //       } finally {
// // // // // //         setLoadingUsers(false);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchUsers();
// // // // // //   }, []);

// // // // // //   // ===============================
// // // // // //   // Start Session
// // // // // //   // ===============================
// // // // // //   const handleUserSelect = async (user: User) => {
// // // // // //     setStartingSession(true);

// // // // // //     try {
// // // // // //       const res = await fetch("http://localhost:8000/session/start", {
// // // // // //         method: "POST",
// // // // // //         headers: {
// // // // // //           "Content-Type": "application/json",
// // // // // //         },
// // // // // //         body: JSON.stringify({
// // // // // //           user_id: user.id,
// // // // // //         }),
// // // // // //       });

// // // // // //       const data = await res.json();

// // // // // //       setSessionId(data.session_id);
// // // // // //       setSelectedUser(user);

// // // // // //       setMessages([
// // // // // //         {
// // // // // //           role: "assistant",
// // // // // //           content: data.message,
// // // // // //         },
// // // // // //       ]);
// // // // // //     } catch (error) {
// // // // // //       console.error("Session start error:", error);
// // // // // //     } finally {
// // // // // //       setStartingSession(false);
// // // // // //     }
// // // // // //   };

// // // // // //   // ===============================
// // // // // //   // Send Message
// // // // // //   // ===============================
// // // // // //   const sendMessage = async () => {
// // // // // //     if (!input.trim() || !sessionId) return;

// // // // // //     const userMessage: Message = { role: "user", content: input };
// // // // // //     setMessages((prev) => [...prev, userMessage]);

// // // // // //     try {
// // // // // //       const res = await fetch("http://localhost:8000/chat/message", {
// // // // // //         method: "POST",
// // // // // //         headers: {
// // // // // //           "Content-Type": "application/json",
// // // // // //         },
// // // // // //         body: JSON.stringify({
// // // // // //           message: input,
// // // // // //           session_id: sessionId,
// // // // // //         }),
// // // // // //       });

// // // // // //       const data = await res.json();

// // // // // //       setMessages((prev) => [
// // // // // //         ...prev,
// // // // // //         { role: "assistant", content: data.reply },
// // // // // //       ]);
// // // // // //     } catch (error) {
// // // // // //       console.error("Chat error", error);
// // // // // //     }

// // // // // //     setInput("");
// // // // // //   };

// // // // // //   // ===============================
// // // // // //   // Upload Salary Slip (FIXED ENDPOINT)
// // // // // //   // ===============================
// // // // // //   const uploadSalarySlip = async () => {
// // // // // //     if (!file || !sessionId) return;

// // // // // //     setUploading(true);

// // // // // //     const formData = new FormData();
// // // // // //     formData.append("session_id", sessionId);
// // // // // //     formData.append("file", file);

// // // // // //     try {
// // // // // //       const res = await fetch("http://localhost:8000/document/upload", {
// // // // // //         method: "POST",
// // // // // //         body: formData,
// // // // // //       });

// // // // // //       if (!res.ok) {
// // // // // //         const err = await res.json();
// // // // // //         throw new Error(err.detail || "Upload failed");
// // // // // //       }

// // // // // //       const data = await res.json();

// // // // // //       setMessages((prev) => [
// // // // // //         ...prev,
// // // // // //         { role: "assistant", content: data.reply },
// // // // // //       ]);

// // // // // //       setFile(null);
// // // // // //     } catch (error: any) {
// // // // // //       console.error("Upload error", error);
// // // // // //       setMessages((prev) => [
// // // // // //         ...prev,
// // // // // //         {
// // // // // //           role: "assistant",
// // // // // //           content: "Upload failed 😕 Please try again.",
// // // // // //         },
// // // // // //       ]);
// // // // // //     } finally {
// // // // // //       setUploading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   // ===============================
// // // // // //   // ACCOUNT SELECTION SCREEN
// // // // // //   // ===============================
// // // // // //   if (!selectedUser) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // // // // //         <div className="bg-white shadow-xl rounded-2xl p-10 w-[450px]">
// // // // // //           <h2 className="text-2xl font-semibold mb-2 text-center">
// // // // // //             Welcome to NIDHI AI
// // // // // //           </h2>

// // // // // //           {loadingUsers ? (
// // // // // //             <p className="text-center text-gray-400">
// // // // // //               Fetching financial profiles...
// // // // // //             </p>
// // // // // //           ) : (
// // // // // //             <div className="space-y-4">
// // // // // //               {users.map((user) => (
// // // // // //                 <div
// // // // // //                   key={user.id}
// // // // // //                   onClick={() => handleUserSelect(user)}
// // // // // //                   className="p-4 border rounded-xl hover:shadow-md cursor-pointer transition"
// // // // // //                 >
// // // // // //                   <h3 className="font-semibold">{user.name}</h3>
// // // // // //                   <p className="text-sm text-gray-500">{user.email}</p>
// // // // // //                   <p className="text-xs text-gray-400 mt-1">
// // // // // //                     {user.loanProfile}
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   // ===============================
// // // // // //   // CHAT UI
// // // // // //   // ===============================
// // // // // //   return (
// // // // // //     <div className="min-h-screen flex flex-col bg-gray-100">

// // // // // //       <div className="bg-white shadow p-4 flex justify-between items-center">
// // // // // //         <div>
// // // // // //           <h2 className="font-semibold">NIDHI AI Assistant</h2>
// // // // // //           <p className="text-sm text-gray-500">
// // // // // //             Logged in as {selectedUser.name}
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         <button
// // // // // //           onClick={() => {
// // // // // //             setSelectedUser(null);
// // // // // //             setSessionId(null);
// // // // // //             setMessages([]);
// // // // // //           }}
// // // // // //           className="text-sm text-red-500"
// // // // // //         >
// // // // // //           Switch Account
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       <div className="flex-1 p-6 overflow-y-auto space-y-4">
// // // // // //         {messages.map((msg, index) => (
// // // // // //           <div
// // // // // //             key={index}
// // // // // //             className={`p-3 rounded-lg max-w-md ${
// // // // // //               msg.role === "user"
// // // // // //                 ? "bg-blue-600 text-white ml-auto"
// // // // // //                 : "bg-white shadow"
// // // // // //             }`}
// // // // // //           >
// // // // // //             {msg.content}
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       <div className="p-4 bg-white space-y-4 border-t">

// // // // // //         <div className="flex gap-2">
// // // // // //           <input
// // // // // //             value={input}
// // // // // //             onChange={(e) => setInput(e.target.value)}
// // // // // //             className="flex-1 border rounded-lg px-4 py-2"
// // // // // //             placeholder="Ask about your loan..."
// // // // // //           />
// // // // // //           <button
// // // // // //             onClick={sendMessage}
// // // // // //             className="bg-blue-600 text-white px-4 py-2 rounded-lg"
// // // // // //           >
// // // // // //             Send
// // // // // //           </button>
// // // // // //         </div>

// // // // // //         {/* ALWAYS VISIBLE Upload */}
// // // // // //         <div className="border rounded-lg p-4 bg-gray-50">
// // // // // //           <p className="text-sm font-medium mb-2">
// // // // // //             Upload Salary Slip (Optional)
// // // // // //           </p>

// // // // // //           <div className="flex gap-2 items-center">
// // // // // //             <input
// // // // // //               type="file"
// // // // // //               accept=".pdf,.jpg,.png"
// // // // // //               onChange={(e) =>
// // // // // //                 setFile(e.target.files ? e.target.files[0] : null)
// // // // // //               }
// // // // // //               className="text-sm"
// // // // // //             />

// // // // // //             <button
// // // // // //               onClick={uploadSalarySlip}
// // // // // //               disabled={!file || uploading}
// // // // // //               className="bg-green-600 text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
// // // // // //             >
// // // // // //               {uploading ? "Uploading..." : "Upload"}
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // import { useEffect, useState } from "react";

// // // // // interface User {
// // // // //   id: string;
// // // // //   name: string;
// // // // //   email: string;
// // // // //   loanProfile: string;
// // // // // }

// // // // // interface Message {
// // // // //   role: "user" | "assistant";
// // // // //   content: string;
// // // // // }

// // // // // export default function ChatPage() {
// // // // //   const [users, setUsers] = useState<User[]>([]);
// // // // //   const [selectedUser, setSelectedUser] = useState<User | null>(null);
// // // // //   const [sessionId, setSessionId] = useState<string | null>(null);
// // // // //   const [messages, setMessages] = useState<Message[]>([]);
// // // // //   const [input, setInput] = useState("");
// // // // //   const [file, setFile] = useState<File | null>(null);

// // // // //   // ===============================
// // // // //   // Fetch Users
// // // // //   // ===============================
// // // // //   useEffect(() => {
// // // // //     fetch("http://localhost:8000/users")
// // // // //       .then((res) => res.json())
// // // // //       .then((data) => setUsers(data))
// // // // //       .catch((err) => console.error("Users fetch error:", err));
// // // // //   }, []);

// // // // //   // ===============================
// // // // //   // Start Session
// // // // //   // ===============================
// // // // //   const handleUserSelect = async (user: User) => {
// // // // //     try {
// // // // //       const res = await fetch("http://localhost:8000/session/start", {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({ user_id: user.id }),
// // // // //       });

// // // // //       const data = await res.json();

// // // // //       console.log("Session started:", data);

// // // // //       setSessionId(data.session_id);
// // // // //       setSelectedUser(user);

// // // // //       setMessages([
// // // // //         { role: "assistant", content: data.message },
// // // // //       ]);
// // // // //     } catch (err) {
// // // // //       console.error("Session error:", err);
// // // // //     }
// // // // //   };

// // // // //   // ===============================
// // // // //   // Send Chat Message
// // // // //   // ===============================
// // // // //   const sendMessage = async () => {
// // // // //     if (!input.trim() || !sessionId) return;

// // // // //     setMessages((prev) => [
// // // // //       ...prev,
// // // // //       { role: "user", content: input },
// // // // //     ]);

// // // // //     try {
// // // // //       const res = await fetch("http://localhost:8000/chat/message", {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({
// // // // //           session_id: sessionId,
// // // // //           message: input,
// // // // //         }),
// // // // //       });

// // // // //       const data = await res.json();

// // // // //       setMessages((prev) => [
// // // // //         ...prev,
// // // // //         { role: "assistant", content: data.reply },
// // // // //       ]);
// // // // //     } catch (err) {
// // // // //       console.error("Chat error:", err);
// // // // //     }

// // // // //     setInput("");
// // // // //   };

// // // // //   // ===============================
// // // // //   // Upload Salary Slip
// // // // //   // ===============================
// // // // //   const uploadSalarySlip = async () => {
// // // // //     console.log("Upload button clicked");

// // // // //     if (!file) {
// // // // //       alert("Please select a file first.");
// // // // //       return;
// // // // //     }

// // // // //     if (!sessionId) {
// // // // //       alert("Start a session first.");
// // // // //       return;
// // // // //     }

// // // // //     const formData = new FormData();
// // // // //     formData.append("session_id", sessionId);
// // // // //     formData.append("file", file);

// // // // //     try {
// // // // //       const res = await fetch("http://localhost:8000/document/upload", {
// // // // //         method: "POST",
// // // // //         body: formData,
// // // // //       });

// // // // //       console.log("Upload response status:", res.status);

// // // // //       const data = await res.json();

// // // // //       console.log("Upload response data:", data);

// // // // //       setMessages((prev) => [
// // // // //         ...prev,
// // // // //         { role: "assistant", content: data.reply },
// // // // //       ]);

// // // // //       setFile(null);
// // // // //     } catch (err) {
// // // // //       console.error("Upload error:", err);
// // // // //       alert("Upload failed. Check console.");
// // // // //     }
// // // // //   };

// // // // //   // ===============================
// // // // //   // ACCOUNT SCREEN
// // // // //   // ===============================
// // // // //   if (!selectedUser) {
// // // // //     return (
// // // // //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // // // //         <div className="bg-white shadow-xl rounded-2xl p-10 w-[450px]">
// // // // //           <h2 className="text-2xl font-semibold mb-4 text-center">
// // // // //             Select Profile
// // // // //           </h2>

// // // // //           {users.map((user) => (
// // // // //             <div
// // // // //               key={user.id}
// // // // //               onClick={() => handleUserSelect(user)}
// // // // //               className="p-4 border rounded-xl hover:shadow-md cursor-pointer mb-3"
// // // // //             >
// // // // //               <h3 className="font-semibold">{user.name}</h3>
// // // // //               <p className="text-sm text-gray-500">{user.email}</p>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   // ===============================
// // // // //   // CHAT UI
// // // // //   // ===============================
// // // // //   return (
// // // // //     <div className="min-h-screen flex flex-col bg-gray-100">

// // // // //       {/* Header */}
// // // // //       <div className="bg-white shadow p-4 flex justify-between">
// // // // //         <div>
// // // // //           <h2 className="font-semibold">NIDHI AI Assistant</h2>
// // // // //           <p className="text-sm text-gray-500">
// // // // //             Logged in as {selectedUser.name}
// // // // //           </p>
// // // // //         </div>

// // // // //         <button
// // // // //           onClick={() => {
// // // // //             setSelectedUser(null);
// // // // //             setSessionId(null);
// // // // //             setMessages([]);
// // // // //           }}
// // // // //           className="text-red-500 text-sm"
// // // // //         >
// // // // //           Switch Account
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* Messages */}
// // // // //       <div className="flex-1 p-6 overflow-y-auto space-y-3">
// // // // //         {messages.map((msg, index) => (
// // // // //           <div
// // // // //             key={index}
// // // // //             className={`p-3 rounded-lg max-w-md ${
// // // // //               msg.role === "user"
// // // // //                 ? "bg-blue-600 text-white ml-auto"
// // // // //                 : "bg-white shadow"
// // // // //             }`}
// // // // //           >
// // // // //             {msg.content}
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* Input + Upload */}
// // // // //       <div className="p-4 bg-white border-t space-y-4">

// // // // //         {/* Chat Input */}
// // // // //         <div className="flex gap-2">
// // // // //           <input
// // // // //             value={input}
// // // // //             onChange={(e) => setInput(e.target.value)}
// // // // //             className="flex-1 border rounded-lg px-4 py-2"
// // // // //             placeholder="Type message..."
// // // // //           />
// // // // //           <button
// // // // //             onClick={sendMessage}
// // // // //             className="bg-blue-600 text-white px-4 py-2 rounded-lg"
// // // // //           >
// // // // //             Send
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* Always Visible Upload */}
// // // // //         <div className="border rounded-lg p-4 bg-gray-50">
// // // // //           <p className="text-sm font-medium mb-2">
// // // // //             Upload Salary Slip
// // // // //           </p>

// // // // //           <div className="flex gap-3 items-center">
// // // // //             <input
// // // // //               type="file"
// // // // //               onChange={(e) => {
// // // // //                 console.log("File selected:", e.target.files?.[0]);
// // // // //                 setFile(e.target.files ? e.target.files[0] : null);
// // // // //               }}
// // // // //             />

// // // // //             <button
// // // // //               onClick={uploadSalarySlip}
// // // // //               className="bg-green-600 text-white px-4 py-2 rounded-lg"
// // // // //             >
// // // // //               Upload
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>

// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import { useEffect, useState } from "react";

// // // // interface User {
// // // //   id: string;
// // // //   name: string;
// // // //   email: string;
// // // //   loanProfile: string;
// // // // }

// // // // interface Message {
// // // //   role: "user" | "assistant";
// // // //   content: string;
// // // // }

// // // // export default function ChatPage() {
// // // //   const [users, setUsers] = useState<User[]>([]);
// // // //   const [selectedUser, setSelectedUser] = useState<User | null>(null);
// // // //   const [sessionId, setSessionId] = useState<string | null>(null);
// // // //   const [messages, setMessages] = useState<Message[]>([]);
// // // //   const [input, setInput] = useState("");
// // // //   const [file, setFile] = useState<File | null>(null);
// // // //   const [uploading, setUploading] = useState(false);
// // // //   const [uploadMessage, setUploadMessage] = useState<string | null>(null);

// // // //   // ===============================
// // // //   // Fetch Users
// // // //   // ===============================
// // // //   useEffect(() => {
// // // //     fetch("http://localhost:8000/users")
// // // //       .then((res) => res.json())
// // // //       .then((data) => setUsers(data))
// // // //       .catch((err) => console.error("Users fetch error:", err));
// // // //   }, []);

// // // //   // ===============================
// // // //   // Start Session
// // // //   // ===============================
// // // //   const handleUserSelect = async (user: User) => {
// // // //     try {
// // // //       const res = await fetch("http://localhost:8000/session/start", {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({ user_id: user.id }),
// // // //       });

// // // //       const data = await res.json();

// // // //       setSessionId(data.session_id);
// // // //       setSelectedUser(user);

// // // //       setMessages([{ role: "assistant", content: data.message }]);
// // // //     } catch (err) {
// // // //       console.error("Session error:", err);
// // // //     }
// // // //   };

// // // //   // ===============================
// // // //   // Send Chat Message
// // // //   // ===============================
// // // //   const sendMessage = async () => {
// // // //     if (!input.trim() || !sessionId) return;

// // // //     setMessages((prev) => [...prev, { role: "user", content: input }]);
// // // //     setInput("");

// // // //     try {
// // // //       const res = await fetch("http://localhost:8000/chat/message", {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({
// // // //           session_id: sessionId,
// // // //           message: input,
// // // //         }),
// // // //       });

// // // //       const data = await res.json();

// // // //       setMessages((prev) => [
// // // //         ...prev,
// // // //         { role: "assistant", content: data.reply },
// // // //       ]);
// // // //     } catch (err) {
// // // //       console.error("Chat error:", err);
// // // //     }
// // // //   };

// // // //   // ===============================
// // // //   // Upload Salary Slip
// // // //   // ===============================
// // // //   const uploadSalarySlip = async () => {
// // // //     if (!file) {
// // // //       setUploadMessage("Please select a file first.");
// // // //       return;
// // // //     }

// // // //     if (!sessionId) {
// // // //       setUploadMessage("Start a session first.");
// // // //       return;
// // // //     }

// // // //     setUploading(true);
// // // //     setUploadMessage("Uploading salary slip...");

// // // //     const formData = new FormData();
// // // //     formData.append("session_id", sessionId);
// // // //     formData.append("file", file);

// // // //     try {
// // // //       const res = await fetch("http://localhost:8000/document/upload", {
// // // //         method: "POST",
// // // //         body: formData,
// // // //       });

// // // //       if (!res.ok) {
// // // //         throw new Error("Upload failed");
// // // //       }

// // // //       const data = await res.json();

// // // //       setMessages((prev) => [
// // // //         ...prev,
// // // //         { role: "assistant", content: data.reply },
// // // //       ]);

// // // //       setUploadMessage("Salary slip uploaded successfully ✅");
// // // //       setFile(null);
// // // //     } catch (err) {
// // // //       console.error("Upload error:", err);
// // // //       setUploadMessage("Upload failed ❌");
// // // //     } finally {
// // // //       setUploading(false);
// // // //     }
// // // //   };

// // // //   // ===============================
// // // //   // ACCOUNT SCREEN
// // // //   // ===============================
// // // //   if (!selectedUser) {
// // // //     return (
// // // //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // // //         <div className="bg-white shadow-xl rounded-2xl p-10 w-[450px]">
// // // //           <h2 className="text-2xl font-semibold mb-4 text-center">
// // // //             Select Profile
// // // //           </h2>

// // // //           {users.map((user) => (
// // // //             <div
// // // //               key={user.id}
// // // //               onClick={() => handleUserSelect(user)}
// // // //               className="p-4 border rounded-xl hover:shadow-md cursor-pointer mb-3"
// // // //             >
// // // //               <h3 className="font-semibold">{user.name}</h3>
// // // //               <p className="text-sm text-gray-500">{user.email}</p>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   // ===============================
// // // //   // CHAT UI
// // // //   // ===============================
// // // //   return (
// // // //     <div className="min-h-screen flex flex-col bg-gray-100">
// // // //       {/* Header */}
// // // //       <div className="bg-white shadow p-4 flex justify-between">
// // // //         <div>
// // // //           <h2 className="font-semibold">NIDHI AI Assistant</h2>
// // // //           <p className="text-sm text-gray-500">
// // // //             Logged in as {selectedUser.name}
// // // //           </p>
// // // //         </div>

// // // //         <button
// // // //           onClick={() => {
// // // //             setSelectedUser(null);
// // // //             setSessionId(null);
// // // //             setMessages([]);
// // // //           }}
// // // //           className="text-red-500 text-sm"
// // // //         >
// // // //           Switch Account
// // // //         </button>
// // // //       </div>

// // // //       {/* Messages */}
// // // //       <div className="flex-1 p-6 overflow-y-auto space-y-3">
// // // //         {messages.map((msg, index) => (
// // // //           <div
// // // //             key={index}
// // // //             className={`p-3 rounded-lg max-w-md ${
// // // //               msg.role === "user"
// // // //                 ? "bg-blue-600 text-white ml-auto"
// // // //                 : "bg-white shadow"
// // // //             }`}
// // // //           >
// // // //             {msg.content}
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       {/* Input + Upload */}
// // // //       <div className="p-4 bg-white border-t space-y-4">
// // // //         {/* Chat Input */}
// // // //         <div className="flex gap-2">
// // // //           <input
// // // //             value={input}
// // // //             onChange={(e) => setInput(e.target.value)}
// // // //             className="flex-1 border rounded-lg px-4 py-2"
// // // //             placeholder="Type message..."
// // // //           />
// // // //           <button
// // // //             onClick={sendMessage}
// // // //             className="bg-blue-600 text-white px-4 py-2 rounded-lg"
// // // //           >
// // // //             Send
// // // //           </button>
// // // //         </div>

// // // //         {/* Always Visible Upload */}
// // // //         <div className="border rounded-lg p-4 bg-gray-50">
// // // //           <p className="text-sm font-medium mb-2">
// // // //             Upload Salary Slip
// // // //           </p>

// // // //           <div className="flex gap-3 items-center">
// // // //             <input
// // // //               type="file"
// // // //               onChange={(e) =>
// // // //                 setFile(e.target.files ? e.target.files[0] : null)
// // // //               }
// // // //             />

// // // //             <button
// // // //               onClick={uploadSalarySlip}
// // // //               disabled={uploading}
// // // //               className={`px-4 py-2 rounded-lg text-white ${
// // // //                 uploading
// // // //                   ? "bg-gray-400"
// // // //                   : "bg-green-600 hover:bg-green-700"
// // // //               }`}
// // // //             >
// // // //               {uploading ? "Uploading..." : "Upload"}
// // // //             </button>
// // // //           </div>

// // // //           {uploadMessage && (
// // // //             <p className="text-sm mt-2 text-gray-600">
// // // //               {uploadMessage}
// // // //             </p>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // "use client";

// // // import { useEffect, useRef, useState } from "react";

// // // interface User {
// // //   id: string;
// // //   name: string;
// // //   email: string;
// // //   loanProfile: string;
// // // }

// // // interface Message {
// // //   role: "user" | "assistant";
// // //   content: string;
// // // }

// // // export default function ChatPage() {
// // //   const [users, setUsers] = useState<User[]>([]);
// // //   const [selectedUser, setSelectedUser] = useState<User | null>(null);
// // //   const [sessionId, setSessionId] = useState<string | null>(null);
// // //   const [messages, setMessages] = useState<Message[]>([]);
// // //   const [input, setInput] = useState("");
// // //   const [file, setFile] = useState<File | null>(null);
// // //   const [uploading, setUploading] = useState(false);
// // //   const [uploadMessage, setUploadMessage] = useState<string | null>(null);
// // //   const [isTyping, setIsTyping] = useState(false);

// // //   const messagesEndRef = useRef<HTMLDivElement | null>(null);

// // //   // Auto Scroll
// // //   useEffect(() => {
// // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // //   }, [messages, isTyping]);

// // //   // Fetch Users
// // //   useEffect(() => {
// // //     fetch("http://localhost:8000/users")
// // //       .then((res) => res.json())
// // //       .then((data) => setUsers(data))
// // //       .catch((err) => console.error("Users fetch error:", err));
// // //   }, []);

// // //   // Start Session
// // //   const handleUserSelect = async (user: User) => {
// // //     try {
// // //       const res = await fetch("http://localhost:8000/session/start", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ user_id: user.id }),
// // //       });

// // //       const data = await res.json();

// // //       setSessionId(data.session_id);
// // //       setSelectedUser(user);
// // //       setMessages([{ role: "assistant", content: data.message }]);
// // //     } catch (err) {
// // //       console.error("Session error:", err);
// // //     }
// // //   };

// // //   // Send Chat Message
// // //   const sendMessage = async () => {
// // //     if (!input.trim() || !sessionId) return;

// // //     const userMessage = input;
// // //     setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
// // //     setInput("");
// // //     setIsTyping(true);

// // //     try {
// // //       const res = await fetch("http://localhost:8000/chat/message", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({
// // //           session_id: sessionId,
// // //           message: userMessage,
// // //         }),
// // //       });

// // //       const data = await res.json();

// // //       setIsTyping(false);
// // //       setMessages((prev) => [
// // //         ...prev,
// // //         { role: "assistant", content: data.reply },
// // //       ]);
// // //     } catch (err) {
// // //       setIsTyping(false);
// // //       console.error("Chat error:", err);
// // //     }
// // //   };

// // //   // Upload Salary Slip
// // //   const uploadSalarySlip = async () => {
// // //     if (!file || !sessionId) return;

// // //     setUploading(true);
// // //     setUploadMessage("Uploading salary slip...");

// // //     const formData = new FormData();
// // //     formData.append("session_id", sessionId);
// // //     formData.append("file", file);

// // //     try {
// // //       const res = await fetch("http://localhost:8000/document/upload", {
// // //         method: "POST",
// // //         body: formData,
// // //       });

// // //       const data = await res.json();

// // //       setMessages((prev) => [
// // //         ...prev,
// // //         { role: "assistant", content: data.reply },
// // //       ]);

// // //       setUploadMessage("Salary slip uploaded successfully ✅");
// // //       setFile(null);
// // //     } catch (err) {
// // //       setUploadMessage("Upload failed ❌");
// // //       console.error("Upload error:", err);
// // //     } finally {
// // //       setUploading(false);
// // //     }
// // //   };

// // //   // ===============================
// // //   // USER SELECTION SCREEN
// // //   // ===============================
// // //   if (!selectedUser) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-[#0b1120] relative overflow-hidden text-white">

// // //         {/* Animated Glow Background */}
// // //         <div className="absolute w-[600px] h-[600px] bg-emerald-500 opacity-20 blur-[200px] rounded-full animate-pulse top-[-200px] left-[-200px]" />
// // //         <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[200px] rounded-full animate-pulse bottom-[-150px] right-[-150px]" />

// // //         <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl w-[450px] shadow-2xl">
// // //           <h2 className="text-2xl font-semibold mb-6 text-center tracking-wide">
// // //             Select Your Profile
// // //           </h2>

// // //           {users.map((user) => (
// // //             <div
// // //               key={user.id}
// // //               onClick={() => handleUserSelect(user)}
// // //               className="p-4 border border-white/10 rounded-xl mb-4 cursor-pointer hover:bg-white/10 transition"
// // //             >
// // //               <h3 className="font-semibold">{user.name}</h3>
// // //               <p className="text-sm text-gray-400">{user.email}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   // ===============================
// // //   // CHAT UI
// // //   // ===============================
// // //   return (
// // //     <div className="min-h-screen flex flex-col bg-[#0b1120] relative overflow-hidden text-white">

// // //       {/* Background Glow */}
// // //       <div className="absolute w-[600px] h-[600px] bg-emerald-500 opacity-20 blur-[200px] rounded-full animate-pulse top-[-200px] left-[-200px]" />
// // //       <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[200px] rounded-full animate-pulse bottom-[-150px] right-[-150px]" />

// // //       {/* Header */}
// // //       <div className="relative backdrop-blur-md bg-white/5 border-b border-white/10 p-5 flex justify-between items-center">
// // //         <div>
// // //           <h2 className="text-lg font-semibold">NIDHI AI Assistant</h2>
// // //           <p className="text-sm text-gray-400">
// // //             Logged in as {selectedUser.name}
// // //           </p>
// // //         </div>

// // //         <button
// // //           onClick={() => {
// // //             setSelectedUser(null);
// // //             setSessionId(null);
// // //             setMessages([]);
// // //           }}
// // //           className="text-red-400 hover:text-red-300 transition text-sm"
// // //         >
// // //           Switch Account
// // //         </button>
// // //       </div>

// // //       {/* Messages */}
// // //       <div className="relative flex-1 p-8 overflow-y-auto space-y-4">
// // //         {messages.map((msg, index) => (
// // //           <div
// // //             key={index}
// // //             className={`max-w-lg px-5 py-3 rounded-2xl shadow-lg ${
// // //               msg.role === "user"
// // //                 ? "ml-auto bg-gradient-to-r from-emerald-500 to-green-600"
// // //                 : "bg-white/10 backdrop-blur-md border border-white/10"
// // //             }`}
// // //           >
// // //             {msg.content}
// // //           </div>
// // //         ))}

// // //         {/* Typing Indicator */}
// // //         {isTyping && (
// // //           <div className="bg-white/10 border border-white/10 px-5 py-3 rounded-2xl w-fit">
// // //             <div className="flex space-x-2">
// // //               <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
// // //               <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-150" />
// // //               <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-300" />
// // //             </div>
// // //           </div>
// // //         )}

// // //         <div ref={messagesEndRef} />
// // //       </div>

// // //       {/* Input + Upload */}
// // //       <div className="relative p-6 backdrop-blur-md bg-white/5 border-t border-white/10 space-y-6">

// // //         {/* Chat Input */}
// // //         <div className="flex gap-3">
// // //           <input
// // //             value={input}
// // //             onChange={(e) => setInput(e.target.value)}
// // //             className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
// // //             placeholder="Type your message..."
// // //           />
// // //           <button
// // //             onClick={sendMessage}
// // //             className="bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-3 rounded-xl font-medium hover:scale-105 transition transform"
// // //           >
// // //             Send
// // //           </button>
// // //         </div>

// // //         {/* Upload */}
// // //         <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
// // //           <p className="text-sm text-gray-300 mb-3">
// // //             Upload Salary Slip
// // //           </p>

// // //           <div className="flex gap-4 items-center">
// // //             <input
// // //               type="file"
// // //               className="text-sm text-gray-300"
// // //               onChange={(e) =>
// // //                 setFile(e.target.files ? e.target.files[0] : null)
// // //               }
// // //             />

// // //             <button
// // //               onClick={uploadSalarySlip}
// // //               disabled={uploading}
// // //               className={`px-6 py-3 rounded-xl font-medium transition transform ${
// // //                 uploading
// // //                   ? "bg-gray-600 cursor-not-allowed"
// // //                   : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105"
// // //               }`}
// // //             >
// // //               {uploading ? "Uploading..." : "Upload"}
// // //             </button>
// // //           </div>

// // //           {uploadMessage && (
// // //             <p className="text-sm mt-3 text-gray-400">
// // //               {uploadMessage}
// // //             </p>
// // //           )}
// // //         </div>

// // //       </div>
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { useEffect, useRef, useState } from "react";

// // interface User {
// //   id: string;
// //   name: string;
// //   email: string;
// //   loanProfile: string;
// // }

// // interface Message {
// //   role: "user" | "assistant";
// //   content: string;
// // }

// // export default function ChatPage() {
// //   const [users, setUsers] = useState<User[]>([]);
// //   const [selectedUser, setSelectedUser] = useState<User | null>(null);
// //   const [sessionId, setSessionId] = useState<string | null>(null);
// //   const [messages, setMessages] = useState<Message[]>([]);
// //   const [input, setInput] = useState("");
// //   const [file, setFile] = useState<File | null>(null);
// //   const [uploading, setUploading] = useState(false);
// //   const [uploadMessage, setUploadMessage] = useState<string | null>(null);
// //   const [isTyping, setIsTyping] = useState(false);

// //   const messagesEndRef = useRef<HTMLDivElement | null>(null);

// //   // Auto Scroll
// //   useEffect(() => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [messages, isTyping]);

// //   // Fetch Users
// //   useEffect(() => {
// //     fetch("http://localhost:8000/users")
// //       .then((res) => res.json())
// //       .then((data) => setUsers(data))
// //       .catch((err) => console.error("Users fetch error:", err));
// //   }, []);

// //   // Start Session
// //   const handleUserSelect = async (user: User) => {
// //     try {
// //       const res = await fetch("http://localhost:8000/session/start", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ user_id: user.id }),
// //       });

// //       const data = await res.json();

// //       setSessionId(data.session_id);
// //       setSelectedUser(user);
// //       setMessages([{ role: "assistant", content: data.message }]);
// //     } catch (err) {
// //       console.error("Session error:", err);
// //     }
// //   };

// //   // Send Message
// //   const sendMessage = async () => {
// //     if (!input.trim() || !sessionId) return;

// //     const userMessage = input;
// //     setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
// //     setInput("");
// //     setIsTyping(true);

// //     try {
// //       const res = await fetch("http://localhost:8000/chat/message", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           session_id: sessionId,
// //           message: userMessage,
// //         }),
// //       });

// //       const data = await res.json();

// //       setIsTyping(false);
// //       setMessages((prev) => [
// //         ...prev,
// //         { role: "assistant", content: data.reply },
// //       ]);
// //     } catch (err) {
// //       setIsTyping(false);
// //       console.error("Chat error:", err);
// //     }
// //   };

// //   // Upload Salary Slip
// //   const uploadSalarySlip = async () => {
// //     if (!file || !sessionId) return;

// //     setUploading(true);
// //     setUploadMessage("Uploading salary slip...");

// //     const formData = new FormData();
// //     formData.append("session_id", sessionId);
// //     formData.append("file", file);

// //     try {
// //       const res = await fetch("http://localhost:8000/document/upload", {
// //         method: "POST",
// //         body: formData,
// //       });

// //       const data = await res.json();

// //       setMessages((prev) => [
// //         ...prev,
// //         { role: "assistant", content: data.reply },
// //       ]);

// //       setUploadMessage("Salary slip uploaded successfully ✅");
// //       setFile(null);
// //     } catch (err) {
// //       setUploadMessage("Upload failed ❌");
// //       console.error("Upload error:", err);
// //     } finally {
// //       setUploading(false);
// //     }
// //   };

// //   // ===============================
// //   // USER SELECTION SCREEN
// //   // ===============================
// //   if (!selectedUser) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-[#0b1120] relative overflow-hidden text-white">
// //         <div className="absolute w-[600px] h-[600px] bg-emerald-500 opacity-20 blur-[200px] rounded-full animate-pulse top-[-200px] left-[-200px]" />
// //         <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[200px] rounded-full animate-pulse bottom-[-150px] right-[-150px]" />

// //         <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl w-[450px] shadow-2xl">
// //           <h2 className="text-2xl font-semibold mb-6 text-center tracking-wide">
// //             Select Your Profile
// //           </h2>

// //           {users.map((user) => (
// //             <div
// //               key={user.id}
// //               onClick={() => handleUserSelect(user)}
// //               className="p-4 border border-white/10 rounded-xl mb-4 cursor-pointer hover:bg-white/10 transition"
// //             >
// //               <h3 className="font-semibold">{user.name}</h3>
// //               <p className="text-sm text-gray-400">{user.email}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   }

// //   // ===============================
// //   // MAIN CHAT UI
// //   // ===============================
// //   return (
// //     <div className="h-screen flex flex-col bg-[#0b1120] relative overflow-hidden text-white">

// //       {/* Background Glow */}
// //       <div className="absolute w-[600px] h-[600px] bg-emerald-500 opacity-20 blur-[200px] rounded-full animate-pulse top-[-200px] left-[-200px]" />
// //       <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[200px] rounded-full animate-pulse bottom-[-150px] right-[-150px]" />

// //       {/* Navbar */}
// //       <div className="relative z-10 backdrop-blur-md bg-white/5 border-b border-white/10 px-8 py-4 flex justify-between items-center">
// //         <h1 className="text-lg font-semibold tracking-wide">
// //           NIDHI FINTECH
// //         </h1>
// //         <div className="flex items-center gap-6 text-sm text-gray-300">
// //           <span>{selectedUser.name}</span>
// //           <button
// //             onClick={() => {
// //               setSelectedUser(null);
// //               setSessionId(null);
// //               setMessages([]);
// //             }}
// //             className="text-red-400 hover:text-red-300 transition"
// //           >
// //             Logout
// //           </button>
// //         </div>
// //       </div>

// //       {/* Messages Area */}
// //       <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4 relative z-10">
// //         {messages.map((msg, index) => (
// //           <div
// //             key={index}
// //             className={`max-w-lg px-5 py-3 rounded-2xl shadow-lg ${
// //               msg.role === "user"
// //                 ? "ml-auto bg-gradient-to-r from-emerald-500 to-green-600"
// //                 : "bg-white/10 backdrop-blur-md border border-white/10"
// //             }`}
// //           >
// //             {msg.content}
// //           </div>
// //         ))}

// //         {isTyping && (
// //           <div className="bg-white/10 border border-white/10 px-5 py-3 rounded-2xl w-fit">
// //             <div className="flex space-x-2">
// //               <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
// //               <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-150" />
// //               <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-300" />
// //             </div>
// //           </div>
// //         )}

// //         <div ref={messagesEndRef} />
// //       </div>

// //       {/* Sticky Bottom Section */}
// //       <div className="relative z-10 backdrop-blur-md bg-white/5 border-t border-white/10 px-8 py-6 space-y-6">

// //         {/* Chat Input */}
// //         <div className="flex gap-3">
// //           <input
// //             value={input}
// //             onChange={(e) => setInput(e.target.value)}
// //             className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
// //             placeholder="Type your message..."
// //           />
// //           <button
// //             onClick={sendMessage}
// //             className="bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-3 rounded-xl font-medium hover:scale-105 transition transform"
// //           >
// //             Send
// //           </button>
// //         </div>

// //         {/* Upload Section */}
// //         <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
// //           <p className="text-sm text-gray-300 mb-3">
// //             Upload Salary Slip
// //           </p>

// //           <div className="flex gap-4 items-center">
// //             <input
// //               type="file"
// //               className="text-sm text-gray-300"
// //               onChange={(e) =>
// //                 setFile(e.target.files ? e.target.files[0] : null)
// //               }
// //             />

// //             <button
// //               onClick={uploadSalarySlip}
// //               disabled={uploading}
// //               className={`px-6 py-3 rounded-xl font-medium transition transform ${
// //                 uploading
// //                   ? "bg-gray-600 cursor-not-allowed"
// //                   : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105"
// //               }`}
// //             >
// //               {uploading ? "Uploading..." : "Upload"}
// //             </button>
// //           </div>

// //           {uploadMessage && (
// //             <p className="text-sm mt-3 text-gray-400">
// //               {uploadMessage}
// //             </p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// "use client"

// import { useEffect, useRef, useState } from "react"

// export default function LoanChatApp() {
//   const [sessionId, setSessionId] = useState(null)
//   const [selectedUser, setSelectedUser] = useState("")
//   const [message, setMessage] = useState("")
//   const [messages, setMessages] = useState([])
//   const [file, setFile] = useState(null)
//   const [uploading, setUploading] = useState(false)
//   const [typing, setTyping] = useState(false)

//   const bottomRef = useRef(null)

//   const API = "http://127.0.0.1:8000"

//   // Auto scroll
//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" })
//   }, [messages, typing])

//   // Create session
//   const createSession = async (user) => {
//     const res = await fetch(`${API}/session/start`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ user_id: user }),
//     })

//     const data = await res.json()
//     setSessionId(data.session_id)
//     setMessages([])
//   }

//   // Send message
//   const sendMessage = async () => {
//     if (!message.trim() || !sessionId) return

//     const userMsg = message
//     setMessage("")

//     setMessages((prev) => [...prev, { role: "user", text: userMsg }])
//     setTyping(true)

//     try {
//       const res = await fetch(`${API}/chat/message`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ session_id: sessionId, message: userMsg }),
//       })

//       const data = await res.json()

//       setTyping(false)
//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", text: data.reply },
//       ])
//     } catch (err) {
//       setTyping(false)
//       console.error(err)
//     }
//   }

//   // Upload salary slip
//   const uploadSlip = async () => {
//     if (!file || !sessionId) return

//     setUploading(true)

//     const formData = new FormData()
//     formData.append("session_id", sessionId)
//     formData.append("file", file)

//     try {
//       const res = await fetch(`${API}/document/upload`, {
//         method: "POST",
//         body: formData,
//       })

//       const data = await res.json()

//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", text: data.reply },
//       ])

//       setFile(null)
//     } catch (err) {
//       console.error(err)
//     }

//     setUploading(false)
//   }

//   return (
//     <div className="h-screen flex flex-col bg-black text-white relative overflow-hidden">

//       {/* Animated Glow Background */}
//       <div className="absolute w-[600px] h-[600px] bg-purple-700 opacity-20 blur-[200px] rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
//       <div className="absolute w-[500px] h-[500px] bg-blue-700 opacity-20 blur-[200px] rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

//       {/* Navbar */}
//       <div className="z-10 flex justify-between items-center px-8 py-4 border-b border-white/10 backdrop-blur-md bg-black/40">
//         <h1 className="text-xl font-semibold tracking-wide">
//           NeoLoan AI
//         </h1>

//         <select
//           value={selectedUser}
//           onChange={(e) => {
//             setSelectedUser(e.target.value)
//             createSession(e.target.value)
//           }}
//           className="bg-zinc-900 border border-white/10 px-4 py-2 rounded-lg focus:outline-none"
//         >
//           <option value="">Select User</option>
//           <option value="user1">User 1</option>
//           <option value="user2">User 2</option>
//           <option value="user3">User 3</option>
//         </select>
//       </div>

//       {/* Chat Section */}
//       <div className="flex-1 overflow-y-auto px-6 py-6 z-10">
//         <div className="max-w-4xl mx-auto space-y-4">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`flex ${
//                 msg.role === "user" ? "justify-end" : "justify-start"
//               }`}
//             >
//               <div
//                 className={`px-5 py-3 rounded-2xl max-w-md shadow-lg backdrop-blur-md ${
//                   msg.role === "user"
//                     ? "bg-gradient-to-r from-purple-600 to-blue-600"
//                     : "bg-zinc-900 border border-white/10"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             </div>
//           ))}

//           {/* Typing Animation */}
//           {typing && (
//             <div className="flex justify-start">
//               <div className="px-5 py-3 rounded-2xl bg-zinc-900 border border-white/10">
//                 <div className="flex space-x-1">
//                   <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
//                   <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></span>
//                   <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-300"></span>
//                 </div>
//               </div>
//             </div>
//           )}

//           <div ref={bottomRef}></div>
//         </div>
//       </div>

//       {/* Fixed Bottom Section */}
//       <div className="z-20 border-t border-white/10 backdrop-blur-xl bg-black/70 p-4">
//         <div className="max-w-4xl mx-auto space-y-4">

//           {/* Message Input */}
//           <div className="flex space-x-3">
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type your message..."
//               className="flex-1 px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl focus:outline-none"
//             />
//             <button
//               onClick={sendMessage}
//               className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-medium hover:scale-105 transition"
//             >
//               Send
//             </button>
//           </div>

//           {/* Salary Slip Upload */}
//           <div className="flex items-center justify-between bg-zinc-900 border border-white/10 rounded-xl px-4 py-3">
//             <input
//               type="file"
//               onChange={(e) => setFile(e.target.files[0])}
//               className="text-sm"
//             />

//             <button
//               onClick={uploadSlip}
//               disabled={uploading}
//               className="px-5 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition"
//             >
//               {uploading ? "Uploading..." : "Upload Salary Slip"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"

import { useEffect, useRef, useState } from "react"

export default function LoanChatApp() {
  const [sessionId, setSessionId] = useState(null)
  const [selectedUser, setSelectedUser] = useState("")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [typing, setTyping] = useState(false)

  const bottomRef = useRef(null)
  const API = "http://127.0.0.1:8000"

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, typing])

  const createSession = async (user) => {
    if (!user) return

    const res = await fetch(`${API}/session/start`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: user }),
    })

    const data = await res.json()
    setSessionId(data.session_id)
    setMessages([])
  }

  const sendMessage = async () => {
    if (!message.trim() || !sessionId) return

    const userMsg = message
    setMessage("")
    setMessages((prev) => [...prev, { role: "user", text: userMsg }])
    setTyping(true)

    try {
      const res = await fetch(`${API}/chat/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, message: userMsg }),
      })

      const data = await res.json()
      setTyping(false)
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.reply },
      ])
    } catch (err) {
      setTyping(false)
      console.error(err)
    }
  }

  const uploadSlip = async () => {
    if (!file || !sessionId) return

    setUploading(true)

    const formData = new FormData()
    formData.append("session_id", sessionId)
    formData.append("file", file)

    try {
      const res = await fetch(`${API}/document/upload`, {
        method: "POST",
        body: formData,
      })

      const data = await res.json()

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.reply },
      ])

      setFile(null)
    } catch (err) {
      console.error(err)
    }

    setUploading(false)
  }

  return (
    <div className="h-screen flex flex-col bg-black text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-700 opacity-20 blur-[200px] rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-700 opacity-20 blur-[200px] rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

      {/* Navbar */}
      <div className="z-10 px-8 py-4 border-b border-white/10 backdrop-blur-md bg-black/40">
        <h1 className="text-xl font-semibold tracking-wide">
         Nidhi
        </h1>
      </div>

      {/* User Selection Section */}
      {!sessionId && (
        <div className="flex-1 flex items-center justify-center z-10 px-6">
          <div className="bg-zinc-900 border border-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-full max-w-md text-center space-y-6">
            <h2 className="text-2xl font-semibold">
              Select Customer Profile
            </h2>

            <select
              value={selectedUser}
              onChange={(e) => {
                setSelectedUser(e.target.value)
                createSession(e.target.value)
              }}
              className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl focus:outline-none"
            >
              <option value="">Choose User</option>
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
              <option value="user3">User 3</option>
            </select>
          </div>
        </div>
      )}

      {/* Chat Section */}
      {sessionId && (
        <>
          <div className="flex-1 overflow-y-auto px-6 py-6 z-10">
            <div className="max-w-4xl mx-auto space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`px-5 py-3 rounded-2xl max-w-md shadow-lg backdrop-blur-md ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-purple-600 to-blue-600"
                        : "bg-zinc-900 border border-white/10"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="px-5 py-3 rounded-2xl bg-zinc-900 border border-white/10">
                    <div className="flex space-x-1">
                      <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></span>
                      <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-300"></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={bottomRef}></div>
            </div>
          </div>

          {/* Fixed Bottom */}
          <div className="z-20 border-t border-white/10 backdrop-blur-xl bg-black/70 p-4">
            <div className="max-w-4xl mx-auto space-y-4">

              <div className="flex space-x-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl focus:outline-none"
                />
                <button
                  onClick={sendMessage}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-medium hover:scale-105 transition"
                >
                  Send
                </button>
              </div>

              <div className="flex items-center justify-between bg-zinc-900 border border-white/10 rounded-xl px-4 py-3">
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="text-sm"
                />

                <button
                  onClick={uploadSlip}
                  disabled={uploading}
                  className="px-5 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition"
                >
                  {uploading ? "Uploading..." : "Upload Salary Slip"}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}