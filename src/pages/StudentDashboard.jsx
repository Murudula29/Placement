// // // import React from "react";

// // // // Optional: import charts library if needed later
// // // // import { Bar, Pie, Radar } from "react-chartjs-2";

// // // export default function StudentDashboard() {
// // //   // Hero Stats
// // //   const heroStats = [
// // //     { title: "Applications", value: 12 },
// // //     { title: "Shortlisted", value: 3 },
// // //     { title: "Upcoming Interviews", value: 2 },
// // //     { title: "Readiness Score", value: "75%" },
// // //   ];

// // //   // Recommended Jobs
// // //   const recommendedJobs = [
// // //     { company: "TechCorp", role: "Software Engineer", match: "85%" },
// // //     { company: "InnovateX", role: "Frontend Developer", match: "78%" },
// // //     { company: "NextGen AI", role: "Data Analyst", match: "92%" },
// // //   ];

// // //   // Skills
// // //   const skills = [
// // //     { name: "DSA", score: 80 },
// // //     { name: "Python", score: 90 },
// // //     { name: "System Design", score: 60 },
// // //   ];

// // //   // AI Study Buddy
// // //   const aiModules = [
// // //     { title: "Technical Practice", description: "Practice coding and MCQs with AI guidance." },
// // //     { title: "Behavioral Interview", description: "Mock interviews with AI feedback." },
// // //   ];

// // //   // Mentors
// // //   const mentors = [
// // //     { name: "Rohan Singh", designation: "Software Engineer, 2021" },
// // //     { name: "Anika Patel", designation: "Data Analyst, 2020" },
// // //   ];

// // //   return (
// // //     <div className="container my-4">
// // //       {/* Hero Stats */}
// // //       <div className="row g-3 mb-4">
// // //         {heroStats.map((stat) => (
// // //           <div key={stat.title} className="col-12 col-md-3">
// // //             <div className="card p-3 shadow-sm text-center">
// // //               <div className="h5 fw-bold">{stat.value}</div>
// // //               <div className="text-muted">{stat.title}</div>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Job Recommendations */}
// // //       <section className="mb-4">
// // //         <h5 className="mb-3">Recommended Jobs</h5>
// // //         <div className="d-flex flex-wrap gap-3">
// // //           {recommendedJobs.map((job, index) => (
// // //             <div key={index} className="card p-3 shadow-sm" style={{ width: "18rem" }}>
// // //               <div className="fw-semibold">{job.company}</div>
// // //               <div className="text-muted mb-2">{job.role}</div>
// // //               <div className="mb-2">Match: {job.match}</div>
// // //               <button className="btn btn-primary w-100">Apply</button>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* Skills & Readiness */}
// // //       <section className="mb-4">
// // //         <h5 className="mb-3">Skills & Readiness</h5>
// // //         <div className="row g-3">
// // //           {skills.map((skill, index) => (
// // //             <div key={index} className="col-12 col-md-4">
// // //               <div className="card p-3 shadow-sm">
// // //                 <div className="fw-semibold">{skill.name}</div>
// // //                 <div className="progress mt-2">
// // //                   <div
// // //                     className="progress-bar"
// // //                     role="progressbar"
// // //                     style={{ width: `${skill.score}%` }}
// // //                     aria-valuenow={skill.score}
// // //                     aria-valuemin="0"
// // //                     aria-valuemax="100"
// // //                   >
// // //                     {skill.score}%
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* AI Study Buddy */}
// // //       <section className="mb-4">
// // //         <h5 className="mb-3">AI Study Buddy</h5>
// // //         <div className="d-flex flex-wrap gap-3">
// // //           {aiModules.map((module, index) => (
// // //             <div key={index} className="card p-3 shadow-sm" style={{ width: "15rem" }}>
// // //               <div className="fw-semibold">{module.title}</div>
// // //               <p className="small text-muted">{module.description}</p>
// // //               <button className="btn btn-outline-primary w-100">Start</button>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* Resume & Cover Letter */}
// // //       <section className="mb-4">
// // //         <h5 className="mb-3">Resume & Cover Letter</h5>
// // //         <div className="d-flex flex-wrap gap-3">
// // //           <div className="card p-3 shadow-sm" style={{ width: "18rem" }}>
// // //             <div className="fw-semibold">Resume Builder</div>
// // //             <p className="small text-muted">Upload your resume and get AI feedback.</p>
// // //             <button className="btn btn-outline-primary w-100">Upload & Analyze</button>
// // //           </div>
// // //           <div className="card p-3 shadow-sm" style={{ width: "18rem" }}>
// // //             <div className="fw-semibold">Cover Letter</div>
// // //             <p className="small text-muted">Generate personalized AI-based cover letters.</p>
// // //             <button className="btn btn-outline-primary w-100">Generate</button>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Mentor Connect */}
// // //       <section className="mb-4">
// // //         <h5 className="mb-3">Mentor Connect</h5>
// // //         <div className="d-flex flex-wrap gap-3">
// // //           {mentors.map((mentor, index) => (
// // //             <div key={index} className="card p-3 shadow-sm" style={{ width: "12rem" }}>
// // //               <div className="fw-semibold">{mentor.name}</div>
// // //               <div className="text-muted">{mentor.designation}</div>
// // //               <button className="btn btn-outline-primary w-100 mt-2">Connect</button>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* Placeholder for Visual Analytics */}
// // //       <section className="mb-4">
// // //         <h5 className="mb-3">Visual Analytics</h5>
// // //         <div className="card p-3 shadow-sm text-center" style={{ height: "200px" }}>
// // //           <p className="text-muted">Charts and graphs will be displayed here (Skills vs Jobs, Trends, Heatmaps)</p>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }






// // import React, { useState } from "react";
// // import {
// //   User,
// //   Briefcase,
// //   FileText,
// //   Bell,
// //   TrendingUp,
// //   Settings,
// // } from "lucide-react";
// // import { useAuth, getInitials } from "../auth/AuthContext";

// // /* ----------------------- Shared UI Components ----------------------- */
// // const GlassCard = ({ title, icon: Icon, children }) => (
// //   <div className="backdrop-blur-xl bg-white/70 border border-white/20 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-6">
// //     <div className="flex items-center gap-2 mb-4">
// //       {Icon && <Icon className="h-5 w-5 text-indigo-500" />}
// //       <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
// //     </div>
// //     {children}
// //   </div>
// // );

// // // ✅ Fixed badge colors (safe for Tailwind)
// // const colorMap = {
// //   indigo: "bg-indigo-100 text-indigo-700",
// //   purple: "bg-purple-100 text-purple-700",
// //   green: "bg-green-100 text-green-700",
// //   orange: "bg-orange-100 text-orange-700",
// //   pink: "bg-pink-100 text-pink-700",
// //   red: "bg-red-100 text-red-700",
// // };

// // const Badge = ({ children, color = "indigo" }) => (
// //   <span
// //     className={`px-3 py-1 rounded-full text-xs font-medium ${
// //       colorMap[color] || colorMap.indigo
// //     }`}
// //   >
// //     {children}
// //   </span>
// // );

// // const jobs = [
// //   { role: "SDE 1", company: "TCS", deadline: "Sep 20", fit: 86, status: "Recommended" },
// //   { role: "Data Analyst", company: "Deloitte", deadline: "Sep 10", fit: 77, status: "Applied" },
// //   { role: "Frontend Engineer", company: "Zoho", deadline: "Sep 5", fit: 73, status: "Saved" },
// // ];

// // const applications = [
// //   { company: "Deloitte", role: "Data Analyst", stage: "Shortlisted", updated: "Aug 10" },
// //   { company: "Infosys", role: "SE", stage: "Applied", updated: "Aug 12" },
// //   { company: "Accenture", role: "ASE", stage: "Interviewed", updated: "Aug 14" },
// // ];

// // const notifications = [
// //   { type: "schedule", text: "Zoho Aptitude Test – Sep 6, 10:00 AM", ts: "2h ago" },
// //   { type: "tip", text: "AI Tip: Revise SQL Joins before Deloitte test", ts: "6h ago" },
// //   { type: "announce", text: "TCS drive opens Sep 1", ts: "1d ago" },
// // ];

// // /* ----------------------- Dashboard ----------------------- */
// // export default function StudentDashboard() {
// //   const [tab, setTab] = useState("overview");
// //   const { currentUser } = useAuth();

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-800">
// //       {/* Top Navbar */}
// //       <header className="flex items-center justify-between px-10 py-5 bg-white/60 backdrop-blur-xl shadow-sm sticky top-0 z-50">
// //         <h1 className="text-2xl font-bold text-indigo-600">🎓 Student Dashboard</h1>

// //         <nav className="flex items-center gap-6 text-sm font-medium">
// //           {["overview", "jobs", "applications", "notifications"].map((item) => (
// //             <button
// //               key={item}
// //               onClick={() => setTab(item)}
// //               className={
// //                 tab === item
// //                   ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
// //                   : "text-gray-600 hover:text-indigo-500"
// //               }
// //             >
// //               {item.charAt(0).toUpperCase() + item.slice(1)}
// //             </button>
// //           ))}
// //         </nav>

// //         <div className="flex items-center gap-3">
// //           <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold shadow-md cursor-pointer hover:scale-105 transition">
// //             {getInitials(currentUser)}
// //           </div>
// //         </div>
// //       </header>

// //       {/* Content */}
// //       <main className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
// //         {/* Overview Tab */}
// //         {tab === "overview" && (
// //           <>
// //             <GlassCard title="Profile Summary" icon={User}>
// //               <p className="text-gray-700 font-medium">
// //                 {currentUser?.displayName || "Student Name"}
// //               </p>
// //               <p className="text-sm text-gray-500 mb-2">
// //                 CSE | CGPA: 8.6
// //               </p>
// //               <div className="flex flex-wrap gap-2">
// //                 <Badge>React</Badge>
// //                 <Badge>Node.js</Badge>
// //                 <Badge>SQL</Badge>
// //                 <Badge color="purple">DSA</Badge>
// //               </div>
// //             </GlassCard>

// //             <GlassCard title="AI Insights" icon={TrendingUp}>
// //               <ul className="space-y-2 text-sm text-gray-600">
// //                 <li>
// //                   ✅ Resume Score:{" "}
// //                   <span className="font-semibold text-indigo-600">92%</span>
// //                 </li>
// //                 <li>
// //                   ⚡ Top Skill Gap:{" "}
// //                   <span className="text-red-500">System Design</span>
// //                 </li>
// //                 <li>
// //                   💡 Suggested Workshop:{" "}
// //                   <span className="text-green-600">Advanced SQL</span>
// //                 </li>
// //               </ul>
// //             </GlassCard>

// //             <GlassCard title="Quick Actions" icon={Settings}>
// //               <div className="flex flex-col gap-3">
// //                 <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
// //                   Upload Resume
// //                 </button>
// //                 <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
// //                   AI Mock Interview
// //                 </button>
// //                 <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
// //                   Skill Quiz
// //                 </button>
// //               </div>
// //             </GlassCard>
// //           </>
// //         )}

// //         {/* Jobs Tab */}
// //         {tab === "jobs" && (
// //           <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
// //             {jobs.map((job, idx) => (
// //               <GlassCard key={idx} title={`${job.role} @ ${job.company}`} icon={Briefcase}>
// //                 <p className="text-sm text-gray-600">Deadline: {job.deadline}</p>
// //                 <p className="text-sm text-gray-600">
// //                   AI Fit Score:{" "}
// //                   <span className="font-bold text-indigo-600">{job.fit}%</span>
// //                 </p>
// //                 <div className="mt-3 flex justify-between items-center">
// //                   <Badge
// //                     color={
// //                       job.status === "Applied"
// //                         ? "green"
// //                         : job.status === "Saved"
// //                         ? "orange"
// //                         : "indigo"
// //                     }
// //                   >
// //                     {job.status}
// //                   </Badge>
// //                   <button className="px-3 py-1 text-xs rounded-md bg-indigo-500 text-white hover:bg-indigo-600 transition">
// //                     Apply
// //                   </button>
// //                 </div>
// //               </GlassCard>
// //             ))}
// //           </div>
// //         )}

// //         {/* Applications Tab */}
// //         {tab === "applications" && (
// //           <div className="col-span-3 space-y-6">
// //             {applications.map((app, idx) => (
// //               <GlassCard key={idx} title={`${app.role} @ ${app.company}`} icon={FileText}>
// //                 <p className="text-sm text-gray-600">
// //                   Stage:{" "}
// //                   <span className="font-semibold text-indigo-600">{app.stage}</span>
// //                 </p>
// //                 <p className="text-xs text-gray-500">Last Updated: {app.updated}</p>
// //               </GlassCard>
// //             ))}
// //           </div>
// //         )}

// //         {/* Notifications Tab */}
// //         {tab === "notifications" && (
// //           <div className="col-span-3 space-y-6">
// //             {notifications.map((n, idx) => (
// //               <GlassCard key={idx} title="Notification" icon={Bell}>
// //                 <p className="text-sm text-gray-700">{n.text}</p>
// //                 <p className="text-xs text-gray-500">{n.ts}</p>
// //               </GlassCard>
// //             ))}
// //           </div>
// //         )}
// //       </main>
// //     </div>
// //   );
// // }







// // // src/pages/Student.jsx
// // import React from "react";
// // import { useAuth } from "../auth/AuthContext";
// // import { Link } from "react-router-dom";
// // import "../styles/studentdashboard.css";


// // export default function Student() {
// //   const { currentUser } = useAuth();

// //   if (!currentUser) {
// //     return (
// //       <div className="container mt-5 text-center">
// //         <h3 className="fw-bold">Please login to access your student dashboard.</h3>
// //         <Link to="/login" className="btn btn-primary mt-3">
// //           Login
// //         </Link>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="container mt-5">
// //       <h2 className="fw-bold mb-3">
// //         Student Dashboard
// //       </h2>
// //       <p className="text-muted">
// //         Welcome back, {currentUser.displayName || currentUser.email}!  
// //       </p>

// //       <div className="row g-4 mt-3">
// //         <div className="col-md-4">
// //           <div className="card shadow-sm h-100">
// //             <div className="card-body text-center">
// //               <h5 className="card-title">My Applications</h5>
// //               <p className="card-text">Track your submitted job applications.</p>
// //               <Link to="/applications" className="btn btn-outline-primary">
// //                 View Applications
// //               </Link>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="col-md-4">
// //           <div className="card shadow-sm h-100">
// //             <div className="card-body text-center">
// //               <h5 className="card-title">Saved Jobs</h5>
// //               <p className="card-text">Check out jobs you’ve saved for later.</p>
// //               <Link to="/saved" className="btn btn-outline-primary">
// //                 View Saved Jobs
// //               </Link>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="col-md-4">
// //           <div className="card shadow-sm h-100">
// //             <div className="card-body text-center">
// //               <h5 className="card-title">Profile</h5>
// //               <p className="card-text">Update your details and resume for placements.</p>
// //               <Link to="/profile" className="btn btn-outline-primary">
// //                 Go to Profile
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }







// import React from "react";
// import "../styles/studentdashboard.css"; // ✅ external CSS

// export default function StudentDashboard() {
//   return (
//     <div className="student-dashboard bg-gray-50 min-h-screen p-6">
//       {/* Header */}
//       <header className="bg-white shadow-md rounded-2xl p-6 mb-8 flex justify-between items-center">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800">🎓 Student Dashboard</h1>
//           <p className="text-gray-500">Welcome back, Student!</p>
//         </div>
//         <button className="logout-btn">Logout</button>
//       </header>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Profile Card */}
//         <div className="card">
//           <h2 className="card-title">👤 Profile</h2>
//           <p className="text-gray-600">View and update your profile details.</p>
//           <button className="card-btn">Edit Profile</button>
//         </div>

//         {/* Applications */}
//         <div className="card">
//           <h2 className="card-title">📄 My Applications</h2>
//           <p className="text-gray-600">Track your applied jobs and internships.</p>
//           <button className="card-btn">View Applications</button>
//         </div>

//         {/* Saved Jobs */}
//         <div className="card">
//           <h2 className="card-title">💼 Saved Jobs</h2>
//           <p className="text-gray-600">Check and apply for your saved jobs.</p>
//           <button className="card-btn">View Saved Jobs</button>
//         </div>

//         {/* Notifications */}
//         <div className="card">
//           <h2 className="card-title">🔔 Notifications</h2>
//           <p className="text-gray-600">Stay updated with latest alerts.</p>
//           <button className="card-btn">View Notifications</button>
//         </div>

//         {/* Settings */}
//         <div className="card">
//           <h2 className="card-title">⚙️ Settings</h2>
//           <p className="text-gray-600">Manage your account preferences.</p>
//           <button className="card-btn">Go to Settings</button>
//         </div>

//         {/* Support */}
//         <div className="card">
//           <h2 className="card-title">📞 Support</h2>
//           <p className="text-gray-600">Need help? Reach out anytime.</p>
//           <button className="card-btn">Contact Support</button>
//         </div>
//       </div>
//     </div>
//   );
// }





// import React, { useState, useEffect } from "react";
// import "../styles/dashboard.css";

// import StatCard from "../components/common/StatCard";
// import ResumeUploader from "../components/dashboard/ResumeUploader";
// import Recommendations from "../components/dashboard/Recommendations";
// import Roadmap from "../components/dashboard/Roadmap";
// import MockInterviews from "../components/dashboard/MockInterviews";
// import JobStatus from "../components/dashboard/JobStatus";
// import Events from "../components/dashboard/Events";
// import Achievements from "../components/dashboard/Achievements";
// import CompanyInsights from "../components/dashboard/CompanyInsights";
// import Quizzes from "../components/dashboard/Quizzes";

// const MENU = [
//   "Resume","Recommendations","Roadmap","Mock Interviews","Job Status","Events","Achievements","Company Insights","Quizzes"
// ];

// export default function StudentDashboard(){
//   const [tab, setTab] = useState("Resume");

//   useEffect(()=>{
//     // add dark styling to body for this page
//     document.body.classList.add("dark-dashboard");
//     return ()=> document.body.classList.remove("dark-dashboard");
//   },[]);

//   const render = () => {
//     switch(tab){
//       case "Resume": return <ResumeUploader/>;
//       case "Recommendations": return <Recommendations/>;
//       case "Roadmap": return <Roadmap/>;
//       case "Mock Interviews": return <MockInterviews/>;
//       case "Job Status": return <JobStatus/>;
//       case "Events": return <Events/>;
//       case "Achievements": return <Achievements/>;
//       case "Company Insights": return <CompanyInsights/>;
//       case "Quizzes": return <Quizzes/>;
//       default: return null;
//     }
//   };

//   return (
//     <div className="dashboard">
//       <aside className="sidebar">
//         <div className="brand">Placement Plaza</div>
//         <div className="search">
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 21l-3.5-3.5" stroke="#aab3ff" strokeWidth="1.5" strokeLinecap="round"/><circle cx="11" cy="11" r="7" stroke="#aab3ff" strokeWidth="1.5"/></svg>
//           <input placeholder="Search modules, jobs..."/>
//         </div>
//         <div className="menu">
//           {MENU.map(m => (
//             <button key={m} className={tab===m?"active":""} onClick={()=>setTab(m)}>{m}</button>
//           ))}
//         </div>
//       </aside>

//       <main className="main">
//         <div className="header">
//           <div style={{display:"flex", alignItems:"center", gap:12}}>
//             <span className="pill">Student Dashboard</span>
//             <span className="kbd">Ctrl + K</span>
//           </div>
//           <div className="profile">
//             <div className="avatar">PP</div>
//             <div>
//               <div style={{fontWeight:700}}>You</div>
//               <div style={{fontSize:12, color:"#aab3ff"}}>Batch 2025 · CSE</div>
//             </div>
//           </div>
//         </div>

//         {/* Hero Stats */}
//         <div className="grid">
//           <div className="card" style={{gridColumn:"span 3"}}><StatCard title="Applications" value="12" delta="5% WoW" up={true}/></div>
//           <div className="card" style={{gridColumn:"span 3"}}><StatCard title="Shortlisted" value="3" delta="1 new" up={true}/></div>
//           <div className="card" style={{gridColumn:"span 3"}}><StatCard title="Mock Interviews" value="2" delta="Next in 3 days" up={true}/></div>
//           <div className="card" style={{gridColumn:"span 3"}}><StatCard title="Readiness Score" value="75%" delta="Target 85%" up={true}/></div>
//         </div>

//         {render()}
//       </main>
//     </div>
//   )
// }






// import React, { useState, useEffect } from "react";
// import "../styles/dashboard.css";

// import StatCard from "../components/common/StatCard";
// import ResumeUploader from "../components/dashboard/ResumeUploader";
// import Recommendations from "../components/dashboard/Recommendations";
// import Roadmap from "../components/dashboard/Roadmap";
// import MockInterviews from "../components/dashboard/MockInterviews";
// import JobStatus from "../components/dashboard/JobStatus";
// import Events from "../components/dashboard/Events";
// import Achievements from "../components/dashboard/Achievements";
// import CompanyInsights from "../components/dashboard/CompanyInsights";
// import Quizzes from "../components/dashboard/Quizzes";

// const MENU = [
//   { key: "Resume", label: "Resume Uploader" },
//   { key: "Recommendations", label: "Recommendations" },
//   { key: "Roadmap", label: "Learning Roadmap" },
//   { key: "Mock Interviews", label: "Mock Interviews" },
//   { key: "Job Status", label: "Applied Job Status" },
//   { key: "Events", label: "Upcoming Events" },
//   { key: "Achievements", label: "Achievements & Badges" },
//   { key: "Company Insights", label: "Company Insights" },
//   { key: "Quizzes", label: "Practice Quizzes" },
// ];

// export default function StudentDashboard() {
//   const [tab, setTab] = useState("Resume");

//   useEffect(() => {
//     document.body.classList.add("dark-dashboard");
//     return () => document.body.classList.remove("dark-dashboard");
//   }, []);

//   const renderTab = () => {
//     switch (tab) {
//       case "Resume":
//         return <ResumeUploader />;
//       case "Recommendations":
//         return <Recommendations />;
//       case "Roadmap":
//         return <Roadmap />;
//       case "Mock Interviews":
//         return <MockInterviews />;
//       case "Job Status":
//         return <JobStatus />;
//       case "Events":
//         return <Events />;
//       case "Achievements":
//         return <Achievements />;
//       case "Company Insights":
//         return <CompanyInsights />;
//       case "Quizzes":
//         return <Quizzes />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="dashboard">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="brand">📌 Placement Plaza</div>

//         <div className="search">
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//             <path
//               d="M21 21l-3.5-3.5"
//               stroke="#aab3ff"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//             />
//             <circle
//               cx="11"
//               cy="11"
//               r="7"
//               stroke="#aab3ff"
//               strokeWidth="1.5"
//             />
//           </svg>
//           <input placeholder="Search modules, jobs..." />
//         </div>

//         <div className="menu">
//           {MENU.map((m) => (
//             <button
//               key={m.key}
//               className={tab === m.key ? "active" : ""}
//               onClick={() => setTab(m.key)}
//             >
//               {m.label}
//             </button>
//           ))}
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="main">
//         {/* Header */}
//         <div className="header">
//           <div className="header-left">
//             <span className="pill">Student Dashboard</span>
//             <span className="kbd">Ctrl + K</span>
//           </div>

//           <div className="profile">
//             <div className="avatar">PP</div>
//             <div className="profile-info">
//               <div className="name">You</div>
//               <div className="batch">Batch 2025 · CSE</div>
//             </div>
//           </div>
//         </div>

//         {/* Hero Stats */}
//         <div className="grid">
//           <StatCard
//             title="Applications"
//             value="12"
//             delta="5% WoW"
//             up={true}
//           />
//           <StatCard
//             title="Shortlisted"
//             value="3"
//             delta="1 new"
//             up={true}
//           />
//           <StatCard
//             title="Mock Interviews"
//             value="2"
//             delta="Next in 3 days"
//             up={true}
//           />
//           <StatCard
//             title="Readiness Score"
//             value="75%"
//             delta="Target 85%"
//             up={true}
//           />
//         </div>

//         {/* Dynamic Content */}
//         <div className="content-area">{renderTab()}</div>
//       </main>
//     </div>
//   );
// }




// import React, { useState, useEffect } from "react";
// import "../styles/dashboard.css";

// import StatCard from "../components/common/StatCard";
// import ResumeUploader from "../components/dashboard/ResumeUploader";
// import Recommendations from "../components/dashboard/Recommendations";
// import Roadmap from "../components/dashboard/Roadmap";
// import MockInterviews from "../components/dashboard/MockInterviews";
// import JobStatus from "../components/dashboard/JobStatus";
// import Events from "../components/dashboard/Events";
// import Achievements from "../components/dashboard/Achievements";
// import CompanyInsights from "../components/dashboard/CompanyInsights";
// import Quizzes from "../components/dashboard/Quizzes";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// // For carousel
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const MENU = [
//   { key: "Resume", label: "Resume Uploader" },
//   { key: "Recommendations", label: "Recommendations" },
//   { key: "Roadmap", label: "Learning Roadmap" },
//   { key: "Mock Interviews", label: "Mock Interviews" },
//   { key: "Job Status", label: "Applied Job Status" },
//   { key: "Events", label: "Upcoming Events" },
//   { key: "Achievements", label: "Achievements & Badges" },
//   { key: "Company Insights", label: "Company Insights" },
//   { key: "Quizzes", label: "Practice Quizzes" },
// ];

// export default function StudentDashboard() {
//   const [tab, setTab] = useState("Resume");

//   useEffect(() => {
//     document.body.classList.add("dark-dashboard");
//     return () => document.body.classList.remove("dark-dashboard");
//   }, []);

//   const renderTab = () => {
//     switch (tab) {
//       case "Resume":
//         return <ResumeUploader />;
//       case "Recommendations":
//         return <Recommendations />;
//       case "Roadmap":
//         return <Roadmap />;
//       case "Mock Interviews":
//         return <MockInterviews />;
//       case "Job Status":
//         return <JobStatus />;
//       case "Events":
//         return <Events />;
//       case "Achievements":
//         return <Achievements />;
//       case "Company Insights":
//         return <CompanyInsights />;
//       case "Quizzes":
//         return <Quizzes />;
//       default:
//         return null;
//     }
//   };

//   const carouselSettings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="dashboard">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="brand">📌 Placement Plaza</div>

//         <div className="search">
//           <input placeholder="🔍 Search modules, jobs..." />
//         </div>

//         <div className="menu">
//           {MENU.map((m) => (
//             <button
//               key={m.key}
//               className={`menu-btn ${tab === m.key ? "active" : ""}`}
//               onClick={() => setTab(m.key)}
//             >
//               {m.label}
//             </button>
//           ))}
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="main">
//         {/* Header */}
//         <div className="header">
//           <div className="header-left">
//             <span className="pill">🎓 Student Dashboard</span>
//           </div>

//           <div className="profile">
//             <div className="avatar">PP</div>
//             <div className="profile-info">
//               <div className="name">You</div>
//               <div className="batch">Batch 2025 · CSE</div>
//               <button className="blue-btn">Edit Profile</button>
//             </div>
//           </div>
//         </div>

//         {/* Hero Stats */}
//         <div className="grid">
//           <StatCard title="Applications" value="12" delta="5% WoW" up={true} />
//           <StatCard title="Shortlisted" value="3" delta="1 new" up={true} />
//           <StatCard title="Mock Interviews" value="2" delta="Next in 3 days" up={true} />
//           <StatCard title="Readiness Score" value="75%" delta="Target 85%" up={true} />
//         </div>

//         {/* Carousel Highlights */}
//         <div className="carousel-section">
//           <Slider {...carouselSettings}>
//             <div className="carousel-card">🚀 Your next mock interview is scheduled in 3 days!</div>
//             <div className="carousel-card">🏆 You unlocked a new badge: "Resume Pro"</div>
//             <div className="carousel-card">📢 Upcoming event: Infosys Drive on 25th Aug</div>
//           </Slider>
//         </div>

//         {/* Dynamic Content */}
//         <div className="content-area">{renderTab()}</div>
//       </main>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import "../styles/dashboard.css";

// import StatCard from "../components/common/StatCard";
// import ResumeUploader from "../components/dashboard/ResumeUploader";
// import Recommendations from "../components/dashboard/Recommendations";
// import Roadmap from "../components/dashboard/Roadmap";
// import MockInterviews from "../components/dashboard/MockInterviews";
// import JobStatus from "../components/dashboard/JobStatus";
// import Events from "../components/dashboard/Events";
// import Achievements from "../components/dashboard/Achievements";
// import CompanyInsights from "../components/dashboard/CompanyInsights";
// import Quizzes from "../components/dashboard/Quizzes";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const MENU = [
//   { key: "Resume", label: "Resume Uploader" },
//   { key: "Recommendations", label: "Recommendations" },
//   { key: "Roadmap", label: "Learning Roadmap" },
//   { key: "Mock Interviews", label: "Mock Interviews" },
//   { key: "Job Status", label: "Applied Job Status" },
//   { key: "Events", label: "Upcoming Events" },
//   { key: "Achievements", label: "Achievements & Badges" },
//   { key: "Company Insights", label: "Company Insights" },
//   { key: "Quizzes", label: "Practice Quizzes" },
// ];

// export default function StudentDashboard() {
//   const [tab, setTab] = useState("Resume");

//   useEffect(() => {
//     document.body.classList.add("dark-dashboard");
//     return () => document.body.classList.remove("dark-dashboard");
//   }, []);

//   const renderTab = () => {
//     switch (tab) {
//       case "Resume":
//         return <ResumeUploader />;
//       case "Recommendations":
//         return <Recommendations />;
//       case "Roadmap":
//         return <Roadmap />;
//       case "Mock Interviews":
//         return <MockInterviews />;
//       case "Job Status":
//         return <JobStatus />;
//       case "Events":
//         return <Events />;
//       case "Achievements":
//         return <Achievements />;
//       case "Company Insights":
//         return <CompanyInsights />;
//       case "Quizzes":
//         return <Quizzes />;
//       default:
//         return null;
//     }
//   };

//   const carouselSettings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="dashboard">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="brand">📌 Placement Plaza</div>

//         <div className="search">
//           <input placeholder="🔍 Search modules, jobs..." />
//         </div>

//         <div className="menu">
//           {MENU.map((m) => (
//             <button
//               key={m.key}
//               className={`menu-btn ${tab === m.key ? "active" : ""}`}
//               onClick={() => setTab(m.key)}
//             >
//               {m.label}
//             </button>
//           ))}
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="main">
//         {/* Header */}
//         <div className="header">
//           <div className="header-left">
//             <span className="pill">🎓 Student Dashboard</span>
//           </div>

//           <div className="profile">
//             <div className="avatar">PP</div>
//             <div className="profile-info">
//               <div className="name">You</div>
//               <div className="batch">Batch 2025 · CSE</div>
//               <button className="blue-btn">Edit Profile</button>
//             </div>
//           </div>
//         </div>

//         {/* Hero Stats */}
//         <div className="grid">
//           <StatCard title="Applications" value="12" delta="5% WoW" up />
//           <StatCard title="Shortlisted" value="3" delta="1 new" up />
//           <StatCard title="Mock Interviews" value="2" delta="Next in 3 days" up />
//           <StatCard title="Readiness Score" value="75%" delta="Target 85%" up />
//         </div>

//         {/* Carousel Highlights */}
//         <div className="carousel-section">
//           <Slider {...carouselSettings}>
//             <div className="carousel-card">🚀 Your next mock interview is scheduled in 3 days!</div>
//             <div className="carousel-card">🏆 You unlocked a new badge: "Resume Pro"</div>
//             <div className="carousel-card">📢 Upcoming event: Infosys Drive on 25th Aug</div>
//           </Slider>
//         </div>

//         {/* Dynamic Content */}
//         <div className="content-area">{renderTab()}</div>
//       </main>
//     </div>
//   );
// }







// import React, { useState, useEffect } from "react";
// import "../styles/dashboard.css";

// import StatCard from "../components/common/StatCard";
// import ResumeUploader from "../components/dashboard/ResumeUploader";
// import Recommendations from "../components/dashboard/Recommendations";
// import Roadmap from "../components/dashboard/Roadmap";
// import MockInterviews from "../components/dashboard/MockInterviews";
// import JobStatus from "../components/dashboard/JobStatus";
// import Events from "../components/dashboard/Events";
// import Achievements from "../components/dashboard/Achievements";
// import CompanyInsights from "../components/dashboard/CompanyInsights";
// import Quizzes from "../components/dashboard/Quizzes";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const MENU = [
//   { key: "Resume", label: "Resume Uploader" },
//   { key: "Recommendations", label: "Recommendations" },
//   { key: "Roadmap", label: "Learning Roadmap" },
//   { key: "Mock Interviews", label: "Mock Interviews" },
//   { key: "Job Status", label: "Applied Job Status" },
//   { key: "Events", label: "Upcoming Events" },
//   { key: "Achievements", label: "Achievements & Badges" },
//   { key: "Company Insights", label: "Company Insights" },
//   { key: "Quizzes", label: "Practice Quizzes" },
// ];

// export default function StudentDashboard() {
//   const [tab, setTab] = useState("Resume");

//   useEffect(() => {
//     document.body.classList.add("dark-dashboard");
//     return () => document.body.classList.remove("dark-dashboard");
//   }, []);

//   const renderTab = () => {
//     switch (tab) {
//       case "Resume":
//         return <ResumeUploader />;
//       case "Recommendations":
//         return <Recommendations />;
//       case "Roadmap":
//         return <Roadmap />;
//       case "Mock Interviews":
//         return <MockInterviews />;
//       case "Job Status":
//         return <JobStatus />;
//       case "Events":
//         return <Events />;
//       case "Achievements":
//         return <Achievements />;
//       case "Company Insights":
//         return <CompanyInsights />;
//       case "Quizzes":
//         return <Quizzes />;
//       default:
//         return null;
//     }
//   };

//   const carouselSettings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="dashboard">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="brand">📌 Placement Plaza</div>

//         <div className="search">
//           <input placeholder="🔍 Search modules, jobs..." />
//         </div>

//         <div className="menu">
//           {MENU.map((m) => (
//             <button
//               key={m.key}
//               className={`menu-btn ${tab === m.key ? "active" : ""}`}
//               onClick={() => setTab(m.key)}
//             >
//               {m.label}
//             </button>
//           ))}
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="main">
//         {/* Header */}
//         <div className="header">
//           <div className="header-left">
//             <span className="pill">🎓 Student Dashboard</span>
//           </div>

//           <div className="profile">
//             <div className="avatar">PP</div>
//             <div className="profile-info">
//               <div className="name">You</div>
//               <div className="batch">Batch 2025 · CSE</div>
//               <button className="blue-btn">Edit Profile</button>
//             </div>
//           </div>
//         </div>

//         {/* Hero Stats */}
//         <div className="grid">
//           <StatCard title="Applications" value="12" delta="5% WoW" up={true} />
//           <StatCard title="Shortlisted" value="3" delta="1 new" up={true} />
//           <StatCard
//             title="Mock Interviews"
//             value="2"
//             delta="Next in 3 days"
//             up={true}
//           />
//           <StatCard
//             title="Readiness Score"
//             value="75%"
//             delta="Target 85%"
//             up={true}
//           />
//         </div>

//         {/* Carousel Highlights */}
//         <div className="carousel-section">
//           <Slider {...carouselSettings}>
//             <div className="carousel-card">
//               🚀 Your next mock interview is scheduled in 3 days!
//             </div>
//             <div className="carousel-card">
//               🏆 You unlocked a new badge: "Resume Pro"
//             </div>
//             <div className="carousel-card">
//               📢 Upcoming event: Infosys Drive on 25th Aug
//             </div>
//           </Slider>
//         </div>

//         {/* Dynamic Content */}
//         <div className="content-area">{renderTab()}</div>
//       </main>
//     </div>
//   );
// }













// import React, { useState, useEffect } from "react";
// import "../styles/dashboard.css";

// import StatCard from "../components/common/StatCard";
// import ResumeUploader from "../components/dashboard/ResumeUploader";
// import Recommendations from "../components/dashboard/Recommendations";
// import Roadmap from "../components/dashboard/Roadmap";
// import MockInterviews from "../components/dashboard/MockInterviews";
// import JobStatus from "../components/dashboard/JobStatus";
// import Events from "../components/dashboard/Events";
// import Achievements from "../components/dashboard/Achievements";
// import CompanyInsights from "../components/dashboard/CompanyInsights";
// import Quizzes from "../components/dashboard/Quizzes";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const MENU = [
//   { key: "Resume", label: "📄 Resume Uploader" },
//   { key: "Recommendations", label: "✨ Recommendations" },
//   { key: "Roadmap", label: "🛣 Learning Roadmap" },
//   { key: "Mock Interviews", label: "🎤 Mock Interviews" },
//   { key: "Job Status", label: "📊 Applied Job Status" },
//   { key: "Events", label: "📅 Upcoming Events" },
//   { key: "Achievements", label: "🏆 Achievements & Badges" },
//   { key: "Company Insights", label: "💼 Company Insights" },
//   { key: "Quizzes", label: "📝 Practice Quizzes" },
// ];

// export default function StudentDashboard() {
//   const [tab, setTab] = useState("Resume");

//   useEffect(() => {
//     document.body.classList.add("dark-dashboard");
//     return () => document.body.classList.remove("dark-dashboard");
//   }, []);

//   const renderTab = () => {
//     switch (tab) {
//       case "Resume":
//         return <ResumeUploader />;
//       case "Recommendations":
//         return <Recommendations />;
//       case "Roadmap":
//         return <Roadmap />;
//       case "Mock Interviews":
//         return <MockInterviews />;
//       case "Job Status":
//         return <JobStatus />;
//       case "Events":
//         return <Events />;
//       case "Achievements":
//         return <Achievements />;
//       case "Company Insights":
//         return <CompanyInsights />;
//       case "Quizzes":
//         return <Quizzes />;
//       default:
//         return null;
//     }
//   };

//   const carouselSettings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };

//   return (
//     <div className="dashboard">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="brand">📌 Placement Plaza</div>

//         <div className="search">
//           <input placeholder="🔍 Search modules, jobs..." />
//         </div>

//         <div className="menu">
//           {MENU.map((m) => (
//             <button
//               key={m.key}
//               className={`menu-btn ${tab === m.key ? "active" : ""}`}
//               onClick={() => setTab(m.key)}
//             >
//               {m.label}
//             </button>
//           ))}
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="main">
//         {/* Header */}
//         <div className="header">
//           <div className="header-left">
//             <span className="pill">🎓 Student Dashboard</span>
//           </div>

//           <div className="profile">
//             <div className="avatar">PP</div>
//             <div className="profile-info">
//               <div className="name">You</div>
//               <div className="batch">Batch 2025 · CSE</div>
//               <button className="blue-btn">Edit Profile</button>
//             </div>
//           </div>
//         </div>

//         {/* Hero Stats */}
//         <div className="grid">
//           <StatCard title="Applications" value="12" delta="5% WoW" up={true} />
//           <StatCard title="Shortlisted" value="3" delta="1 new" up={true} />
//           <StatCard
//             title="Mock Interviews"
//             value="2"
//             delta="Next in 3 days"
//             up={true}
//           />
//           <StatCard
//             title="Readiness Score"
//             value="75%"
//             delta="Target 85%"
//             up={true}
//           />
//         </div>

//         {/* Carousel Highlights */}
//         <div className="carousel-section">
//           <Slider {...carouselSettings}>
//             <div className="carousel-card">
//               🚀 Your next mock interview is scheduled in 3 days!
//             </div>
//             <div className="carousel-card">
//               🏆 You unlocked a new badge: "Resume Pro"
//             </div>
//             <div className="carousel-card">
//               📢 Upcoming event: Infosys Drive on 25th Aug
//             </div>
//           </Slider>
//         </div>

//         {/* Dynamic Content */}
//         <div className="content-area">{renderTab()}</div>
//       </main>
//     </div>
//   );
// }








// import React, { useState, useEffect } from "react";
// import "../styles/dashboard.css";

// import StatCard from "../components/common/StatCard";
// import ResumeUploader from "../components/dashboard/ResumeUploader";
// import Recommendations from "../components/dashboard/Recommendations";
// import Roadmap from "../components/dashboard/Roadmap";
// import MockInterviews from "../components/dashboard/MockInterviews";
// import JobStatus from "../components/dashboard/JobStatus";
// import Events from "../components/dashboard/Events";
// import Achievements from "../components/dashboard/Achievements";
// import CompanyInsights from "../components/dashboard/CompanyInsights";
// import Quizzes from "../components/dashboard/Quizzes";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const MENU = [
//   { key: "Resume", label: "📄 Resume Uploader" },
//   { key: "Recommendations", label: "✨ Recommendations" },
//   { key: "Roadmap", label: "🛣 Learning Roadmap" },
//   { key: "Mock Interviews", label: "🎤 Mock Interviews" },
//   { key: "Job Status", label: "📊 Applied Job Status" },
//   { key: "Events", label: "📅 Upcoming Events" },
//   { key: "Achievements", label: "🏆 Achievements & Badges" },
//   { key: "Company Insights", label: "💼 Company Insights" },
//   { key: "Quizzes", label: "📝 Practice Quizzes" },
// ];

// export default function StudentDashboard() {
//   const [tab, setTab] = useState("Resume");

//   useEffect(() => {
//     document.body.classList.add("dashboard-blue");
//     return () => document.body.classList.remove("dashboard-blue");
//   }, []);

//   const renderTab = () => {
//     switch (tab) {
//       case "Resume":
//         return <ResumeUploader />;
//       case "Recommendations":
//         return <Recommendations />;
//       case "Roadmap":
//         return <Roadmap />;
//       case "Mock Interviews":
//         return <MockInterviews />;
//       case "Job Status":
//         return <JobStatus />;
//       case "Events":
//         return <Events />;
//       case "Achievements":
//         return <Achievements />;
//       case "Company Insights":
//         return <CompanyInsights />;
//       case "Quizzes":
//         return <Quizzes />;
//       default:
//         return null;
//     }
//   };

//   const carouselSettings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };

//   return (
//     <div className="dashboard">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="brand">📌 Placement Plaza</div>

//         <div className="search">
//           <input placeholder="🔍 Search modules, jobs..." />
//         </div>

//         <div className="menu">
//           {MENU.map((m) => (
//             <button
//               key={m.key}
//               className={`menu-btn ${tab === m.key ? "active" : ""}`}
//               onClick={() => setTab(m.key)}
//             >
//               {m.label}
//             </button>
//           ))}
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="main">
//         {/* Header */}
//         <div className="header">
//           <div className="header-left">
//             <span className="pill">🎓 Student Dashboard</span>
//           </div>

//           <div className="profile">
//             <div className="avatar">PP</div>
//             <div className="profile-info">
//               <div className="name">You</div>
//               <div className="batch">Batch 2025 · CSE</div>
//               <button className="blue-btn">Edit Profile</button>
//             </div>
//           </div>
//         </div>

//         {/* Hero Stats */}
//         <div className="grid">
//           <StatCard title="Applications" value="12" delta="5% WoW" up={true} />
//           <StatCard title="Shortlisted" value="3" delta="1 new" up={true} />
//           <StatCard
//             title="Mock Interviews"
//             value="2"
//             delta="Next in 3 days"
//             up={true}
//           />
//           <StatCard
//             title="Readiness Score"
//             value="75%"
//             delta="Target 85%"
//             up={true}
//           />
//         </div>

//         {/* Carousel Highlights */}
//         <div className="carousel-section">
//           <Slider {...carouselSettings}>
//             <div className="carousel-card">
//               🚀 Your next mock interview is scheduled in 3 days!
//             </div>
//             <div className="carousel-card">
//               🏆 You unlocked a new badge: "Resume Pro"
//             </div>
//             <div className="carousel-card">
//               📢 Upcoming event: Infosys Drive on 25th Aug
//             </div>
//           </Slider>
//         </div>

//         {/* Dynamic Content */}
//         <div className="content-area">{renderTab()}</div>
//       </main>
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";
// import {
//   User,
//   FileText,
//   Star,
//   Map,
//   Mic,
//   Briefcase,
//   Calendar,
//   Award,
//   Building,
//   ClipboardCheck,
// } from "lucide-react";
// import { motion } from "framer-motion";

// import ResumeUploader from "../components/dashboard/ResumeUploader";
// import Recommendations from "../components/dashboard/Recommendations";
// import Roadmap from "../components/dashboard/Roadmap";
// import MockInterviews from "../components/dashboard/MockInterviews";
// import JobStatus from "../components/dashboard/JobStatus";
// import Events from "../components/dashboard/Events";
// import Achievements from "../components/dashboard/Achievements";
// import CompanyInsights from "../components/dashboard/CompanyInsights";
// import Quizzes from "../components/dashboard/Quizzes";

// const MENU = [
//   { key: "Resume", label: "Resume Uploader", icon: FileText },
//   { key: "Recommendations", label: "Recommendations", icon: Star },
//   { key: "Roadmap", label: "Learning Roadmap", icon: Map },
//   { key: "Mock Interviews", label: "Mock Interviews", icon: Mic },
//   { key: "Job Status", label: "Applied Job Status", icon: Briefcase },
//   { key: "Events", label: "Upcoming Events", icon: Calendar },
//   { key: "Achievements", label: "Achievements & Badges", icon: Award },
//   { key: "Company Insights", label: "Company Insights", icon: Building },
//   { key: "Quizzes", label: "Practice Quizzes", icon: ClipboardCheck },
// ];

// export default function StudentDashboard() {
//   const [tab, setTab] = useState("Resume");

//   useEffect(() => {
//     document.title = "Student Dashboard | Placement Plaza";
//   }, []);

//   const renderTab = () => {
//     switch (tab) {
//       case "Resume":
//         return <ResumeUploader />;
//       case "Recommendations":
//         return <Recommendations />;
//       case "Roadmap":
//         return <Roadmap />;
//       case "Mock Interviews":
//         return <MockInterviews />;
//       case "Job Status":
//         return <JobStatus />;
//       case "Events":
//         return <Events />;
//       case "Achievements":
//         return <Achievements />;
//       case "Company Insights":
//         return <CompanyInsights />;
//       case "Quizzes":
//         return <Quizzes />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white/70 backdrop-blur-lg border-r border-gray-200 hidden md:flex flex-col p-4 shadow-lg">
//         <div className="text-2xl font-bold text-purple-600 mb-6">Placement Plaza</div>
//         <input
//           type="text"
//           placeholder="🔍Search..."
//           className="px-3 py-2 mb-4 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         />
//         <nav className="space-y-2">
//           {MENU.map((m) => {
//             const Icon = m.icon;
//             return (
//               <button
//                 key={m.key}
//                 onClick={() => setTab(m.key)}
//                 className={`flex items-center gap-3 px-4 py-2 w-full text-left rounded-xl transition-all  ${
//                   tab === m.key
//                     ? "bg-purple-600 text-white shadow-md "
//                     : "text-gray-700 hover:bg-purple-50"
//                 }`}
//               >
                
//                 <Icon className="h-5 w-5 rotate-0" size={20}/>
//                 {m.label}
//               </button>
//             );
//           })}
//         </nav>
//       </aside>

//       {/* Main content */}
//       <main className="flex-1 p-6">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <span className="px-4 py-1 bg-purple-100 text--700 font-medium rounded-full">
//             🎓 Student Dashboard
//           </span>
//           <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-md">
//             <div className="w-12 h-12 bg-purple-500 text-white flex items-center justify-center rounded-full font-bold">
//               PP
//             </div>
//             <div>
//               <div className="font-semibold">You</div>
//               <div className="text-sm text-gray-500">Batch 2025 · CSE</div>
//             </div>
//             <button className="ml-4 px-3 py-1 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
//               Edit
//             </button>
//           </div>
//         </div>

//         {/* Stats grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white rounded-2xl shadow-md">
//             <h3 className="text-gray-500 text-sm">Applications</h3>
//             <p className="text-2xl font-bold">12</p>
//             <span className="text-green-600 text-sm">▲ 5% WoW</span>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white rounded-2xl shadow-md">
//             <h3 className="text-gray-500 text-sm">Shortlisted</h3>
//             <p className="text-2xl font-bold">3</p>
//             <span className="text-green-600 text-sm">+1 new</span>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white rounded-2xl shadow-md">
//             <h3 className="text-gray-500 text-sm">Mock Interviews</h3>
//             <p className="text-2xl font-bold">2</p>
//             <span className="text-indigo-600 text-sm">Next in 3 days</span>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white rounded-2xl shadow-md">
//             <h3 className="text-gray-500 text-sm">Readiness Score</h3>
//             <p className="text-2xl font-bold">75%</p>
//             <span className="text-orange-600 text-sm">Target 85%</span>
//           </motion.div>
//         </div>

//         {/* Highlights */}
//         <div className="mb-8">
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             <div className="p-4 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-2xl shadow-md">
//               🚀 Your next mock interview is scheduled in 3 days!
//             </div>
//             <div className="p-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl shadow-md">
//               🏆 You unlocked a new badge: "Resume Pro"
//             </div>
//             <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl shadow-md">
//               📢 Upcoming event: Infosys Drive on 25th Aug
//             </div>
//           </div>
//         </div>

//         {/* Dynamic content */}
//         <div className="bg-white p-6 rounded-2xl shadow-lg">{renderTab()}</div>
//       </main>
//     </div>
//   );
// }




// import React, { useState, useEffect } from "react";

// // Mock components for demonstration
// const ResumeUploader = () => (
//   <div className="space-y-6">
//     <h2 className="text-2xl font-bold text-gray-800 mb-4">Resume Uploader</h2>
//     <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-indigo-400 transition-colors">
//       <div className="w-12 h-12 text-gray-400 mx-auto mb-4 text-4xl">📄</div>
//       <p className="text-gray-600 mb-2">Drag & drop your resume here</p>
//       <p className="text-sm text-gray-500 mb-4">Supports PDF, DOC, DOCX (Max 5MB)</p>
//       <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
//         Browse Files
//       </button>
//     </div>
//     <div className="bg-green-50 p-4 rounded-lg">
//       <p className="text-green-700">✅ Current resume: John_Doe_Resume.pdf (Uploaded 2 days ago)</p>
//     </div>
//   </div>
// );

// const Recommendations = () => (
//   <div className="space-y-6">
//     <h2 className="text-2xl font-bold text-gray-800 mb-4">Personalized Recommendations</h2>
//     <div className="grid gap-4">
//       <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
//         <h3 className="font-semibold text-blue-800">Skill Enhancement</h3>
//         <p className="text-blue-700">Consider adding React.js certification to boost your profile</p>
//       </div>
//       <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
//         <h3 className="font-semibold text-green-800">Job Opportunities</h3>
//         <p className="text-green-700">3 new positions match your profile at top companies</p>
//       </div>
//       <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
//         <h3 className="font-semibold text-orange-800">Interview Prep</h3>
//         <p className="text-orange-700">Practice system design questions for senior roles</p>
//       </div>
//     </div>
//   </div>
// );

// const Roadmap = () => (
//   <div className="space-y-6">
//     <h2 className="text-2xl font-bold text-gray-800 mb-4">Learning Roadmap</h2>
//     <div className="space-y-4">
//       <div className="flex items-center space-x-4">
//         <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
//         <div className="flex-1">
//           <h3 className="font-semibold">JavaScript Fundamentals</h3>
//           <p className="text-gray-600 text-sm">Completed • 2 weeks ago</p>
//         </div>
//       </div>
//       <div className="flex items-center space-x-4">
//         <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">→</div>
//         <div className="flex-1">
//           <h3 className="font-semibold">React.js Advanced Concepts</h3>
//           <p className="text-gray-600 text-sm">In Progress • 60% complete</p>
//           <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//             <div className="bg-indigo-500 h-2 rounded-full" style={{width: '60%'}}></div>
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center space-x-4">
//         <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">3</div>
//         <div className="flex-1">
//           <h3 className="font-semibold text-gray-500">Node.js & Backend Development</h3>
//           <p className="text-gray-500 text-sm">Upcoming • Estimated 4 weeks</p>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const MockInterviews = () => (
//   <div className="space-y-6">
//     <h2 className="text-2xl font-bold text-gray-800 mb-4">Mock Interviews</h2>
//     <div className="grid gap-4">
//       <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="font-semibold text-indigo-800">Technical Interview</h3>
//           <span className="text-sm text-indigo-600 bg-indigo-100 px-2 py-1 rounded">Scheduled</span>
//         </div>
//         <p className="text-indigo-700 text-sm mb-2">Aug 27, 2025 • 2:00 PM</p>
//         <p className="text-gray-600 text-sm">Focus: Data Structures & Algorithms</p>
//       </div>
//       <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="font-semibold text-gray-800">HR Interview</h3>
//           <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">Completed</span>
//         </div>
//         <p className="text-gray-700 text-sm mb-2">Aug 20, 2025 • Score: 8.5/10</p>
//         <p className="text-gray-600 text-sm">Great communication skills, work on confidence</p>
//       </div>
//     </div>
//   </div>
// );

// const JobStatus = () => (
//   <div className="space-y-6">
//     <h2 className="text-2xl font-bold text-gray-800 mb-4">Applied Job Status</h2>
//     <div className="space-y-3">
//       <div className="p-4 border border-gray-200 rounded-lg">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="font-semibold">Software Engineer - Google</h3>
//           <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">Under Review</span>
//         </div>
//         <p className="text-gray-600 text-sm">Applied 5 days ago</p>
//       </div>
//       <div className="p-4 border border-gray-200 rounded-lg">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="font-semibold">Frontend Developer - Microsoft</h3>
//           <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">Shortlisted</span>
//         </div>
//         <p className="text-gray-600 text-sm">Next: Technical Interview on Aug 28</p>
//       </div>
//       <div className="p-4 border border-gray-200 rounded-lg">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="font-semibold">Full Stack Developer - Amazon</h3>
//           <span className="text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded">Assessment</span>
//         </div>
//         <p className="text-gray-600 text-sm">Complete by Aug 26, 2025</p>
//       </div>
//     </div>
//   </div>
// );

// const Events = () => (
//   <div className="space-y-6">
//     <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
//     <div className="space-y-4">
//       <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded-lg">
//         <h3 className="font-semibold text-purple-800">Infosys Campus Drive</h3>
//         <p className="text-purple-700 text-sm">Aug 25, 2025 • 9:00 AM - 5:00 PM</p>
//         <p className="text-gray-600 text-sm mt-1">Registration deadline: Aug 24, 11:59 PM</p>
//       </div>
//       <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
//         <h3 className="font-semibold text-green-800">Tech Talk: AI in Software Development</h3>
//         <p className="text-green-700 text-sm">Aug 28, 2025 • 3:00 PM - 4:30 PM</p>
//         <p className="text-gray-600 text-sm mt-1">Guest Speaker: Senior Engineer from OpenAI</p>
//       </div>
//     </div>
//   </div>
// );

// const Achievements = () => (
//   <div className="space-y-6">
//     <h2 className="text-2xl font-bold text-gray-800 mb-4">Achievements & Badges</h2>
//     <div className="grid grid-cols-2 gap-4">
//       <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
//         <div className="text-3xl mb-2">🏆</div>
//         <h3 className="font-semibold text-yellow-800">Resume Pro</h3>
//         <p className="text-yellow-700 text-sm">Perfect resume score</p>
//       </div>
//       <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
//         <div className="text-3xl mb-2">💯</div>
//         <h3 className="font-semibold text-blue-800">Quiz Master</h3>
//         <p className="text-blue-700 text-sm">5 perfect quiz scores</p>
//       </div>
//       <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
//         <div className="text-3xl mb-2">🎯</div>
//         <h3 className="font-semibold text-green-800">Interview Ace</h3>
//         <p className="text-green-700 text-sm">Passed 3 mock interviews</p>
//       </div>
//       <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg text-center">
//         <div className="text-3xl mb-2">📚</div>
//         <h3 className="font-semibold text-purple-800">Learning Streak</h3>
//         <p className="text-purple-700 text-sm">14 days continuous</p>
//       </div>
//     </div>
//   </div>
// );

// const CompanyInsights = () => (
//   <div className="space-y-6">
//     <h2 className="text-2xl font-bold text-gray-800 mb-4">Company Insights</h2>
//     <div className="grid gap-4">
//       <div className="p-4 border border-gray-200 rounded-lg">
//         <div className="flex items-center space-x-3 mb-3">
//           <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">G</div>
//           <h3 className="font-semibold">Google</h3>
//         </div>
//         <div className="grid grid-cols-3 gap-4 text-sm">
//           <div>
//             <p className="text-gray-500">Hiring Rate</p>
//             <p className="font-semibold text-green-600">15%</p>
//           </div>
//           <div>
//             <p className="text-gray-500">Avg Package</p>
//             <p className="font-semibold">₹25L</p>
//           </div>
//           <div>
//             <p className="text-gray-500">Interview Difficulty</p>
//             <p className="font-semibold text-orange-600">Hard</p>
//           </div>
//         </div>
//       </div>
//       <div className="p-4 border border-gray-200 rounded-lg">
//         <div className="flex items-center space-x-3 mb-3">
//           <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">M</div>
//           <h3 className="font-semibold">Microsoft</h3>
//         </div>
//         <div className="grid grid-cols-3 gap-4 text-sm">
//           <div>
//             <p className="text-gray-500">Hiring Rate</p>
//             <p className="font-semibold text-green-600">22%</p>
//           </div>
//           <div>
//             <p className="text-gray-500">Avg Package</p>
//             <p className="font-semibold">₹22L</p>
//           </div>
//           <div>
//             <p className="text-gray-500">Interview Difficulty</p>
//             <p className="font-semibold text-orange-600">Medium</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const Quizzes = () => (
//   <div className="space-y-6">
//     <h2 className="text-2xl font-bold text-gray-800 mb-4">Practice Quizzes</h2>
//     <div className="grid gap-4">
//       <div className="p-4 border border-gray-200 rounded-lg">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="font-semibold">JavaScript Fundamentals</h3>
//           <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">100%</span>
//         </div>
//         <p className="text-gray-600 text-sm mb-2">20 questions • Completed yesterday</p>
//         <div className="w-full bg-gray-200 rounded-full h-2">
//           <div className="bg-green-500 h-2 rounded-full w-full"></div>
//         </div>
//       </div>
//       <div className="p-4 border border-gray-200 rounded-lg">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="font-semibold">Data Structures & Algorithms</h3>
//           <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">Available</span>
//         </div>
//         <p className="text-gray-600 text-sm mb-2">25 questions • Estimated 45 mins</p>
//         <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">Start Quiz →</button>
//       </div>
//       <div className="p-4 border border-gray-200 rounded-lg">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="font-semibold">System Design Basics</h3>
//           <span className="text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded">85%</span>
//         </div>
//         <p className="text-gray-600 text-sm mb-2">15 questions • Completed 3 days ago</p>
//         <div className="w-full bg-gray-200 rounded-full h-2">
//           <div className="bg-orange-500 h-2 rounded-full" style={{width: '85%'}}></div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const MENU = [
//   { key: "Resume", label: "Resume Uploader", icon: "📄" },
//   { key: "Recommendations", label: "Recommendations", icon: "⭐" },
//   { key: "Roadmap", label: "Learning Roadmap", icon: "🗺️" },
//   { key: "Mock Interviews", label: "Mock Interviews", icon: "🎤" },
//   { key: "Job Status", label: "Applied Job Status", icon: "💼" },
//   { key: "Events", label: "Upcoming Events", icon: "📅" },
//   { key: "Achievements", label: "Achievements & Badges", icon: "🏆" },
//   { key: "Company Insights", label: "Company Insights", icon: "🏢" },
//   { key: "Quizzes", label: "Practice Quizzes", icon: "📋" },
// ];

// export default function StudentDashboard() {
//   const [tab, setTab] = useState("Resume");

//   useEffect(() => {
//     document.title = "Student Dashboard | Placement Plaza";
//   }, []);

//   const renderTab = () => {
//     switch (tab) {
//       case "Resume":
//         return <ResumeUploader />;
//       case "Recommendations":
//         return <Recommendations />;
//       case "Roadmap":
//         return <Roadmap />;
//       case "Mock Interviews":
//         return <MockInterviews />;
//       case "Job Status":
//         return <JobStatus />;
//       case "Events":
//         return <Events />;
//       case "Achievements":
//         return <Achievements />;
//       case "Company Insights":
//         return <CompanyInsights />;
//       case "Quizzes":
//         return <Quizzes />;
//       default:
//         return <ResumeUploader />;
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white/70 backdrop-blur-lg border-r border-gray-200 hidden md:flex flex-col p-4 shadow-lg">
//         <div className="text-2xl font-bold text-purple-600 mb-6">Placement Plaza</div>
//         <input
//           type="text"
//           placeholder="🔍 Search..."
//           className="px-3 py-2 mb-4 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         />
//         <nav className="space-y-2">
//           {MENU.map((m) => {
//             return (
//               <button
//                 key={m.key}
//                 onClick={() => setTab(m.key)}
//                 className={`flex items-center gap-3 px-4 py-2 w-full text-left rounded-xl transition-all ${
//                   tab === m.key
//                     ? "bg-purple-600 text-white shadow-md"
//                     : "text-gray-700 hover:bg-purple-50"
//                 }`}
//               >
//                 <span className="text-xl">{m.icon}</span>
//                 {m.label}
//               </button>
//             );
//           })}
//         </nav>
//       </aside>

//       {/* Main content */}
//       <main className="flex-1 p-6">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <span className="px-4 py-1 bg-purple-100 text-purple-700 font-medium rounded-full">
//             🎓 Student Dashboard
//           </span>
//           <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-md">
//             <div className="w-12 h-12 bg-purple-500 text-white flex items-center justify-center rounded-full font-bold">
//               PP
//             </div>
//             <div>
//               <div className="font-semibold">You</div>
//               <div className="text-sm text-gray-500">Batch 2025 · CSE</div>
//             </div>
//             <button className="ml-4 px-3 py-1 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
//               Edit
//             </button>
//           </div>
//         </div>

//         {/* Stats grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
//             <h3 className="text-gray-500 text-sm">Applications</h3>
//             <p className="text-2xl font-bold">12</p>
//             <span className="text-green-600 text-sm">▲ 5% WoW</span>
//           </div>
//           <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
//             <h3 className="text-gray-500 text-sm">Shortlisted</h3>
//             <p className="text-2xl font-bold">3</p>
//             <span className="text-green-600 text-sm">+1 new</span>
//           </div>
//           <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
//             <h3 className="text-gray-500 text-sm">Mock Interviews</h3>
//             <p className="text-2xl font-bold">2</p>
//             <span className="text-indigo-600 text-sm">Next in 3 days</span>
//           </div>
//           <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
//             <h3 className="text-gray-500 text-sm">Readiness Score</h3>
//             <p className="text-2xl font-bold">75%</p>
//             <span className="text-orange-600 text-sm">Target 85%</span>
//           </div>
//         </div>

//         {/* Highlights */}
//         <div className="mb-8">
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             <div className="p-4 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-2xl shadow-md">
//               🚀 Your next mock interview is scheduled in 3 days!
//             </div>
//             <div className="p-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl shadow-md">
//               🏆 You unlocked a new badge: "Resume Pro"
//             </div>
//             <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl shadow-md">
//               📢 Upcoming event: Infosys Drive on 25th Aug
//             </div>
//           </div>
//         </div>

//         {/* Dynamic content */}
//         <div className="bg-white p-6 rounded-2xl shadow-lg">{renderTab()}</div>
//       </main>
//     </div>
//   );
// }




import React, { useState, useEffect, useRef } from "react";

// Your original ResumeUploader component
const ResumeUploader = () => {
  const [file, setFile] = useState(null);
  const [score, setScore] = useState(0);
  const [skills, setSkills] = useState(["Java", "React", "DBMS", "OS"]);
  const [missing, setMissing] = useState(["REST APIs", "Docker", "OOPs", "Unit Testing"]);
  const dz = useRef(null);
  const inputRef = useRef(null);

  function handleFiles(f){
    if(!f?.length) return;
    const picked = f[0];
    setFile(picked);
    const s = 72 + Math.floor(Math.random()*15);
    setScore(s);
  }

  function onDrop(e){
    e.preventDefault();
    dz.current?.classList.remove("drag");
    handleFiles(e.dataTransfer.files);
  }
  function onDragOver(e){ e.preventDefault(); dz.current?.classList.add("drag"); }
  function onDragLeave(){ dz.current?.classList.remove("drag"); }

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-8 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Resume Uploader & Optimizer</h3>
        <div
          ref={dz}
          className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-indigo-400 transition-colors"
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onClick={()=>inputRef.current?.click()}
        >
          <input ref={inputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e)=>handleFiles(e.target.files)} />
          <div className="text-gray-600">Drag & drop your resume here or <span className="bg-gray-200 px-2 py-1 rounded text-sm font-medium">browse</span></div>
          <div className="text-gray-500 mt-2 text-sm">PDF / DOC / DOCX</div>
        </div>

        {file && (
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-bold mb-3">Detected Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(s => <span key={s} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{s}</span>)}
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-bold mb-3">Suggested Additions</h3>
              <div className="flex flex-wrap gap-2">
                {missing.map(s => <span key={s} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">{s}</span>)}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="col-span-4 p-6 bg-gray-50 rounded-xl flex flex-col items-center justify-center">
        <div className="relative w-32 h-32 mb-4">
          <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
          <div 
            className="absolute inset-0 rounded-full border-8 border-indigo-500 border-t-transparent transform -rotate-90"
            style={{
              clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((score * 3.6 - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin((score * 3.6 - 90) * Math.PI / 180)}%, 50% 50%)`
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-indigo-600">{score}%</span>
          </div>
        </div>
        <div className="font-bold text-center">Resume Score</div>
        <div className="text-sm text-gray-500 text-center mt-1">Optimise ATS keywords & formatting</div>
      </div>
    </div>
  );
};

const Recommendations = () => {
  const [filters, setFilters] = useState(["Java","React"]);
  
  const sample = [
    { id:1, company:"Google", role:"SWE Intern", match:92, skills:["DSA","Java","React"], location:"Bangalore", ctc:"₹20–25 LPA" },
    { id:2, company:"TCS", role:"Ninja", match:84, skills:["OOP","DBMS","OS"], location:"Hyderabad", ctc:"₹3.5–7 LPA" },
    { id:3, company:"Adobe", role:"Product Intern", match:88, skills:["C++","DSA","System Design"], location:"Noida", ctc:"₹18–22 LPA" },
    { id:4, company:"Infosys", role:"SE", match:80, skills:["Java","SQL","HTML/CSS"], location:"Pune", ctc:"₹4–7 LPA" },
  ];
  
  const toggle = (tag)=> setFilters(p=> p.includes(tag) ? p.filter(x=>x!==tag) : [...p, tag]);
  
  const allTags = Array.from(new Set(sample.flatMap(s=>s.skills)));
  const filtered = sample.filter(s => filters.every(f=> s.skills.includes(f)) || filters.length===0);
  
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Recommended Companies & Role Matches</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {allTags.map(tag => (
          <span 
            key={tag} 
            className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
              filters.includes(tag) 
                ? "bg-indigo-500 text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`} 
            onClick={()=>toggle(tag)}
          >
            {tag}
          </span>
        ))}
        {filters.length>0 && (
          <span 
            className="px-3 py-1 rounded-full text-sm cursor-pointer bg-red-100 text-red-700 hover:bg-red-200" 
            onClick={()=>setFilters([])}
          >
            Clear
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {filtered.map(job=> (
          <div key={job.id} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <div>
                <div className="font-bold text-lg">{job.company}</div>
                <div className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded inline-block">{job.role} · {job.location}</div>
              </div>
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
                <div 
                  className="absolute inset-0 rounded-full border-4 border-green-500 border-t-transparent transform -rotate-90"
                  style={{
                    clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((job.match * 3.6 - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin((job.match * 3.6 - 90) * Math.PI / 180)}%, 50% 50%)`
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-green-600">{job.match}%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {job.skills.map(s => <span key={s} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">{s}</span>)}
            </div>
            <div className="text-sm text-gray-500">CTC: {job.ctc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Roadmap = () => {
  const steps = [
    { title:"CS Fundamentals", pct: 80, tip:"OS, DBMS, CN, OOP" },
    { title:"DSA Mastery", pct: 65, tip:"Arrays → Graphs → DP" },
    { title:"Language Track", pct: 70, tip:"Java / C++ / Python" },
    { title:"Projects & Git", pct: 55, tip:"2–3 solid projects + README" },
    { title:"System Design (basic)", pct: 35, tip:"Caching, scaling basics" },
    { title:"Interview Prep", pct: 50, tip:"Mock, STAR method" },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Roadmap / Learning Map</h3>
      <div className="grid grid-cols-2 gap-4">
        {steps.map(s => (
          <div key={s.title} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <div className="font-bold">{s.title}</div>
              <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm font-medium">{s.pct}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div 
                className="bg-indigo-500 h-2 rounded-full transition-all duration-300" 
                style={{width: `${s.pct}%`}}
              ></div>
            </div>
            <div className="text-sm text-gray-500">Hint: {s.tip}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MockInterviews = () => {
  const slots = [
    { id:1, date:"Aug 20", time:"11:00 AM", mode:"Online", coach:"Anita (SDE2)", filled:false },
    { id:2, date:"Aug 22", time:"6:00 PM", mode:"Online", coach:"Rahul (FAANG)", filled:true },
    { id:3, date:"Aug 25", time:"3:00 PM", mode:"Onsite", coach:"Meera (Lead)", filled:false },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Mock Interviews</h3>
      <div className="grid grid-cols-3 gap-4">
        {slots.map(s => (
          <div key={s.id} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <div><strong>{s.date}</strong> · {s.time}</div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                s.filled 
                  ? "bg-red-100 text-red-700" 
                  : "bg-green-100 text-green-700"
              }`}>
                {s.filled ? "Filled":"Open"}
              </span>
            </div>
            <div className="text-sm mb-1">Coach: <b>{s.coach}</b></div>
            <div className="text-xs text-gray-500 mb-3">Mode: {s.mode}</div>
            <button 
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                s.filled 
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed" 
                  : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 cursor-pointer"
              }`}
              disabled={s.filled}
            >
              {s.filled ? "Unavailable":"Book Slot"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const JobStatus = () => {
  const rows = [
    { id:1, company:"Google", role:"SWE Intern", applied:"Aug 10", status:"Shortlisted" },
    { id:2, company:"TCS", role:"Ninja", applied:"Aug 12", status:"Pending" },
    { id:3, company:"Adobe", role:"Product Intern", applied:"Aug 05", status:"Rejected" },
    { id:4, company:"Infosys", role:"SE", applied:"Aug 01", status:"Selected" },
  ];

  const getStatusColor = (status) => {
    const colors = {
      Pending: "bg-yellow-100 text-yellow-800",
      Shortlisted: "bg-blue-100 text-blue-800",
      Rejected: "bg-red-100 text-red-800",
      Selected: "bg-green-100 text-green-800"
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Applied Job Status</h3>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Company</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Role</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Applied On</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.map(r=> (
              <tr key={r.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{r.company}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{r.role}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{r.applied}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(r.status)}`}>
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Events = () => {
  const list = [
    { id:1, name:"Placement Drive: Infosys", date:"Aug 21", time:"10:00 AM", venue:"Auditorium" },
    { id:2, name:"Resume Workshop", date:"Aug 23", time:"2:00 PM", venue:"Lab 2" },
    { id:3, name:"Alumni AMA", date:"Aug 27", time:"5:30 PM", venue:"Online" },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
      <div className="space-y-4">
        {list.map(e=> (
          <div key={e.id} className="flex items-center p-4 bg-gray-50 rounded-lg">
            <div className="w-3 h-3 bg-indigo-500 rounded-full mr-4 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="font-bold">{e.name}</div>
              <div className="text-sm text-gray-500">{e.date} · {e.time} · {e.venue}</div>
            </div>
            <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm hover:bg-indigo-200 transition-colors">
              Add to Calendar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Achievements = () => {
  const badges = [
    { id:1, name:"DSA Streak 30", note:"Solved 30 problems", level:"Gold" },
    { id:2, name:"Project Ship", note:"Deployed 2 apps", level:"Silver" },
    { id:3, name:"Interview Ready", note:"3 mocks completed", level:"Bronze" },
    { id:4, name:"Quiz Master", note:"Top 10% in OS", level:"Gold" },
  ];

  const getLevelColor = (level) => {
    const colors = {
      Gold: "bg-yellow-100 text-yellow-800 border-yellow-300",
      Silver: "bg-gray-100 text-gray-800 border-gray-300", 
      Bronze: "bg-orange-100 text-orange-800 border-orange-300"
    };
    return colors[level] || "bg-gray-100 text-gray-800 border-gray-300";
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Achievements & Badges</h3>
      <div className="grid grid-cols-4 gap-4">
        {badges.map(b => (
          <div key={b.id} className="p-4 bg-gray-50 rounded-lg text-center">
            <div className="relative w-16 h-16 mx-auto mb-3">
              <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
              <div 
                className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent transform -rotate-90"
                style={{
                  clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((300 - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin((300 - 90) * Math.PI / 180)}%, 50% 50%)`
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-xs font-bold px-1 py-0.5 rounded border ${getLevelColor(b.level)}`}>
                  {b.level}
                </span>
              </div>
            </div>
            <div className="font-bold text-sm mb-1">{b.name}</div>
            <div className="text-xs text-gray-500">{b.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CompanyInsights = () => {
  const companies = [
    { name:"Google", applicants: 120, hires: 12, avgCtc:"₹45 LPA" },
    { name:"TCS", applicants: 500, hires: 85, avgCtc:"₹5.5 LPA" },
    { name:"Adobe", applicants: 90, hires: 10, avgCtc:"₹30 LPA" },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Company Insights</h3>
      <div className="grid grid-cols-3 gap-4">
        {companies.map(c => (
          <div key={c.name} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="font-bold text-lg">{c.name}</div>
              <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm font-medium">{c.avgCtc}</span>
            </div>
            <div className="mb-3">
              <div className="text-sm text-gray-500 mb-1">Applicants</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{width: Math.min(100, c.applicants/5) + "%"}}
                ></div>
              </div>
              <div className="text-xs text-gray-600 mt-1">{c.applicants}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Hires</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{width: Math.min(100, c.hires/1.2) + "%"}}
                ></div>
              </div>
              <div className="text-xs text-gray-600 mt-1">{c.hires}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Quizzes = () => {
  const [active, setActive] = useState(null);
  const [i, setI] = useState(0);
  const [ans, setAns] = useState(null);
  const [score, setScore] = useState(0);

  const categories = [
    "Operating Systems","DBMS","Java OCA","Java","Python","C","C++","React","HTML/CSS/JS"
  ];
  
  const bank = {
    "Operating Systems":[
      { q:"Which scheduling algorithm may cause starvation?", a:["FCFS","SJF","Round Robin","Priority (non-preemptive)"], c:1 },
      { q:"Which is not a page replacement algorithm?", a:["LRU","Optimal","FIFO","Shortest Job First"], c:3 }
    ],
    "DBMS":[
      { q:"Which SQL clause filters groups?", a:["WHERE","HAVING","GROUP BY","ORDER BY"], c:1 },
      { q:"Which normal form removes transitive dependency?", a:["1NF","2NF","3NF","BCNF"], c:2 }
    ],
    "Java":[
      { q:"Which keyword prevents inheritance?", a:["static","final","const","sealed"], c:1 },
      { q:"Default value of int in class field?", a:["0","null","undefined","garbage"], c:0 }
    ]
  };

  const start = (cat)=> { setActive(cat); setI(0); setAns(null); setScore(0); }
  const list = bank[active] || [
    { q:"React is a ____ library.", a:["UI","DB","Server","Styling"], c:0 }
  ];

  const submit = ()=>{
    if(ans===null) return;
    if(ans===list[i].c) setScore(s=>s+1);
    if(i < list.length-1){ setI(i+1); setAns(null); }
    else alert(`Quiz finished! Score ${score + (ans===list[i].c?1:0)} / ${list.length}`);
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Quizzes for Preparation</h3>
      {!active ? (
        <div className="grid grid-cols-3 gap-4">
          {categories.map(c => (
            <div key={c} className="p-4 bg-gray-50 rounded-lg text-center">
              <div className="font-bold mb-2">{c}</div>
              <div className="text-sm text-gray-500 mb-3">10 questions · 15 min</div>
              <button 
                className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm hover:bg-indigo-200 transition-colors" 
                onClick={()=>start(c)}
              >
                Start Quiz
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 bg-gray-50 rounded-lg">
          <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded inline-block text-sm mb-4">{active}</div>
          <div className="font-bold text-lg mb-4">{list[i].q}</div>
          <div className="grid gap-2 mb-4">
            {list[i].a.map((opt,idx)=> (
              <button 
                key={idx} 
                className={`p-3 text-left rounded-lg border transition-colors ${
                  ans===idx 
                    ? "bg-indigo-500 text-white border-indigo-500" 
                    : "bg-white border-gray-200 hover:border-indigo-300"
                }`} 
                onClick={()=>setAns(idx)}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="flex gap-3 items-center">
            <button 
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors" 
              onClick={submit}
            >
              Submit
            </button>
            <button 
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors" 
              onClick={()=>{ setActive(null); setAns(null); }}
            >
              Exit
            </button>
            <span className="text-sm text-gray-500">Score: {score}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const MENU = [
  { key: "Resume", label: "Resume Uploader", icon: "📄" },
  { key: "Recommendations", label: "Recommendations", icon: "⭐" },
  { key: "Roadmap", label: "Learning Roadmap", icon: "🗺️" },
  { key: "Mock Interviews", label: "Mock Interviews", icon: "🎤" },
  { key: "Job Status", label: "Applied Job Status", icon: "💼" },
  { key: "Events", label: "Upcoming Events", icon: "📅" },
  { key: "Achievements", label: "Achievements & Badges", icon: "🏆" },
  { key: "Company Insights", label: "Company Insights", icon: "🏢" },
  { key: "Quizzes", label: "Practice Quizzes", icon: "📋" },
];

export default function StudentDashboard() {
  const [tab, setTab] = useState("Resume");

  useEffect(() => {
    document.title = "Student Dashboard | Placement Plaza";
  }, []);

  const renderTab = () => {
    switch (tab) {
      case "Resume":
        return <ResumeUploader />;
      case "Recommendations":
        return <Recommendations />;
      case "Roadmap":
        return <Roadmap />;
      case "Mock Interviews":
        return <MockInterviews />;
      case "Job Status":
        return <JobStatus />;
      case "Events":
        return <Events />;
      case "Achievements":
        return <Achievements />;
      case "Company Insights":
        return <CompanyInsights />;
      case "Quizzes":
        return <Quizzes />;
      default:
        return <ResumeUploader />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white/70 backdrop-blur-lg border-r border-gray-200 hidden md:flex flex-col p-4 shadow-lg">
        <div className="text-2xl font-bold text-purple-600 mb-6">Placement Plaza</div>
        <input
          type="text"
          placeholder="🔍 Search..."
          className="px-3 py-2 mb-4 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <nav className="space-y-2">
          {MENU.map((m) => {
            return (
              <button
                key={m.key}
                onClick={() => setTab(m.key)}
                className={`flex items-center gap-3 px-4 py-2 w-full text-left rounded-xl transition-all ${
                  tab === m.key
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-purple-50"
                }`}
              >
                <span className="text-xl">{m.icon}</span>
                {m.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <span className="px-4 py-1 bg-purple-100 text-purple-700 font-medium rounded-full">
            🎓 Student Dashboard
          </span>
          <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-md">
            <div className="w-12 h-12 bg-purple-500 text-white flex items-center justify-center rounded-full font-bold">
              PP
            </div>
            <div>
              <div className="font-semibold">You</div>
              <div className="text-sm text-gray-500">Batch 2025 · CSE</div>
            </div>
            <button className="ml-4 px-3 py-1 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
              Edit
            </button>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-gray-500 text-sm">Applications</h3>
            <p className="text-2xl font-bold">12</p>
            <span className="text-green-600 text-sm">▲ 5% WoW</span>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-gray-500 text-sm">Shortlisted</h3>
            <p className="text-2xl font-bold">3</p>
            <span className="text-green-600 text-sm">+1 new</span>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-gray-500 text-sm">Mock Interviews</h3>
            <p className="text-2xl font-bold">2</p>
            <span className="text-indigo-600 text-sm">Next in 3 days</span>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-gray-500 text-sm">Readiness Score</h3>
            <p className="text-2xl font-bold">75%</p>
            <span className="text-orange-600 text-sm">Target 85%</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-2xl shadow-md">
              🚀 Your next mock interview is scheduled in 3 days!
            </div>
            <div className="p-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl shadow-md">
              🏆 You unlocked a new badge: "Resume Pro"
            </div>
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl shadow-md">
              📢 Upcoming event: Infosys Drive on 25th Aug
            </div>
          </div>
        </div>

        {/* Dynamic content */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">{renderTab()}</div>
      </main>
    </div>
  );
}