import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvLR-iDHg6_s8MNzfQOBBuWIJF2R0wKk0",
  authDomain: "xtraliving-a1df2.firebaseapp.com",
  projectId: "xtraliving-a1df2",
  storageBucket: "xtraliving-a1df2.appspot.com",
  messagingSenderId: "934591532283",
  appId: "1:934591532283:web:dc987de792823a7db5745e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;  