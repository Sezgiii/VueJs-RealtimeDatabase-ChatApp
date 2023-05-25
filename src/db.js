import firebase from "firebase/app";
import "firebase/database";

const config ={
  apiKey: "AIzaSyCXBe_NyVzbXv_9Q2xsnDi6BgV24oADOAA",
  authDomain: "vuechat-ee737.firebaseapp.com",
  projectId: "vuechat-ee737",
  storageBucket: "vuechat-ee737.appspot.com",
  messagingSenderId: "536330395759",
  appId: "1:536330395759:web:e7d73baa7e231eb711ed9a"
}

const db= firebase.initializeApp(config);
export default db;
