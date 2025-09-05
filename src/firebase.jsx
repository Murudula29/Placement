// // src/firebase.js
// import { initializeApp, getApps, getApp } from "firebase/app";
// import {
//   getAuth,
//   setPersistence,
//   browserLocalPersistence,
//   GoogleAuthProvider,
// } from "firebase/auth";

// // Optional: if you plan to use Firestore later
// // import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET, // must be like "<project>.appspot.com"
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// // Ensure the session persists across tabs/reloads
// setPersistence(auth, browserLocalPersistence).catch(() => {});

// export const googleProvider = new GoogleAuthProvider();
// // export const db = getFirestore(app); // if/when needed







// // src/firebase.js
// import { initializeApp, getApps, getApp } from "firebase/app";
// import {
//   getAuth,
//   setPersistence,
//   browserLocalPersistence,
//   GoogleAuthProvider,
// } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// setPersistence(auth, browserLocalPersistence).catch(() => {});

// export const googleProvider = new GoogleAuthProvider();




// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAlSpKyfA7XKLEbm_AsiVEYP6CsNdIuFdY",
//   authDomain: "pppro-40bde.firebaseapp.com",
//   projectId: "pppro-40bde",
//   storageBucket: "pppro-40bde.appspot.com", // ✅ fixed ".app" to ".appspot.com"
//   messagingSenderId: "1004607652623",
//   appId: "1:1004607652623:web:61e7172205388e1b65347a"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);




// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAlSpKyfA7XKLEbm_AsiVEYP6CsNdIuFdY",
//   authDomain: "pppro-40bde.firebaseapp.com",
//   projectId: "pppro-40bde",
//   storageBucket: "pppro-40bde.appspot.com", // ✅ fixed ".app" to ".appspot.com"
//   messagingSenderId: "1004607652623",
//   appId: "1:1004607652623:web:61e7172205388e1b65347a"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);





// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Your config
// const firebaseConfig = {
//   apiKey: "AIzaSyAlSpKyfA7XKLEbm_AsiVEYP6CsNdIuFdY",
//   authDomain: "pppro-40bde.firebaseapp.com",
//   projectId: "pppro-40bde",
//   storageBucket: "pppro-40bde.firebasestorage.app",
//   messagingSenderId: "1004607652623",
//   appId: "1:1004607652623:web:61e7172205388e1b65347a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Auth
// export const auth = getAuth(app);

// // Google Provider
// export const googleProvider = new GoogleAuthProvider();

// // Firestore
// export const db = getFirestore(app);




// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAlSpKyfA7XKLEbm_AsiVEYP6CsNdIuFdY",
//   authDomain: "pppro-40bde.firebaseapp.com",
//   projectId: "pppro-40bde",
//   storageBucket: "pppro-40bde.appspot.com", // ✅ fixed storage bucket
//   messagingSenderId: "1004607652623",
//   appId: "1:1004607652623:web:61e7172205388e1b65347a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Auth
// export const auth = getAuth(app);

// // Google Provider
// export const googleProvider = new GoogleAuthProvider();

// // Firestore
// export const db = getFirestore(app);



// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // 🔑 Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyAlSpKyfA7XKLEbm_AsiVEYP6CsNdIuFdY",
//   authDomain: "pppro-40bde.firebaseapp.com",
//   projectId: "pppro-40bde",
//   storageBucket: "pppro-40bde.appspot.com",
//   messagingSenderId: "1004607652623",
//   appId: "1:1004607652623:web:61e7172205388e1b65347a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Firestore database
// export const db = getFirestore(app);

// // Authentication
// export const auth = getAuth(app);

// // Set default persistence to local (keeps user logged in after browser close)
// setPersistence(auth, browserLocalPersistence).catch((error) => {
//   console.error("Error setting auth persistence:", error);
// });

// // Google provider for sign-in
// export const googleProvider = new GoogleAuthProvider();




import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrnwwBmD8n2S5x56pb0wJxXgjbqVZTed0",
  authDomain: "plaza-447bc.firebaseapp.com",
  projectId: "plaza-447bc",
  storageBucket: "plaza-447bc.appspot.com",
  messagingSenderId: "998069754738",
  appId: "1:998069754738:web:3312fa51cb0c476246dbeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);

// Google Provider
export const googleProvider = new GoogleAuthProvider();

// Firestore
export const db = getFirestore(app);
