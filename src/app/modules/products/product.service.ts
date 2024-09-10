import { query } from 'express';
import { Product } from './product.model';
import { TProduct } from './product.interface';

const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  // Search
  const queryObj = { ...query };
  let searchTerm = '';
  const searchableFields = ['title', 'category'];

  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const searchQuery = Product.find({
    $or: searchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  // Filter
  const excludeFields = ['searchTerm', 'sort', 'limit', 'page'];
  excludeFields.forEach((el) => delete queryObj[el]);

//   console.log({ query, queryObj });
  const filterQuery = searchQuery.find(queryObj);

  // Sorting

  let sortBy = '-createdAt'; // Default to latest

  if (query?.sort === 'rating') {
    sortBy = '-rating'; // Descending by rating
  } else if (query?.sort === 'priceLowToHigh') {
    sortBy = 'price'; // Ascending by price
  } else if (query?.sort === 'priceHighToLow') {
    sortBy = '-price'; // Descending by price
  } else if (query?.sort === 'latest') {
    sortBy = '-createdAt'; // Descending by createdAt (latest first)
  }

  const sortQuery = filterQuery.sort(sortBy);

  // Pagination
  let page = 1;
  let limit = 10;
  let skip = 0;

  if (query?.limit) {
    limit = Number(query.limit);
  }
  if (query?.page) {
    page = Number(query.page);
    skip = (page - 1) * limit;
  }

  // Apply skip and limit for pagination
  const paginateQuery = sortQuery.skip(skip).limit(limit);

  // Execute the query
  const result = await paginateQuery;
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProductIntoDB = async (id: string, updateData: TProduct) => {
  const result = await Product.findByIdAndUpdate(id, [{ $set: updateData }], {
    new: true,
  });
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
