import { Types } from 'mongoose';

export type TProduct = {
  title: string;
  price: number;
  category: string;
  quantity: number;
  description: string;
  rating: number;
  image: string;
};
