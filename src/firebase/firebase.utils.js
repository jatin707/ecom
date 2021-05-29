import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  
    apiKey: "AIzaSyDPfL01ECYRwyWR2cqoqoOzxhgHuTYhGdI",
    authDomain: "ecom-db-0.firebaseapp.com",
    projectId: "ecom-db-0",
    storageBucket: "ecom-db-0.appspot.com",
    messagingSenderId: "738691435337",
    appId: "1:738691435337:web:3167f475fec5c049616898",
    measurementId: "G-FDGC3XRTPY"
  
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({ 'login_hint': 'user@example.com' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;