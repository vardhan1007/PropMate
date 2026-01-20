import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0oTPffRE6TFC7-UrzrfqBLFMLYFWPvWA",
  authDomain: "real-estate-app-22d25.firebaseapp.com",
  projectId: "real-estate-app-22d25",
  storageBucket: "real-estate-app-22d25.firebasestorage.app",
  messagingSenderId: "344307104074",
  appId: "1:344307104074:web:1617703920a6a82b8669b3"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
// CRITICAL: Ensure 'export' is added here
export const googleProvider = new GoogleAuthProvider();