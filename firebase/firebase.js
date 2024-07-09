import firebase from 'firebase/app';
import 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDU4rzCFTKPmUkN3pUcMAfBvs-USWsFey4",
    authDomain: "tecnews-f01a3.firebaseapp.com",
    projectId: "tecnews-f01a3",
    storageBucket: "tecnews-f01a3.appspot.com",
    messagingSenderId: "171848979548",
    appId: "1:171848979548:web:a62d5f74719d8f09294299",
    measurementId: "G-59EHR92E4E"
};

const app = initializeApp(firebaseConfig); 
const storage = getStorage(app); 
export { storage };
