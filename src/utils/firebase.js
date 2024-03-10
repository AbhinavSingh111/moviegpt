// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB02WVLWxWY_fhmZWRdQJipRWrxyn3CP7o",
  authDomain: "moviegpt-7a306.firebaseapp.com",
  projectId: "moviegpt-7a306",
  storageBucket: "moviegpt-7a306.appspot.com",
  messagingSenderId: "433588725724",
  appId: "1:433588725724:web:5880574b37da5fb6ce5119",
  measurementId: "G-ECL5W55PMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();