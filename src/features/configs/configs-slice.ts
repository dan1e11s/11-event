import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IConfig } from './types';

const initialState: IConfig = {
  cartBar: false,
  sideBar: false,
  footer: false,
  isHome: false,
  isLogin: false,
  isSearchPage: false,
  isCartPage: false,
};

export const configsSlice = createSlice({
  name: '@config',
  initialState,
  reducers: {
    setCartBar: (state, action) => {
      state.cartBar = action.payload;
    },
    setSideBar: (state) => {
      state.sideBar = !state.sideBar;
    },
    setFooter: (state, action) => {
      if (state.footer !== action.payload) {
        state.footer = !state.footer;
      }
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setIsHome: (state, action) => {
      if (state.isHome !== action.payload) {
        state.isHome = !state.isHome;
      }
    },
    setIsSearchPage: (state, action) => {
      state.isSearchPage = action.payload;
    },
    setIsCartPage: (state, action) => {
      state.isCartPage = action.payload;
    },
  },
});

export const configsReducer = configsSlice.reducer;

// actions
export const {
  setCartBar,
  setSideBar,
  setFooter,
  setIsLogin,
  setIsHome,
  setIsSearchPage,
  setIsCartPage,
} = configsSlice.actions;

// selectors
export const selectAllConfigs = (state: RootState) => state.configs;
