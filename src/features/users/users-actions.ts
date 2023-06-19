import { createAsyncThunk } from '@reduxjs/toolkit';
import ky from 'ky';
import { User } from './users-slice';

const API = 'https://easy-pink-fez.cyclic.app/users';

export const getUsers = createAsyncThunk('@users/get-users', async () => {
  const users = ky(API).json();

  return users;
});

export const addUser = createAsyncThunk(
  '@users/add-user',
  async (obj: User) => {
    const user = await ky
      .post(API, {
        json: obj,
      })
      .json<User[]>();

    return user;
  }
);

export const getOneUser = createAsyncThunk(
  '@users/get-one-user',
  async (id: string) => {
    const user = ky(`${API}/${id}`).json();

    return user;
  }
);
