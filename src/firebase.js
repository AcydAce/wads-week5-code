// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIlk92mxVsTJafkASo3Pc5kOMJkgkw8wU",
  authDomain: "wads-week5-code.firebaseapp.com",
  projectId: "wads-week5-code",
  storageBucket: "wads-week5-code.appspot.com",
  messagingSenderId: "426857276058",
  appId: "1:426857276058:web:176f837290ee3ef9507523",
  measurementId: "G-9SR2T3HL7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export{ database };