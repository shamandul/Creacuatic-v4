import firebase from 'firebase'
import 'firebase/firestore'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCDYhDiniheqRXjqxDQWquvlSlOn9yXDQQ",
    authDomain: "creacuatic-c16b6.firebaseapp.com",
    databaseURL: "https://creacuatic-c16b6.firebaseio.com",
    projectId: "creacuatic-c16b6",
    storageBucket: "creacuatic-c16b6.appspot.com",
    messagingSenderId: "308669380103",
    appId: "1:308669380103:web:0595dbf13e7c73261fdca2"
})

const Db = firebaseApp.firestore()
export default Db