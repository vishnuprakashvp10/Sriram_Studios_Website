import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, query, where, getDocs, deleteDoc, orderBy, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
        apiKey: "AIzaSyAcOFyHS2PtbAyqUsf99H7p31TL2-zAj9U",
        authDomain: "sriram-studios-database-d954c.firebaseapp.com",
        projectId: "sriram-studios-database-d954c",
        storageBucket: "sriram-studios-database-d954c.appspot.com",
        messagingSenderId: "306560172773",
        appId: "1:306560172773:web:405c36b9a5a66fede60a0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();

//Create Document In Firestore
export const createContactFormFirebase = async (formData, submitted_from) => {
    const { email, message, name, phoneNumber, service } = formData;
    const time_created = new Date();
    try {
        const doc = await addDoc(collection(db, "contactForms"), {
            name, email, message, phoneNumber, service, time_created, submitted_from
        })
    } catch (error) {
        console.log(error);
    }
    return doc;
}