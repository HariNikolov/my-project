import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJeFkrNsbbUCIERwm1dxwzEErDp46vkpg",
  authDomain: "book-proje.firebaseapp.com",
  projectId: "book-proje",
  storageBucket: "book-proje.appspot.com",
  messagingSenderId: "173367703446",
  appId: "1:173367703446:web:5e45fc1bd748064c5b0fb7",
  measurementId: "G-7WQS43T13H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

export { auth };
export default db;
