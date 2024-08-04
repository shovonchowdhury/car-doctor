// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlfYM1H_5vUGnVHaeBGARf1zQ3CLBnZx8",
  authDomain: "car-doctor-fc321.firebaseapp.com",
  projectId: "car-doctor-fc321",
  storageBucket: "car-doctor-fc321.appspot.com",
  messagingSenderId: "89024066519",
  appId: "1:89024066519:web:6e5487557d78544529d192"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;