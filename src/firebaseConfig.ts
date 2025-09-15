// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace with your own Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyAs9lqgWlHQ53cKskjI-S7ro9VOBGWO7b0",
  authDomain: "hackathon-d8c89.firebaseapp.com",
  projectId: "hackathon-d8c89",
  storageBucket: "hackathon-d8c89.firebasestorage.app",
  messagingSenderId: "565164956030",
  appId: "1:565164956030:web:f8daf78b3eae56b51f7b2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services for use in your app
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

