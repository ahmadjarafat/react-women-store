import firebase from 'firebase';




const config = {
    apiKey: "AIzaSyDifp125n7IhU17yqW0bp6UvrEr7Ack14I",
    authDomain: "graduation-project-react.firebaseapp.com",
    databaseURL: "https://graduation-project-react-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "graduation-project-react",
    storageBucket: "graduation-project-react.appspot.com",
    messagingSenderId: "756882425168",
    appId: "1:756882425168:web:969af7edfac0389338d855",
    measurementId: "G-G8DS54SXGZ"
  };

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;