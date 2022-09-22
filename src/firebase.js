// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-dKehTpOie_NNgvrKlWV6aCm6VDkEpIc",
  authDomain: "shopping-app-fb85f.firebaseapp.com",
  projectId: "shopping-app-fb85f",
  storageBucket: "shopping-app-fb85f.appspot.com",
  messagingSenderId: "323619032114",
  appId: "1:323619032114:web:ea80e7c2fbd2ea3064c02b",
  measurementId: "G-NBG0D3D17K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);