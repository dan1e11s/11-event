import { createSlice } from '@reduxjs/toolkit';
import { fetchPhotos } from './photos-actions';

export interface Photo {
  id: number;
  urls: {
    regular: string;
  };
}

interface InitPhoto {
  photos: Photo[];
}

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
