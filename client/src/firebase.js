// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDpmdnSny3M_57BL30JtJ7AKZvIl_avikY",
  authDomain: "mern-blog-308dc.firebaseapp.com",
  projectId: "mern-blog-308dc",
  storageBucket: "mern-blog-308dc.firebasestorage.app",
  messagingSenderId: "1001829801141",
  appId: "1:1001829801141:web:c060bd9d2d05018990f2fc",
  measurementId: "G-7M5KNHVF63"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
