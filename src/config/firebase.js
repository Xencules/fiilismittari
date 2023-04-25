// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt7wcZ1k2Oj96TqSPFUHmqZha63GtDZDg",
  authDomain: "fiilismittari-oppari.firebaseapp.com",
  projectId: "fiilismittari-oppari",
  storageBucket: "fiilismittari-oppari.appspot.com",
  messagingSenderId: "254234386361",
  appId: "1:254234386361:web:d4056a2c4d9016856ca068",
  measurementId: "G-7FFG9MYDSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);