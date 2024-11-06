// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "<CONFIDENTIAL>",
  authDomain: "targets-cathay-hackathon-2024.firebaseapp.com",
  projectId: "targets-cathay-hackathon-2024",
  storageBucket: "targets-cathay-hackathon-2024.firebasestorage.app",
  messagingSenderId: "283553895980",
  appId: "1:283553895980:web:6eff214668534bf6676389",
  measurementId: "G-0S97D5G3B0"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP);

//@ts-ignore
import { initializeAuth, getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});