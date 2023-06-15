import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ky from 'ky';
import { RootState } from '../../store';

const initialState = {
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
    builder.addCase(getCountry.fulfilled, (state: any, action) => {
      state.countries = action.payload;
    });
    builder.addCase(getCodeNumber.fulfilled, (state, action) => {
      state.codeNumber = action.payload;
    });
  },
});

export const countryReducer = countrySlice.reducer;

// actions
export const getCountry = createAsyncThunk(
  '@country/get-countries',
  async () => {
    const countries = await ky('https://restcountries.com/v3.1/all').json();

    return countries;
  }
);

export const getCodeNumber = createAsyncThunk(
  '@country/get-code-number',
  async (name: string) => {
    const res: any = await ky(
      `https://restcountries.com/v3.1/name/${name.toString()}`
    ).json();

    return `${res[0].idd.root}${res[0].idd.suffixes[0]}`;
  }
);

export const { getNameCountry } = countrySlice.actions;

//selectors
export const selectCountries = (state: RootState) => state.countries;
