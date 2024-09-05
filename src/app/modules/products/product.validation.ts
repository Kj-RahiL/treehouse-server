import { z } from 'zod';

export const createProductValidationSchema = z.object({
  product: z.object({
    title: z.string().min(1, 'Title is required'),
    price: z.number().positive('Price must be a positive number'),
    category: z.string().min(1, 'Category is required'),
    quantity: z
      .number()
      .int()
      .nonnegative('Quantity must be a non-negative integer'),
    description: z.string().min(1, 'Description is required'),
    rating: z.number().min(0).max(5, 'Rating must be between 0 and 5'),
    image: z.string().url('Image must be a valid URL'),
  }),
});
