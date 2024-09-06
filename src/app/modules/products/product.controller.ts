import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductServices } from './product.service';
import httpStatus, { BAD_REQUEST } from 'http-status';
import { createProductValidationSchema } from './product.validation';

// create product
const createProduct = catchAsync(async (req, res) => {
  // zod validation
  const zodParseData = createProductValidationSchema.parse(req.body);
  const { product } = zodParseData;
  const result = await ProductServices.createProductIntoDB(product);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product is created successfully',
    data: result,
  });
});

const getAllProduct: RequestHandler = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductsFromDB(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All Products are retrieved successfully',
    data: result,
  });
});
const getSingleProduct: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductServices.getSingleProductFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product is retrieved successfully',
    data: result,
  });
});
const updateProduct: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { product } = req.body;
  console.log(product)
  const result = await ProductServices.updateProductIntoDB(id, product);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: ' Product is Updated successfully',
    data: result,
  });
});
const deleteProduct: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductServices.deleteProductIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is Deleted successfully',
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
