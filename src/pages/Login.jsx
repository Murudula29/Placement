// // // // // // // // // src/pages/Login.jsx
// // // // // // // // import React, { useState } from "react";
// // // // // // // // import { Link, useNavigate } from "react-router-dom";
// // // // // // // // import { useAuth } from "../auth/AuthContext";
// // // // // // // // import { auth } from "../firebase"; // debug only

// // // // // // // // // Debug: confirm this page is using your new project
// // // // // // // // if (process.env.NODE_ENV !== "production") {
// // // // // // // //   console.log("[Auth used by THIS page]", auth.app.options.projectId);
// // // // // // // // }

// // // // // // // // export default function Login() {
// // // // // // // //   const { loginEmail, loginWithGoogle, resetPassword } = useAuth();
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // //   const [password, setPassword] = useState("");

// // // // // // // //   const [err, setErr] = useState("");
// // // // // // // //   const [info, setInfo] = useState("");
// // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // //   const onSubmit = async (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     setErr(""); setInfo(""); setLoading(true);
// // // // // // // //     try {
// // // // // // // //       await loginEmail(email, password);
// // // // // // // //       navigate("/");
// // // // // // // //     } catch (error) {
// // // // // // // //       setErr(error.message || "Login failed");
// // // // // // // //     } finally {
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleGoogle = async () => {
// // // // // // // //     setErr(""); setInfo(""); setLoading(true);
// // // // // // // //     try {
// // // // // // // //       const u = await loginWithGoogle();
// // // // // // // //       if (!u) return;
// // // // // // // //       const hasPassword =
// // // // // // // //         Array.isArray(u.providerData) &&
// // // // // // // //         u.providerData.some((p) => p.providerId === "password");
// // // // // // // //       navigate(hasPassword ? "/" : "/add-password"); // nudge Google-only users to add a password
// // // // // // // //     } catch (error) {
// // // // // // // //       setErr(error.message || "Google sign-in failed");
// // // // // // // //     } finally {
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleReset = async () => {
// // // // // // // //     try {
// // // // // // // //       await resetPassword(email);
// // // // // // // //       setInfo("Password reset email sent.");
// // // // // // // //     } catch (e) {
// // // // // // // //       setErr(e.message || "Could not send reset email.");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="container" style={{ maxWidth: 520 }}>
// // // // // // // //       <h2 className="my-4 text-center">Login</h2>
// // // // // // // //       {err && <div className="alert alert-danger">{err}</div>}
// // // // // // // //       {info && <div className="alert alert-info">{info}</div>}

// // // // // // // //       <form className="row g-3" onSubmit={onSubmit}>
// // // // // // // //         <div className="col-12">
// // // // // // // //           <label className="form-label">Email</label>
// // // // // // // //           <input
// // // // // // // //             type="email"
// // // // // // // //             className="form-control"
// // // // // // // //             value={email}
// // // // // // // //             onChange={(e)=>setEmail(e.target.value)}
// // // // // // // //             required
// // // // // // // //             disabled={loading}
// // // // // // // //           />
// // // // // // // //         </div>
// // // // // // // //         <div className="col-12">
// // // // // // // //           <label className="form-label">Password</label>
// // // // // // // //           <input
// // // // // // // //             type="password"
// // // // // // // //             className="form-control"
// // // // // // // //             value={password}
// // // // // // // //             onChange={(e)=>setPassword(e.target.value)}
// // // // // // // //             required
// // // // // // // //             disabled={loading}
// // // // // // // //           />
// // // // // // // //           <div className="form-text mt-1">
// // // // // // // //             <button
// // // // // // // //               type="button"
// // // // // // // //               className="btn btn-link p-0"
// // // // // // // //               onClick={handleReset}
// // // // // // // //               disabled={!email || loading}
// // // // // // // //             >
// // // // // // // //               Forgot password?
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //         <div className="col-12 d-grid gap-2">
// // // // // // // //           <button className="btn btn-primary" disabled={loading}>
// // // // // // // //             {loading ? "Signing in..." : "Login"}
// // // // // // // //           </button>
// // // // // // // //           <button
// // // // // // // //             type="button"
// // // // // // // //             className="btn btn-outline-primary"
// // // // // // // //             onClick={handleGoogle}
// // // // // // // //             disabled={loading}
// // // // // // // //           >
// // // // // // // //             Continue with Google
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       </form>

// // // // // // // //       <p className="mt-3 text-center">
// // // // // // // //         No account? <Link to="/signup">Sign up</Link>
// // // // // // // //       </p>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }










// // // // // // // src/pages/Login.jsx
// // // // // // import React, { useState } from "react";
// // // // // // import { Link, useNavigate } from "react-router-dom";
// // // // // // import { useAuth } from "../auth/AuthContext";

// // // // // // export default function Login() {
// // // // // //   const { loginEmail, loginWithGoogle, resetPassword } = useAuth();
// // // // // //   const navigate = useNavigate();

// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [err, setErr] = useState("");
// // // // // //   const [info, setInfo] = useState("");
// // // // // //   const [loading, setLoading] = useState(false);

// // // // // //   const onSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setErr("");
// // // // // //     setInfo("");
// // // // // //     setLoading(true);
// // // // // //     try {
// // // // // //       await loginEmail(email, password);
// // // // // //       navigate("/");
// // // // // //     } catch (error) {
// // // // // //       setErr(error.message || "Login failed");
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleGoogle = async () => {
// // // // // //     setErr("");
// // // // // //     setInfo("");
// // // // // //     setLoading(true);
// // // // // //     try {
// // // // // //       const u = await loginWithGoogle();
// // // // // //       if (!u) return;
// // // // // //       const hasPassword =
// // // // // //         Array.isArray(u.providerData) &&
// // // // // //         u.providerData.some((p) => p.providerId === "password");
// // // // // //       navigate(hasPassword ? "/" : "/add-password");
// // // // // //     } catch (error) {
// // // // // //       setErr(error.message || "Google sign-in failed");
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleReset = async () => {
// // // // // //     try {
// // // // // //       await resetPassword(email);
// // // // // //       setInfo("Password reset email sent.");
// // // // // //     } catch (e) {
// // // // // //       setErr(e.message || "Could not send reset email.");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="container" style={{ maxWidth: 520 }}>
// // // // // //       <h2 className="my-4 text-center">Login</h2>
// // // // // //       {err && <div className="alert alert-danger">{err}</div>}
// // // // // //       {info && <div className="alert alert-info">{info}</div>}

// // // // // //       <form className="row g-3" onSubmit={onSubmit}>
// // // // // //         <div className="col-12">
// // // // // //           <label className="form-label">Email</label>
// // // // // //           <input
// // // // // //             type="email"
// // // // // //             className="form-control"
// // // // // //             value={email}
// // // // // //             onChange={(e) => setEmail(e.target.value)}
// // // // // //             required
// // // // // //             disabled={loading}
// // // // // //           />
// // // // // //         </div>
// // // // // //         <div className="col-12">
// // // // // //           <label className="form-label">Password</label>
// // // // // //           <input
// // // // // //             type="password"
// // // // // //             className="form-control"
// // // // // //             value={password}
// // // // // //             onChange={(e) => setPassword(e.target.value)}
// // // // // //             required
// // // // // //             disabled={loading}
// // // // // //           />
// // // // // //           <div className="form-text mt-1">
// // // // // //             <button
// // // // // //               type="button"
// // // // // //               className="btn btn-link p-0"
// // // // // //               onClick={handleReset}
// // // // // //               disabled={!email || loading}
// // // // // //             >
// // // // // //               Forgot password?
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="col-12 d-grid gap-2">
// // // // // //           <button className="btn btn-primary" disabled={loading}>
// // // // // //             {loading ? "Signing in..." : "Login"}
// // // // // //           </button>
// // // // // //           <button
// // // // // //             type="button"
// // // // // //             className="btn btn-outline-primary"
// // // // // //             onClick={handleGoogle}
// // // // // //             disabled={loading}
// // // // // //           >
// // // // // //             Continue with Google
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </form>

// // // // // //       <p className="mt-3 text-center">
// // // // // //         No account? <Link to="/signup">Sign up</Link>
// // // // // //       </p>
// // // // // //     </div>
// // // // // //   );
// // // // // // }









// // // // // // // src/pages/Login.jsx
// // // // // // import React, { useState } from "react";
// // // // // // import { useAuth } from "../auth/AuthContext";
// // // // // // import { useNavigate } from "react-router-dom";

// // // // // // export default function Login() {
// // // // // //   const { loginEmail, loginWithGoogle } = useAuth();
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [error, setError] = useState("");
// // // // // //   const navigate = useNavigate();

// // // // // //   const handleLogin = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setError("");

// // // // // //     try {
// // // // // //       await loginEmail(email, password);
// // // // // //       navigate("/"); // ✅ Redirect to Home
// // // // // //     } catch (err) {
// // // // // //       if (err.code === "auth/invalid-email") {
// // // // // //         setError("Please enter a valid email address.");
// // // // // //       } else if (err.code === "auth/user-not-found") {
// // // // // //         setError("No account found. Please sign up.");
// // // // // //       } else if (err.code === "auth/wrong-password") {
// // // // // //         setError("Incorrect password.");
// // // // // //       } else if (err.code === "auth/provider-mismatch-google") {
// // // // // //         setError("Please sign in with Google for this email.");
// // // // // //       } else {
// // // // // //         setError(err.message);
// // // // // //       }
// // // // // //     }
// // // // // //   };

// // // // // //   const handleGoogleLogin = async () => {
// // // // // //     try {
// // // // // //       await loginWithGoogle();
// // // // // //       navigate("/"); // ✅ Redirect after Google login
// // // // // //     } catch (err) {
// // // // // //       setError(err.message);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <form onSubmit={handleLogin}>
// // // // // //       {error && <p style={{ color: "red" }}>{error}</p>}
// // // // // //       <input
// // // // // //         type="email"
// // // // // //         placeholder="Enter email"
// // // // // //         value={email}
// // // // // //         onChange={(e) => setEmail(e.target.value)}
// // // // // //         required
// // // // // //       />
// // // // // //       <input
// // // // // //         type="password"
// // // // // //         placeholder="Enter password"
// // // // // //         value={password}
// // // // // //         onChange={(e) => setPassword(e.target.value)}
// // // // // //         required
// // // // // //       />
// // // // // //       <button type="submit">Log In</button>
// // // // // //       <button type="button" onClick={handleGoogleLogin}>
// // // // // //         Sign in with Google
// // // // // //       </button>
// // // // // //     </form>
// // // // // //   );
// // // // // // }






// // // // // // src/pages/Login.jsx
// // // // // import React, { useState, useEffect } from "react";
// // // // // import { useAuth } from "../auth/AuthContext";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // export default function Login() {
// // // // //   const { loginEmail, loginWithGoogle, currentUser, loading } = useAuth();
// // // // //   const [email, setEmail] = useState("");
// // // // //   const [password, setPassword] = useState("");
// // // // //   const [error, setError] = useState("");
// // // // //   const navigate = useNavigate();

// // // // //   // ✅ Redirect only when loading is done and user is logged in
// // // // //   useEffect(() => {
// // // // //     if (!loading && currentUser) {
// // // // //       navigate("/");
// // // // //     }
// // // // //   }, [loading, currentUser, navigate]);

// // // // //   const handleLogin = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setError("");

// // // // //     try {
// // // // //       await loginEmail(email, password);
// // // // //       navigate("/"); // Direct redirect after login
// // // // //     } catch (err) {
// // // // //       if (err.code === "auth/invalid-email") {
// // // // //         setError("Please enter a valid email address.");
// // // // //       } else if (err.code === "auth/user-not-found") {
// // // // //         setError("No account found. Please sign up.");
// // // // //       } else if (err.code === "auth/wrong-password") {
// // // // //         setError("Incorrect password.");
// // // // //       } else if (err.code === "auth/provider-mismatch-google") {
// // // // //         setError("Please sign in with Google for this email.");
// // // // //       } else {
// // // // //         setError(err.message);
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   const handleGoogleLogin = async () => {
// // // // //     try {
// // // // //       await loginWithGoogle();
// // // // //       navigate("/"); // Direct redirect after Google login
// // // // //     } catch (err) {
// // // // //       setError(err.message);
// // // // //     }
// // // // //   };

// // // // //   if (loading) {
// // // // //     return <p>Loading...</p>; // Loader while checking auth state
// // // // //   }

// // // // //   return (
// // // // //     <form onSubmit={handleLogin}>
// // // // //       {error && <p style={{ color: "red" }}>{error}</p>}
// // // // //       <input
// // // // //         type="email"
// // // // //         placeholder="Enter email"
// // // // //         value={email}
// // // // //         onChange={(e) => setEmail(e.target.value)}
// // // // //         required
// // // // //       />
// // // // //       <input
// // // // //         type="password"
// // // // //         placeholder="Enter password"
// // // // //         value={password}
// // // // //         onChange={(e) => setPassword(e.target.value)}
// // // // //         required
// // // // //       />
// // // // //       <button type="submit">Log In</button>
// // // // //       <button type="button" onClick={handleGoogleLogin}>
// // // // //         Sign in with Google
// // // // //       </button>
// // // // //     </form>
// // // // //   );
// // // // // }



// // // // import React, { useState } from "react";
// // // // import { useAuth } from "../auth/AuthContext";
// // // // import { useNavigate } from "react-router-dom";

// // // // export default function Login() {
// // // //   const { loginEmail, loginWithGoogle } = useAuth();
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [error, setError] = useState("");
// // // //   const navigate = useNavigate();

// // // //   const handleLogin = async (e) => {
// // // //     e.preventDefault();
// // // //     setError("");

// // // //     try {
// // // //       await loginEmail(email, password);
// // // //       navigate("/"); // Redirect only after login success
// // // //     } catch (err) {
// // // //       if (err.code === "auth/invalid-email") {
// // // //         setError("Please enter a valid email address.");
// // // //       } else if (err.code === "auth/user-not-found") {
// // // //         setError("No account found. Please sign up.");
// // // //       } else if (err.code === "auth/wrong-password") {
// // // //         setError("Incorrect password.");
// // // //       } else if (err.code === "auth/provider-mismatch-google") {
// // // //         setError("Please sign in with Google for this email.");
// // // //       } else {
// // // //         setError(err.message);
// // // //       }
// // // //     }
// // // //   };

// // // //   const handleGoogleLogin = async () => {
// // // //     try {
// // // //       await loginWithGoogle();
// // // //       navigate("/"); // Redirect only after Google login
// // // //     } catch (err) {
// // // //       setError(err.message);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <form onSubmit={handleLogin}>
// // // //       {error && <p style={{ color: "red" }}>{error}</p>}
// // // //       <input
// // // //         type="email"
// // // //         placeholder="Enter email"
// // // //         value={email}
// // // //         onChange={(e) => setEmail(e.target.value)}
// // // //         required
// // // //       />
// // // //       <input
// // // //         type="password"
// // // //         placeholder="Enter password"
// // // //         value={password}
// // // //         onChange={(e) => setPassword(e.target.value)}
// // // //         required
// // // //       />
// // // //       <button type="submit">Log In</button>
// // // //       <button type="button" onClick={handleGoogleLogin}>
// // // //         Sign in with Google
// // // //       </button>
// // // //     </form>
// // // //   );
// // // // }









// // // // // src/pages/Login.jsx
// // // // import React, { useState, useEffect } from "react";
// // // // import { useAuth } from "../auth/AuthContext";
// // // // import { useNavigate } from "react-router-dom";

// // // // export default function Login() {
// // // //   const { loginEmail, loginWithGoogle, currentUser, loading } = useAuth();
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [error, setError] = useState("");
// // // //   const navigate = useNavigate();

// // // //   useEffect(() => {
// // // //     if (!loading && currentUser) {
// // // //       navigate("/");
// // // //     }
// // // //   }, [loading, currentUser, navigate]);

// // // //   const handleLogin = async (e) => {
// // // //     e.preventDefault();
// // // //     setError("");
// // // //     try {
// // // //       await loginEmail(email, password);
// // // //       navigate("/");
// // // //     } catch (err) {
// // // //       setError(err.message);
// // // //     }
// // // //   };

// // // //   const handleGoogleLogin = async () => {
// // // //     try {
// // // //       await loginWithGoogle();
// // // //       navigate("/");
// // // //     } catch (err) {
// // // //       setError(err.message);
// // // //     }
// // // //   };

// // // //   if (loading) return <p>Loading...</p>;

// // // //   return (
// // // //     <div style={styles.container}>
// // // //       <form onSubmit={handleLogin} style={styles.form}>
// // // //         <h2 style={styles.title}>Log In to Your Account</h2>
// // // //         {error && <p style={styles.error}>{error}</p>}

// // // //         <input
// // // //           type="email"
// // // //           placeholder="Enter email"
// // // //           value={email}
// // // //           onChange={(e) => setEmail(e.target.value)}
// // // //           style={styles.input}
// // // //           required
// // // //         />
// // // //         <input
// // // //           type="password"
// // // //           placeholder="Enter password"
// // // //           value={password}
// // // //           onChange={(e) => setPassword(e.target.value)}
// // // //           style={styles.input}
// // // //           required
// // // //         />
// // // //         <button type="submit" style={styles.buttonPrimary}>
// // // //           Log In
// // // //         </button>

// // // //         <div style={styles.divider}>or</div>

// // // //         <button type="button" onClick={handleGoogleLogin} style={styles.buttonGoogle}>
// // // //           Continue with Google
// // // //         </button>

// // // //         <button type="button" style={styles.buttonMobile}>
// // // //           Log In with Mobile 📱
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // }

// // // // const styles = {
// // // //   container: {
// // // //     display: "flex",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     minHeight: "100vh",
// // // //     background: "#f0f4ff",
// // // //   },
// // // //   form: {
// // // //     background: "white",
// // // //     padding: "30px",
// // // //     borderRadius: "12px",
// // // //     boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
// // // //     width: "350px",
// // // //     textAlign: "center",
// // // //   },
// // // //   title: {
// // // //     marginBottom: "20px",
// // // //     color: "#004aad",
// // // //   },
// // // //   input: {
// // // //     width: "100%",
// // // //     padding: "10px",
// // // //     margin: "8px 0",
// // // //     border: "1px solid #ccc",
// // // //     borderRadius: "6px",
// // // //     outline: "none",
// // // //   },
// // // //   buttonPrimary: {
// // // //     backgroundColor: "#004aad",
// // // //     color: "white",
// // // //     padding: "10px",
// // // //     width: "100%",
// // // //     border: "none",
// // // //     borderRadius: "6px",
// // // //     cursor: "pointer",
// // // //     marginTop: "10px",
// // // //     fontWeight: "bold",
// // // //   },
// // // //   buttonGoogle: {
// // // //     backgroundColor: "#db4437",
// // // //     color: "white",
// // // //     padding: "10px",
// // // //     width: "100%",
// // // //     border: "none",
// // // //     borderRadius: "6px",
// // // //     cursor: "pointer",
// // // //     marginTop: "10px",
// // // //     fontWeight: "bold",
// // // //   },
// // // //   buttonMobile: {
// // // //     backgroundColor: "#0a9396",
// // // //     color: "white",
// // // //     padding: "10px",
// // // //     width: "100%",
// // // //     border: "none",
// // // //     borderRadius: "6px",
// // // //     cursor: "pointer",
// // // //     marginTop: "10px",
// // // //     fontWeight: "bold",
// // // //   },
// // // //   error: {
// // // //     color: "red",
// // // //     marginBottom: "10px",
// // // //   },
// // // //   divider: {
// // // //     margin: "15px 0",
// // // //     fontWeight: "bold",
// // // //     color: "#666",
// // // //   },
// // // // };






// // // // // src/pages/Login.jsx
// // // // import React, { useState, useEffect } from "react";
// // // // import { useAuth } from "../auth/AuthContext";
// // // // import { useNavigate } from "react-router-dom";
// // // // import {
// // // //   EmailAuthProvider,
// // // //   linkWithCredential,
// // // // } from "firebase/auth";

// // // // export default function Login() {
// // // //   const { loginEmail, loginWithGoogle, currentUser, loading, auth } = useAuth();
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [error, setError] = useState("");
// // // //   const navigate = useNavigate();

// // // //   useEffect(() => {
// // // //     if (!loading && currentUser) {
// // // //       navigate("/");
// // // //     }
// // // //   }, [loading, currentUser, navigate]);

// // // //   const handleLogin = async (e) => {
// // // //     e.preventDefault();
// // // //     setError("");
// // // //     try {
// // // //       await loginEmail(email, password);
// // // //       navigate("/");
// // // //     } catch (err) {
// // // //       // Handle account-exists-with-different-credential error
// // // //       if (err.code === "auth/account-exists-with-different-credential") {
// // // //         try {
// // // //           const credential = EmailAuthProvider.credential(email, password);
// // // //           await linkWithCredential(auth.currentUser, credential);
// // // //           console.log("Account linking successful!");
// // // //           navigate("/");
// // // //         } catch (linkErr) {
// // // //           setError(linkErr.message);
// // // //         }
// // // //       } else {
// // // //         setError(err.message);
// // // //       }
// // // //     }
// // // //   };

// // // //   const handleGoogleLogin = async () => {
// // // //     try {
// // // //       await loginWithGoogle();
// // // //       navigate("/");
// // // //     } catch (err) {
// // // //       setError(err.message);
// // // //     }
// // // //   };

// // // //   if (loading) return <p>Loading...</p>;

// // // //   return (
// // // //     <div style={styles.container}>
// // // //       <form onSubmit={handleLogin} style={styles.form}>
// // // //         <h2 style={styles.title}>Log In to Your Account</h2>
// // // //         {error && <p style={styles.error}>{error}</p>}

// // // //         <input
// // // //           type="email"
// // // //           placeholder="Enter email"
// // // //           value={email}
// // // //           onChange={(e) => setEmail(e.target.value)}
// // // //           style={styles.input}
// // // //           required
// // // //         />
// // // //         <input
// // // //           type="password"
// // // //           placeholder="Enter password"
// // // //           value={password}
// // // //           onChange={(e) => setPassword(e.target.value)}
// // // //           style={styles.input}
// // // //           required
// // // //         />
// // // //         <button type="submit" style={styles.buttonPrimary}>
// // // //           Log In
// // // //         </button>

// // // //         <div style={styles.divider}>or</div>

// // // //         <button type="button" onClick={handleGoogleLogin} style={styles.buttonGoogle}>
// // // //           Continue with Google
// // // //         </button>

// // // //         <button type="button" style={styles.buttonMobile}>
// // // //           Log In with Mobile 📱
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // }

// // // // const styles = {
// // // //   container: {
// // // //     display: "flex",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     minHeight: "100vh",
// // // //     background: "#f0f4ff",
// // // //   },
// // // //   form: {
// // // //     background: "white",
// // // //     padding: "30px",
// // // //     borderRadius: "12px",
// // // //     boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
// // // //     width: "350px",
// // // //     textAlign: "center",
// // // //   },
// // // //   title: {
// // // //     marginBottom: "20px",
// // // //     color: "#004aad",
// // // //   },
// // // //   input: {
// // // //     width: "100%",
// // // //     padding: "10px",
// // // //     margin: "8px 0",
// // // //     border: "1px solid #ccc",
// // // //     borderRadius: "6px",
// // // //     outline: "none",
// // // //   },
// // // //   buttonPrimary: {
// // // //     backgroundColor: "#004aad",
// // // //     color: "white",
// // // //     padding: "10px",
// // // //     width: "100%",
// // // //     border: "none",
// // // //     borderRadius: "6px",
// // // //     cursor: "pointer",
// // // //     marginTop: "10px",
// // // //     fontWeight: "bold",
// // // //   },
// // // //   buttonGoogle: {
// // // //     backgroundColor: "#db4437",
// // // //     color: "white",
// // // //     padding: "10px",
// // // //     width: "100%",
// // // //     border: "none",
// // // //     borderRadius: "6px",
// // // //     cursor: "pointer",
// // // //     marginTop: "10px",
// // // //     fontWeight: "bold",
// // // //   },
// // // //   buttonMobile: {
// // // //     backgroundColor: "#0a9396",
// // // //     color: "white",
// // // //     padding: "10px",
// // // //     width: "100%",
// // // //     border: "none",
// // // //     borderRadius: "6px",
// // // //     cursor: "pointer",
// // // //     marginTop: "10px",
// // // //     fontWeight: "bold",
// // // //   },
// // // //   error: {
// // // //     color: "red",
// // // //     marginBottom: "10px",
// // // //   },
// // // //   divider: {
// // // //     margin: "15px 0",
// // // //     fontWeight: "bold",
// // // //     color: "#666",
// // // //   },
// // // // };





// // // // // src/pages/Login.jsx
// // // // import React, { useState } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import {
// // // //   getAuth,
// // // //   signInWithEmailAndPassword,
// // // //   GoogleAuthProvider,
// // // //   signInWithPopup,
// // // //   fetchSignInMethodsForEmail,
// // // //   EmailAuthProvider,
// // // //   linkWithCredential,
// // // // } from "firebase/auth";
// // // // import "./Login.css"; // You can style buttons here

// // // // export default function Login() {
// // // //   const auth = getAuth();
// // // //   const navigate = useNavigate();
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [error, setError] = useState("");

// // // //   const handleEmailLogin = async (e) => {
// // // //     e.preventDefault();
// // // //     setError("");

// // // //     try {
// // // //       await signInWithEmailAndPassword(auth, email, password);
// // // //       navigate("/home");
// // // //     } catch (err) {
// // // //       if (err.code === "auth/account-exists-with-different-credential") {
// // // //         // Handle linking for email login
// // // //         const signInMethods = await fetchSignInMethodsForEmail(auth, email);
// // // //         if (signInMethods.includes("google.com")) {
// // // //           const provider = new GoogleAuthProvider();
// // // //           const googleResult = await signInWithPopup(auth, provider);
// // // //           const credential = EmailAuthProvider.credential(email, password);
// // // //           await linkWithCredential(googleResult.user, credential);
// // // //           navigate("/home");
// // // //         }
// // // //       } else {
// // // //         setError(err.message);
// // // //       }
// // // //     }
// // // //   };

// // // //   const handleGoogleLogin = async () => {
// // // //     const provider = new GoogleAuthProvider();
// // // //     try {
// // // //       const result = await signInWithPopup(auth, provider);
// // // //       navigate("/home");
// // // //     } catch (err) {
// // // //       if (err.code === "auth/account-exists-with-different-credential") {
// // // //         // Handle linking for Google login
// // // //         const signInMethods = await fetchSignInMethodsForEmail(
// // // //           auth,
// // // //           err.customData.email
// // // //         );
// // // //         if (signInMethods.includes("password")) {
// // // //           const password = prompt(
// // // //             "An account exists with this email. Please enter your password to link."
// // // //           );
// // // //           const credential = EmailAuthProvider.credential(
// // // //             err.customData.email,
// // // //             password
// // // //           );
// // // //           const currentUser = auth.currentUser;
// // // //           await linkWithCredential(currentUser, credential);
// // // //           navigate("/home");
// // // //         }
// // // //       } else {
// // // //         setError(err.message);
// // // //       }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="login-container">
// // // //       <h2>Login</h2>
// // // //       {error && <p className="error">{error}</p>}

// // // //       <form onSubmit={handleEmailLogin}>
// // // //         <input
// // // //           type="email"
// // // //           placeholder="Email"
// // // //           value={email}
// // // //           onChange={(e) => setEmail(e.target.value)}
// // // //           required
// // // //         />

// // // //         <input
// // // //           type="password"
// // // //           placeholder="Password"
// // // //           value={password}
// // // //           onChange={(e) => setPassword(e.target.value)}
// // // //           required
// // // //         />

// // // //         <button type="submit" className="blue-btn">
// // // //           Login
// // // //         </button>
// // // //       </form>

// // // //       <hr />

// // // //       <button onClick={handleGoogleLogin} className="google-btn">
// // // //         Continue with Google
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // }





// // // // import React, { useState } from "react";
// // // // import { auth, provider } from "../firebase"; // make sure provider is GoogleAuthProvider
// // // // import {
// // // //   signInWithEmailAndPassword,
// // // //   signInWithPopup,
// // // // } from "firebase/auth";
// // // // import "./Login.css";

// // // // export default function Login() {
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [error, setError] = useState("");

// // // //   // Email/Password Login
// // // //   const handleLogin = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       await signInWithEmailAndPassword(auth, email, password);
// // // //       console.log("Login successful");
// // // //       window.location.href = "/"; // Redirect to home
// // // //     } catch (err) {
// // // //       setError(err.message);
// // // //     }
// // // //   };

// // // //   // Google Login
// // // //   const handleGoogleLogin = async () => {
// // // //     try {
// // // //       await signInWithPopup(auth, provider);
// // // //       console.log("Google Login successful");
// // // //       window.location.href = "/";
// // // //     } catch (err) {
// // // //       setError(err.message);
// // // //     }
// // // //   };

// // // //   // Mobile Login Placeholder
// // // //   const handleMobileLogin = () => {
// // // //     alert("Mobile login feature coming soon!");
// // // //   };

// // // //   return (
// // // //     <div className="login-container">
// // // //       <form className="login-form" onSubmit={handleLogin}>
// // // //         <h2 className="login-title">Welcome Back</h2>
// // // //         {error && <p className="error-msg">{error}</p>}

// // // //         <input
// // // //           type="email"
// // // //           placeholder="Email Address"
// // // //           value={email}
// // // //           onChange={(e) => setEmail(e.target.value)}
// // // //           className="login-input"
// // // //           required
// // // //         />
// // // //         <input
// // // //           type="password"
// // // //           placeholder="Password"
// // // //           value={password}
// // // //           onChange={(e) => setPassword(e.target.value)}
// // // //           className="login-input"
// // // //           required
// // // //         />

// // // //         <button type="submit" className="login-btn">
// // // //           Login
// // // //         </button>

// // // //         <div className="or-divider">
// // // //           <span>OR</span>
// // // //         </div>

// // // //         <button
// // // //           type="button"
// // // //           className="google-btn"
// // // //           onClick={handleGoogleLogin}
// // // //         >
// // // //           Continue with Google
// // // //         </button>

// // // //         <button
// // // //           type="button"
// // // //           className="mobile-btn"
// // // //           onClick={handleMobileLogin}
// // // //         >
// // // //           Login with Mobile
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // }





// // // import React, { useState } from "react";
// // // import { auth, googleProvider } from "../firebase"; // ✅ make sure firebase.js exports googleProvider
// // // import {
// // //   signInWithEmailAndPassword,
// // //   signInWithPopup,
// // // } from "firebase/auth";
// // // import { useNavigate } from "react-router-dom";
// // // import "./Login.css";

// // // function Login() {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [error, setError] = useState("");
// // //   const navigate = useNavigate();

// // //   // Email/Password login
// // //   const handleLogin = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await signInWithEmailAndPassword(auth, email, password);
// // //       navigate("/home"); // ✅ Redirect after login
// // //     } catch (err) {
// // //       setError(err.message);
// // //     }
// // //   };

// // //   // Google login
// // //   const handleGoogleLogin = async () => {
// // //     try {
// // //       await signInWithPopup(auth, googleProvider);
// // //       navigate("/home");
// // //     } catch (err) {
// // //       setError(err.message);
// // //     }
// // //   };

// // //   return (
// // //     <div className="login-container">
// // //       <div className="login-card">
// // //         <h2>Login</h2>
// // //         {error && <p className="error-message">{error}</p>}

// // //         <form onSubmit={handleLogin}>
// // //           <input
// // //             type="email"
// // //             placeholder="Enter Email"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             required
// // //           />

// // //           <input
// // //             type="password"
// // //             placeholder="Enter Password"
// // //             value={password}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             required
// // //           />

// // //           <button type="submit" className="login-btn">Login</button>
// // //         </form>

// // //         <div className="divider">OR</div>

// // //         <button className="google-btn" onClick={handleGoogleLogin}>
// // //           Continue with Google
// // //         </button>

// // //         <p className="signup-text">
// // //           Don't have an account? <a href="/signup">Sign up</a>
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Login;





// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   signInWithEmailAndPassword,
// //   signInWithPopup,
// //   EmailAuthProvider,
// //   linkWithCredential
// // } from "firebase/auth";
// // import { auth, googleProvider } from "../firebase";
// // import "./Login.css";

// // function Login() {
// //   const navigate = useNavigate();
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");

// //   // Login with Email/Password
// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await signInWithEmailAndPassword(auth, email, password);
// //       navigate("/");
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   // Login with Google + auto-link Email/Password
// //   const handleGoogleLogin = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, googleProvider);
// //       const user = result.user;

// //       // Auto-link with Email/Password if not already linked
// //       const credential = EmailAuthProvider.credential(user.email, prompt("Set a password to link with your Google account:"));
// //       await linkWithCredential(user, credential).catch((err) => {
// //         if (err.code === "auth/credential-already-in-use") {
// //           console.log("Account already linked with email/password.");
// //         }
// //       });

// //       navigate("/");
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       <h2>Login</h2>
// //       {error && <p className="error">{error}</p>}
// //       <form onSubmit={handleLogin}>
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //         />
// //         <button type="submit" className="blue-btn">Login</button>
// //       </form>

// //       <p>Or</p>
// //       <button className="google-btn" onClick={handleGoogleLogin}>
// //         Continue with Google
// //       </button>
// //     </div>
// //   );
// // }

// // export default Login;





// // src/pages/Login.jsx
// import React, { useState } from "react";
// import { auth, googleProvider } from "../firebase";
// import {
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   EmailAuthProvider,
//   linkWithCredential,
// } from "firebase/auth";
// import "./Login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   // Normal Email/Password Login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert("Login successful!");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   // Google Login with Auto Password Linking
//   const handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;

//       // Check if this account has password login enabled
//       const providerIds = user.providerData.map((p) => p.providerId);
//       if (!providerIds.includes("password")) {
//         // Ask the user to create a password
//         const newPassword = prompt(
//           "Set a password so you can also log in without Google in the future:"
//         );

//         if (newPassword) {
//           const credential = EmailAuthProvider.credential(
//             user.email,
//             newPassword
//           );

//           await linkWithCredential(user, credential);
//           alert("Google account linked with email/password successfully!");
//         }
//       } else {
//         alert("Google login successful!");
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       {error && <p className="error">{error}</p>}

//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit" className="btn-primary">Login</button>
//       </form>

//       <hr />

//       <button onClick={handleGoogleLogin} className="btn-google">
//         Continue with Google
//       </button>
//     </div>
//   );
// };

// export default Login;




// import React, { useState, useEffect } from "react";
// import { useAuth } from "../auth/AuthContext";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// export default function Login() {
//   const { loginEmail, loginWithGoogle, currentUser, loading } = useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!loading && currentUser) navigate("/");
//   }, [loading, currentUser, navigate]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await loginEmail(email, password);
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       await loginWithGoogle();
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="auth-container">
//       <form onSubmit={handleLogin} className="auth-form">
//         <h2>Login</h2>
//         {error && <p className="error">{error}</p>}

//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

//         <button type="submit" className="btn-primary">Log In</button>
//         <div className="divider">or</div>

//         <button type="button" className="btn-google" onClick={handleGoogleLogin}>
//           <i className="bi bi-google me-2"></i>Continue with Google
//         </button>
//         <button type="button" className="btn-mobile">
//           <i className="bi bi-phone me-2"></i>Log In with Mobile
//         </button>
//       </form>
//     </div>
//   );
// }





// import React, { useState, useEffect } from "react";
// import { useAuth } from "../auth/AuthContext";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// export default function Login() {
//   const { loginEmail, loginWithGoogle, currentUser, loading } = useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!loading && currentUser) navigate("/");
//   }, [loading, currentUser, navigate]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await loginEmail(email, password);
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       await loginWithGoogle();
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="login-container">
//       <form onSubmit={handleLogin} className="login-form">
//         <h2>Welcome Back</h2>
//         {error && <p className="error">{error}</p>}

//         <input
//           type="email"
//           placeholder="Email address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit" className="btn-primary">Log In</button>

//         <div className="divider">or continue with</div>

//         <button type="button" className="btn-google" onClick={handleGoogleLogin}>
//           <i className="bi bi-google me-2"></i>Google
//         </button>
//         <button type="button" className="btn-mobile">
//           <i className="bi bi-phone me-2"></i>Mobile
//         </button>
//       </form>
//     </div>
//   );
// }







// import React, { useState, useEffect } from "react";
// import { useAuth } from "../auth/AuthContext";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// export default function Login() {
//   const { loginEmail, loginWithGoogle, currentUser, loading } = useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!loading && currentUser) navigate("/");
//   }, [loading, currentUser, navigate]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await loginEmail(email, password);
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       await loginWithGoogle();
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="login-container">
//       <form onSubmit={handleLogin} className="login-form">
//         <h2>Welcome Back</h2>
//         {error && <p className="error">{error}</p>}

//         <input
//           type="email"
//           placeholder="Email address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit" className="btn-primary">Log In</button>

//         <div className="divider">or continue with</div>

//         <button type="button" className="btn-google" onClick={handleGoogleLogin}>
//           <i className="bi bi-google me-2"></i>Google
//         </button>
//         <button type="button" className="btn-mobile">
//           <i className="bi bi-phone me-2"></i>Mobile
//         </button>
//       </form>
//     </div>
//   );
// }




// // src/pages/Login.jsx
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../auth/AuthContext";
// import "./Login.css";

// export default function Login() {
//   const { loginEmail, loginWithGoogle } = useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await loginEmail(email, password);
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleGoogle = async () => {
//     setError("");
//     try {
//       await loginWithGoogle();
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       {error && <div className="error">{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       <button className="google-btn" onClick={handleGoogle}>
//         Sign in with Google
//       </button>
//       <p>
//         Don't have an account? <Link to="/signup">Signup here</Link>
//       </p>
//     </div>
//   );
// }








// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../auth/AuthContext";
// import "../styles/Login.css";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const { loginEmail, loginWithGoogle } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await loginEmail(email, password);
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleGoogle = async () => {
//     try {
//       await loginWithGoogle();
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         {error && <div className="error">{error}</div>}
//         <input
//           type="email"
//           placeholder="Email Address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//         <button type="button" className="google-btn" onClick={handleGoogle}>
//           Login with Google
//         </button>
//         <p>
//           Don't have an account? <Link to="/signup">Sign Up</Link>
//         </p>
//       </form>
//     </div>
//   );
// }



import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "../styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { loginEmail, loginWithGoogle } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await loginEmail(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogle = async () => {
    setError("");
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err) {
      if (err.code === "auth/popup-closed-by-user") {
        setError("Google login popup was closed before completing.");
      } else if (err.code === "auth/provider-already-linked") {
        setError("This Google account is already linked with another login method.");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <button type="button" className="google-btn" onClick={handleGoogle}>
          Login with Google
        </button>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
