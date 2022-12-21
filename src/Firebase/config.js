import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6jXRFcTBS_XgJgvJtWiokfzNU8gNjFAQ",
  authDomain: "animalplanet-73e7a.firebaseapp.com",
  projectId: "animalplanet-73e7a",
  storageBucket: "animalplanet-73e7a.appspot.com",
  messagingSenderId: "233282739761",
  appId: "1:233282739761:web:84fdb4f5021c8c9f487f10"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };