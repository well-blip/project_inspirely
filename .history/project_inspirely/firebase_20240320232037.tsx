import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDhX2DQRygn-KuM7VC6Xp0SmV6psZAB1cs",
  authDomain: "project-inspirely.firebaseapp.com",
  projectId: "project-inspirely",
  storageBucket: "project-inspirely.appspot.com",
  messagingSenderId: "541004153858",
  appId: "1:541004153858:web:d8a81c4a0883d49b73d31b",
  measurementId: "G-MDH4Z659K2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const CollectionRef =
