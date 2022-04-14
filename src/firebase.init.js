// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhsZ2YTRS10W5sXXJninbpmiWGw2TJUvQ",
  authDomain: "router-firebase-auvee.firebaseapp.com",
  projectId: "router-firebase-auvee",
  storageBucket: "router-firebase-auvee.appspot.com",
  messagingSenderId: "344559672482",
  appId: "1:344559672482:web:a0dcc8cabc80cc82ebcbfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app