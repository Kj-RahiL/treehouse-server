import { Types } from 'mongoose';

export type TProduct = {
  id: Types.ObjectId;
  title: string;
  price: number;
  category: string;
  quantity: number;
  description: string;
  rating: number;
  image: string;
};
