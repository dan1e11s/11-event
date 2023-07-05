import { createAsyncThunk } from '@reduxjs/toolkit';
import ky from 'ky';
import { Country } from './types';

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
    const res: Country[] = await ky(
      `https://restcountries.com/v3.1/name/${name.toString()}`
    ).json();

    return `${res[0].idd.root}${res[0].idd.suffixes[0]}`;
  }
);
