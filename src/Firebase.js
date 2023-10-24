import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import 'firebase/firestore';
// import 'firebase/storage';
import { getFirestore } from "firebase/firestore/lite";

// configure firebase app
const firebaseConfig = {
    apiKey:             process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:         process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL:        process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId:          process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:      process.env.REACT_APP_FRIEBASE_STORAGE_BUCKET,
    messagingSenderId:  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId:              process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId:      process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};


// Export firestore
export const firestore = initializeApp(firebaseConfig);
export const firebaseStorage = getFirestore(firestore);
export const fireAuth = getAuth();