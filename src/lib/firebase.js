import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// here is where I want to import the file
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCF0sgoLe_uQG1NVfT-YldrOXk5wtK4YK0",
  authDomain: "instagram-f40fe.firebaseapp.com",
  projectId: "instagram-f40fe",
  storageBucket: "instagram-f40fe.appspot.com",
  messagingSenderId: "238665355824",
  appId: "1:238665355824:web:e5a2dd8bcdb1bdd63953f5",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed fire, ONLY ONCE!
// seedDatabase(firebase);

export { firebase, FieldValue };
