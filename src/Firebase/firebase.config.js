// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNO5-zKw3XY14Ef6mx8zjhdX9bBuPolM8",
    authDomain: "cars-doctor-a9b92.firebaseapp.com",
    projectId: "cars-doctor-a9b92",
    storageBucket: "cars-doctor-a9b92.appspot.com",
    messagingSenderId: "344029320090",
    appId: "1:344029320090:web:4ddc22ec0e6607f3a52023"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;