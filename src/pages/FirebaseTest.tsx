import React, { useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const FirebaseTest: React.FC = () => {
  useEffect(() => {
    // Try to read a collection (will succeed if connected)
    const testConnection = async () => {
      try {
        // Try to read a non-existent collection (no error if connected, just empty)
        const querySnapshot = await getDocs(collection(db, "test-connection"));
        console.log("Firebase Firestore connected! Docs count:", querySnapshot.size);
        alert("Firebase Firestore connected! Docs count: " + querySnapshot.size);
      } catch (e) {
        alert("Firebase connection failed! " + (e as Error).message);
      }
    };
    testConnection();
  }, []);

  return <div>Firebase Connection Test (check for alert)</div>;
};

export default FirebaseTest;
