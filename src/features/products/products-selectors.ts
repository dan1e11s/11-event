import { RootState } from '../../store';
import { CartProduct } from '../cart/types';

export const selectAllProducts = (state: RootState) => state.products;
export const selectOneProduct = (state: RootState) => state.products.oneProduct;

export const selectFilteredProducts = (
  state: RootState,
  { type = '', category = '' }
) => {
  return state.products.products.filter(
    (item) => item.category === category && item.types === type
  );
};

export const selectVisibleProducts = (
  state: RootState,
  { category = "women's clothing", search = '' }
) => {
  if (category === "women's clothing") {
    return state.products.products.filter(
      (item) =>
        item.category === category &&
        item.title.toLowerCase().includes(search.toLowerCase())
    );
  } else if (category === "men's clothing") {
    return state.products.products.filter(
      (item) =>
        item.category === category &&
        item.title.toLowerCase().includes(search.toLowerCase())
    );
  } else if (category === "kid's clothing") {
    return state.products.products.filter(
      (item) =>
        item.category === category &&
        item.title.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    return state.products.products;
  }
};

export const selectRelatedProducts = (
  state: RootState,
  cart: CartProduct[]
) => {
  return state.products.products.filter((item) => {
    for (const i of cart) {
      if (
        item.category === i.item.category &&
        item.types === i.item.types &&
        item.id !== i.item.id
      ) {
        return item;
      }
    }
  });
};

export const selectProductsCategories = (
  state: RootState,
  { category = "women's clothing" }
) => {
  let categories = [];

  if (category === "women's clothing") {
    categories = state.products.products
      .filter((item) => item.category === category)
      .map((item) => item.types);
  } else if (category === "men's clothing") {
    categories = state.products.products
      .filter((item) => item.category === category)
      .map((item) => item.types);
  } else if (category === "kid's clothing") {
    categories = state.products.products
      .filter((item) => item.category === category)
      .map((item) => item.types);
  } else {
    categories = state.products.products.map((item) => item.types);
  }

  return categories;
};
