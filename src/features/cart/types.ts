import { Product } from '../products/products-slice';

export interface CartProduct {
  count: number;
  item: Product;
  size: string;
  subPrice: number;
}

export interface CartState {
  cart: CartProduct[];
  totalPrice: number;
}
