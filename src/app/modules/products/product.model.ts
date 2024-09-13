import { model, Schema, Types } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>(
  {
    title: { type: String, required: true,unique: true  },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Product = model<TProduct>('Product', productSchema);
