import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyCt-zYtor3pKa0tdoxW-XpohkVMusUPljo",
  authDomain: "vuevuextodolist.firebaseapp.com",
  databaseURL: "https://vuevuextodolist.firebaseio.com",
  projectId: "vuevuextodolist",
  storageBucket: "",
  messagingSenderId: "138475429666"
});

export const db = app.database();
export const namesRef = db.ref("todos");
