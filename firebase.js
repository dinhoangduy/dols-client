import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIRABASE_KEY,
  authDomain: 'dols-a767c.firebaseapp.com',
  projectId: 'dols-a767c',
  storageBucket: 'dols-a767c.appspot.com',
  messagingSenderId: '734503108200',
  appId: '1:734503108200:web:6666b54e40b2462efd05dd',
  measurementId: 'G-9P0255T2QK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const store = getStorage(app);
export const provider = new GoogleAuthProvider();

export default app;
