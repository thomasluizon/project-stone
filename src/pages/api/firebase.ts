import type { NextApiRequest, NextApiResponse } from 'next';

// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: 'AIzaSyAuOIRlru2sA6ohX6Nu9vLyFIQYVNynLcA',
   authDomain: 'project-stone-2cadd.firebaseapp.com',
   projectId: 'project-stone-2cadd',
   storageBucket: 'project-stone-2cadd.appspot.com',
   messagingSenderId: '744574268794',
   appId: '1:744574268794:web:ea3a95ae5c67f4132812c3',
   measurementId: 'G-WQLLSBZBLD',
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   res.status(200).json({ ok: true });
}
