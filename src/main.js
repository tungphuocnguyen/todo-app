import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase'
//  import firebase from 'firebase'
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// // import 'firebase/firestore'
// const STORAGE_KEY = 'vue-todo-app';
// export {STORAGE_KEY}
const firebaseConfig = {
  apiKey: "AIzaSyAWEB92TGnUc0vxFXMkPpGHdgLftfHTGm0",
  authDomain: "todoapp-e73b4.firebaseapp.com",
  projectId: "todoapp-e73b4",
  storageBucket: "todoapp-e73b4.appspot.com",
  messagingSenderId: "505540099308",
  appId: "1:505540099308:web:a39359ff03ee07cfb839c9",
  measurementId: "G-ZQTX68BSEZ"
};

// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const db = getFirestore(app);
// async function getTodos(db) {
//   const citiesCol = collection(db, 'todos');
//   const citySnapshot = await getDocs(citiesCol );
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
// getTodos(db)
// console.log('db', getTodos(db));
// const fireStoreCore = firebase.firestore(); 
// import { initializeApp } from "firebase/app"
// import { getDatabase } from "firebase/database"

// const app = initializeApp({...config})

// const db = getDatabase(app)

// export { db }

firebase.initializeApp(firebaseConfig)


createApp(App).mount('#app')
