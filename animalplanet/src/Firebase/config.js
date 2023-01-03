import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeAklw2Ib9mbiByJCBMq-9a0seedb8daQ",
  authDomain: "animalplanet-ff1f7.firebaseapp.com",
  projectId: "animalplanet-ff1f7",
  storageBucket: "animalplanet-ff1f7.appspot.com",
  messagingSenderId: "416083759554",
  appId: "1:416083759554:web:e8080feaba4a56fa5b865b"

};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth();
const database = getDatabase(app);

export { app, auth, database, firestore };