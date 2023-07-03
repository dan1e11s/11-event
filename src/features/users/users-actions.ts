import { createAsyncThunk } from '@reduxjs/toolkit';
import ky from 'ky';
import { User } from './users-slice';

const API = 'https://json-server-vercel-tau-eight.vercel.app/users';

export const getUsers = createAsyncThunk('@users/get-users', async () => {
  const users = ky(API).json();

  return users;
});

export const addUser = createAsyncThunk(
  '@users/add-user',
  async (obj: User, { getState }) => {
    const users = getState();
    console.log(users);

    const user = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });

    const data = await user.json();

    return data;
  }
);

export const getOneUser = createAsyncThunk(
  '@users/get-one-user',
  async (id: string) => {
    const user = ky(`${API}/${id}`).json();

    return user;
  }
);
