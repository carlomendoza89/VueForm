import Firebase from 'firebase'

require('firebase/firestore')

var firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyAGCRkAJLWYXyVFxRAude6SaQxy6SSTMKQ",
    authDomain: "form-e44cd.firebaseapp.com",
    databaseURL: "https://form-e44cd.firebaseio.com",
    projectId: "form-e44cd",
    storageBucket: "form-e44cd.appspot.com",
    messagingSenderId: "1010362708373"
})

export default firebaseApp.firestore();
