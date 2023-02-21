import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCHJzQ4PYJUgKk47e3gXuDDsdjMxrROAzw',
  authDomain: 'notes-app-b3b.firebaseapp.com',
  projectId: 'notes-app-b3b',
  storageBucket: 'notes-app-b3b.appspot.com',
  messagingSenderId: '1098379871253',
  appId: '1:1098379871253:web:99c6b6159c8ce3323bba1c',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
