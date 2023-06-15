import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../products/products-slice';

export interface CartProduct {
  count: number;
  item: Product;
  size: string;
  subPrice: number;
}

interface CartState {
  cart: CartProduct[];
  totalPrice: number;
}

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.item.id === action.payload.cartItem.id
      );

      console.log(state.cart);

      if (itemInCart) {
        itemInCart.count++;
        itemInCart.subPrice = action.payload.cartItem.price * itemInCart.count;
        itemInCart.size = action.payload.size;
      } else {
        state.cart.push({
          count: 1,
          item: action.payload.cartItem,
          size: action.payload.size,
          subPrice: action.payload.cartItem.price,
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
