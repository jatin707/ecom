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
 
export const createUserProfileDocument = async (userauth, additionalData) => { 
  if (!userauth) return;

  const userRef = firestore.doc(`users/${userauth.uid}`);

  const snapShot =   await userRef.get();

  if(!snapShot.exists) {
     const { displayName,email } = userauth;
     const createdAt = new Date();



     try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
     } catch (error) {
       console.log('error creating user', error.message);
     }
  }

  return userRef;
};




export const fAuth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ 'login_hint': 'user@example.com' });
export const signInWithGoogle = () => fAuth.signInWithPopup(provider);

export const googleSignout = () => {
  firebase.auth().signOut().then(function() {
    console.log('Signed Out');
  }, function(error) {
    console.error('Sign Out Error', error);
  });
}


export default firebase;