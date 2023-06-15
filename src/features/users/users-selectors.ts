import { RootState } from './../../store';

export const selectAllUsers = (state: RootState) => state.users.users;
export const selectCurrentUser = (state: RootState) => state.users.currentUser;
