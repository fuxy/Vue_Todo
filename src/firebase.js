import { initializeApp } from "firebase";
require("dotenv").config();

const app = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: "",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
});

export const db = app.database();
export const namesRef = db.ref("todos");
