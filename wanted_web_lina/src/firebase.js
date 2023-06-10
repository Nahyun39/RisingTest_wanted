// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'


// Your web app's Firebase configuratio
const firebaseConfig = {
    apiKey: "AIzaSyDh0gf6mBVerhxzDVFeQRrjYURhRNPCq0s",
    authDomain: "wanted-c2702.firebaseapp.com",
    projectId: "wanted-c2702",
    storageBucket: "wanted-c2702.appspot.com",
    messagingSenderId: "637476607518",
    appId: "1:637476607518:web:96c72e27a1f9d168a6400f"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
