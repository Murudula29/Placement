// // // // // src/auth/AuthContext.jsx
// // // // import React, {
// // // //   createContext,
// // // //   useContext,
// // // //   useEffect,
// // // //   useMemo,
// // // //   useRef,
// // // //   useState,
// // // //   useCallback,
// // // // } from "react";
// // // // import {
// // // //   onAuthStateChanged,
// // // //   signInWithEmailAndPassword,
// // // //   createUserWithEmailAndPassword,
// // // //   signOut,
// // // //   updateProfile,
// // // //   signInWithPopup,
// // // //   signInWithRedirect,
// // // //   getRedirectResult,
// // // //   fetchSignInMethodsForEmail,
// // // //   EmailAuthProvider,
// // // //   linkWithCredential,
// // // //   sendPasswordResetEmail,
// // // //   linkWithPopup,
// // // // } from "firebase/auth";
// // // // import { auth, googleProvider } from "../firebase";

// // // // const AuthContext = createContext(null);
// // // // const normEmail = (email) => (email || "").trim().toLowerCase();

// // // // export function AuthProvider({ children }) {
// // // //   const [user, setUser] = useState(null);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     const unsub = onAuthStateChanged(auth, (u) => {
// // // //       setUser(u || null);
// // // //       setLoading(false);
// // // //     });
// // // //     return () => unsub();
// // // //   }, []);

// // // //   // Drain redirect result (no-op if none; avoids "already handling redirect" warnings)
// // // //   useEffect(() => {
// // // //     getRedirectResult(auth).catch(() => {});
// // // //   }, []);

// // // //   // ---------- Email / Password ----------
// // // //   const loginEmail = useCallback(async (email, password) => {
// // // //     const e = normEmail(email);
// // // //     const methods = await fetchSignInMethodsForEmail(auth, e);

// // // //     if (methods.length === 0) {
// // // //       const err = new Error("No account found for this email. Please sign up.");
// // // //       err.code = "auth/user-not-found";
// // // //       throw err;
// // // //     }
// // // //     // If the email is Google-only (no password), guide the user
// // // //     if (!methods.includes("password") && methods.includes("google.com")) {
// // // //       const err = new Error(
// // // //         "This email is registered with Google. Continue with Google, then add a password on /add-password if you want."
// // // //       );
// // // //       err.code = "auth/provider-mismatch-google";
// // // //       throw err;
// // // //     }

// // // //     try {
// // // //       const cred = await signInWithEmailAndPassword(auth, e, password);
// // // //       return cred.user;
// // // //     } catch (err) {
// // // //       if (err.code === "auth/invalid-credential" || err.code === "auth/wrong-password") {
// // // //         err.message = "Incorrect password. Use Forgot password if needed.";
// // // //       }
// // // //       throw err;
// // // //     }
// // // //   }, []);

// // // //   const signupEmail = useCallback(async (name, email, password) => {
// // // //     const e = normEmail(email);
// // // //     const methods = await fetchSignInMethodsForEmail(auth, e);

// // // //     // If the email already exists via Google, don't create a duplicate password account
// // // //     if (methods.includes("google.com") && !methods.includes("password")) {
// // // //       const err = new Error(
// // // //         "This email already exists via Google. Sign in with Google first, then set a password on /add-password."
// // // //       );
// // // //       err.code = "auth/account-exists-with-google";
// // // //       throw err;
// // // //     }

// // // //     const cred = await createUserWithEmailAndPassword(auth, e, password);
// // // //     if (name) {
// // // //       await updateProfile(cred.user, { displayName: name });
// // // //     }
// // // //     return cred.user;
// // // //   }, []);

// // // //   // ---------- Google ----------
// // // //   const signingInRef = useRef(false);
// // // //   const loginWithGoogle = useCallback(async () => {
// // // //     if (signingInRef.current) return;
// // // //     signingInRef.current = true;
// // // //     try {
// // // //       const res = await signInWithPopup(auth, googleProvider);
// // // //       return res.user;
// // // //     } catch (err) {
// // // //       const code = err?.code || "";
// // // //       const msg = (err?.message || "").toLowerCase();
// // // //       const popupBlockedOrPending =
// // // //         code === "auth/popup-blocked" ||
// // // //         code === "auth/cancelled-popup-request" ||
// // // //         msg.includes("pending promise");

// // // //       if (popupBlockedOrPending) {
// // // //         await signInWithRedirect(auth, googleProvider);
// // // //         return;
// // // //       }
// // // //       if (code === "auth/popup-closed-by-user") return;
// // // //       throw err;
// // // //     } finally {
// // // //       signingInRef.current = false;
// // // //     }
// // // //   }, []);

// // // //   // Link Google to an existing email+password account
// // // //   const linkGoogleToCurrentUser = useCallback(async () => {
// // // //     if (!auth.currentUser) throw new Error("Sign in first to link Google.");
// // // //     await linkWithPopup(auth.currentUser, googleProvider);
// // // //     return auth.currentUser;
// // // //   }, []);

// // // //   // ---------- Password link / reset ----------
// // // //   const linkPasswordToCurrentUser = useCallback(async (newPassword) => {
// // // //     if (!auth.currentUser?.email) {
// // // //       throw new Error("Sign in first (e.g., with Google), then set a password.");
// // // //     }
// // // //     const e = normEmail(auth.currentUser.email);
// // // //     const cred = EmailAuthProvider.credential(e, newPassword);
// // // //     await linkWithCredential(auth.currentUser, cred);
// // // //     return auth.currentUser;
// // // //   }, []);

// // // //   const resetPassword = useCallback(
// // // //     (email) => sendPasswordResetEmail(auth, normEmail(email)),
// // // //     []
// // // //   );

// // // //   // ---------- Misc ----------
// // // //   const logout = useCallback(() => signOut(auth), []);

// // // //   const updateDisplayName = useCallback(async (name) => {
// // // //     if (auth.currentUser && name) {
// // // //       await updateProfile(auth.currentUser, { displayName: name });
// // // //       setUser({ ...auth.currentUser });
// // // //     }
// // // //   }, []);

// // // //   const value = useMemo(
// // // //     () => ({
// // // //       user,
// // // //       loading,
// // // //       // email/password
// // // //       loginEmail,
// // // //       signupEmail,
// // // //       resetPassword,
// // // //       linkPasswordToCurrentUser,
// // // //       // google
// // // //       loginWithGoogle,
// // // //       linkGoogleToCurrentUser,
// // // //       // profile & session
// // // //       updateDisplayName,
// // // //       logout,
// // // //     }),
// // // //     [
// // // //       user,
// // // //       loading,
// // // //       loginEmail,
// // // //       signupEmail,
// // // //       resetPassword,
// // // //       linkPasswordToCurrentUser,
// // // //       loginWithGoogle,
// // // //       linkGoogleToCurrentUser,
// // // //       updateDisplayName,
// // // //       logout,
// // // //     ]
// // // //   );

// // // //   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// // // // }

// // // // export function useAuth() {
// // // //   const ctx = useContext(AuthContext);
// // // //   if (ctx === null) throw new Error("useAuth() must be used within <AuthProvider>");
// // // //   return ctx;
// // // // }

// // // // // small helper for initials (used by Settings if you want)
// // // // export function getInitials(u) {
// // // //   const name = u?.displayName?.trim() || u?.email?.split("@")[0] || "";
// // // //   if (!name) return "PP";
// // // //   return (
// // // //     name
// // // //       .split(/\s+/)
// // // //       .slice(0, 2)
// // // //       .map((p) => p[0]?.toUpperCase())
// // // //       .join("") || "PP"
// // // //   );
// // // // }







// // // // // src/auth/AuthContext.jsx
// // // // import React, {
// // // //   createContext,
// // // //   useContext,
// // // //   useEffect,
// // // //   useMemo,
// // // //   useRef,
// // // //   useState,
// // // //   useCallback,
// // // // } from "react";
// // // // import {
// // // //   onAuthStateChanged,
// // // //   signInWithEmailAndPassword,
// // // //   createUserWithEmailAndPassword,
// // // //   signOut,
// // // //   updateProfile,
// // // //   signInWithPopup,
// // // //   signInWithRedirect,
// // // //   getRedirectResult,
// // // //   fetchSignInMethodsForEmail,
// // // //   EmailAuthProvider,
// // // //   linkWithCredential,
// // // //   sendPasswordResetEmail,
// // // //   linkWithPopup,
// // // // } from "firebase/auth";
// // // // import { auth, googleProvider } from "../firebase";

// // // // const AuthContext = createContext(null);
// // // // const normEmail = (email) => (email || "").trim().toLowerCase();

// // // // export function AuthProvider({ children }) {
// // // //   const [user, setUser] = useState(null);
// // // //   const [loading, setLoading] = useState(true);

// // // //   // Monitor auth state
// // // //   useEffect(() => {
// // // //     const unsub = onAuthStateChanged(auth, (u) => {
// // // //       setUser(u || null);
// // // //       setLoading(false);
// // // //     });
// // // //     return () => unsub();
// // // //   }, []);

// // // //   // Handle redirect Google sign-in
// // // //   useEffect(() => {
// // // //     getRedirectResult(auth).catch(() => {});
// // // //   }, []);

// // // //   // ----- Email / Password Login -----
// // // //   const loginEmail = useCallback(async (email, password) => {
// // // //     const e = normEmail(email);
// // // //     const methods = await fetchSignInMethodsForEmail(auth, e);

// // // //     if (methods.length === 0) {
// // // //       const err = new Error("No account found for this email. Please sign up.");
// // // //       err.code = "auth/user-not-found";
// // // //       throw err;
// // // //     }
// // // //     if (!methods.includes("password") && methods.includes("google.com")) {
// // // //       const err = new Error(
// // // //         "This email is registered with Google. Continue with Google instead."
// // // //       );
// // // //       err.code = "auth/provider-mismatch-google";
// // // //       throw err;
// // // //     }

// // // //     try {
// // // //       const cred = await signInWithEmailAndPassword(auth, e, password);
// // // //       return cred.user;
// // // //     } catch (err) {
// // // //       if (
// // // //         err.code === "auth/invalid-credential" ||
// // // //         err.code === "auth/wrong-password"
// // // //       ) {
// // // //         err.message = "Incorrect password. Use Forgot password if needed.";
// // // //       }
// // // //       throw err;
// // // //     }
// // // //   }, []);

// // // //   // ----- Email / Password Signup -----
// // // //   const signupEmail = useCallback(async (name, email, password) => {
// // // //     const e = normEmail(email);
// // // //     const methods = await fetchSignInMethodsForEmail(auth, e);

// // // //     if (methods.includes("google.com") && !methods.includes("password")) {
// // // //       const err = new Error(
// // // //         "This email already exists via Google. Sign in with Google first."
// // // //       );
// // // //       err.code = "auth/account-exists-with-google";
// // // //       throw err;
// // // //     }

// // // //     const cred = await createUserWithEmailAndPassword(auth, e, password);
// // // //     if (name) {
// // // //       await updateProfile(cred.user, { displayName: name });
// // // //     }
// // // //     return cred.user;
// // // //   }, []);

// // // //   // ----- Google Sign-in -----
// // // //   const signingInRef = useRef(false);
// // // //   const loginWithGoogle = useCallback(async () => {
// // // //     if (signingInRef.current) return;
// // // //     signingInRef.current = true;
// // // //     try {
// // // //       const res = await signInWithPopup(auth, googleProvider);
// // // //       return res.user;
// // // //     } catch (err) {
// // // //       const code = err?.code || "";
// // // //       const msg = (err?.message || "").toLowerCase();
// // // //       const popupBlockedOrPending =
// // // //         code === "auth/popup-blocked" ||
// // // //         code === "auth/cancelled-popup-request" ||
// // // //         msg.includes("pending promise");

// // // //       if (popupBlockedOrPending) {
// // // //         await signInWithRedirect(auth, googleProvider);
// // // //         return;
// // // //       }
// // // //       if (code === "auth/popup-closed-by-user") return;
// // // //       throw err;
// // // //     } finally {
// // // //       signingInRef.current = false;
// // // //     }
// // // //   }, []);

// // // //   // Link Google to existing account
// // // //   const linkGoogleToCurrentUser = useCallback(async () => {
// // // //     if (!auth.currentUser) throw new Error("Sign in first to link Google.");
// // // //     await linkWithPopup(auth.currentUser, googleProvider);
// // // //     return auth.currentUser;
// // // //   }, []);

// // // //   // Link password to Google account
// // // //   const linkPasswordToCurrentUser = useCallback(async (newPassword) => {
// // // //     if (!auth.currentUser?.email) {
// // // //       throw new Error("Sign in first, then set a password.");
// // // //     }
// // // //     const e = normEmail(auth.currentUser.email);
// // // //     const cred = EmailAuthProvider.credential(e, newPassword);
// // // //     await linkWithCredential(auth.currentUser, cred);
// // // //     return auth.currentUser;
// // // //   }, []);

// // // //   // Reset password
// // // //   const resetPassword = useCallback(
// // // //     (email) => sendPasswordResetEmail(auth, normEmail(email)),
// // // //     []
// // // //   );

// // // //   // Logout
// // // //   const logout = useCallback(() => signOut(auth), []);

// // // //   // Update display name
// // // //   const updateDisplayName = useCallback(async (name) => {
// // // //     if (auth.currentUser && name) {
// // // //       await updateProfile(auth.currentUser, { displayName: name });
// // // //       setUser({ ...auth.currentUser });
// // // //     }
// // // //   }, []);

// // // //   const value = useMemo(
// // // //     () => ({
// // // //       user,
// // // //       loading,
// // // //       loginEmail,
// // // //       signupEmail,
// // // //       resetPassword,
// // // //       linkPasswordToCurrentUser,
// // // //       loginWithGoogle,
// // // //       linkGoogleToCurrentUser,
// // // //       updateDisplayName,
// // // //       logout,
// // // //     }),
// // // //     [
// // // //       user,
// // // //       loading,
// // // //       loginEmail,
// // // //       signupEmail,
// // // //       resetPassword,
// // // //       linkPasswordToCurrentUser,
// // // //       loginWithGoogle,
// // // //       linkGoogleToCurrentUser,
// // // //       updateDisplayName,
// // // //       logout,
// // // //     ]
// // // //   );

// // // //   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// // // // }

// // // // export function useAuth() {
// // // //   const ctx = useContext(AuthContext);
// // // //   if (ctx === null) throw new Error("useAuth() must be used within <AuthProvider>");
// // // //   return ctx;
// // // // }

// // // // export function getInitials(u) {
// // // //   const name = u?.displayName?.trim() || u?.email?.split("@")[0] || "";
// // // //   if (!name) return "PP";
// // // //   return (
// // // //     name
// // // //       .split(/\s+/)
// // // //       .slice(0, 2)
// // // //       .map((p) => p[0]?.toUpperCase())
// // // //       .join("") || "PP"
// // // //   );
// // // // }





// // // // import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
// // // // import {
// // // //   createUserWithEmailAndPassword,
// // // //   signInWithEmailAndPassword,
// // // //   signInWithPopup,
// // // //   signOut,
// // // //   onAuthStateChanged,
// // // //   fetchSignInMethodsForEmail
// // // // } from "firebase/auth";
// // // // import { auth, googleProvider } from "../firebase";

// // // // const AuthContext = createContext();

// // // // export function useAuth() {
// // // //   return useContext(AuthContext);
// // // // }

// // // // export function AuthProvider({ children }) {
// // // //   const [currentUser, setCurrentUser] = useState(null);
// // // //   const [loading, setLoading] = useState(true);

// // // //   // Sign up with email & password
// // // //   const signupEmail = async (email, password) => {
// // // //     return createUserWithEmailAndPassword(auth, email, password);
// // // //   };

// // // //   // Sign in with email & password (with provider check)
// // // //   const loginEmail = async (email, password) => {
// // // //     const methods = await fetchSignInMethodsForEmail(auth, email);

// // // //     if (methods.length === 0) {
// // // //       throw { code: "auth/user-not-found", message: "No account found. Please sign up." };
// // // //     }
// // // //     if (!methods.includes("password") && methods.includes("google.com")) {
// // // //       throw { code: "auth/provider-mismatch-google", message: "This email is registered with Google. Please sign in with Google." };
// // // //     }

// // // //     return signInWithEmailAndPassword(auth, email, password);
// // // //   };

// // // //   // Sign in with Google
// // // //   const loginGoogle = async () => {
// // // //     return signInWithPopup(auth, googleProvider);
// // // //   };

// // // //   // Logout
// // // //   const logout = () => {
// // // //     return signOut(auth);
// // // //   };

// // // //   // Track auth state
// // // //   useEffect(() => {
// // // //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// // // //       setCurrentUser(user);
// // // //       setLoading(false);
// // // //     });
// // // //     return unsubscribe;
// // // //   }, []);

// // // //   const value = {
// // // //     currentUser,
// // // //     signupEmail,
// // // //     loginEmail,
// // // //     loginGoogle,
// // // //     logout
// // // //   };

// // // //   return (
// // // //     <AuthContext.Provider value={value}>
// // // //       {!loading && children}
// // // //     </AuthContext.Provider>
// // // //   );
// // // // }





// // // import React, { createContext, useContext, useState, useEffect } from "react";
// // // import {
// // //   createUserWithEmailAndPassword,
// // //   signInWithEmailAndPassword,
// // //   signInWithPopup,
// // //   signOut,
// // //   onAuthStateChanged,
// // //   fetchSignInMethodsForEmail
// // // } from "firebase/auth";
// // // import { auth, googleProvider } from "../firebase";

// // // const AuthContext = createContext();

// // // export function useAuth() {
// // //   return useContext(AuthContext);
// // // }

// // // // ✅ Added helper function for Navbar
// // // export function getInitials(name) {
// // //   if (!name) return "";
// // //   return name
// // //     .split(" ")
// // //     .map((n) => n[0].toUpperCase())
// // //     .join("");
// // // }

// // // export function AuthProvider({ children }) {
// // //   const [currentUser, setCurrentUser] = useState(null);
// // //   const [loading, setLoading] = useState(true);

// // //   const signupEmail = async (email, password) => {
// // //     return createUserWithEmailAndPassword(auth, email, password);
// // //   };

// // //   const loginEmail = async (email, password) => {
// // //     const methods = await fetchSignInMethodsForEmail(auth, email);
// // //     if (methods.length === 0) {
// // //       throw { code: "auth/user-not-found", message: "No account found. Please sign up." };
// // //     }
// // //     if (!methods.includes("password") && methods.includes("google.com")) {
// // //       throw { code: "auth/provider-mismatch-google", message: "This email is registered with Google. Please sign in with Google." };
// // //     }
// // //     return signInWithEmailAndPassword(auth, email, password);
// // //   };

// // //   const loginGoogle = async () => {
// // //     return signInWithPopup(auth, googleProvider);
// // //   };

// // //   const logout = () => {
// // //     return signOut(auth);
// // //   };

// // //   useEffect(() => {
// // //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// // //       setCurrentUser(user);
// // //       setLoading(false);
// // //     });
// // //     return unsubscribe;
// // //   }, []);

// // //   const value = {
// // //     currentUser,
// // //     signupEmail,
// // //     loginEmail,
// // //     loginGoogle,
// // //     logout
// // //   };

// // //   return (
// // //     <AuthContext.Provider value={value}>
// // //       {!loading && children}
// // //     </AuthContext.Provider>
// // //   );
// // // }





// // // import React, { createContext, useContext, useState, useEffect } from "react";
// // // import {
// // //   createUserWithEmailAndPassword,
// // //   signInWithEmailAndPassword,
// // //   signInWithPopup,
// // //   signOut,
// // //   onAuthStateChanged,
// // //   fetchSignInMethodsForEmail,
// // //   updateProfile
// // // } from "firebase/auth";
// // // import { auth, googleProvider } from "../firebase";

// // // const AuthContext = createContext();

// // // export function useAuth() {
// // //   return useContext(AuthContext);
// // // }

// // // // ✅ Helper for Navbar initials
// // // export function getInitials(name) {
// // //   if (!name) return "";
// // //   return name
// // //     .split(" ")
// // //     .map((n) => n[0].toUpperCase())
// // //     .join("");
// // // }

// // // export function AuthProvider({ children }) {
// // //   const [currentUser, setCurrentUser] = useState(null);
// // //   const [loading, setLoading] = useState(true);

// // //   // ✅ Signup with Name, Email, and Password
// // //   const signupEmail = async (name, email, password) => {
// // //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // //     await updateProfile(userCredential.user, { displayName: name });
// // //     return userCredential;
// // //   };

// // //   const loginEmail = async (email, password) => {
// // //     const methods = await fetchSignInMethodsForEmail(auth, email);
// // //     if (methods.length === 0) {
// // //       throw { code: "auth/user-not-found", message: "No account found. Please sign up." };
// // //     }
// // //     if (!methods.includes("password") && methods.includes("google.com")) {
// // //       throw { code: "auth/provider-mismatch-google", message: "This email is registered with Google. Please sign in with Google." };
// // //     }
// // //     return signInWithEmailAndPassword(auth, email, password);
// // //   };

// // //   const loginGoogle = async () => {
// // //     return signInWithPopup(auth, googleProvider);
// // //   };

// // //   const logout = () => {
// // //     return signOut(auth);
// // //   };

// // //   useEffect(() => {
// // //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// // //       setCurrentUser(user);
// // //       setLoading(false);
// // //     });
// // //     return unsubscribe;
// // //   }, []);

// // //   const value = {
// // //     currentUser,
// // //     signupEmail,
// // //     loginEmail,
// // //     loginGoogle,
// // //     logout
// // //   };

// // //   return (
// // //     <AuthContext.Provider value={value}>
// // //       {!loading && children}
// // //     </AuthContext.Provider>
// // //   );
// // // }





// // // // src/auth/AuthContext.jsx
// // // import React, { useContext, useState, useEffect, createContext } from "react";
// // // import { auth, db, googleProvider } from "../firebase";
// // // import {
// // //   createUserWithEmailAndPassword,
// // //   signInWithEmailAndPassword,
// // //   signInWithPopup,
// // //   signOut,
// // //   updateProfile,
// // //   onAuthStateChanged,
// // // } from "firebase/auth";
// // // import { doc, setDoc } from "firebase/firestore";

// // // const AuthContext = createContext();
// // // export const useAuth = () => useContext(AuthContext);

// // // export const AuthProvider = ({ children }) => {
// // //   const [currentUser, setCurrentUser] = useState(null);
// // //   const [loading, setLoading] = useState(true);

// // //   // ✅ Signup with Email & Password + Name
// // //   const signupEmail = async (name, email, password) => {
// // //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // //     await updateProfile(userCredential.user, { displayName: name });

// // //     // Store user data in Firestore
// // //     await setDoc(doc(db, "users", userCredential.user.uid), {
// // //       name,
// // //       email,
// // //       createdAt: new Date(),
// // //     });

// // //     setCurrentUser({
// // //       ...userCredential.user,
// // //       displayName: name,
// // //     });
// // //     return userCredential;
// // //   };

// // //   // ✅ Login with Email & Password
// // //   const loginEmail = (email, password) => {
// // //     return signInWithEmailAndPassword(auth, email, password);
// // //   };

// // //   // ✅ Google Sign-in
// // //   const loginWithGoogle = async () => {
// // //     const result = await signInWithPopup(auth, googleProvider);
// // //     const user = result.user;

// // //     // Store or update user in Firestore
// // //     await setDoc(doc(db, "users", user.uid), {
// // //       name: user.displayName,
// // //       email: user.email,
// // //       photoURL: user.photoURL,
// // //       createdAt: new Date(),
// // //     }, { merge: true });

// // //     setCurrentUser(user);
// // //     return user;
// // //   };

// // //   // ✅ Logout
// // //   const logout = () => signOut(auth);

// // //   // ✅ Listen for Auth changes
// // //   useEffect(() => {
// // //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// // //       setCurrentUser(user);
// // //       setLoading(false);
// // //     });
// // //     return unsubscribe;
// // //   }, []);

// // //   const value = {
// // //     currentUser,
// // //     signupEmail,
// // //     loginEmail,
// // //     loginWithGoogle,
// // //     logout,
// // //   };

// // //   return (
// // //     <AuthContext.Provider value={value}>
// // //       {!loading && children}
// // //     </AuthContext.Provider>
// // //   );
// // // };




// // // src/auth/AuthContext.jsx
// // import React, { useContext, useState, useEffect, createContext } from "react";
// // import { auth, db, googleProvider } from "../firebase";
// // import {
// //   createUserWithEmailAndPassword,
// //   signInWithEmailAndPassword,
// //   signInWithPopup,
// //   signOut,
// //   updateProfile,
// //   onAuthStateChanged,
// // } from "firebase/auth";
// // import { doc, setDoc } from "firebase/firestore";

// // const AuthContext = createContext();
// // export const useAuth = () => useContext(AuthContext);

// // // ✅ Helper: Get initials from name
// // export const getInitials = (name) => {
// //   if (!name) return "";
// //   return name
// //     .split(" ")
// //     .map((word) => word[0].toUpperCase())
// //     .join("");
// // };

// // export const AuthProvider = ({ children }) => {
// //   const [currentUser, setCurrentUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   // ✅ Signup with Email & Password + Name
// //   const signupEmail = async (name, email, password) => {
// //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// //     await updateProfile(userCredential.user, { displayName: name });

// //     // Store user data in Firestore
// //     await setDoc(doc(db, "users", userCredential.user.uid), {
// //       name,
// //       email,
// //       createdAt: new Date(),
// //     });

// //     setCurrentUser({
// //       ...userCredential.user,
// //       displayName: name,
// //     });
// //     return userCredential;
// //   };

// //   // ✅ Login with Email & Password
// //   const loginEmail = (email, password) => {
// //     return signInWithEmailAndPassword(auth, email, password);
// //   };

// //   // ✅ Google Sign-in
// //   const loginWithGoogle = async () => {
// //     const result = await signInWithPopup(auth, googleProvider);
// //     const user = result.user;

// //     // Store or update user in Firestore
// //     await setDoc(doc(db, "users", user.uid), {
// //       name: user.displayName,
// //       email: user.email,
// //       photoURL: user.photoURL,
// //       createdAt: new Date(),
// //     }, { merge: true });

// //     setCurrentUser(user);
// //     return user;
// //   };

// //   // ✅ Logout
// //   const logout = () => signOut(auth);

// //   // ✅ Listen for Auth changes
// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// //       setCurrentUser(user);
// //       setLoading(false);
// //     });
// //     return unsubscribe;
// //   }, []);

// //   const value = {
// //     currentUser,
// //     signupEmail,
// //     loginEmail,
// //     loginWithGoogle,
// //     logout,
// //   };

// //   return (
// //     <AuthContext.Provider value={value}>
// //       {!loading && children}
// //     </AuthContext.Provider>
// //   );
// // };





// // // src/auth/AuthContext.jsx
// // import React, { useContext, useState, useEffect, createContext } from "react";
// // import { auth, db, googleProvider } from "../firebase";
// // import {
// //   createUserWithEmailAndPassword,
// //   signInWithEmailAndPassword,
// //   signInWithPopup,
// //   signOut,
// //   updateProfile,
// //   onAuthStateChanged,
// // } from "firebase/auth";
// // import { doc, setDoc } from "firebase/firestore";

// // const AuthContext = createContext();
// // export const useAuth = () => useContext(AuthContext);

// // // ✅ Utility: get initials from name
// // export const getInitials = (name) => {
// //   if (!name) return "";
// //   return name
// //     .split(" ")
// //     .map((n) => n[0]?.toUpperCase())
// //     .join("");
// // };

// // export const AuthProvider = ({ children }) => {
// //   const [currentUser, setCurrentUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   const signupEmail = async (name, email, password) => {
// //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// //     await updateProfile(userCredential.user, { displayName: name });

// //     await setDoc(doc(db, "users", userCredential.user.uid), {
// //       name,
// //       email,
// //       createdAt: new Date(),
// //     });

// //     setCurrentUser({
// //       ...userCredential.user,
// //       displayName: name,
// //     });
// //     return userCredential;
// //   };

// //   const loginEmail = (email, password) => {
// //     return signInWithEmailAndPassword(auth, email, password);
// //   };

// //   const loginWithGoogle = async () => {
// //     const result = await signInWithPopup(auth, googleProvider);
// //     const user = result.user;

// //     await setDoc(doc(db, "users", user.uid), {
// //       name: user.displayName,
// //       email: user.email,
// //       photoURL: user.photoURL,
// //       createdAt: new Date(),
// //     }, { merge: true });

// //     setCurrentUser(user);
// //     return user;
// //   };

// //   const logout = () => signOut(auth);

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// //       setCurrentUser(user);
// //       setLoading(false);
// //     });
// //     return unsubscribe;
// //   }, []);

// //   const value = {
// //     currentUser,
// //     signupEmail,
// //     loginEmail,
// //     loginWithGoogle,
// //     logout,
// //   };

// //   return (
// //     <AuthContext.Provider value={value}>
// //       {!loading && children}
// //     </AuthContext.Provider>
// //   );
// // };




// // src/auth/AuthContext.jsx
// import React, { createContext, useContext, useEffect, useState } from "react";
// import { auth, googleProvider } from "../firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   linkWithCredential,
//   EmailAuthProvider,
//   updateProfile,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";

// const AuthContext = createContext();
// export const useAuth = () => useContext(AuthContext);

// export const getInitials = (user) => {
//   if (!user?.displayName) return user?.email?.[0].toUpperCase() || "";
//   return user.displayName
//     .split(" ")
//     .map((n) => n[0])
//     .join("");
// };

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const signupEmail = async (name, email, password) => {
//     const userCred = await createUserWithEmailAndPassword(auth, email, password);
//     await updateProfile(userCred.user, { displayName: name });
//     setCurrentUser({ ...userCred.user, displayName: name });
//     return userCred.user;
//   };

//   const loginEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

//   const loginWithGoogle = async () => {
//     const result = await signInWithPopup(auth, googleProvider);
//     const user = result.user;

//     // If password login not yet linked, prompt user
//     const hasPassword = user.providerData.some((p) => p.providerId === "password");
//     if (!hasPassword) {
//       const pwd = prompt("Set a password for future normal login:");
//       if (pwd) {
//         const credential = EmailAuthProvider.credential(user.email, pwd);
//         await linkWithCredential(user, credential);
//       }
//     }

//     setCurrentUser(user);
//     return user;
//   };

//   const logout = () => signOut(auth);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsub;
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser, signupEmail, loginEmail, loginWithGoogle, logout, loading }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };





// // src/auth/AuthContext.jsx
// import React, { createContext, useContext, useEffect, useState } from "react";
// import { auth, googleProvider } from "../firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   linkWithCredential,
//   EmailAuthProvider,
//   updateProfile,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";

// const AuthContext = createContext();
// export const useAuth = () => useContext(AuthContext);

// export const getInitials = (user) => {
//   if (!user?.displayName) return user?.email?.[0].toUpperCase() || "";
//   return user.displayName
//     .split(" ")
//     .map((n) => n[0])
//     .join("");
// };

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const signupEmail = async (name, email, password) => {
//     const userCred = await createUserWithEmailAndPassword(auth, email, password);
//     await updateProfile(userCred.user, { displayName: name });
//     setCurrentUser({ ...userCred.user, displayName: name });
//     return userCred.user;
//   };

//   const loginEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

//   const loginWithGoogle = async () => {
//     const result = await signInWithPopup(auth, googleProvider);
//     const user = result.user;

//     // Prompt user to set password if email/password not linked yet
//     const hasPassword = user.providerData.some((p) => p.providerId === "password");
//     if (!hasPassword) {
//       const pwd = prompt("Set a password for future normal login:");
//       if (pwd) {
//         const credential = EmailAuthProvider.credential(user.email, pwd);
//         await linkWithCredential(user, credential);
//       }
//     }

//     setCurrentUser(user);
//     return user;
//   };

//   const logout = () => signOut(auth);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsub;
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser, signupEmail, loginEmail, loginWithGoogle, logout, loading }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };




// // src/auth/AuthContext.jsx
// import React, { createContext, useContext, useEffect, useState } from "react";
// import { auth, googleProvider } from "../firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   linkWithCredential,
//   EmailAuthProvider,
//   updateProfile,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";

// const AuthContext = createContext();
// export const useAuth = () => useContext(AuthContext);

// export const getInitials = (user) => {
//   if (!user?.displayName) return user?.email?.[0].toUpperCase() || "";
//   return user.displayName
//     .split(" ")
//     .map((n) => n[0])
//     .join("");
// };

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Email/Password Signup
//   const signupEmail = async (name, email, password) => {
//     const userCred = await createUserWithEmailAndPassword(auth, email, password);
//     await updateProfile(userCred.user, { displayName: name });
//     setCurrentUser({ ...userCred.user, displayName: name });
//     return userCred.user;
//   };

//   // Email/Password Login
//   const loginEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

//   // Google Login
//   const loginWithGoogle = async () => {
//     const result = await signInWithPopup(auth, googleProvider);
//     const user = result.user;

//     // Prompt user to set password if not linked
//     const hasPassword = user.providerData.some((p) => p.providerId === "password");
//     if (!hasPassword) {
//       const pwd = prompt("Set a password for future login:");
//       if (pwd) {
//         const credential = EmailAuthProvider.credential(user.email, pwd);
//         await linkWithCredential(user, credential);
//       }
//     }

//     setCurrentUser(user);
//     return user;
//   };

//   // Logout
//   const logout = () => signOut(auth);

//   // Track auth state
//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsub;
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{ currentUser, signupEmail, loginEmail, loginWithGoogle, logout, loading }}
//     >
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };




// import React, { createContext, useContext, useEffect, useState } from "react";
// import { auth, googleProvider } from "../firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   linkWithCredential,
//   EmailAuthProvider,
//   updateProfile,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";

// const AuthContext = createContext();
// export const useAuth = () => useContext(AuthContext);

// export const getInitials = (user) => {
//   if (!user?.displayName) return user?.email?.[0].toUpperCase() || "";
//   return user.displayName
//     .split(" ")
//     .map((n) => n[0])
//     .join("");
// };

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const signupEmail = async (name, email, password) => {
//     const userCred = await createUserWithEmailAndPassword(auth, email, password);
//     await updateProfile(userCred.user, { displayName: name });
//     setCurrentUser({ ...userCred.user, displayName: name });
//     return userCred.user;
//   };

//   const loginEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

//   const loginWithGoogle = async () => {
//     const result = await signInWithPopup(auth, googleProvider);
//     const user = result.user;

//     // Link password if not set yet
//     const hasPassword = user.providerData.some((p) => p.providerId === "password");
//     if (!hasPassword) {
//       const pwd = prompt("Set a password for future login:");
//       if (pwd) {
//         const credential = EmailAuthProvider.credential(user.email, pwd);
//         await linkWithCredential(user, credential);
//       }
//     }

//     setCurrentUser(user);
//     return user;
//   };

//   const logout = () => signOut(auth);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsub;
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser, signupEmail, loginEmail, loginWithGoogle, logout, loading }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };





// import React, { createContext, useContext, useEffect, useState } from "react";
// import { auth, googleProvider } from "../firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   linkWithCredential,
//   EmailAuthProvider,
//   updateProfile,
//   signOut,
//   onAuthStateChanged,
//   fetchSignInMethodsForEmail
// } from "firebase/auth";

// const AuthContext = createContext();
// export const useAuth = () => useContext(AuthContext);

// // Utility to get initials from displayName or email
// export const getInitials = (user) => {
//   if (!user?.displayName) return user?.email?.[0]?.toUpperCase() || "";
//   return user.displayName
//     .split(" ")
//     .map((n) => n[0])
//     .join("");
// };

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Email/Password signup
//   const signupEmail = async (name, email, password) => {
//     try {
//       const userCred = await createUserWithEmailAndPassword(auth, email, password);
//       await updateProfile(userCred.user, { displayName: name });
//       setCurrentUser({ ...userCred.user, displayName: name });
//       return userCred.user;
//     } catch (err) {
//       throw err;
//     }
//   };

//   // Email/Password login
//   const loginEmail = async (email, password) => {
//     try {
//       const methods = await fetchSignInMethodsForEmail(auth, email);
//       if (methods.includes("google.com") && !methods.includes("password")) {
//         throw new Error("This email is registered via Google. Please login with Google or set a password via Google login first.");
//       }
//       return await signInWithEmailAndPassword(auth, email, password);
//     } catch (err) {
//       throw err;
//     }
//   };

//   // Google login
//   const loginWithGoogle = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;

//       // Check if email/password is not linked
//       const methods = await fetchSignInMethodsForEmail(auth, user.email);
//       if (!methods.includes("password")) {
//         const pwd = prompt("Set a password for future email/password login:");
//         if (pwd) {
//           const credential = EmailAuthProvider.credential(user.email, pwd);
//           await linkWithCredential(user, credential);
//         }
//       }

//       setCurrentUser(user);
//       return user;
//     } catch (err) {
//       throw err;
//     }
//   };

//   // Logout
//   const logout = async () => {
//     await signOut(auth);
//     setCurrentUser(null);
//   };

//   // Listen to auth state changes
//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsub;
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         currentUser,
//         signupEmail,
//         loginEmail,
//         loginWithGoogle,
//         logout,
//         loading
//       }}
//     >
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };




// // src/auth/AuthContext.jsx
// import React, { createContext, useContext, useEffect, useState } from "react";
// import { auth, googleProvider } from "../firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   linkWithCredential,
//   EmailAuthProvider,
//   updateProfile,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";

// const AuthContext = createContext();
// export const useAuth = () => useContext(AuthContext);

// // Helper to get initials
// export const getInitials = (user) => {
//   if (!user?.displayName) return user?.email?.[0].toUpperCase() || "";
//   return user.displayName
//     .split(" ")
//     .map((n) => n[0])
//     .join("");
// };

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Signup with email/password
//   const signupEmail = async (name, email, password) => {
//     const userCred = await createUserWithEmailAndPassword(auth, email, password);
//     await updateProfile(userCred.user, { displayName: name });
//     setCurrentUser({ ...userCred.user, displayName: name });
//     return userCred.user;
//   };

//   // Login with email/password
//   const loginEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

//   // Login with Google (fix provider-already-linked)
//   const loginWithGoogle = async () => {
//     const result = await signInWithPopup(auth, googleProvider);
//     const user = result.user;

//     // Only link password if not already linked
//     const hasPassword = user.providerData.some((p) => p.providerId === "password");
//     if (!hasPassword) {
//       const pwd = prompt("Set a password for future normal login:");
//       if (pwd) {
//         try {
//           const credential = EmailAuthProvider.credential(user.email, pwd);
//           await linkWithCredential(user, credential);
//         } catch (error) {
//           if (error.code !== "auth/provider-already-linked") {
//             console.error("Error linking password:", error);
//           }
//         }
//       }
//     }

//     setCurrentUser(user);
//     return user;
//   };

//   // Logout
//   const logout = () => signOut(auth);

//   // Listen for auth state changes
//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsub;
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         currentUser,
//         signupEmail,
//         loginEmail,
//         loginWithGoogle,
//         logout,
//         loading,
//       }}
//     >
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };






// import React, { createContext, useContext, useEffect, useState } from "react";
// import { auth, googleProvider } from "../firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   linkWithCredential,
//   EmailAuthProvider,
//   updateProfile,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";

// const AuthContext = createContext();
// export const useAuth = () => useContext(AuthContext);

// export const getInitials = (user) => {
//   if (!user?.displayName) return user?.email?.[0].toUpperCase() || "";
//   return user.displayName
//     .split(" ")
//     .map((n) => n[0])
//     .join("");
// };

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const signupEmail = async (name, email, password) => {
//     const userCred = await createUserWithEmailAndPassword(auth, email, password);
//     await updateProfile(userCred.user, { displayName: name });
//     setCurrentUser({ ...userCred.user, displayName: name });
//     return userCred.user;
//   };

//   const loginEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

//   const loginWithGoogle = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;

//       // Prompt to set password if not linked
//       const hasPassword = user.providerData.some((p) => p.providerId === "password");
//       if (!hasPassword) {
//         const pwd = prompt("Set a password for future login:");
//         if (pwd) {
//           const credential = EmailAuthProvider.credential(user.email, pwd);
//           await linkWithCredential(user, credential);
//         }
//       }

//       setCurrentUser(user);
//       return user;
//     } catch (error) {
//       if (error.code === "auth/popup-closed-by-user") {
//         alert("You closed the login popup. Please try again.");
//       } else if (error.code === "auth/provider-already-linked") {
//         alert("This Google account is already linked with another login method.");
//       } else {
//         console.error(error);
//         alert("Login failed. See console for details.");
//       }
//       throw error; // re-throw if needed elsewhere
//     }
//   };

//   const logout = () => signOut(auth);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsub;
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         currentUser,
//         signupEmail,
//         loginEmail,
//         loginWithGoogle,
//         logout,
//         loading,
//       }}
//     >
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };





// import React, { createContext, useContext, useEffect, useState } from "react";
// import { auth, googleProvider } from "../firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   linkWithCredential,
//   EmailAuthProvider,
//   updateProfile,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";

// const AuthContext = createContext();
// export const useAuth = () => useContext(AuthContext);

// export const getInitials = (user) => {
//   if (!user?.displayName) return user?.email?.[0].toUpperCase() || "";
//   return user.displayName
//     .split(" ")
//     .map((n) => n[0])
//     .join("");
// };

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const signupEmail = async (name, email, password) => {
//     const userCred = await createUserWithEmailAndPassword(auth, email, password);
//     await updateProfile(userCred.user, { displayName: name });
//     setCurrentUser({ ...userCred.user, displayName: name });
//     return userCred.user;
//   };

//   const loginEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

//   const loginWithGoogle = async () => {
//     const result = await signInWithPopup(auth, googleProvider);
//     const user = result.user;

//     // Automatically prompt user to set a password if not linked
//     const hasPassword = user.providerData.some((p) => p.providerId === "password");
//     if (!hasPassword) {
//       let pwd = "";
//       while (!pwd) {
//         pwd = prompt(
//           `Welcome ${user.displayName || user.email}! Please set a password for future email login:`
//         );
//       }
//       const credential = EmailAuthProvider.credential(user.email, pwd);
//       await linkWithCredential(user, credential);
//     }

//     setCurrentUser(user);
//     return user;
//   };

//   const logout = () => signOut(auth);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsub;
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser, signupEmail, loginEmail, loginWithGoogle, logout, loading }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };








import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  linkWithCredential,
  EmailAuthProvider,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Create context
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// Get user initials
export const getInitials = (user) => {
  if (!user?.displayName) return user?.email?.[0]?.toUpperCase() || "";
  return user.displayName
    .split(" ")
    .map((n) => n[0])
    .join("");
};

// Provider
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /** Sign up with email */
  const signupEmail = async (name, email, password) => {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCred.user, { displayName: name });
    setCurrentUser({ ...userCred.user, displayName: name });
    return userCred.user;
  };

  /** Login with email */
  const loginEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

  /** Login with Google */
  const loginWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // Link with email/password if Google-only
    const hasPassword = user.providerData.some((p) => p.providerId === "password");
    if (!hasPassword) {
      let pwd = "";
      while (!pwd) {
        pwd = prompt(
          `Welcome ${user.displayName || user.email}! Please set a password for future email login:`
        );
      }
      const credential = EmailAuthProvider.credential(user.email, pwd);
      await linkWithCredential(user, credential);
    }

    setCurrentUser(user);
    return user;
  };

  /** Logout */
  const logout = () => signOut(auth).then(() => setCurrentUser(null));

  /** Listen to auth state changes */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsub;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signupEmail,
        loginEmail,
        loginWithGoogle,
        logout,
        loading,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
