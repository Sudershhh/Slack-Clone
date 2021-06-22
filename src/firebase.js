import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCt9FLCdkdFrQmO0_vGMwFfelSXpsR9Qi8",
    authDomain: "slack-clone-d8c63.firebaseapp.com",
    projectId: "slack-clone-d8c63",
    storageBucket: "slack-clone-d8c63.appspot.com",
    messagingSenderId: "685604015106",
    appId: "1:685604015106:web:2127eb04c6fabfcd26eb1b"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider,db};