// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHdIHnRUhNbQ9NaML-AlCrDYzVFe_zK6s",
  authDomain: "job-portal-ecebd.firebaseapp.com",
  projectId: "job-portal-ecebd",
  storageBucket: "job-portal-ecebd.appspot.com",
  messagingSenderId: "482610756491",
  appId: "1:482610756491:web:5b63ca1ca2c257852fcd8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app