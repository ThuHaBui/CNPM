
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "hotel-edbc2.firebaseapp.com",
  projectId: "hotel-edbc2",
  storageBucket: "hotel-edbc2.appspot.com",
  messagingSenderId: "448836164413",
  appId: "1:448836164413:web:864ad4d22423dcfa05c354"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);