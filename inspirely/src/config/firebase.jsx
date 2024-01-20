import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA-D38NBCBLIGqVXUy1ZU3Ar40kGFVQFeA",
    authDomain: "inspirely-213.firebaseapp.com",
    projectId: "inspirely-213",
    storageBucket: "inspirely-213.appspot.com",
    messagingSenderId: "1090905298711",
    appId: "1:1090905298711:web:02476dcc60fcdf08d50952"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default firebase;