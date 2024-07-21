import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCWdvGb4TrNHkIejPggZ9S7lp65omG1VoQ",
    authDomain: "furnitures-65694.firebaseapp.com",
    projectId: "furnitures-65694",
    storageBucket: "furnitures-65694.appspot.com",
    messagingSenderId: "993660294463",
    appId: "1:993660294463:web:73315ad70f2d1cbea5ef8a",
    measurementId: "G-066DH1J9C0"
};

firebase.initializeApp(firebaseConfig)

const projectFireStore = firebase.firestore()

export { projectFireStore }