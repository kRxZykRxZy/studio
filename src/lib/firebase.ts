import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  projectId: "codeconnect-tpuwj",
  appId: "1:257347971134:web:3863d46c11f84e8a8cc96f",
  storageBucket: "codeconnect-tpuwj.firebasestorage.app",
  apiKey: "AIzaSyCL64RP5_dE60M1BJfIznzvi1InAKWilEw",
  authDomain: "codeconnect-tpuwj.firebaseapp.com",
  messagingSenderId: "257347971134",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
