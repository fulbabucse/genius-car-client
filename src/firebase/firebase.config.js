// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAzf7kNCs80PWl_Oey-d5v-oSKEBvuLbrg",
  authDomain: "genius-car-maker.firebaseapp.com",
  projectId: "genius-car-maker",
  storageBucket: "genius-car-maker.appspot.com",
  messagingSenderId: "7533635785",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
