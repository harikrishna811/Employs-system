import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA6nQOVhwkHEb9GsFRETF9QgG4U1kRliLI",
  authDomain: "authe-4d16a.firebaseapp.com",
  projectId: "authe-4d16a",
  storageBucket: "authe-4d16a.appspot.com",
  messagingSenderId: "470741251074",
  appId: "1:470741251074:web:6de38d4077e059f6e3e31b",
  measurementId: "G-5N8Q1M2BML"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth()
export function signup(email,password){
return createUserWithEmailAndPassword(auth,email,password)
}
export function  login(email,password){
  return signInWithEmailAndPassword(auth,email,password)
  }
   export function logout(email,password){
    return signOut(auth)
  }
