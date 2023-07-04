import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';
import { User } from '../features/users/users-slice';

import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  projectId: import.meta.env.PROJECT_ID,
  storageBucket: import.meta.env.STORAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  appId: import.meta.env.APP_ID,
};

export const app = initializeApp(firebaseConfig);

export const createUser = async (obj: User) => {
  const { user } = await createUserWithEmailAndPassword(
    getAuth(app),
    obj.email,
    obj.password
  );

  return user;
};

export const signInUser = async (email: string, password: string) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
};

export const db = getFirestore(app);
