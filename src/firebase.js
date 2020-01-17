import firebase from "firebase";
export const config = {
  apiKey: "AIzaSyDNthLZOIlTWGJ2d8c4QwDge-whu1ZkZyQ",
  authDomain: "eventviewer-e4d07.firebaseapp.com",
  databaseURL: "https://eventviewer-e4d07.firebaseio.com",
  projectId: "eventviewer-e4d07",
  storageBucket: "eventviewer-e4d07.appspot.com",
  messagingSenderId: "315847148440",
  appId: "1:315847148440:web:270c85c5ab8c1ca5f2e1ed",
  measurementId: "G-4WHZHPLF0T"
};
firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const database = firebase.firestore();

export { firebase, provider, auth, database };
