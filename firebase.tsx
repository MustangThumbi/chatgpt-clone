// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9k4SIWSwAqiLJLdwC2-kOSCBYfAZPBco",
  authDomain: "chat-gpt-clone-35b8f.firebaseapp.com",
  projectId: "chat-gpt-clone-35b8f",
  storageBucket: "chat-gpt-clone-35b8f.appspot.com",
  messagingSenderId: "307292121630",
  appId: "1:307292121630:web:9ac8891ffc08da4869dc0f",
  measurementId: "G-G6B0CKX6NN"
};

// Initialize Firebase
const app = getApps().length ? getApp(): initializeApp(firebaseConfig);
const db =getFirestore(app);

export default db;
