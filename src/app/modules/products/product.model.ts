import { model, Schema, Types } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  image: { type: String, required: true }, 
});

export const Product = model<TProduct>('Product', productSchema)