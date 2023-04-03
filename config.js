import firebase from "firebase";
require("@firebase/firestore");

  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyCnZkSGphABPzn8oqH2Y7z7XSf8nokPass",
    authDomain: "c-71-27ecc.firebaseapp.com",
    projectId: "c-71-27ecc",
    storageBucket: "c-71-27ecc.appspot.com",
    messagingSenderId: "212914548961",
    appId: "1:212914548961:web:a72c0ac93cb51279ad47a0"
  };
;

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
