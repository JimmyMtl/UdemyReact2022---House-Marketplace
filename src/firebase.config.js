// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEv-F00HVksWCa-sDM_5eyKyjeY_nSFSs",
  authDomain: "house-marketplace-app-777db.firebaseapp.com",
  projectId: "house-marketplace-app-777db",
  storageBucket: "house-marketplace-app-777db.appspot.com",
  messagingSenderId: "972616805586",
  appId: "1:972616805586:web:efb408426d3d86a2c8910b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
