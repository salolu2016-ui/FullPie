/* ======================================================
   Configuración de Firebase.
   ====================================================== */

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyBdw_fDOfdjSiKQkNu0G2Z58RFmb0nYZf0",
    authDomain: "bdd-fullpie.firebaseapp.com",
    projectId: "bdd-fullpie",
    storageBucket: "bdd-fullpie.firebasestorage.app",
    messagingSenderId: "642926332082",
    appId: "1:642926332082:web:5cee16807590c3f8b621ab",

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);