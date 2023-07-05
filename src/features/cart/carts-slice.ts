import { createSlice } from '@reduxjs/toolkit';
import { CartState } from './types';

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload.item);

      const itemInCart = state.cart.find(
        (item) => item.item.id === action.payload.item.id
      );

      if (itemInCart) {
        itemInCart.count++;
        itemInCart.subPrice = action.payload.item.price * itemInCart.count;
        itemInCart.size = action.payload.size;
      } else {
        state.cart.push({
          count: 1,
          item: action.payload.item,
          size: action.payload.size,
          subPrice: action.payload.item.price,
        });
      }
    },
    incrementCount: (state, action) => {
      const item = state.cart.find((item) => item.item.id === action.payload);
      if (item) {
        item.count++;
        item.subPrice = item.count * item.item.price;
      }
    },
    decrementCount: (state, action) => {
      const item = state.cart.find((item) => item.item.id === action.payload);
      if (item) {
        if (item.count === 1) {
          item.count = 1;
        } else {
          item.count--;
          item.subPrice = item.count * item.item.price;
        }
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.item.id !== action.payload
      );
      state.cart = removeItem;
    },
    setTotalPrice: (state) => {
      state.totalPrice = state.cart.reduce(
        (acc, curr) => (acc += curr.subPrice),
        0
      );
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementCount,
  decrementCount,
  removeItem,
  setTotalPrice,
} = cartSlice.actions;
