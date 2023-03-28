import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUea6sA1zNGyo9d5qcmQwT2PkGcqeIMoc",
  authDomain: "pokemon-manco.firebaseapp.com",
  projectId: "pokemon-manco",
  storageBucket: "pokemon-manco.appspot.com",
  messagingSenderId: "126858053656",
  appId: "1:126858053656:web:047f264e4e9fc2102e9b6d",
  measurementId: "G-1Y1GRLF8S2",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
