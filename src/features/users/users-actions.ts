import { createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { User } from './types';

const usersCollectionRef = collection(db, 'users');

export const getUsers = createAsyncThunk('@users/get-users', async () => {
  const data = await getDocs(usersCollectionRef);
  const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return users;
});

export const getUserByEmail = createAsyncThunk(
  '@users/get-user-by-email',
  async (email: string) => {
    const q = query(usersCollectionRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDocSnapshot = querySnapshot.docs[0];
      const userData = userDocSnapshot.data();
      const user = { ...userData, id: userDocSnapshot.id };
      return user;
    } else {
      throw new Error('Пользователь не найден');
    }
  }
);

export const addUser = createAsyncThunk(
  '@users/add-user',
  async (obj: User) => {
    await addDoc(usersCollectionRef, obj);

    return obj;
  }
);
