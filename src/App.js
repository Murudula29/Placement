// // // import logo from './logo.svg';
// // // import './App.css';

// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <header className="App-header">
// // //         <img src={logo} className="App-logo" alt="logo" />
// // //         <p>
// // //           Edit <code>src/App.js</code> and save to reload.
// // //         </p>
// // //         <a
// // //           className="App-link"
// // //           href="https://reactjs.org"
// // //           target="_blank"
// // //           rel="noopener noreferrer"
// // //         >
// // //           Learn React
// // //         </a>
// // //       </header>
// // //     </div>
// // //   );
// // // }

// // // export default App;


// // // import React from "react";
// // // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./pages/Home";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Placeholder from "./pages/Placeholder";
// // // import { AuthProvider } from "./auth/AuthContext";
// // // import "./styles.css";

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       <BrowserRouter>
// // //         <Navbar />
// // //         <main className="container py-4">
// // //           <Routes>
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/contact" element={<Contact />} />

// // //             <Route path="/login" element={<Login />} />
// // //             <Route path="/signup" element={<Signup />} />

// // //             {/* placeholders for later parts */}
// // //             <Route path="/student" element={<Placeholder title="Student Dashboard (coming soon)" />} />
// // //             <Route path="/recruiter" element={<Placeholder title="Recruiter Console (coming soon)" />} />
// // //             <Route path="/tpo" element={<Placeholder title="TPO / Admin Panel (coming soon)" />} />

// // //             <Route path="*" element={<Navigate to="/" replace />} />
// // //           </Routes>
// // //         </main>
// // //       </BrowserRouter>
// // //     </AuthProvider>
// // //   );
// // // }



// // // src/App.js
// // // import React from "react";
// // // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./pages/Home";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Placeholder from "./pages/Placeholder";
// // // import { AuthProvider, useAuth } from "./auth/AuthContext";
// // // import "./styles.css";

// // // /** Protect routes: if no user, send to /login */
// // // function ProtectedRoute({ children }) {
// // //   const { user, loading } = useAuth();
// // //   if (loading) return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   if (!user) return <Navigate to="/login" replace />;
// // //   return children;
// // // }

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       <BrowserRouter>
// // //         <Navbar />
// // //         <main className="container py-4">
// // //           <Routes>
// // //             {/* Public pages */}
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/contact" element={<Contact />} />

// // //             {/* Auth pages */}
// // //             <Route path="/login" element={<Login />} />
// // //             <Route path="/signup" element={<Signup />} />

// // //             {/* Dropdown-linked pages (protected) */}
// // //             <Route
// // //               path="/profile"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Profile (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/applications"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="My Applications (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/saved"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Saved Jobs (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/settings"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Settings (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/support"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Help & Support (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Role pages (protected) */}
// // //             <Route
// // //               path="/student"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Student Dashboard (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/recruiter"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Recruiter Console (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/tpo"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="TPO / Admin Panel (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Catch-all */}
// // //             <Route path="*" element={<Navigate to="/" replace />} />
// // //           </Routes>
// // //         </main>
// // //       </BrowserRouter>
// // //     </AuthProvider>
// // //   );
// // // }



// // // // src/App.jsx
// // // import React from "react";
// // // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./pages/Home";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Placeholder from "./pages/Placeholder";
// // // import { AuthProvider, useAuth } from "./auth/AuthContext";
// // // import "./styles.css";

// // // /** Protect routes: if no user, send to /login */
// // // function ProtectedRoute({ children }) {
// // //   const { user, loading } = useAuth();
// // //   if (loading) {
// // //     return (
// // //       <div className="container py-5 text-center text-muted">
// // //         Checking sign-in…
// // //       </div>
// // //     );
// // //   }
// // //   if (!user) return <Navigate to="/login" replace />;
// // //   return children;
// // // }

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       <BrowserRouter>
// // //         <Navbar />
// // //         <main className="container py-4">
// // //           <Routes>
// // //             {/* Public pages */}
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/contact" element={<Contact />} />

// // //             {/* Auth pages */}
// // //             <Route path="/login" element={<Login />} />
// // //             <Route path="/signup" element={<Signup />} />

// // //             {/* Dropdown-linked pages (protected) */}
// // //             <Route
// // //               path="/profile"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Profile (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/applications"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="My Applications (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/saved"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Saved Jobs (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/settings"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Settings (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/support"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Help & Support (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Role pages (protected) */}
// // //             <Route
// // //               path="/student"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Student Dashboard (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/recruiter"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Recruiter Console (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/tpo"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="TPO / Admin Panel (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Catch-all */}
// // //             <Route path="*" element={<Navigate to="/" replace />} />
// // //           </Routes>
// // //         </main>
// // //       </BrowserRouter>
// // //     </AuthProvider>
// // //   );
// // // }


// // // src/App.jsx
// // // import React from "react";
// // // import { Routes, Route, Navigate } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./pages/Home";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Placeholder from "./pages/Placeholder";
// // // import { AuthProvider, useAuth } from "./auth/AuthContext";
// // // import "./styles.css";

// // // /** Protect routes: if no user, send to /login */
// // // function ProtectedRoute({ children }) {
// // //   const { user, loading } = useAuth();
// // //   if (loading) return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   if (!user) return <Navigate to="/login" replace />;
// // //   return children;
// // // }

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       {/* BrowserRouter is in index.js */}
// // //       <Navbar />
// // //       <main className="container py-4">
// // //         <Routes>
// // //           {/* Public pages */}
// // //           <Route path="/" element={<Home />} />
// // //           <Route path="/about" element={<About />} />
// // //           <Route path="/contact" element={<Contact />} />

// // //           {/* Auth pages */}
// // //           <Route path="/login" element={<Login />} />
// // //           <Route path="/signup" element={<Signup />} />

// // //           {/* Dropdown-linked pages (protected) */}
// // //           <Route path="/profile" element={<ProtectedRoute><Placeholder title="Profile (coming soon)" /></ProtectedRoute>} />
// // //           <Route path="/applications" element={<ProtectedRoute><Placeholder title="My Applications (coming soon)" /></ProtectedRoute>} />
// // //           <Route path="/saved" element={<ProtectedRoute><Placeholder title="Saved Jobs (coming soon)" /></ProtectedRoute>} />
// // //           <Route path="/settings" element={<ProtectedRoute><Placeholder title="Settings (coming soon)" /></ProtectedRoute>} />
// // //           <Route path="/support" element={<ProtectedRoute><Placeholder title="Help & Support (coming soon)" /></ProtectedRoute>} />

// // //           {/* Role pages (protected) */}
// // //           <Route path="/student" element={<ProtectedRoute><Placeholder title="Student Dashboard (coming soon)" /></ProtectedRoute>} />
// // //           <Route path="/recruiter" element={<ProtectedRoute><Placeholder title="Recruiter Console (coming soon)" /></ProtectedRoute>} />
// // //           <Route path="/tpo" element={<ProtectedRoute><Placeholder title="TPO / Admin Panel (coming soon)" /></ProtectedRoute>} />

// // //           {/* Catch-all */}
// // //           <Route path="*" element={<Navigate to="/" replace />} />
// // //         </Routes>
// // //       </main>
// // //     </AuthProvider>
// // //   );
// // // }









// // // // src/App.jsx
// // // import React from "react";
// // // import { Routes, Route, Navigate } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./pages/Home";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Placeholder from "./pages/Placeholder";
// // // import { AuthProvider, useAuth } from "./auth/AuthContext";
// // // import ChatWidget from "./components/ChatWidget"; // ⬅️ add this
// // // import "./styles.css";

// // // /** Protect routes: if no user, send to /login */
// // // function ProtectedRoute({ children }) {
// // //   const { user, loading } = useAuth();
// // //   if (loading) return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   if (!user) return <Navigate to="/login" replace />;
// // //   return children;
// // // }

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       {/* BrowserRouter is in index.js */}
// // //       <Navbar />

// // //       <main className="container py-4">
// // //         <Routes>
// // //           {/* Public pages */}
// // //           <Route path="/" element={<Home />} />
// // //           <Route path="/about" element={<About />} />
// // //           <Route path="/contact" element={<Contact />} />

// // //           {/* Auth pages */}
// // //           <Route path="/login" element={<Login />} />
// // //           <Route path="/signup" element={<Signup />} />

// // //           {/* Dropdown-linked pages (protected) */}
// // //           <Route
// // //             path="/profile"
// // //             element={
// // //               <ProtectedRoute>
// // //                 <Placeholder title="Profile (coming soon)" />
// // //               </ProtectedRoute>
// // //             }
// // //           />
// // //           <Route
// // //             path="/applications"
// // //             element={
// // //               <ProtectedRoute>
// // //                 <Placeholder title="My Applications (coming soon)" />
// // //               </ProtectedRoute>
// // //             }
// // //           />
// // //           <Route
// // //             path="/saved"
// // //             element={
// // //               <ProtectedRoute>
// // //                 <Placeholder title="Saved Jobs (coming soon)" />
// // //               </ProtectedRoute>
// // //             }
// // //           />
// // //           <Route
// // //             path="/settings"
// // //             element={
// // //               <ProtectedRoute>
// // //                 <Placeholder title="Settings (coming soon)" />
// // //               </ProtectedRoute>
// // //             }
// // //           />
// // //           <Route
// // //             path="/support"
// // //             element={
// // //               <ProtectedRoute>
// // //                 <Placeholder title="Help & Support (coming soon)" />
// // //               </ProtectedRoute>
// // //             }
// // //           />

// // //           {/* Role pages (protected) */}
// // //           <Route
// // //             path="/student"
// // //             element={
// // //               <ProtectedRoute>
// // //                 <Placeholder title="Student Dashboard (coming soon)" />
// // //               </ProtectedRoute>
// // //             }
// // //           />
// // //           <Route
// // //             path="/recruiter"
// // //             element={
// // //               <ProtectedRoute>
// // //                 <Placeholder title="Recruiter Console (coming soon)" />
// // //               </ProtectedRoute>
// // //             }
// // //           />
// // //           <Route
// // //             path="/tpo"
// // //             element={
// // //               <ProtectedRoute>
// // //                 <Placeholder title="TPO / Admin Panel (coming soon)" />
// // //               </ProtectedRoute>
// // //             }
// // //           />

// // //           {/* Catch-all */}
// // //           <Route path="*" element={<Navigate to="/" replace />} />
// // //         </Routes>
// // //       </main>

// // //       {/* Sticky chatbot appears on every page */}
// // //       <ChatWidget />
// // //     </AuthProvider>
// // //   );
// // // }







// // // // src/App.jsx
// // // import React from "react";
// // // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./pages/Home";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Placeholder from "./pages/Placeholder";
// // // import { AuthProvider, useAuth } from "./auth/AuthContext";
// // // import ChatWidget from "./components/ChatWidget";
// // // import "./styles.css";

// // // /** Protect routes: if no user, send to /login */
// // // function ProtectedRoute({ children }) {
// // //   const { user, loading } = useAuth();
// // //   if (loading) return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   if (!user) return <Navigate to="/login" replace />;
// // //   return children;
// // // }

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       {/* If your index.js already has <BrowserRouter>, remove it here. */}
// // //       <BrowserRouter>
// // //         <Navbar />

// // //         <main className="container py-4">
// // //           <Routes>
// // //             {/* Public pages */}
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/contact" element={<Contact />} />

// // //             {/* Auth pages */}
// // //             <Route path="/login" element={<Login />} />
// // //             <Route path="/signup" element={<Signup />} />

// // //             {/* Dropdown-linked pages (protected) */}
// // //             <Route
// // //               path="/profile"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Profile (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/applications"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="My Applications (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/saved"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Saved Jobs (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/settings"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Settings (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/support"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Help & Support (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Role pages (protected) */}
// // //             <Route
// // //               path="/student"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Student Dashboard (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/recruiter"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Recruiter Console (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/tpo"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="TPO / Admin Panel (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Catch-all */}
// // //             <Route path="*" element={<Navigate to="/" replace />} />
// // //           </Routes>
// // //         </main>

// // //         {/* Sticky chatbot appears on every page */}
// // //         <ChatWidget />
// // //       </BrowserRouter>
// // //     </AuthProvider>
// // //   );
// // // }







// // // src/App.jsx
// // // import React from "react";
// // // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./pages/Home";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Placeholder from "./pages/Placeholder";
// // // import { AuthProvider, useAuth } from "./auth/AuthContext";
// // // import ChatWidget from "./components/ChatWidget";
// // // import "./styles.css";

// // // /** Guard for protected routes */
// // // function ProtectedRoute({ children }) {
// // //   const { user, loading } = useAuth();
// // //   if (loading) return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   if (!user) return <Navigate to="/login" replace />;
// // //   return children;
// // // }

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       {/* If your index.js ALSO wraps with <BrowserRouter>, remove one of them (don’t double-wrap). */}
// // //       <BrowserRouter>
// // //         <Navbar />

// // //         <main className="container py-4">
// // //           <Routes>
// // //             {/* Public pages */}
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/contact" element={<Contact />} />

// // //             {/* Auth pages */}
// // //             <Route path="/login" element={<Login />} />
// // //             <Route path="/signup" element={<Signup />} />

// // //             {/* Dropdown-linked pages (protected) */}
// // //             <Route
// // //               path="/profile"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Profile (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/applications"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="My Applications (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/saved"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Saved Jobs (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/settings"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Settings (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/support"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Help & Support (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Role pages (protected) */}
// // //             <Route
// // //               path="/student"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Student Dashboard (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/recruiter"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Recruiter Console (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/tpo"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="TPO / Admin Panel (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Catch-all */}
// // //             <Route path="*" element={<Navigate to="/" replace />} />
// // //           </Routes>
// // //         </main>

// // //         {/* Sticky chatbot on every page */}
// // //         <ChatWidget />
// // //       </BrowserRouter>
// // //     </AuthProvider>
// // //   );
// // // }






// // // // // src/App.jsx
// // // // import React from "react";
// // // // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // // // import Home from "./pages/Home";          // or your real pages
// // // // import ChatWidget from "./components/ChatWidget";

// // // // export default function App() {
// // // //   return (
// // // //     <BrowserRouter>
// // // //       <Routes>
// // // //         <Route path="/" element={<Home />} />
// // // //       </Routes>

// // // //       {/* Mount outside Routes so it appears on every page */}
// // // //       <ChatWidget />
// // // //     </BrowserRouter>
// // // //   );
// // // // }


// // // function App() {
// // //   return (
// // //     <div style={{ padding: '100px' }}>
// // //       <BsChatDotsFill size={50} color="red" />
// // //       <ChatWidget />
// // //     </div>
// // //   );
// // // }



// // // src/App.jsx
// // // import React from "react";
// // // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./pages/Home";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Placeholder from "./pages/Placeholder";
// // // import Applications from "./pages/Applications";
// // // import SavedJobs from "./pages/SavedJobs";
// // // import Settings from "./pages/Settings";
// // // import Support from "./pages/Support";
// // // import { AuthProvider, useAuth } from "./auth/AuthContext";
// // // import ChatWidget from "./components/ChatWidget";
// // // import "./styles.css";

// // // /** Guard for protected routes */
// // // function ProtectedRoute({ children }) {
// // //   const { user, loading } = useAuth();
// // //   if (loading) return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   if (!user) return <Navigate to="/login" replace />;
// // //   return children;
// // // }

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       {/* If index.js ALSO has <BrowserRouter>, remove one of them (don’t double-wrap). */}
// // //       <BrowserRouter>
// // //         <Navbar />

// // //         <main className="container py-4">
// // //           <Routes>
// // //             {/* Public pages */}
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/contact" element={<Contact />} />

// // //             {/* Auth pages */}
// // //             <Route path="/login" element={<Login />} />
// // //             <Route path="/signup" element={<Signup />} />

// // //             {/* Dropdown-linked pages (protected) */}
// // //             <Route
// // //               path="/applications"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Applications />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/saved"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <SavedJobs />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/settings"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Settings />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/support"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Support />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Other protected placeholders */}
// // //             <Route
// // //               path="/profile"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Profile (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/student"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Student Dashboard (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/recruiter"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Recruiter Console (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/tpo"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="TPO / Admin Panel (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Catch-all */}
// // //             <Route path="*" element={<Navigate to="/" replace />} />
// // //           </Routes>
// // //         </main>

// // //         {/* Sticky chatbot on every page */}
// // //         <ChatWidget />
// // //       </BrowserRouter>
// // //     </AuthProvider>
// // //   );
// // // }



// // // import React from "react";
// // // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./pages/Home";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Placeholder from "./pages/Placeholder";
// // // import Applications from "./pages/Applications";
// // // import SavedJobs from "./pages/SavedJobs";
// // // import Settings from "./pages/Settings";
// // // import Support from "./pages/Support";
// // // import { AuthProvider, useAuth } from "./auth/AuthContext";
// // // import ChatWidget from "./components/ChatWidget";
// // // import "./styles.css";

// // // /** Guard for protected routes */
// // // function ProtectedRoute({ children }) {
// // //   const { user, loading } = useAuth();
// // //   if (loading) return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   if (!user) return <Navigate to="/login" replace />;
// // //   return children;
// // // }

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       <BrowserRouter>
// // //         <Navbar />

// // //         <main className="container py-4">
// // //           <Routes>
// // //             {/* Public pages */}
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/contact" element={<Contact />} />

// // //             {/* Auth pages */}
// // //             <Route path="/login" element={<Login />} />
// // //             <Route path="/signup" element={<Signup />} />

// // //             {/* Dropdown-linked pages (protected) */}
// // //             <Route
// // //               path="/applications"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Applications />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/saved"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <SavedJobs />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/settings"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Settings />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/support"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Support />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Other protected placeholders */}
// // //             <Route
// // //               path="/profile"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Profile (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/student"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Student Dashboard (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/recruiter"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Recruiter Console (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/tpo"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="TPO / Admin Panel (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Catch-all */}
// // //             <Route path="*" element={<Navigate to="/" replace />} />
// // //           </Routes>
// // //         </main>

// // //         {/* Sticky chatbot on every page */}
// // //         <ChatWidget />
// // //       </BrowserRouter>
// // //     </AuthProvider>
// // //   );
// // // }


// // // import React from "react";
// // // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./pages/Home";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Placeholder from "./pages/Placeholder";
// // // import Applications from "./pages/Applications";
// // // import SavedJobs from "./pages/SavedJobs";
// // // import Settings from "./pages/Settings";
// // // import Support from "./pages/Support";
// // // import { AuthProvider, useAuth } from "./auth/AuthContext";
// // // import ChatWidget from "./components/ChatWidget";
// // // import "./styles.css";

// // // /** Guard for protected routes */
// // // function ProtectedRoute({ children }) {
// // //   const { user, loading } = useAuth();
// // //   if (loading) return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   if (!user) return <Navigate to="/login" replace />;
// // //   return children;
// // // }

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       <BrowserRouter>
// // //         <Navbar />

// // //         <main className="container py-4">
// // //           <Routes>
// // //             {/* Public pages */}
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/contact" element={<Contact />} />

// // //             {/* Auth pages */}
// // //             <Route path="/login" element={<Login />} />
// // //             <Route path="/signup" element={<Signup />} />

// // //             {/* Dropdown-linked pages (protected) */}
// // //             <Route
// // //               path="/applications"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Applications />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/saved"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <SavedJobs />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/settings"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Settings />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/support"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Support />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Other protected placeholders */}
// // //             <Route
// // //               path="/profile"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Profile (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/student"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Student Dashboard (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/recruiter"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Recruiter Console (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/tpo"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="TPO / Admin Panel (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Catch-all */}
// // //             <Route path="*" element={<Navigate to="/" replace />} />
// // //           </Routes>
// // //         </main>

// // //         {/* Sticky chatbot on every page */}
// // //         <ChatWidget />
// // //       </BrowserRouter>
// // //     </AuthProvider>
// // //   );
// // // }



// // // import React from "react";
// // // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./pages/Home";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Placeholder from "./pages/Placeholder";
// // // import Applications from "./pages/Applications";
// // // import SavedJobs from "./pages/SavedJobs";
// // // import Settings from "./pages/Settings";
// // // import Support from "./pages/Support";
// // // import AddPassword from "./pages/AddPassword"; // ✅ NEW
// // // import { AuthProvider, useAuth } from "./auth/AuthContext";
// // // import ChatWidget from "./components/ChatWidget";
// // // import "./styles.css";

// // // /** Guard for protected routes */
// // // function ProtectedRoute({ children }) {
// // //   const { user, loading } = useAuth();
// // //   if (loading) return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   if (!user) return <Navigate to="/login" replace />;
// // //   return children;
// // // }

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       <BrowserRouter>
// // //         <Navbar />

// // //         <main className="container py-4">
// // //           <Routes>
// // //             {/* Public pages */}
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/contact" element={<Contact />} />

// // //             {/* Auth pages */}
// // //             <Route path="/login" element={<Login />} />
// // //             <Route path="/signup" element={<Signup />} />

// // //             {/* Password linking page (must be signed in, e.g., via Google) */}
// // //             <Route
// // //               path="/add-password"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <AddPassword />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Dropdown-linked pages (protected) */}
// // //             <Route
// // //               path="/applications"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Applications />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/saved"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <SavedJobs />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/settings"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Settings />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/support"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Support />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Other protected placeholders */}
// // //             <Route
// // //               path="/profile"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Profile (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/student"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Student Dashboard (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/recruiter"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Recruiter Console (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/tpo"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="TPO / Admin Panel (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Catch-all */}
// // //             <Route path="*" element={<Navigate to="/" replace />} />
// // //           </Routes>
// // //         </main>

// // //         {/* Sticky chatbot on every page */}
// // //         <ChatWidget />
// // //       </BrowserRouter>
// // //     </AuthProvider>
// // //   );
// // // }






// // // import React from "react";
// // // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./pages/Home";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Placeholder from "./pages/Placeholder";
// // // import Applications from "./pages/Applications";
// // // import SavedJobs from "./pages/SavedJobs";
// // // import Settings from "./pages/Settings";
// // // import Support from "./pages/Support";
// // // import AddPassword from "./pages/AddPassword";
// // // import { AuthProvider, useAuth } from "./auth/AuthContext";
// // // import ChatWidget from "./components/ChatWidget";
// // // import "./styles.css";

// // // /** Guard for protected routes (only when signed in) */
// // // function ProtectedRoute({ children }) {
// // //   const { user, loading } = useAuth();
// // //   if (loading) {
// // //     return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   }
// // //   if (!user) return <Navigate to="/login" replace />;
// // //   return children;
// // // }

// // // /** Guard for pages that should be hidden from signed-in users (login/signup) */
// // // function PublicOnlyRoute({ children }) {
// // //   const { user, loading } = useAuth();
// // //   if (loading) {
// // //     return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   }
// // //   if (user) return <Navigate to="/" replace />;
// // //   return children;
// // // }

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       <BrowserRouter>
// // //         <Navbar />

// // //         <main className="container py-4">
// // //           <Routes>
// // //             {/* Public pages */}
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/contact" element={<Contact />} />

// // //             {/* Auth pages (hide if already signed in) */}
// // //             <Route
// // //               path="/login"
// // //               element={
// // //                 <PublicOnlyRoute>
// // //                   <Login />
// // //                 </PublicOnlyRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/signup"
// // //               element={
// // //                 <PublicOnlyRoute>
// // //                   <Signup />
// // //                 </PublicOnlyRoute>
// // //               }
// // //             />

// // //             {/* Add password (must be signed in, e.g., via Google/Phone) */}
// // //             <Route
// // //               path="/add-password"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <AddPassword />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Protected app pages */}
// // //             <Route
// // //               path="/applications"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Applications />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/saved"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <SavedJobs />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/settings"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Settings />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/support"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Support />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Other protected placeholders */}
// // //             <Route
// // //               path="/profile"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Profile (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/student"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Student Dashboard (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/recruiter"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Recruiter Console (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/tpo"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="TPO / Admin Panel (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Catch-all */}
// // //             <Route path="*" element={<Navigate to="/" replace />} />
// // //           </Routes>
// // //         </main>

// // //         {/* Sticky chatbot on every page */}
// // //         <ChatWidget />
// // //       </BrowserRouter>
// // //     </AuthProvider>
// // //   );
// // // }







// // // import React from "react";
// // // import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./pages/Home";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Placeholder from "./pages/Placeholder";
// // // import Applications from "./pages/Applications";
// // // import SavedJobs from "./pages/SavedJobs";
// // // import Settings from "./pages/Settings";
// // // import Support from "./pages/Support";
// // // import AddPassword from "./pages/AddPassword";
// // // import { AuthProvider, useAuth } from "./auth/AuthContext";
// // // import ChatWidget from "./components/ChatWidget";
// // // import "./styles.css";

// // // /** Guard for protected routes (only when signed in) */
// // // function ProtectedRoute({ children }) {
// // //   const { user, loading } = useAuth();
// // //   if (loading) {
// // //     return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   }
// // //   if (!user) return <Navigate to="/login" replace />;
// // //   return children;
// // // }

// // // /** Guard for pages that should be hidden from signed-in users (login/signup) */
// // // function PublicOnlyRoute({ children }) {
// // //   const { user, loading } = useAuth();
// // //   if (loading) {
// // //     return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   }
// // //   if (user) return <Navigate to="/" replace />;
// // //   return children;
// // // }

// // // /** Tiny banner that nudges Google-only users to add a password */
// // // function GoogleOnlyNudge() {
// // //   const { user } = useAuth();
// // //   if (!user) return null;

// // //   const hasPassword =
// // //     Array.isArray(user.providerData) &&
// // //     user.providerData.some((p) => p.providerId === "password");
// // //   const hasGoogle =
// // //     Array.isArray(user.providerData) &&
// // //     user.providerData.some((p) => p.providerId === "google.com");

// // //   if (hasGoogle && !hasPassword) {
// // //     return (
// // //       <div className="container">
// // //         <div className="alert alert-warning d-flex justify-content-between align-items-center py-2 px-3 mb-3">
// // //           <span>
// // //             You signed in with Google. Add a password so email+password login also works.
// // //           </span>
// // //           <Link className="btn btn-sm btn-outline-dark" to="/add-password">
// // //             Add Password
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     );
// // //   }
// // //   return null;
// // // }

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       <BrowserRouter>
// // //         <Navbar />

// // //         {/* Helpful prompt for Google-only accounts */}
// // //         <GoogleOnlyNudge />

// // //         <main className="container py-4">
// // //           <Routes>
// // //             {/* Public pages */}
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/contact" element={<Contact />} />

// // //             {/* Auth pages (hide if already signed in) */}
// // //             <Route
// // //               path="/login"
// // //               element={
// // //                 <PublicOnlyRoute>
// // //                   <Login />
// // //                 </PublicOnlyRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/signup"
// // //               element={
// // //                 <PublicOnlyRoute>
// // //                   <Signup />
// // //                 </PublicOnlyRoute>
// // //               }
// // //             />

// // //             {/* Add password (must be signed in, e.g., via Google/Phone) */}
// // //             <Route
// // //               path="/add-password"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <AddPassword />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Protected app pages */}
// // //             <Route
// // //               path="/applications"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Applications />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/saved"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <SavedJobs />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/settings"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Settings />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/support"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Support />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Other protected placeholders */}
// // //             <Route
// // //               path="/profile"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Profile (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/student"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Student Dashboard (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/recruiter"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Recruiter Console (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/tpo"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="TPO / Admin Panel (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Catch-all */}
// // //             <Route path="*" element={<Navigate to="/" replace />} />
// // //           </Routes>
// // //         </main>

// // //         {/* Sticky chatbot on every page */}
// // //         <ChatWidget />
// // //       </BrowserRouter>
// // //     </AuthProvider>
// // //   );
// // // }








// // // import React from "react";
// // // import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./pages/Home";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Placeholder from "./pages/Placeholder";
// // // import Applications from "./pages/Applications";
// // // import SavedJobs from "./pages/SavedJobs";
// // // import Settings from "./pages/Settings";
// // // import Support from "./pages/Support";
// // // import AddPassword from "./pages/AddPassword";
// // // import { AuthProvider, useAuth } from "./auth/AuthContext";
// // // import ChatWidget from "./components/ChatWidget";
// // // import "./styles.css";

// // // /** Guard for protected routes (only when signed in) */
// // // function ProtectedRoute({ children }) {
// // //   const { user, loading } = useAuth();
// // //   if (loading) {
// // //     return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   }
// // //   if (!user) return <Navigate to="/login" replace />;
// // //   return children;
// // // }

// // // /** Guard for pages that should be hidden from signed-in users (login/signup) */
// // // function PublicOnlyRoute({ children }) {
// // //   const { user, loading } = useAuth();
// // //   if (loading) {
// // //     return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   }
// // //   if (user) return <Navigate to="/" replace />;
// // //   return children;
// // // }

// // // /** Tiny banner that nudges Google-only users to add a password */
// // // function GoogleOnlyNudge() {
// // //   const { user } = useAuth();
// // //   if (!user) return null;

// // //   const hasPassword =
// // //     Array.isArray(user.providerData) &&
// // //     user.providerData.some((p) => p.providerId === "password");
// // //   const hasGoogle =
// // //     Array.isArray(user.providerData) &&
// // //     user.providerData.some((p) => p.providerId === "google.com");

// // //   if (hasGoogle && !hasPassword) {
// // //     return (
// // //       <div className="container">
// // //         <div className="alert alert-warning d-flex justify-content-between align-items-center py-2 px-3 mb-3">
// // //           <span>
// // //             You signed in with Google. Add a password so email+password login also works.
// // //           </span>
// // //           <Link className="btn btn-sm btn-outline-dark" to="/add-password">
// // //             Add Password
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     );
// // //   }
// // //   return null;
// // // }

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       <BrowserRouter>
// // //         <Navbar />
// // //         <GoogleOnlyNudge />

// // //         <main className="container py-4">
// // //           <Routes>
// // //             {/* Public */}
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/contact" element={<Contact />} />

// // //             {/* Auth (public-only) */}
// // //             <Route
// // //               path="/login"
// // //               element={
// // //                 <PublicOnlyRoute>
// // //                   <Login />
// // //                 </PublicOnlyRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/signup"
// // //               element={
// // //                 <PublicOnlyRoute>
// // //                   <Signup />
// // //                 </PublicOnlyRoute>
// // //               }
// // //             />

// // //             {/* Add password */}
// // //             <Route
// // //               path="/add-password"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <AddPassword />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Protected pages */}
// // //             <Route
// // //               path="/applications"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Applications />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/saved"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <SavedJobs />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/settings"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Settings />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/support"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Support />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Placeholders */}
// // //             <Route
// // //               path="/profile"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Profile (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/student"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Student Dashboard (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/recruiter"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Recruiter Console (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/tpo"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="TPO / Admin Panel (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Catch-all */}
// // //             <Route path="*" element={<Navigate to="/" replace />} />
// // //           </Routes>
// // //         </main>

// // //         {/* Floating chatbot lives outside <main> so it overlays every page */}
// // //         <ChatWidget />
// // //       </BrowserRouter>
// // //     </AuthProvider>
// // //   );
// // // }








// // // import React from "react";
// // // import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./pages/Home";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Placeholder from "./pages/Placeholder";
// // // import Applications from "./pages/Applications";
// // // import SavedJobs from "./pages/SavedJobs";
// // // import Settings from "./pages/Settings";
// // // import Support from "./pages/Support";
// // // import AddPassword from "./pages/AddPassword";
// // // import { AuthProvider, useAuth } from "./auth/AuthContext";
// // // import ChatWidget from "./components/ChatWidget";
// // // import "./styles.css";

// // // /** Guard for protected routes */
// // // function ProtectedRoute({ children }) {
// // //   const { currentUser, loading } = useAuth();
// // //   if (loading) return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   if (!currentUser) return <Navigate to="/login" replace />;
// // //   return children;
// // // }

// // // /** Guard for pages hidden from signed-in users */
// // // function PublicOnlyRoute({ children }) {
// // //   const { currentUser, loading } = useAuth();
// // //   if (loading) return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   if (currentUser) return <Navigate to="/" replace />;
// // //   return children;
// // // }

// // // /** Banner for Google-only users to add a password */
// // // function GoogleOnlyNudge() {
// // //   const { currentUser } = useAuth();
// // //   if (!currentUser) return null;

// // //   const hasPassword = currentUser.providerData.some((p) => p.providerId === "password");
// // //   const hasGoogle = currentUser.providerData.some((p) => p.providerId === "google.com");

// // //   if (hasGoogle && !hasPassword) {
// // //     return (
// // //       <div className="container">
// // //         <div className="alert alert-warning d-flex justify-content-between align-items-center py-2 px-3 mb-3">
// // //           <span>
// // //             You signed in with Google. Add a password so email+password login also works.
// // //           </span>
// // //           <Link className="btn btn-sm btn-outline-dark" to="/add-password">
// // //             Add Password
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     );
// // //   }
// // //   return null;
// // // }

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       <BrowserRouter>
// // //         <Navbar />
// // //         <GoogleOnlyNudge />

// // //         <main className="container py-4">
// // //           <Routes>
// // //             {/* Public pages */}
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/contact" element={<Contact />} />

// // //             {/* Auth pages */}
// // //             <Route
// // //               path="/login"
// // //               element={
// // //                 <PublicOnlyRoute>
// // //                   <Login />
// // //                 </PublicOnlyRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/signup"
// // //               element={
// // //                 <PublicOnlyRoute>
// // //                   <Signup />
// // //                 </PublicOnlyRoute>
// // //               }
// // //             />

// // //             {/* Add password */}
// // //             <Route
// // //               path="/add-password"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <AddPassword />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Protected pages */}
// // //             <Route
// // //               path="/applications"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Applications />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/saved"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <SavedJobs />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/settings"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Settings />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/support"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Support />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Placeholder pages */}
// // //             <Route
// // //               path="/profile"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Profile (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/student"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Student Dashboard (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/recruiter"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Recruiter Console (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/tpo"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="TPO / Admin Panel (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Catch-all */}
// // //             <Route path="*" element={<Navigate to="/" replace />} />
// // //           </Routes>
// // //         </main>

// // //         {/* Floating Chat Widget */}
// // //         <ChatWidget />
// // //       </BrowserRouter>
// // //     </AuthProvider>
// // //   );
// // // }









// // // import React from "react";
// // // import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./pages/Home";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Placeholder from "./pages/Placeholder";
// // // import Applications from "./pages/Applications";
// // // import SavedJobs from "./pages/SavedJobs";
// // // import Settings from "./pages/Settings";
// // // import Support from "./pages/Support";
// // // import AddPassword from "./pages/AddPassword";
// // // import { AuthProvider, useAuth } from "./auth/AuthContext";
// // // import ChatWidget from "./components/ChatWidget";
// // // import "./styles.css";

// // // /** Guard for protected routes */
// // // function ProtectedRoute({ children }) {
// // //   const { currentUser, loading } = useAuth();
// // //   if (loading) return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   if (!currentUser) return <Navigate to="/login" replace />;
// // //   return children;
// // // }

// // // /** Guard for pages hidden from signed-in users */
// // // function PublicOnlyRoute({ children }) {
// // //   const { currentUser, loading } = useAuth();
// // //   if (loading) return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   if (currentUser) return <Navigate to="/" replace />;
// // //   return children;
// // // }

// // // /** Banner for Google-only users to add a password */
// // // function GoogleOnlyNudge() {
// // //   const { currentUser } = useAuth();
// // //   if (!currentUser) return null;

// // //   const hasPassword = currentUser.providerData?.some((p) => p.providerId === "password");
// // //   const hasGoogle = currentUser.providerData?.some((p) => p.providerId === "google.com");

// // //   if (hasGoogle && !hasPassword) {
// // //     return (
// // //       <div className="container">
// // //         <div className="alert alert-warning d-flex justify-content-between align-items-center py-2 px-3 mb-3">
// // //           <span>
// // //             You signed in with Google. Add a password so email+password login also works.
// // //           </span>
// // //           <Link className="btn btn-sm btn-outline-dark" to="/add-password">
// // //             Add Password
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     );
// // //   }
// // //   return null;
// // // }

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       <BrowserRouter>
// // //         <Navbar />
// // //         <GoogleOnlyNudge />

// // //         <main className="container py-4">
// // //           <Routes>
// // //             {/* Public pages */}
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/contact" element={<Contact />} />

// // //             {/* Auth pages */}
// // //             <Route
// // //               path="/login"
// // //               element={
// // //                 <PublicOnlyRoute>
// // //                   <Login />
// // //                 </PublicOnlyRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/signup"
// // //               element={
// // //                 <PublicOnlyRoute>
// // //                   <Signup />
// // //                 </PublicOnlyRoute>
// // //               }
// // //             />

// // //             {/* Add password */}
// // //             <Route
// // //               path="/add-password"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <AddPassword />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Protected pages */}
// // //             <Route
// // //               path="/applications"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Applications />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/saved"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <SavedJobs />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/settings"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Settings />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/support"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Support />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Placeholder pages */}
// // //             <Route
// // //               path="/profile"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Profile (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/student"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Student Dashboard (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/recruiter"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="Recruiter Console (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/tpo"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Placeholder title="TPO / Admin Panel (coming soon)" />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Catch-all */}
// // //             <Route path="*" element={<Navigate to="/" replace />} />
// // //           </Routes>
// // //         </main>

// // //         {/* Floating Chat Widget */}
// // //         <ChatWidget />
// // //       </BrowserRouter>
// // //     </AuthProvider>
// // //   );
// // // }







// // // import React from "react";
// // // import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./pages/Home";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Applications from "./pages/Applications";
// // // import SavedJobs from "./pages/SavedJobs";
// // // import Settings from "./pages/Settings";
// // // import Support from "./pages/Support";
// // // import AddPassword from "./pages/AddPassword";
// // // import StudentDashboard from "./pages/StudentDashboard";
// // // import RecruiterDashboard from "./pages/RecruiterDashboard";
// // // import TPODashboard from "./pages/TPODashboard";
// // // import { AuthProvider, useAuth } from "./auth/AuthContext";
// // // import ChatWidget from "./components/ChatWidget";
// // // import "./styles.css";

// // // /** Guard for protected routes */
// // // function ProtectedRoute({ children }) {
// // //   const { currentUser, loading } = useAuth();
// // //   if (loading) return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   if (!currentUser) return <Navigate to="/login" replace />;
// // //   return children;
// // // }

// // // /** Guard for pages hidden from signed-in users */
// // // function PublicOnlyRoute({ children }) {
// // //   const { currentUser, loading } = useAuth();
// // //   if (loading) return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   if (currentUser) return <Navigate to="/" replace />;
// // //   return children;
// // // }

// // // /** Banner for Google-only users to add a password */
// // // function GoogleOnlyNudge() {
// // //   const { currentUser } = useAuth();
// // //   if (!currentUser) return null;

// // //   const hasPassword = currentUser.providerData?.some((p) => p.providerId === "password");
// // //   const hasGoogle = currentUser.providerData?.some((p) => p.providerId === "google.com");

// // //   if (hasGoogle && !hasPassword) {
// // //     return (
// // //       <div className="container">
// // //         <div className="alert alert-warning d-flex justify-content-between align-items-center py-2 px-3 mb-3">
// // //           <span>
// // //             You signed in with Google. Add a password so email+password login also works.
// // //           </span>
// // //           <Link className="btn btn-sm btn-outline-dark" to="/add-password">
// // //             Add Password
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     );
// // //   }
// // //   return null;
// // // }

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       <BrowserRouter>
// // //         <Navbar />
// // //         <GoogleOnlyNudge />

// // //         <main className="container py-4">
// // //           <Routes>
// // //             {/* Public pages */}
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/contact" element={<Contact />} />

// // //             {/* Auth pages */}
// // //             <Route
// // //               path="/login"
// // //               element={
// // //                 <PublicOnlyRoute>
// // //                   <Login />
// // //                 </PublicOnlyRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/signup"
// // //               element={
// // //                 <PublicOnlyRoute>
// // //                   <Signup />
// // //                 </PublicOnlyRoute>
// // //               }
// // //             />

// // //             {/* Add password */}
// // //             <Route
// // //               path="/add-password"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <AddPassword />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Protected pages */}
// // //             <Route
// // //               path="/applications"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Applications />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/saved"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <SavedJobs />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/settings"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Settings />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/support"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Support />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Dashboards */}
// // //             <Route
// // //               path="/student"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <StudentDashboard />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/recruiter"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <RecruiterDashboard />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/tpo"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <TPODashboard />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Catch-all */}
// // //             <Route path="*" element={<Navigate to="/" replace />} />
// // //           </Routes>
// // //         </main>

// // //         {/* Floating Chat Widget */}
// // //         <ChatWidget />
// // //       </BrowserRouter>
// // //     </AuthProvider>
// // //   );
// // // }






// // // import React from "react";
// // // import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./pages/Home";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Applications from "./pages/Applications";
// // // import SavedJobs from "./pages/SavedJobs";
// // // import Settings from "./pages/Settings";
// // // import Support from "./pages/Support";
// // // import AddPassword from "./pages/AddPassword";
// // // import StudentDashboard from "./pages/StudentDashboard";
// // // import RecruiterDashboard from "./pages/RecruiterDashboard";
// // // import TPODashboard from "./pages/TPODashboard";
// // // import { AuthProvider, useAuth } from "./auth/AuthContext";
// // // import ChatWidget from "./components/ChatWidget";
// // // import "./styles.css";

// // // /** Protected route guard */
// // // function ProtectedRoute({ children }) {
// // //   const { currentUser, loading } = useAuth();
// // //   if (loading) return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   if (!currentUser) return <Navigate to="/login" replace />;
// // //   return children;
// // // }

// // // /** Public-only guard */
// // // function PublicOnlyRoute({ children }) {
// // //   const { currentUser, loading } = useAuth();
// // //   if (loading) return <div className="container py-5 text-center text-muted">Checking sign-in…</div>;
// // //   if (currentUser) return <Navigate to="/" replace />;
// // //   return children;
// // // }

// // // /** Banner for Google-only users to add a password */
// // // function GoogleOnlyNudge() {
// // //   const { currentUser } = useAuth();
// // //   if (!currentUser) return null;

// // //   const hasPassword = currentUser.providerData?.some((p) => p.providerId === "password");
// // //   const hasGoogle = currentUser.providerData?.some((p) => p.providerId === "google.com");

// // //   if (hasGoogle && !hasPassword) {
// // //     return (
// // //       <div className="container">
// // //         <div className="alert alert-warning d-flex justify-content-between align-items-center py-2 px-3 mb-3">
// // //           <span>
// // //             You signed in with Google. Add a password so email+password login also works.
// // //           </span>
// // //           <Link className="btn btn-sm btn-outline-dark" to="/add-password">
// // //             Add Password
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     );
// // //   }
// // //   return null;
// // // }

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       <BrowserRouter>
// // //         <Navbar />
// // //         <GoogleOnlyNudge />

// // //         <main className="container py-4">
// // //           <Routes>
// // //             {/* Public pages */}
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/contact" element={<Contact />} />

// // //             {/* Auth pages */}
// // //             <Route
// // //               path="/login"
// // //               element={
// // //                 <PublicOnlyRoute>
// // //                   <Login />
// // //                 </PublicOnlyRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/signup"
// // //               element={
// // //                 <PublicOnlyRoute>
// // //                   <Signup />
// // //                 </PublicOnlyRoute>
// // //               }
// // //             />

// // //             {/* Add password */}
// // //             <Route
// // //               path="/add-password"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <AddPassword />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Protected pages */}
// // //             <Route
// // //               path="/applications"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Applications />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/saved"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <SavedJobs />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/settings"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Settings />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/support"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Support />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Dashboards */}
// // //             <Route
// // //               path="/student"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <StudentDashboard />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/recruiter"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <RecruiterDashboard />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/tpo"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <TPODashboard />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Catch-all */}
// // //             <Route path="*" element={<Navigate to="/" replace />} />
// // //           </Routes>
// // //         </main>

// // //         {/* Floating Chat Widget */}
// // //         <ChatWidget />
// // //       </BrowserRouter>
// // //     </AuthProvider>
// // //   );
// // // }










// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import "./StudentDashboard.css"; // custom overrides
// // // import { User, Briefcase, Settings, MessageCircle } from "lucide-react";

// // // export default function StudentDashboard() {
// // //   return (
// // //     <div className="dashboard-container flex h-screen bg-gray-100">
// // //       {/* Sidebar */}
// // //       <aside className="sidebar w-64 bg-white shadow-md p-6 flex flex-col justify-between">
// // //         <div>
// // //           <h2 className="text-2xl font-bold text-indigo-600 mb-8">StudentHub</h2>
// // //           <nav className="space-y-4">
// // //             <Link to="/student" className="nav-link flex items-center gap-3">
// // //               <User className="w-5 h-5" /> Profile
// // //             </Link>
// // //             <Link to="/applications" className="nav-link flex items-center gap-3">
// // //               <Briefcase className="w-5 h-5" /> Applications
// // //             </Link>
// // //             <Link to="/settings" className="nav-link flex items-center gap-3">
// // //               <Settings className="w-5 h-5" /> Settings
// // //             </Link>
// // //             <Link to="/support" className="nav-link flex items-center gap-3">
// // //               <MessageCircle className="w-5 h-5" /> Support
// // //             </Link>
// // //           </nav>
// // //         </div>
// // //         <div className="text-sm text-gray-400">
// // //           © {new Date().getFullYear()} Placement Plaza
// // //         </div>
// // //       </aside>

// // //       {/* Main Content */}
// // //       <main className="flex-1 p-8 overflow-y-auto">
// // //         <h1 className="text-3xl font-semibold text-gray-800 mb-6">
// // //           Welcome Back, Student 👋
// // //         </h1>

// // //         {/* Cards Section */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           <div className="card">
// // //             <h2 className="card-title">AI Career Insights</h2>
// // //             <p className="text-gray-600 text-sm">
// // //               Based on your profile, Data Analyst and Cloud Engineer roles are
// // //               trending for you.
// // //             </p>
// // //             <button className="btn-primary mt-3">View Insights</button>
// // //           </div>

// // //           <div className="card">
// // //             <h2 className="card-title">Saved Jobs</h2>
// // //             <p className="text-gray-600 text-sm">
// // //               You have 5 saved opportunities. Don’t forget to apply soon!
// // //             </p>
// // //             <button className="btn-primary mt-3">View Saved Jobs</button>
// // //           </div>

// // //           <div className="card">
// // //             <h2 className="card-title">AI Resume Score</h2>
// // //             <p className="text-gray-600 text-sm">
// // //               Your current resume score is <span className="font-bold">78%</span>.
// // //               Improve it with AI suggestions.
// // //             </p>
// // //             <button className="btn-primary mt-3">Improve Resume</button>
// // //           </div>
// // //         </div>

// // //         {/* Job Tracker */}
// // //         <section className="mt-10">
// // //           <h2 className="text-xl font-semibold mb-4">Job Application Tracker</h2>
// // //           <div className="overflow-x-auto">
// // //             <table className="tracker-table w-full border-collapse">
// // //               <thead>
// // //                 <tr className="bg-indigo-100 text-left">
// // //                   <th className="p-3">Company</th>
// // //                   <th className="p-3">Role</th>
// // //                   <th className="p-3">Status</th>
// // //                   <th className="p-3">Date Applied</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 <tr>
// // //                   <td className="p-3">Google</td>
// // //                   <td className="p-3">Software Engineer</td>
// // //                   <td className="p-3 text-green-600 font-medium">Interview</td>
// // //                   <td className="p-3">Aug 14, 2025</td>
// // //                 </tr>
// // //                 <tr className="bg-gray-50">
// // //                   <td className="p-3">Amazon</td>
// // //                   <td className="p-3">Data Analyst</td>
// // //                   <td className="p-3 text-yellow-600 font-medium">Pending</td>
// // //                   <td className="p-3">Aug 10, 2025</td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td className="p-3">Microsoft</td>
// // //                   <td className="p-3">Cloud Engineer</td>
// // //                   <td className="p-3 text-red-600 font-medium">Rejected</td>
// // //                   <td className="p-3">Aug 01, 2025</td>
// // //                 </tr>
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         </section>
// // //       </main>
// // //     </div>
// // //   );
// // // }






// // // import React from "react";
// // // import "../styles/studentdashboard.css";

// // // export default function StudentDashboard() {
// // //   return (
// // //     <div className="student-dashboard min-h-screen bg-gray-50">
// // //       {/* Header */}
// // //       <header className="dashboard-header">
// // //         <h1 className="text-3xl font-bold text-indigo-600">
// // //           🎓 Student Dashboard
// // //         </h1>
// // //         <p className="text-gray-600">Welcome back! Track your career journey 🚀</p>
// // //       </header>

// // //       {/* Grid Layout */}
// // //       <div className="dashboard-grid">
// // //         {/* Profile Card */}
// // //         <div className="dashboard-card">
// // //           <h2 className="card-title">👤 Profile Overview</h2>
// // //           <p className="card-text">
// // //             View and edit your personal details, update resume, and manage your
// // //             applications.
// // //           </p>
// // //           <button className="btn-primary">Edit Profile</button>
// // //         </div>

// // //         {/* AI Career Insights */}
// // //         <div className="dashboard-card">
// // //           <h2 className="card-title">🤖 AI Career Insights</h2>
// // //           <p className="card-text">
// // //             Get personalized job recommendations and insights powered by AI.
// // //           </p>
// // //           <button className="btn-primary">View Insights</button>
// // //         </div>

// // //         {/* Applications */}
// // //         <div className="dashboard-card">
// // //           <h2 className="card-title">📄 Applications</h2>
// // //           <p className="card-text">
// // //             Track your applied jobs, interview status, and recruiter feedback.
// // //           </p>
// // //           <button className="btn-primary">View Applications</button>
// // //         </div>

// // //         {/* Saved Jobs */}
// // //         <div className="dashboard-card">
// // //           <h2 className="card-title">💾 Saved Jobs</h2>
// // //           <p className="card-text">
// // //             Keep track of interesting opportunities and apply later.
// // //           </p>
// // //           <button className="btn-primary">View Saved Jobs</button>
// // //         </div>

// // //         {/* AI Resume Scanner */}
// // //         <div className="dashboard-card">
// // //           <h2 className="card-title">📊 Resume Scanner (AI)</h2>
// // //           <p className="card-text">
// // //             Upload your resume and get instant feedback on ATS score,
// // //             improvements & keywords.
// // //           </p>
// // //           <button className="btn-primary">Scan Resume</button>
// // //         </div>

// // //         {/* Support */}
// // //         <div className="dashboard-card">
// // //           <h2 className="card-title">🛠 Support & Help</h2>
// // //           <p className="card-text">
// // //             Facing issues? Connect with TPOs, mentors, or raise a support ticket.
// // //           </p>
// // //           <button className="btn-primary">Get Support</button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }








// // // // src/App.js
// // // import React from "react";
// // // import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./pages/Home";
// // // import About from "./pages/About";
// // // import Contact from "./pages/Contact";
// // // import Login from "./pages/Login";
// // // import Signup from "./pages/Signup";
// // // import Applications from "./pages/Applications";
// // // import SavedJobs from "./pages/SavedJobs";
// // // import Settings from "./pages/Settings";
// // // import Support from "./pages/Support";
// // // import AddPassword from "./pages/AddPassword";
// // // import StudentDashboard from "./pages/StudentDashboard";
// // // import RecruiterDashboard from "./pages/RecruiterDashboard";
// // // import TPODashboard from "./pages/TPODashboard";
// // // import { AuthProvider, useAuth } from "./auth/AuthContext";
// // // import ChatWidget from "./components/ChatWidget";

// // // // ✅ import global + student dashboard styles
// // // import "./styles.css";
// // // import "./styles/studentdashboard.css";

// // // /** Protected route guard */
// // // function ProtectedRoute({ children }) {
// // //   const { currentUser, loading } = useAuth();
// // //   if (loading)
// // //     return (
// // //       <div className="container py-5 text-center text-muted">
// // //         Checking sign-in…
// // //       </div>
// // //     );
// // //   if (!currentUser) return <Navigate to="/login" replace />;
// // //   return children;
// // // }

// // // /** Public-only guard */
// // // function PublicOnlyRoute({ children }) {
// // //   const { currentUser, loading } = useAuth();
// // //   if (loading)
// // //     return (
// // //       <div className="container py-5 text-center text-muted">
// // //         Checking sign-in…
// // //       </div>
// // //     );
// // //   if (currentUser) return <Navigate to="/" replace />;
// // //   return children;
// // // }

// // // /** Banner for Google-only users to add a password */
// // // function GoogleOnlyNudge() {
// // //   const { currentUser } = useAuth();
// // //   if (!currentUser) return null;

// // //   const hasPassword = currentUser.providerData?.some(
// // //     (p) => p.providerId === "password"
// // //   );
// // //   const hasGoogle = currentUser.providerData?.some(
// // //     (p) => p.providerId === "google.com"
// // //   );

// // //   if (hasGoogle && !hasPassword) {
// // //     return (
// // //       <div className="container">
// // //         <div className="alert alert-warning d-flex justify-content-between align-items-center py-2 px-3 mb-3">
// // //           <span>
// // //             You signed in with Google. Add a password so email+password login
// // //             also works.
// // //           </span>
// // //           <Link className="btn btn-sm btn-outline-dark" to="/add-password">
// // //             Add Password
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     );
// // //   }
// // //   return null;
// // // }

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       <BrowserRouter>
// // //         <Navbar />
// // //         <GoogleOnlyNudge />

// // //         <main className="container py-4">
// // //           <Routes>
// // //             {/* Public pages */}
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/contact" element={<Contact />} />

// // //             {/* Auth pages */}
// // //             <Route
// // //               path="/login"
// // //               element={
// // //                 <PublicOnlyRoute>
// // //                   <Login />
// // //                 </PublicOnlyRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/signup"
// // //               element={
// // //                 <PublicOnlyRoute>
// // //                   <Signup />
// // //                 </PublicOnlyRoute>
// // //               }
// // //             />

// // //             {/* Add password */}
// // //             <Route
// // //               path="/add-password"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <AddPassword />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Protected pages */}
// // //             <Route
// // //               path="/applications"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Applications />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/saved"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <SavedJobs />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/settings"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Settings />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/support"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <Support />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Dashboards */}
// // //             <Route
// // //               path="/student"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <StudentDashboard />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/recruiter"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <RecruiterDashboard />
// // //                 </ProtectedRoute>
// // //               }
// // //             />
// // //             <Route
// // //               path="/tpo"
// // //               element={
// // //                 <ProtectedRoute>
// // //                   <TPODashboard />
// // //                 </ProtectedRoute>
// // //               }
// // //             />

// // //             {/* Catch-all */}
// // //             <Route path="*" element={<Navigate to="/" replace />} />
// // //           </Routes>
// // //         </main>

// // //         {/* Floating Chat Widget */}
// // //         <ChatWidget />
// // //       </BrowserRouter>
// // //     </AuthProvider>
// // //   );
// // // }







// // src/App.js
// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Applications from "./pages/Applications";
// import SavedJobs from "./pages/SavedJobs";
// import Settings from "./pages/Settings";
// import Support from "./pages/Support";
// import AddPassword from "./pages/AddPassword";
// import StudentDashboard from "./pages/StudentDashboard";
// import RecruiterDashboard from "./pages/RecruiterDashboard";
// import TPODashboard from "./pages/TPODashboard";
// import { AuthProvider, useAuth } from "./auth/AuthContext";
// import ChatWidget from "./components/ChatWidget";
// import "./styles.css";

// /** Protected route guard */
// function ProtectedRoute({ children }) {
//   const { currentUser, loading } = useAuth();
//   if (loading) {
//     return (
//       <div className="container py-5 text-center text-muted">
//         Checking sign-in…
//       </div>
//     );
//   }
//   if (!currentUser) return <Navigate to="/login" replace />;
//   return children;
// }

// /** Public-only guard */
// function PublicOnlyRoute({ children }) {
//   const { currentUser, loading } = useAuth();
//   if (loading) {
//     return (
//       <div className="container py-5 text-center text-muted">
//         Checking sign-in…
//       </div>
//     );
//   }
//   if (currentUser) return <Navigate to="/" replace />;
//   return children;
// }

// /** Banner for Google-only users to add a password */
// function GoogleOnlyNudge() {
//   const { currentUser } = useAuth();
//   if (!currentUser) return null;

//   const hasPassword = currentUser.providerData?.some(
//     (p) => p.providerId === "password"
//   );
//   const hasGoogle = currentUser.providerData?.some(
//     (p) => p.providerId === "google.com"
//   );

//   if (hasGoogle && !hasPassword) {
//     return (
//       <div className="container">
//         <div className="alert alert-warning d-flex justify-content-between align-items-center py-2 px-3 mb-3">
//           <span>
//             You signed in with Google. Add a password so email+password login
//             also works.
//           </span>
//           <Link className="btn btn-sm btn-outline-dark" to="/add-password">
//             Add Password
//           </Link>
//         </div>
//       </div>
//     );
//   }
//   return null;
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Navbar />
//         <GoogleOnlyNudge />

//         <main className="container py-4">
//           <Routes>
//             {/* Public pages */}
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />

//             {/* Auth pages */}
//             <Route
//               path="/login"
//               element={
//                 <PublicOnlyRoute>
//                   <Login />
//                 </PublicOnlyRoute>
//               }
//             />
//             <Route
//               path="/signup"
//               element={
//                 <PublicOnlyRoute>
//                   <Signup />
//                 </PublicOnlyRoute>
//               }
//             />

//             {/* Add password */}
//             <Route
//               path="/add-password"
//               element={
//                 <ProtectedRoute>
//                   <AddPassword />
//                 </ProtectedRoute>
//               }
//             />

//             {/* Protected pages */}
//             <Route
//               path="/applications"
//               element={
//                 <ProtectedRoute>
//                   <Applications />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/saved"
//               element={
//                 <ProtectedRoute>
//                   <SavedJobs />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/settings"
//               element={
//                 <ProtectedRoute>
//                   <Settings />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/support"
//               element={
//                 <ProtectedRoute>
//                   <Support />
//                 </ProtectedRoute>
//               }
//             />

//             {/* Dashboards */}
//             <Route
//               path="/student"
//               element={
//                 <ProtectedRoute>
//                   <StudentDashboard />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/recruiter"
//               element={
//                 <ProtectedRoute>
//                   <RecruiterDashboard />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/tpo"
//               element={
//                 <ProtectedRoute>
//                   <TPODashboard />
//                 </ProtectedRoute>
//               }
//             />

//             {/* Catch-all */}
//             <Route path="*" element={<Navigate to="/" replace />} />
//           </Routes>
//         </main>

//         {/* Floating Chat Widget */}
//         <ChatWidget />
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }



// // src/App.jsx
// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Applications from "./pages/Applications";
// import SavedJobs from "./pages/SavedJobs";
// import Settings from "./pages/Settings";
// import Support from "./pages/Support";
// import AddPassword from "./pages/AddPassword";
// import StudentDashboard from "./pages/StudentDashboard";
// import RecruiterDashboard from "./pages/RecruiterDashboard";
// import TPODashboard from "./pages/TPODashboard";
// import ResumeUploader from "./pages/ResumeUploader";
// import Recommendations from "./pages/Recommendations";
// import Roadmap from "./pages/Roadmap";
// import MockInterviews from "./pages/MockInterviews";
// import JobStatus from "./pages/JobStatus";
// import Events from "./pages/Events";
// import ResumeScore from "./pages/ResumeScore";
// import Achievements from "./pages/Achievements";
// import CompanyInsights from "./pages/CompanyInsights";
// import Quizzes from "./pages/Quizzes";

// import { AuthProvider, useAuth } from "./auth/AuthContext";
// import ChatWidget from "./components/ChatWidget";
// import "./styles.css";

// /** Protected route guard */
// function ProtectedRoute({ children }) {
//   const { currentUser, loading } = useAuth();
//   if (loading) {
//     return (
//       <div className="container py-5 text-center text-muted">
//         Checking sign-in…
//       </div>
//     );
//   }
//   if (!currentUser) return <Navigate to="/login" replace />;
//   return children;
// }

// /** Public-only guard */
// function PublicOnlyRoute({ children }) {
//   const { currentUser, loading } = useAuth();
//   if (loading) {
//     return (
//       <div className="container py-5 text-center text-muted">
//         Checking sign-in…
//       </div>
//     );
//   }
//   if (currentUser) return <Navigate to="/" replace />;
//   return children;
// }

// /** Banner for Google-only users to add a password */
// function GoogleOnlyNudge() {
//   const { currentUser } = useAuth();
//   if (!currentUser) return null;

//   const hasPassword = currentUser.providerData?.some(
//     (p) => p.providerId === "password"
//   );
//   const hasGoogle = currentUser.providerData?.some(
//     (p) => p.providerId === "google.com"
//   );

//   if (hasGoogle && !hasPassword) {
//     return (
//       <div className="container">
//         <div className="alert alert-warning d-flex justify-content-between align-items-center py-2 px-3 mb-3">
//           <span>
//             You signed in with Google. Add a password so email+password login
//             also works.
//           </span>
//           <Link className="btn btn-sm btn-outline-dark" to="/add-password">
//             Add Password
//           </Link>
//         </div>
//       </div>
//     );
//   }
//   return null;
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Navbar />
//         <GoogleOnlyNudge />

//         <main className="container py-4">
//           <Routes>
//             {/* Public pages */}
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />

//             {/* Auth pages */}
//             <Route
//               path="/login"
//               element={
//                 <PublicOnlyRoute>
//                   <Login />
//                 </PublicOnlyRoute>
//               }
//             />
//             <Route
//               path="/signup"
//               element={
//                 <PublicOnlyRoute>
//                   <Signup />
//                 </PublicOnlyRoute>
//               }
//             />

//             {/* Add password */}
//             <Route
//               path="/add-password"
//               element={
//                 <ProtectedRoute>
//                   <AddPassword />
//                 </ProtectedRoute>
//               }
//             />

//             {/* Protected pages */}
//             <Route
//               path="/applications"
//               element={
//                 <ProtectedRoute>
//                   <Applications />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/saved"
//               element={
//                 <ProtectedRoute>
//                   <SavedJobs />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/settings"
//               element={
//                 <ProtectedRoute>
//                   <Settings />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/support"
//               element={
//                 <ProtectedRoute>
//                   <Support />
//                 </ProtectedRoute>
//               }
//             />

//             {/* Dashboards */}
//             <Route
//               path="/student"
//               element={
//                 <ProtectedRoute>
//                   <StudentDashboard />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/recruiter"
//               element={
//                 <ProtectedRoute>
//                   <RecruiterDashboard />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/tpo"
//               element={
//                 <ProtectedRoute>
//                   <TPODashboard />
//                 </ProtectedRoute>
//               }
//             />

//             {/* New Feature Pages */}
//             <Route
//               path="/resume-uploader"
//               element={
//                 <ProtectedRoute>
//                   <ResumeUploader />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/recommendations"
//               element={
//                 <ProtectedRoute>
//                   <Recommendations />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/roadmap"
//               element={
//                 <ProtectedRoute>
//                   <Roadmap />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/mock-interviews"
//               element={
//                 <ProtectedRoute>
//                   <MockInterviews />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/job-status"
//               element={
//                 <ProtectedRoute>
//                   <JobStatus />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/events"
//               element={
//                 <ProtectedRoute>
//                   <Events />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/resume-score"
//               element={
//                 <ProtectedRoute>
//                   <ResumeScore />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/achievements"
//               element={
//                 <ProtectedRoute>
//                   <Achievements />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/company-insights"
//               element={
//                 <ProtectedRoute>
//                   <CompanyInsights />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/quizzes"
//               element={
//                 <ProtectedRoute>
//                   <Quizzes />
//                 </ProtectedRoute>
//               }
//             />

//             {/* Catch-all */}
//             <Route path="*" element={<Navigate to="/" replace />} />
//           </Routes>
//         </main>

//         {/* Floating Chat Widget */}
//         <ChatWidget />
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }








// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Applications from "./pages/Applications";
import SavedJobs from "./pages/SavedJobs";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import AddPassword from "./pages/AddPassword";
import StudentDashboard from "./pages/StudentDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import TPODashboard from "./pages/TPODashboard";

// ✅ Dashboard feature pages moved here
import ResumeUploader from "./components/dashboard/ResumeUploader";
import Recommendations from "./components/dashboard/Recommendations";
import Roadmap from "./components/dashboard/Roadmap";
import MockInterviews from "./components/dashboard/MockInterviews";
import JobStatus from "./components/dashboard/JobStatus";
import Events from "./components/dashboard/Events";
import ResumeScore from "./components/dashboard/ResumeScore";
import Achievements from "./components/dashboard/Achievements";
import CompanyInsights from "./components/dashboard/CompanyInsights";
import Quizzes from "./components/dashboard/Quizzes";

import { AuthProvider, useAuth } from "./auth/AuthContext";
import ChatWidget from "./components/ChatWidget";
import "./styles.css";

/** Protected route guard */
function ProtectedRoute({ children }) {
  const { currentUser, loading } = useAuth();
  if (loading) {
    return (
      <div className="container py-5 text-center text-muted">
        Checking sign-in…
      </div>
    );
  }
  if (!currentUser) return <Navigate to="/login" replace />;
  return children;
}

/** Public-only guard */
function PublicOnlyRoute({ children }) {
  const { currentUser, loading } = useAuth();
  if (loading) {
    return (
      <div className="container py-5 text-center text-muted">
        Checking sign-in…
      </div>
    );
  }
  if (currentUser) return <Navigate to="/" replace />;
  return children;
}

/** Banner for Google-only users to add a password */
function GoogleOnlyNudge() {
  const { currentUser } = useAuth();
  if (!currentUser) return null;

  const hasPassword = currentUser.providerData?.some(
    (p) => p.providerId === "password"
  );
  const hasGoogle = currentUser.providerData?.some(
    (p) => p.providerId === "google.com"
  );

  if (hasGoogle && !hasPassword) {
    return (
      <div className="container">
        <div className="alert alert-warning d-flex justify-content-between align-items-center py-2 px-3 mb-3">
          <span>
            You signed in with Google. Add a password so email+password login
            also works.
          </span>
          <Link className="btn btn-sm btn-outline-dark" to="/add-password">
            Add Password
          </Link>
        </div>
      </div>
    );
  }
  return null;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <GoogleOnlyNudge />

        <main className="container py-4">
          <Routes>
            {/* Public pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Auth pages */}
            <Route
              path="/login"
              element={
                <PublicOnlyRoute>
                  <Login />
                </PublicOnlyRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicOnlyRoute>
                  <Signup />
                </PublicOnlyRoute>
              }
            />

            {/* Add password */}
            <Route
              path="/add-password"
              element={
                <ProtectedRoute>
                  <AddPassword />
                </ProtectedRoute>
              }
            />

            {/* Protected pages */}
            <Route
              path="/applications"
              element={
                <ProtectedRoute>
                  <Applications />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved"
              element={
                <ProtectedRoute>
                  <SavedJobs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/support"
              element={
                <ProtectedRoute>
                  <Support />
                </ProtectedRoute>
              }
            />

            {/* Dashboards */}
            <Route
              path="/student"
              element={
                <ProtectedRoute>
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/recruiter"
              element={
                <ProtectedRoute>
                  <RecruiterDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tpo"
              element={
                <ProtectedRoute>
                  <TPODashboard />
                </ProtectedRoute>
              }
            />

            {/* New Feature Pages */}
            <Route
              path="/resume-uploader"
              element={
                <ProtectedRoute>
                  <ResumeUploader />
                </ProtectedRoute>
              }
            />
            <Route
              path="/recommendations"
              element={
                <ProtectedRoute>
                  <Recommendations />
                </ProtectedRoute>
              }
            />
            <Route
              path="/roadmap"
              element={
                <ProtectedRoute>
                  <Roadmap />
                </ProtectedRoute>
              }
            />
            <Route
              path="/mock-interviews"
              element={
                <ProtectedRoute>
                  <MockInterviews />
                </ProtectedRoute>
              }
            />
            <Route
              path="/job-status"
              element={
                <ProtectedRoute>
                  <JobStatus />
                </ProtectedRoute>
              }
            />
            <Route
              path="/events"
              element={
                <ProtectedRoute>
                  <Events />
                </ProtectedRoute>
              }
            />
            <Route
              path="/resume-score"
              element={
                <ProtectedRoute>
                  <ResumeScore />
                </ProtectedRoute>
              }
            />
            <Route
              path="/achievements"
              element={
                <ProtectedRoute>
                  <Achievements />
                </ProtectedRoute>
              }
            />
            <Route
              path="/company-insights"
              element={
                <ProtectedRoute>
                  <CompanyInsights />
                </ProtectedRoute>
              }
            />
            <Route
              path="/quizzes"
              element={
                <ProtectedRoute>
                  <Quizzes />
                </ProtectedRoute>
              }
            />

            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Floating Chat Widget */}
        <ChatWidget />
      </BrowserRouter>
    </AuthProvider>
  );
}
