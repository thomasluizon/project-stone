interface FirebaseConfig {
   apiKey: string;
   authDomain: string;
   projectId: string;
   storageBucket: string;
   messagingSenderId: string;
   appId: string;
   measurementId: string;
}

// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseConfig = {
   apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN as string,
   projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
   storageBucket: 'project-stone-2cadd.appspot.com',
   messagingSenderId: '744574268794',
   appId: '1:744574268794:web:ea3a95ae5c67f4132812c3',
   measurementId: 'G-WQLLSBZBLD',
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

const firebaseFunctions = {
   getDb: async () => {
      const db = getFirestore(app);

      const col = collection(db, 'teste');

      const citySnapshot = await getDocs(col);

      const cityList = citySnapshot.docs.map(doc => doc.data());

      console.log(cityList);
   },
};

export default firebaseFunctions;
