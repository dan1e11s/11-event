import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { addUser, getUsers } from './users-actions';

export interface User {
  email: string;
  password: string;
  repeatPassword: string;
  firstName: string;
  lastName: string;
  address: string;
  address2: string;
  city: string;
  postcode: string;
  province: string;
  telephone: string;
  id?: string;
}

interface IUsers {
  users: User[];
  currentUser: User | null;
}

const initialState: IUsers = {
  users: [],
  currentUser: null,
};

export const usersSlice = createSlice({
  name: '@users',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getUsers.fulfilled.type,
      (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
      }
    );
    builder.addCase(
      addUser.fulfilled.type,
      (state, action: PayloadAction<User>) => {
        state.users.push(action.payload);
      }
    );
  },
});

export const { setCurrentUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
