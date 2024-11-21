// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANvfKklS99NnjxWhyBSrFXAi25sImcnNk",
  authDomain: "fir-e43b8.firebaseapp.com",
  projectId: "fir-e43b8",
  storageBucket: "fir-e43b8.firebasestorage.app",
  messagingSenderId: "37940501377",
  appId: "1:37940501377:web:08865e49bd09022e8d6680",
  measurementId: "G-M1XV6NTJDY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);