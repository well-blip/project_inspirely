import firebase from "firebase/app";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDhX2DQRygn-KuM7VC6Xp0SmV6psZAB1cs",
  authDomain: "project-inspirely.firebaseapp.com",
  projectId: "project-inspirely",
  storageBucket: "project-inspirely.appspot.com",
  messagingSenderId: "541004153858",
  appId: "G-MDH4Z659K2",
});

// initialize firestore service
const db = getFirestore();

// collection references

export const auth = app.auth();
export default app;
