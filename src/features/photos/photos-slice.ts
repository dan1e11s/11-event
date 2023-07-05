import { createSlice } from '@reduxjs/toolkit';
import { fetchPhotos } from './photos-actions';
import { InitPhoto } from './types';

const initialState: InitPhoto = {
  photos: [],
};

const photosSlice = createSlice({
  name: '@photos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.photos = action.payload;
    });
  },
});

export const photosReducer = photosSlice.reducer;
