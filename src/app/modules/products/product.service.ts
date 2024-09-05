import { query } from 'express';

const getAllProductsFromDB = async (query: Record<string, unknown>) => {};
const getSingleProductFromDB = async (query: Record<string, unknown>) => {};
const updateProductIntoDB = async (query: Record<string, unknown>) => {};
const deleteProductFromDB = async (query: Record<string, unknown>) => {};

export const ProductServices = {
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
