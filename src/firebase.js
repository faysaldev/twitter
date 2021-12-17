import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAoJN6ZK51kJfJufMiS1FYLIwgJlaT0Wc",
    authDomain: "twitter-d2b48.firebaseapp.com",
    projectId: "twitter-d2b48",
    storageBucket: "twitter-d2b48.appspot.com",
    messagingSenderId: "655854662531",
    appId: "1:655854662531:web:3c3f2b83f14604a2a47cb6",
    measurementId: "G-6KCHJ77RJX"
};

const firebaseapp=firebase.initializeApp(firebaseConfig);
const db =firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;