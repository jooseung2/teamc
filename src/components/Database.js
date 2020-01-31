import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBKd3MaC0cc2-bwh5NwSFvcXNZT9rJ4XCQ",
  authDomain: "opps-dadaf.firebaseapp.com",
  databaseURL: "https://opps-dadaf.firebaseio.com",
  projectId: "opps-dadaf",
  storageBucket: "opps-dadaf.appspot.com",
  messagingSenderId: "199446794906",
  appId: "1:199446794906:web:0fd7c99389396073e94523"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export default db;
