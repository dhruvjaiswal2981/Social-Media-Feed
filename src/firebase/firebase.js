// firebase.js (or firebaseConfig.js)
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALIYOXHIdMFQ6tSe3SLTzzXDDZA_NsecE",
    authDomain: "react-social-media-a6784.firebaseapp.com",
    projectId: "react-social-media-a6784",
    storageBucket: "react-social-media-a6784.appspot.com",
    messagingSenderId: "1070503628731",
    appId: "1:1070503628731:web:db3097e288a2ad124afe9e",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };
