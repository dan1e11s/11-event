import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';
import { User } from '../features/users/users-slice';

const firebaseConfig = {
  apiKey: 'AIzaSyAC-Q4JPdgQmoLxkDERPyVbs4en__0soxc',
  authDomain: 'fake-store-auth-55327.firebaseapp.com',
  projectId: 'fake-store-auth-55327',
  storageBucket: 'fake-store-auth-55327.appspot.com',
  messagingSenderId: '1030614265433',
  appId: '1:1030614265433:web:5d291a96adfaba6314cb48',
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
