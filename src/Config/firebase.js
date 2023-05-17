import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged,projectAuth  } from "firebase/auth";
import { getFirestore,collection, getDocs,addDoc,doc,deleteDoc} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCNc7UgKKvFKhFliYc5cwFN09QJeqTjj48",
  authDomain: "calendariomantenimiento-d401a.firebaseapp.com",
  projectId: "calendariomantenimiento-d401a",
  storageBucket: "calendariomantenimiento-d401a.appspot.com",
  messagingSenderId: "966712255259",
  appId: "1:966712255259:web:3baf9b6f4d3174f11669be"
};

// Inicializa tu app de Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Exporto los metodos para la utenticacion
const Auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)
export{Auth,signInWithEmailAndPassword,onAuthStateChanged,projectAuth }
export {collection, getDocs,addDoc,doc,deleteDoc}



