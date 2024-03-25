import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore , collection,addDoc} from "firebase/firestore"

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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const collectionRef = collection(db, "meetings");
export const addDocument = async (docData) => {
  try {
    // Await the addDoc function and pass the collection reference and document data
    const docRef = await addDoc(collectionRef, docData);
    alert("Document written");
    return docRef; // You can return the document reference if needed
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Error adding document, see console")
    throw error; // Re-throw the error if you want to handle it outside this function
  }
};

