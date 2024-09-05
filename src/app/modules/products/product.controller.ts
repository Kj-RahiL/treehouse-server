import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.service";
import httpStatus from 'http-status';

const getAllProduct: RequestHandler = catchAsync(async(req, res)=>{
    const result = await ProductServices.getAllProductsFromDB(req.query)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Students are retrieved successfully',
        data: result,
      });
})
const getSingleProduct: RequestHandler = catchAsync(async(req, res)=>{
   const {id } = req.params
    const result = await ProductServices.getSingleProductFromDB(id)

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Students are retrieved successfully',
        data: result,
      });
})
const updateProduct: RequestHandler = catchAsync(async(req, res)=>{
    const {id} = req.params;
    const {product} = req.body
    const result = await ProductServices.updateProductIntoDB(id, product)

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Students are retrieved successfully',
        data: result,
      });
})
const deleteProduct: RequestHandler = catchAsync(async(req, res)=>{
    const {id} = req.params
     const result = await ProductServices.deleteProductFromDB(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Students are retrieved successfully',
        data: result,
      });
})


export const ProductControllers = {
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}