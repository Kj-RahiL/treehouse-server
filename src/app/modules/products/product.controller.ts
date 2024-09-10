import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductServices } from './product.service';
import httpStatus, { BAD_REQUEST } from 'http-status';
import { createProductValidationSchema } from './product.validation';

// create product
const createProduct = catchAsync(async (req, res) => {
  // zod validation
  try {
    const zodParseData = createProductValidationSchema.parse(req.body);
    const { product } = zodParseData;
    const result = await ProductServices.createProductIntoDB(product);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Product is created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
});

const getAllProduct: RequestHandler = catchAsync(async (req, res) => {
  try {
    const result = await ProductServices.getAllProductsFromDB(req.query);
    if (result.length === 0) {
      sendResponse(res, {
        statusCode: 500,
        success: false,
        message: 'Sorry, No data Found',
        data: result,
      });
    } else {
      sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'All Products are retrieved successfully',
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
});
const getSingleProduct: RequestHandler = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ProductServices.getSingleProductFromDB(id);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Product is retrieved successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
});
const updateProduct: RequestHandler = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const { product } = req.body;
    console.log(product);
    const result = await ProductServices.updateProductIntoDB(id, product);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: ' Product is Updated successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
});
const deleteProduct: RequestHandler = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ProductServices.deleteProductIntoDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product is Deleted successfully',
      data: result,
    });
  } catch (error) {
    const { id } = req.params;
    const { product } = req.body;
    console.log(product);
    const result = await ProductServices.updateProductIntoDB(id, product);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: ' Product is Updated successfully',
      data: result,
    });
  }
});

export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
