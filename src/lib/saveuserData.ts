import { db } from "../firebaseConfig";
import { doc, setDoc, Timestamp } from "firebase/firestore";

type UserData = {
  uid: string;
  email: string | null;
  displayName?: string | null;
};

export async function saveUserData(user: UserData) {
  try {
    await setDoc(
      doc(db, "users", user.uid), // document path: users/{uid}
      {
        email: user.email,
        displayName: user.displayName || "",
        lastLogin: Timestamp.fromDate(new Date()), // ✅ Firestore timestamp
      },
      { merge: true } // merge = don’t overwrite existing fields
    );

    console.log("✅ User saved:", user.uid);
  } catch (error) {
    console.error("🔥 Error saving user:", error);
  }
}

