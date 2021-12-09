import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAWEB92TGnUc0vxFXMkPpGHdgLftfHTGm0",
  authDomain: "todoapp-e73b4.firebaseapp.com",
  projectId: "todoapp-e73b4",
  storageBucket: "todoapp-e73b4.appspot.com",
  messagingSenderId: "505540099308",
  appId: "1:505540099308:web:a39359ff03ee07cfb839c9",
  measurementId: "G-ZQTX68BSEZ"
};


firebase.initializeApp(firebaseConfig)

export default firebase