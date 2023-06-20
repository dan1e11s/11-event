import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  createProducts,
  deleteProduct,
  editProducts,
  getOneProduct,
  getProducts,
} from './products-actions';

export interface Product {
  id?: string;
  title: string;
  price: number;
  category: string;
  types: string;
  description: string;
  image: string;
  images: string[];
  rating: object;
}

interface IProduct {
  products: Product[];
  oneProduct: Product | null;
}

const initialState: IProduct = {
  products: [],
  oneProduct: null,
};

const productSlice = createSlice({
  name: '@products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getProducts.fulfilled.type,
      (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      }
    );
    builder.addCase(getOneProduct.fulfilled, (state, action) => {
      state.oneProduct = action.payload;
    });
    builder.addCase(
      createProducts.fulfilled.type,
      (state, action: PayloadAction<Product>) => {
        console.log(action.payload);

        state.products.push(action.payload);
      }
    );
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const id = action.payload;
      state.products = state.products.filter(
        (product: Product) => product.id !== id
      );
    });
    builder.addCase(
      editProducts.fulfilled.type,
      (state, action: PayloadAction<Product>) => {
        const { id, title, price, description, rating, category, image } =
          action.payload;
        const currentProduct = state.products.find(
          (product) => product.id === id
        );
        if (currentProduct) {
          currentProduct.title = title;
          currentProduct.price = price;
          currentProduct.category = category;
          currentProduct.image = image;
          currentProduct.rating = rating;
          currentProduct.description = description;
        }
      }
    );
  },
});

export const productsReducer = productSlice.reducer;
