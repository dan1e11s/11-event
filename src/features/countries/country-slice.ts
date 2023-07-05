import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Country, InitCountryState } from './types';
import { getCodeNumber, getCountry } from './country-actions';

const initialState: InitCountryState = {
  countries: [],
  nameCountry: 'Switzerland',
  codeNumber: '+41',
};

const countrySlice = createSlice({
  name: '@country',
  initialState,
  reducers: {
    getNameCountry: (state, action) => {
      state.nameCountry = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getCountry.fulfilled.type,
      (state, action: PayloadAction<Country[]>) => {
        state.countries = action.payload;
      }
    );
    builder.addCase(getCodeNumber.fulfilled, (state, action) => {
      state.codeNumber = action.payload;
    });
  },
});

export const countryReducer = countrySlice.reducer;

export const { getNameCountry } = countrySlice.actions;

//selectors
export const selectCountries = (state: RootState) => state.countries;
