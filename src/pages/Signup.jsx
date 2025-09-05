// // // // // // // // src/pages/Signup.jsx
// // // // // // // import React, { useState } from "react";
// // // // // // // import { useNavigate, Link } from "react-router-dom";
// // // // // // // import { useAuth } from "../auth/AuthContext";

// // // // // // // export default function Signup() {
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const { signupEmail, loginWithGoogle } = useAuth();

// // // // // // //   const [name, setName] = useState("");
// // // // // // //   const [email, setEmail] = useState("");
// // // // // // //   const [password, setPassword] = useState("");

// // // // // // //   const [error, setError] = useState("");
// // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // //   const onSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     setError(""); setLoading(true);
// // // // // // //     try {
// // // // // // //       await signupEmail(name, email, password);
// // // // // // //       navigate("/");
// // // // // // //     } catch (err) {
// // // // // // //       setError(err.message || "Failed to sign up.");
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleGoogle = async () => {
// // // // // // //     setError(""); setLoading(true);
// // // // // // //     try {
// // // // // // //       const u = await loginWithGoogle();
// // // // // // //       if (!u) return;
// // // // // // //       // If they started with Google and want email login too, they can add a password at /add-password
// // // // // // //       navigate("/");
// // // // // // //     } catch (err) {
// // // // // // //       setError(err.message || "Google sign-in failed");
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="container" style={{ maxWidth: 560 }}>
// // // // // // //       <h2 className="my-4 text-center">Create your account</h2>
// // // // // // //       {error && <div className="alert alert-danger">{error}</div>}

// // // // // // //       <form className="row g-3" onSubmit={onSubmit}>
// // // // // // //         <div className="col-12">
// // // // // // //           <label className="form-label">Full name</label>
// // // // // // //           <input
// // // // // // //             className="form-control"
// // // // // // //             value={name}
// // // // // // //             onChange={(e)=>setName(e.target.value)}
// // // // // // //             required
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         <div className="col-12 col-md-6">
// // // // // // //           <label className="form-label">Email</label>
// // // // // // //           <input
// // // // // // //             type="email"
// // // // // // //             className="form-control"
// // // // // // //             value={email}
// // // // // // //             onChange={(e)=>setEmail(e.target.value)}
// // // // // // //             required
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         <div className="col-12 col-md-6">
// // // // // // //           <label className="form-label">Password</label>
// // // // // // //           <input
// // // // // // //             type="password"
// // // // // // //             className="form-control"
// // // // // // //             value={password}
// // // // // // //             onChange={(e)=>setPassword(e.target.value)}
// // // // // // //             required
// // // // // // //             minLength={6}
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         <div className="col-12 d-grid gap-2">
// // // // // // //           <button className="btn btn-primary" disabled={loading}>
// // // // // // //             {loading ? "Creating..." : "Sign Up"}
// // // // // // //           </button>
// // // // // // //           <button
// // // // // // //             type="button"
// // // // // // //             className="btn btn-outline-primary"
// // // // // // //             onClick={handleGoogle}
// // // // // // //             disabled={loading}
// // // // // // //           >
// // // // // // //             Continue with Google
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </form>

// // // // // // //       <p className="mt-3 text-center">
// // // // // // //         Already have an account? <Link to="/login">Log in</Link>
// // // // // // //       </p>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }



// // // // // // // // src/pages/Signup.jsx
// // // // // // // import React, { useState } from "react";
// // // // // // // import { useNavigate, Link } from "react-router-dom";
// // // // // // // import { useAuth } from "../auth/AuthContext";

// // // // // // // export default function Signup() {
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const { signupEmail, loginWithGoogle } = useAuth();

// // // // // // //   const [name, setName] = useState("");
// // // // // // //   const [email, setEmail] = useState("");
// // // // // // //   const [password, setPassword] = useState("");
// // // // // // //   const [error, setError] = useState("");
// // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // //   const onSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     setError("");
// // // // // // //     setLoading(true);
// // // // // // //     try {
// // // // // // //       await signupEmail(name, email, password);
// // // // // // //       navigate("/");
// // // // // // //     } catch (err) {
// // // // // // //       setError(err.message || "Failed to sign up.");
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleGoogle = async () => {
// // // // // // //     setError("");
// // // // // // //     setLoading(true);
// // // // // // //     try {
// // // // // // //       const u = await loginWithGoogle();
// // // // // // //       if (!u) return;
// // // // // // //       navigate("/");
// // // // // // //     } catch (err) {
// // // // // // //       setError(err.message || "Google sign-in failed");
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="container" style={{ maxWidth: 560 }}>
// // // // // // //       <h2 className="my-4 text-center">Create your account</h2>
// // // // // // //       {error && <div className="alert alert-danger">{error}</div>}

// // // // // // //       <form className="row g-3" onSubmit={onSubmit}>
// // // // // // //         <div className="col-12">
// // // // // // //           <label className="form-label">Full name</label>
// // // // // // //           <input
// // // // // // //             className="form-control"
// // // // // // //             value={name}
// // // // // // //             onChange={(e) => setName(e.target.value)}
// // // // // // //             required
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         <div className="col-12 col-md-6">
// // // // // // //           <label className="form-label">Email</label>
// // // // // // //           <input
// // // // // // //             type="email"
// // // // // // //             className="form-control"
// // // // // // //             value={email}
// // // // // // //             onChange={(e) => setEmail(e.target.value)}
// // // // // // //             required
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         <div className="col-12 col-md-6">
// // // // // // //           <label className="form-label">Password</label>
// // // // // // //           <input
// // // // // // //             type="password"
// // // // // // //             className="form-control"
// // // // // // //             value={password}
// // // // // // //             onChange={(e) => setPassword(e.target.value)}
// // // // // // //             required
// // // // // // //             minLength={6}
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         <div className="col-12 d-grid gap-2">
// // // // // // //           <button className="btn btn-primary" disabled={loading}>
// // // // // // //             {loading ? "Creating..." : "Sign Up"}
// // // // // // //           </button>
// // // // // // //           <button
// // // // // // //             type="button"
// // // // // // //             className="btn btn-outline-primary"
// // // // // // //             onClick={handleGoogle}
// // // // // // //             disabled={loading}
// // // // // // //           >
// // // // // // //             Continue with Google
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </form>

// // // // // // //       <p className="mt-3 text-center">
// // // // // // //         Already have an account? <Link to="/login">Log in</Link>
// // // // // // //       </p>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }





// // // // // // // // src/pages/Signup.jsx
// // // // // // // import React, { useState } from "react";
// // // // // // // import { useAuth } from "../auth/AuthContext";

// // // // // // // export default function Signup() {
// // // // // // //   const { signupEmail } = useAuth();
// // // // // // //   const [email, setEmail] = useState("");
// // // // // // //   const [password, setPassword] = useState("");
// // // // // // //   const [error, setError] = useState("");

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     setError("");

// // // // // // //     try {
// // // // // // //       await signupEmail(email, password);
// // // // // // //       alert("Account created successfully!");
// // // // // // //     } catch (err) {
// // // // // // //       if (err.code === "auth/invalid-email") {
// // // // // // //         setError("Please enter a valid email address.");
// // // // // // //       } else if (err.code === "auth/email-already-in-use") {
// // // // // // //         setError("Email is already registered.");
// // // // // // //       } else if (err.code === "auth/weak-password") {
// // // // // // //         setError("Password should be at least 6 characters.");
// // // // // // //       } else {
// // // // // // //         setError(err.message);
// // // // // // //       }
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <form onSubmit={handleSubmit}>
// // // // // // //       {error && <p style={{ color: "red" }}>{error}</p>}
// // // // // // //       <input
// // // // // // //         type="email"
// // // // // // //         placeholder="Enter email"
// // // // // // //         value={email}
// // // // // // //         onChange={(e) => setEmail(e.target.value)}
// // // // // // //         required
// // // // // // //       />
// // // // // // //       <input
// // // // // // //         type="password"
// // // // // // //         placeholder="Enter password"
// // // // // // //         value={password}
// // // // // // //         onChange={(e) => setPassword(e.target.value)}
// // // // // // //         required
// // // // // // //       />
// // // // // // //       <button type="submit">Sign Up</button>
// // // // // // //     </form>
// // // // // // //   );
// // // // // // // }






// // // // // // // src/pages/Signup.jsx
// // // // // // import React, { useState } from "react";
// // // // // // import { useAuth } from "../auth/AuthContext";

// // // // // // export default function Signup() {
// // // // // //   const { signupEmail } = useAuth();
// // // // // //   const [name, setName] = useState("");  // NEW field
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [error, setError] = useState("");

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setError("");

// // // // // //     try {
// // // // // //       await signupEmail(name.trim(), email.trim(), password);
// // // // // //       alert("Account created successfully!");
// // // // // //     } catch (err) {
// // // // // //       if (err.code === "auth/invalid-email") {
// // // // // //         setError("Please enter a valid email address.");
// // // // // //       } else if (err.code === "auth/email-already-in-use") {
// // // // // //         setError("Email is already registered.");
// // // // // //       } else if (err.code === "auth/weak-password") {
// // // // // //         setError("Password should be at least 6 characters.");
// // // // // //       } else {
// // // // // //         setError(err.message);
// // // // // //       }
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <form onSubmit={handleSubmit}>
// // // // // //       {error && <p style={{ color: "red" }}>{error}</p>}
// // // // // //       <input
// // // // // //         type="text"
// // // // // //         placeholder="Enter full name"
// // // // // //         value={name}
// // // // // //         onChange={(e) => setName(e.target.value)}
// // // // // //         required
// // // // // //       />
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
// // // // // //       <button type="submit">Sign Up</button>
// // // // // //     </form>
// // // // // //   );
// // // // // // }





// // // // // // import React, { useState } from "react";
// // // // // // import { useAuth } from "../auth/AuthContext";
// // // // // // import { useNavigate } from "react-router-dom";

// // // // // // export default function Signup() {
// // // // // //   const { signupEmail } = useAuth();
// // // // // //   const navigate = useNavigate();
// // // // // //   const [name, setName] = useState("");
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [password, setPassword] = useState("");

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     try {
// // // // // //       await signupEmail(name, email, password);
// // // // // //       navigate("/"); // ✅ Redirect to Home after signup
// // // // // //     } catch (error) {
// // // // // //       console.error(error.message);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <form onSubmit={handleSubmit}>
// // // // // //       <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
// // // // // //       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
// // // // // //       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
// // // // // //       <button type="submit">Sign Up</button>
// // // // // //     </form>
// // // // // //   );
// // // // // // }




// // // // // // // src/pages/Signup.jsx
// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { useAuth } from "../auth/AuthContext";
// // // // // // import { useNavigate } from "react-router-dom";

// // // // // // export default function Signup() {
// // // // // //   const { signupEmail, currentUser } = useAuth();
// // // // // //   const navigate = useNavigate();
// // // // // //   const [name, setName] = useState("");
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [error, setError] = useState("");

// // // // // //   // ✅ Auto-redirect when user is logged in
// // // // // //   useEffect(() => {
// // // // // //     if (currentUser) {
// // // // // //       navigate("/");
// // // // // //     }
// // // // // //   }, [currentUser, navigate]);

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setError("");

// // // // // //     try {
// // // // // //       const userCredential = await signupEmail(name, email, password);
// // // // // //       if (userCredential) {
// // // // // //         navigate("/"); // Extra safety
// // // // // //       }
// // // // // //     } catch (err) {
// // // // // //       setError(err.message);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <form onSubmit={handleSubmit}>
// // // // // //       {error && <p style={{ color: "red" }}>{error}</p>}
// // // // // //       <input
// // // // // //         value={name}
// // // // // //         onChange={(e) => setName(e.target.value)}
// // // // // //         placeholder="Name"
// // // // // //         required
// // // // // //       />
// // // // // //       <input
// // // // // //         type="email"
// // // // // //         value={email}
// // // // // //         onChange={(e) => setEmail(e.target.value)}
// // // // // //         placeholder="Email"
// // // // // //         required
// // // // // //       />
// // // // // //       <input
// // // // // //         type="password"
// // // // // //         value={password}
// // // // // //         onChange={(e) => setPassword(e.target.value)}
// // // // // //         placeholder="Password"
// // // // // //         required
// // // // // //       />
// // // // // //       <button type="submit">Sign Up</button>
// // // // // //     </form>
// // // // // //   );
// // // // // // }





// // // // // // src/pages/Signup.jsx
// // // // // import React, { useState, useEffect } from "react";
// // // // // import { useAuth } from "../auth/AuthContext";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // export default function Signup() {
// // // // //   const { signupEmail, currentUser, loading } = useAuth();
// // // // //   const navigate = useNavigate();
// // // // //   const [name, setName] = useState("");
// // // // //   const [email, setEmail] = useState("");
// // // // //   const [password, setPassword] = useState("");
// // // // //   const [error, setError] = useState("");

// // // // //   // ✅ Redirect only when loading is done and user is logged in
// // // // //   useEffect(() => {
// // // // //     if (!loading && currentUser) {
// // // // //       navigate("/");
// // // // //     }
// // // // //   }, [loading, currentUser, navigate]);

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setError("");

// // // // //     try {
// // // // //       const userCredential = await signupEmail(name, email, password);
// // // // //       if (userCredential) {
// // // // //         navigate("/"); // Direct redirect after signup
// // // // //       }
// // // // //     } catch (err) {
// // // // //       setError(err.message);
// // // // //     }
// // // // //   };

// // // // //   if (loading) {
// // // // //     return <p>Loading...</p>; // Show loader while checking auth state
// // // // //   }

// // // // //   return (
// // // // //     <form onSubmit={handleSubmit}>
// // // // //       {error && <p style={{ color: "red" }}>{error}</p>}
// // // // //       <input
// // // // //         value={name}
// // // // //         onChange={(e) => setName(e.target.value)}
// // // // //         placeholder="Name"
// // // // //         required
// // // // //       />
// // // // //       <input
// // // // //         type="email"
// // // // //         value={email}
// // // // //         onChange={(e) => setEmail(e.target.value)}
// // // // //         placeholder="Email"
// // // // //         required
// // // // //       />
// // // // //       <input
// // // // //         type="password"
// // // // //         value={password}
// // // // //         onChange={(e) => setPassword(e.target.value)}
// // // // //         placeholder="Password"
// // // // //         required
// // // // //       />
// // // // //       <button type="submit">Sign Up</button>
// // // // //     </form>
// // // // //   );
// // // // // }






// // // // import React, { useState } from "react";
// // // // import { useAuth } from "../auth/AuthContext";
// // // // import { useNavigate } from "react-router-dom";

// // // // export default function Signup() {
// // // //   const { signupEmail } = useAuth();
// // // //   const navigate = useNavigate();
// // // //   const [name, setName] = useState("");
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [error, setError] = useState("");

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setError("");

// // // //     try {
// // // //       const userCredential = await signupEmail(name, email, password);
// // // //       if (userCredential) {
// // // //         navigate("/"); // Redirect only after signup success
// // // //       }
// // // //     } catch (err) {
// // // //       setError(err.message);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <form onSubmit={handleSubmit}>
// // // //       {error && <p style={{ color: "red" }}>{error}</p>}
// // // //       <input
// // // //         value={name}
// // // //         onChange={(e) => setName(e.target.value)}
// // // //         placeholder="Name"
// // // //         required
// // // //       />
// // // //       <input
// // // //         type="email"
// // // //         value={email}
// // // //         onChange={(e) => setEmail(e.target.value)}
// // // //         placeholder="Email"
// // // //         required
// // // //       />
// // // //       <input
// // // //         type="password"
// // // //         value={password}
// // // //         onChange={(e) => setPassword(e.target.value)}
// // // //         placeholder="Password"
// // // //         required
// // // //       />
// // // //       <button type="submit">Sign Up</button>
// // // //     </form>
// // // //   );
// // // // }





// // // // src/pages/Signup.jsx
// // // import React, { useState, useEffect } from "react";
// // // import { useAuth } from "../auth/AuthContext";
// // // import { useNavigate } from "react-router-dom";

// // // export default function Signup() {
// // //   const { signupEmail, loginWithGoogle, currentUser, loading } = useAuth();
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [error, setError] = useState("");
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     if (!loading && currentUser) {
// // //       navigate("/");
// // //     }
// // //   }, [loading, currentUser, navigate]);

// // //   const handleSignup = async (e) => {
// // //     e.preventDefault();
// // //     setError("");
// // //     try {
// // //       await signupEmail(email, password);
// // //       navigate("/");
// // //     } catch (err) {
// // //       setError(err.message);
// // //     }
// // //   };

// // //   const handleGoogleSignup = async () => {
// // //     try {
// // //       await loginWithGoogle();
// // //       navigate("/");
// // //     } catch (err) {
// // //       setError(err.message);
// // //     }
// // //   };

// // //   if (loading) return <p>Loading...</p>;

// // //   return (
// // //     <div style={styles.container}>
// // //       <form onSubmit={handleSignup} style={styles.form}>
// // //         <h2 style={styles.title}>Create Your Account</h2>
// // //         {error && <p style={styles.error}>{error}</p>}

// // //         <input
// // //           type="email"
// // //           placeholder="Enter email"
// // //           value={email}
// // //           onChange={(e) => setEmail(e.target.value)}
// // //           style={styles.input}
// // //           required
// // //         />
// // //         <input
// // //           type="password"
// // //           placeholder="Enter password"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //           style={styles.input}
// // //           required
// // //         />
// // //         <button type="submit" style={styles.buttonPrimary}>
// // //           Sign Up
// // //         </button>

// // //         <div style={styles.divider}>or</div>

// // //         <button type="button" onClick={handleGoogleSignup} style={styles.buttonGoogle}>
// // //           Continue with Google
// // //         </button>

// // //         <button type="button" style={styles.buttonMobile}>
// // //           Sign Up with Mobile 📱
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // const styles = {
// // //   container: {
// // //     display: "flex",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     minHeight: "100vh",
// // //     background: "#f0f4ff",
// // //   },
// // //   form: {
// // //     background: "white",
// // //     padding: "30px",
// // //     borderRadius: "12px",
// // //     boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
// // //     width: "350px",
// // //     textAlign: "center",
// // //   },
// // //   title: {
// // //     marginBottom: "20px",
// // //     color: "#004aad",
// // //   },
// // //   input: {
// // //     width: "100%",
// // //     padding: "10px",
// // //     margin: "8px 0",
// // //     border: "1px solid #ccc",
// // //     borderRadius: "6px",
// // //     outline: "none",
// // //   },
// // //   buttonPrimary: {
// // //     backgroundColor: "#004aad",
// // //     color: "white",
// // //     padding: "10px",
// // //     width: "100%",
// // //     border: "none",
// // //     borderRadius: "6px",
// // //     cursor: "pointer",
// // //     marginTop: "10px",
// // //     fontWeight: "bold",
// // //   },
// // //   buttonGoogle: {
// // //     backgroundColor: "#db4437",
// // //     color: "white",
// // //     padding: "10px",
// // //     width: "100%",
// // //     border: "none",
// // //     borderRadius: "6px",
// // //     cursor: "pointer",
// // //     marginTop: "10px",
// // //     fontWeight: "bold",
// // //   },
// // //   buttonMobile: {
// // //     backgroundColor: "#0a9396",
// // //     color: "white",
// // //     padding: "10px",
// // //     width: "100%",
// // //     border: "none",
// // //     borderRadius: "6px",
// // //     cursor: "pointer",
// // //     marginTop: "10px",
// // //     fontWeight: "bold",
// // //   },
// // //   error: {
// // //     color: "red",
// // //     marginBottom: "10px",
// // //   },
// // //   divider: {
// // //     margin: "15px 0",
// // //     fontWeight: "bold",
// // //     color: "#666",
// // //   },
// // // };




// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { auth, googleProvider } from "../firebase";
// // import {
// //   createUserWithEmailAndPassword,
// //   signInWithPopup,
// //   EmailAuthProvider,
// //   linkWithCredential,
// //   updateProfile,
// // } from "firebase/auth";
// // import "./Signup.css";

// // const Signup = () => {
// //   const navigate = useNavigate();
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");

// //   // Email/Password signup
// //   const handleSignup = async (e) => {
// //     e.preventDefault();
// //     if (!password) {
// //       setError("Please enter a password");
// //       return;
// //     }
// //     try {
// //       const userCredential = await createUserWithEmailAndPassword(
// //         auth,
// //         email,
// //         password
// //       );
// //       // Set display name
// //       await updateProfile(userCredential.user, { displayName: name });
// //       alert("Signup successful!");
// //       navigate("/");
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   // Google signup + auto link Email/Password
// //   const handleGoogleSignup = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, googleProvider);
// //       const user = result.user;

// //       // If password login not yet linked, prompt user to set one
// //       const providerIds = user.providerData.map((p) => p.providerId);
// //       if (!providerIds.includes("password")) {
// //         const newPassword = prompt(
// //           "Set a password so you can also log in without Google in the future:"
// //         );

// //         if (newPassword) {
// //           const credential = EmailAuthProvider.credential(user.email, newPassword);
// //           await linkWithCredential(user, credential);
// //           alert("Google account linked with email/password successfully!");
// //         }
// //       } else {
// //         alert("Google signup successful!");
// //       }
// //       navigate("/");
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   return (
// //     <div className="signup-container">
// //       <h2>Sign Up</h2>
// //       {error && <p className="error">{error}</p>}

// //       <form onSubmit={handleSignup}>
// //         <input
// //           type="text"
// //           placeholder="Full Name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           required
// //         />
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
// //         <button type="submit" className="btn-primary">Sign Up</button>
// //       </form>

// //       <hr />

// //       <button onClick={handleGoogleSignup} className="btn-google">
// //         Continue with Google
// //       </button>
// //     </div>
// //   );
// // };

// // export default Signup;






// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useAuth } from "../auth/AuthContext";
// // import "./Signup.css";

// // export default function Signup() {
// //   const { signupEmail, loginWithGoogle } = useAuth();
// //   const navigate = useNavigate();
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");

// //   const handleSignup = async (e) => {
// //     e.preventDefault();
// //     if (!password) {
// //       setError("Please enter a password");
// //       return;
// //     }
// //     try {
// //       await signupEmail(name, email, password);
// //       navigate("/");
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   const handleGoogleSignup = async () => {
// //     try {
// //       await loginWithGoogle();
// //       navigate("/");
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   return (
// //     <div className="auth-container">
// //       <form onSubmit={handleSignup} className="auth-form">
// //         <h2>Sign Up</h2>
// //         {error && <p className="error">{error}</p>}

// //         <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
// //         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// //         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

// //         <button type="submit" className="btn-primary">Sign Up</button>
// //         <div className="divider">or</div>

// //         <button type="button" className="btn-google" onClick={handleGoogleSignup}>
// //           <i className="bi bi-google me-2"></i>Continue with Google
// //         </button>
// //         <button type="button" className="btn-mobile">
// //           <i className="bi bi-phone me-2"></i>Sign Up with Mobile
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../auth/AuthContext";
// import "./Signup.css";

// export default function Signup() {
//   const { signupEmail, loginWithGoogle } = useAuth();
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (!password) {
//       setError("Please enter a password");
//       return;
//     }
//     try {
//       await signupEmail(name, email, password);
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleGoogleSignup = async () => {
//     try {
//       await loginWithGoogle();
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <form onSubmit={handleSignup} className="signup-form">
//         <h2>Create Account</h2>
//         {error && <p className="error">{error}</p>}

//         <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

//         <button type="submit" className="btn-primary">Sign Up</button>
//         <div className="divider">or continue with</div>

//         <button type="button" className="btn-google" onClick={handleGoogleSignup}>
//           <i className="bi bi-google me-2"></i>Google
//         </button>
//         <button type="button" className="btn-mobile">
//           <i className="bi bi-phone me-2"></i>Mobile
//         </button>
//       </form>
//     </div>
//   );
// }



// // src/pages/Signup.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../auth/AuthContext";
// import "./Auth.css";

// export default function Signup() {
//   const { signupEmail, loginWithGoogle } = useAuth();
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSignup = async () => {
//     setError("");
//     setLoading(true);
//     try {
//       await signupEmail(name, email, password);
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//     setLoading(false);
//   };

//   const handleGoogle = async () => {
//     setError("");
//     setLoading(true);
//     try {
//       await loginWithGoogle();
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="auth-container">
//       <h2>Sign Up</h2>
//       {error && <p className="error">{error}</p>}
//       <input
//         type="text"
//         placeholder="Full Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleSignup} disabled={loading}>
//         {loading ? "Signing up..." : "Sign Up"}
//       </button>
//       <button className="google-btn" onClick={handleGoogle}>
//         Continue with Google
//       </button>
//     </div>
//   );
// }





// // src/pages/Signup.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../auth/AuthContext";
// import "./Auth.css";

// export default function Signup() {
//   const { signupEmail, loginWithGoogle } = useAuth();
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSignup = async () => {
//     setError("");
//     setLoading(true);
//     try {
//       await signupEmail(name, email, password);
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//     setLoading(false);
//   };

//   const handleGoogle = async () => {
//     setError("");
//     setLoading(true);
//     try {
//       await loginWithGoogle();
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="auth-container">
//       <h2>Sign Up</h2>
//       {error && <p className="error">{error}</p>}
//       <input
//         type="text"
//         placeholder="Full Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleSignup} disabled={loading}>
//         {loading ? "Signing up..." : "Sign Up"}
//       </button>
//       <button className="google-btn" onClick={handleGoogle}>
//         Continue with Google
//       </button>
//     </div>
//   );
// }



// // src/pages/Signup.jsx
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../auth/AuthContext";
// import "./Signup.css";

// export default function Signup() {
//   const { signupEmail, loginWithGoogle } = useAuth();
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await signupEmail(name, email, password);
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
//       <h2>Signup</h2>
//       {error && <div className="error">{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
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
//         <button type="submit">Signup</button>
//       </form>
//       <button className="google-btn" onClick={handleGoogle}>
//         Sign up with Google
//       </button>
//       <p>
//         Already have an account? <Link to="/login">Login here</Link>
//       </p>
//     </div>
//   );
// }








// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../auth/AuthContext";
// import "../styles/Signup.css";


// export default function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const { signupEmail, loginWithGoogle } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await signupEmail(name, email, password);
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
//         <h2>Sign Up</h2>
//         {error && <div className="error">{error}</div>}
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
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
//         <button type="submit">Sign Up</button>
//         <button type="button" className="google-btn" onClick={handleGoogle}>
//           Sign Up with Google
//         </button>
//         <p>
//           Already have an account? <Link to="/login">Log in</Link>
//         </p>
//       </form>
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
//     setError("");
//     try {
//       await loginWithGoogle();
//       navigate("/");
//     } catch (err) {
//       if (err.code === "auth/popup-closed-by-user") {
//         setError("Google login popup was closed before completing.");
//       } else if (err.code === "auth/provider-already-linked") {
//         setError("This Google account is already linked with another login method.");
//       } else {
//         setError(err.message);
//       }
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
import "../styles/Signup.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signupEmail, loginWithGoogle } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signupEmail(name, email, password);
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
        setError("Google signup popup was closed before completing.");
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
        <h2>Sign Up</h2>
        {error && <div className="error">{error}</div>}

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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

        <button type="submit">Sign Up</button>
        <button type="button" className="google-btn" onClick={handleGoogle}>
          Sign Up with Google
        </button>

        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
}
