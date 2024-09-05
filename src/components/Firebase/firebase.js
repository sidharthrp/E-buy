// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMIdvr-eoGF9dm96o6gks6YKNaomdRH8g",
  authDomain: "e-buy-f98ad.firebaseapp.com",
  projectId: "e-buy-f98ad",
  storageBucket: "e-buy-f98ad.appspot.com",
  messagingSenderId: "209261207268",
  appId: "1:209261207268:web:7b4b5f30f60795441ad6f1",
  measurementId: "G-3H0V13E103"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export {app, auth}