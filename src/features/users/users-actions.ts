import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from './users-slice';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

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

// export const addUser = createAsyncThunk(
//   '@users/add-user',
//   async (obj: User, { getState }) => {
//     const users = getState();
//     console.log(users);

//     const user = await fetch(API, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(obj),
//     });

//     const data = await user.json();

//     return data;
//   }
// );

// export const getOneUser = createAsyncThunk(
//   '@users/get-one-user',
//   async (id: string) => {
//     const user = ky(`${API}/${id}`).json();

//     return user;
//   }
// );
