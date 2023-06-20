import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { CartProduct } from '../cart/carts-slice';

interface FavouritesState {
  favourites: CartProduct[];
}

const initialState: FavouritesState = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: '@favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action: PayloadAction<CartProduct>) => {
      const itemInFavourites = state.favourites.find(
        (item) => item.item.id === action.payload.item.id
      );

      if (!itemInFavourites) {
        state.favourites.push(action.payload);
      }
    },
    removeToFavourites: (state, action) => {
      const filteredArr = state.favourites.filter(
        (item) => item.item.id !== action.payload
      );
      state.favourites = filteredArr;
    },
  },
});

export const { addToFavourites, removeToFavourites } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;

export const selectAllFavourites = (state: RootState) =>
  state.storage.favourites;
