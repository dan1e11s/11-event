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

export interface IProduct {
  products: Product[];
  oneProduct: Product | null;
}
