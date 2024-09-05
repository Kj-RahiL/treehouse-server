import { Router } from "express";
import { ProductControllers } from "./product.controller";

const router = Router()

router.post('/create-product')
router.get('/:id', ProductControllers.getSingleProduct)
router.patch('/:id', ProductControllers.updateProduct)
router.delete('/:id', ProductControllers.deleteProduct)
router.get('/', ProductControllers.getAllProduct)

export const ProductRoutes = router