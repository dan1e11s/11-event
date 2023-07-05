import { Product } from '../products/types';

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
