import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB0Ep-dPj7zwIXOVA8RR2Wcv9pC1Dr9ulg",
    authDomain: "popular-social-frontend-524d5.firebaseapp.com",
    databaseURL: "https://popular-social-frontend-524d5-default-rtdb.firebaseio.com",
    projectId: "popular-social-frontend-524d5",
    storageBucket: "popular-social-frontend-524d5.appspot.com",
    messagingSenderId: "483054992341",
    appId: "1:483054992341:web:c8398d5263ed5ce7e39b5c"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db