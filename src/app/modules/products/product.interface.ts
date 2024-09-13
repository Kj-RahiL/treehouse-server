import { Types } from 'mongoose';

export type TProduct = {
  title: string;
  price: number;
  category: string;
  stock: number;
  description: string;
  rating: number;
  image: string;
};
