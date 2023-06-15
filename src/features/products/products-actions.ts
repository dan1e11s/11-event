import { createAsyncThunk } from '@reduxjs/toolkit';
import ky from 'ky';
import { Product } from './products-slice';

const API = 'http://localhost:8000/products';

export const getProducts = createAsyncThunk(
  '@products/get-products',
  async () => {
    const product = await ky(API).json<Product[]>();
    return product;
  }
);

export const createProducts = createAsyncThunk(
  '@products/create-products',
  async (obj: Product) => {
    const product = await ky.post(API, { json: obj }).json<Product[]>();
    return product;
  }
);

export const deleteProduct = createAsyncThunk(
  '@products/delete-product',
  async (id: string | undefined, { dispatch }) => {
    await ky.delete(`${API}/${id}`).json<Product[]>();
    dispatch(getProducts());
    return id;
  }
);

export const editProducts = createAsyncThunk(
  '@products/edit-products',
  async (obj: Product) => {
    const product = await ky
      .patch(`${API}/${obj.id}`, { json: obj })
      .json<Product[]>();
    return product;
  }
);
