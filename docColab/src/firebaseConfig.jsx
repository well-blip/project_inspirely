// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDdIHBM4K_YLMW4Zax__sCOcGHloym6XY",
  authDomain: "inspirely-project.firebaseapp.com",
  projectId: "inspirely-project",
  storageBucket: "inspirely-project.appspot.com",
  messagingSenderId: "17603880870",
  appId: "1:17603880870:web:4576ffc867172e5fc81167",
  measurementId: "G-WSCBT3MLHZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

const db = getFirestore(app);

export const addDocument = async (docData) => {
  try {
    const collectionRef = collection(db, "docColabFeature");
    const docRef = await addDoc(collectionRef, docData);
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

export const deleteDocument = async (docId) => {
  try {
    const docRef = doc(db, "docColabFeature", docId);
    await deleteDoc(docRef);
    console.log("Document deleted with ID: ", docId);
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error;
  }
};

export const fetchDocuments = async () => {
  try {
    const collectionRef = collection(db, "docColabFeature");
    const querySnapshot = await getDocs(collectionRef);
    const docs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return docs; // Returns an array of document objects
  } catch (error) {
    console.error("Error fetching documents: ", error);
    throw error;
  }
};
