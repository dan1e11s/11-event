import { createAsyncThunk } from '@reduxjs/toolkit';
import { Photo } from './photos-slice';
import ky from 'ky';

const API =
  'https://api.unsplash.com/photos/random?count=5&query=style&w=1920&h=1080&client_id=giX5fGb8NvA65nDrwlWRLtgFBQz1AfN-VdQrGD-umUs';

export const fetchPhotos = createAsyncThunk(
  '@photos/fetch-photos',
  async () => {
    const photos = await ky(API).json<Photo[]>();
    return photos;
  }
);
