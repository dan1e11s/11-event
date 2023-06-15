import { RootState } from '../../store';

export const selectAllProducts = (state: RootState) => state.products;

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
