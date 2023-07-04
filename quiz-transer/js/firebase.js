// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANBjK_XIe61BEt2ctL1Sjl8fJyv-3uLLw",
  authDomain: "transer-db.firebaseapp.com",
  projectId: "transer-db",
  storageBucket: "transer-db.appspot.com",
  messagingSenderId: "155426852294",
  appId: "1:155426852294:web:073ea88e1d7585d8a976c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const saveTask = (date, name, lastname, cc, score) =>
  addDoc(collection(db, "scores"), { date, name, lastname, cc, score });

export const getTask = () => getDocs(collection(db, "scores"));

export const onGetTask = (callback) =>
  onSnapshot(collection(db, "scores"), callback);
