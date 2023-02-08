// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkgst7oxhpdOdShWtnfg6N1hmfQbm_HPw",
  authDomain: "cookingtime-22d13.firebaseapp.com",
  projectId: "cookingtime-22d13",
  storageBucket: "cookingtime-22d13.appspot.com",
  messagingSenderId: "547351234056",
  appId: "1:547351234056:web:f0c56e4e7716c7073233bd",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
