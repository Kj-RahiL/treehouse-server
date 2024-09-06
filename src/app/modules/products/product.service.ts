import { query } from 'express';
import { Product } from './product.model';
import { TProduct } from './product.interface';

const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductsFromDB = async (query: Record<string, unknown>) => {

    let  searchTerm = " ";
    const searchableFields = ['title' , ' category' , 'description']
    if(query?.searchTerm){
        searchTerm = query?.searchTerm as string
    }
    const  
    const result = await Product.find()
    return result
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProductIntoDB = async (id: string, updateData: TProduct) => {
  const result = await Product.findByIdAndUpdate(
    id,
    [{ $set: updateData }],
    { new: true },
  );
  return result;
};

const deleteProductIntoDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  console.log(result);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductIntoDB,
};
