import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA-D38NBCBLIGqVXUy1ZU3Ar40kGFVQFeA",
  authDomain: "inspirely-213.firebaseapp.com",
  projectId: "inspirely-213",
  storageBucket: "inspirely-213.appspot.com",
  messagingSenderId: "1090905298711",
  appId: "1:1090905298711:web:02476dcc60fcdf08d50952"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
