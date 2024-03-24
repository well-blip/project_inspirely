import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import app from "../../../../../project_inspirely/docColab/src/firebaseConfig";

const firebaseConfig = {
  apiKey: "AIzaSyCDdIHBM4K_YLMW4Zax__sCOcGHloym6XY",
  authDomain: "inspirely-project.firebaseapp.com",
  projectId: "inspirely-project",
  storageBucket: "inspirely-project.appspot.com",
  messagingSenderId: "17603880870",
  appId: "1:17603880870:web:4576ffc867172e5fc81167",
  measurementId: "G-WSCBT3MLHZ",
};

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
