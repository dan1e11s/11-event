import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: "women's clothing",
  search: '',
};

const controlsSlice = createSlice({
  name: '@controls',
  initialState,
  reducers: {
    setProductsCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const controlsReducer = controlsSlice.reducer;

// actions
export const { setProductsCategory, setSearch } = controlsSlice.actions;
