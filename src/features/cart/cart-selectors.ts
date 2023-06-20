import { RootState } from '../../store';

export const selectAllCart = (state: RootState) => state.storage.cart;
