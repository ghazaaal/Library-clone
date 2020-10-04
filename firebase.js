
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyANapqJpmKRo-73VLoK6LaplbZZQ_E9jW8",
    authDomain: "l-clone-73e36.firebaseapp.com",
    databaseURL: "https://l-clone-73e36.firebaseio.com",
    projectId: "l-clone-73e36",
    storageBucket: "l-clone-73e36.appspot.com",
    messagingSenderId: "627638792307",
    appId: "1:627638792307:web:d8a790a199307beae0ba06",
    measurementId: "G-LTKHZ3FWV9"
});


const auth = firebaseApp.auth();

export {auth};