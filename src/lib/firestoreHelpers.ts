import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

export async function saveUserData(user: { uid: string; email: string | null; displayName?: string | null }) {
  await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    displayName: user.displayName || "",
    lastLogin: new Date(),
  }, { merge: true });
}


// Store a session request in Firestore
export async function storeSessionRequest(data: {
  guruName: string;
  userName: string;
  userEmail: string;
  message?: string;
}) {
  const docRef = await addDoc(collection(db, "sessionRequests"), {
    ...data,
    createdAt: Timestamp.now(),
  });
  return docRef.id; // returns the new document ID
}