import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface IConfig {
  cartBar: boolean;
  sideBar: boolean;
  footer: boolean;
  isHome: boolean;
  isLogin: boolean;
  isSearchPage: boolean;
  isCartPage: boolean;
  userName: null;
}

const initialState: IConfig = {
  cartBar: false,
  sideBar: false,
  footer: false,
  isHome: false,
  isLogin: false,
  isSearchPage: false,
  isCartPage: false,
  userName: null,
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
    setUserName: (state, action) => {
      state.userName = action.payload;
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
  setUserName,
  setIsSearchPage,
  setIsCartPage,
} = configsSlice.actions;

// selectors
export const selectAllConfigs = (state: RootState) => state.configs;
