import express from 'express';

import {
  addProductToDatabase,
  deleteProductFromDatabase,
  getAllProducts,
  updateCart,
} from '../controllers/product.js';
import {
  setCache,
  validateCartData,
  validateProductData,
  verifyAccessToken,
} from '../middlewares/index.js';

const router = express.Router();

// Get all products
router.get('/', verifyAccessToken, setCache, getAllProducts);

// Add Product to DB
router.post('/', verifyAccessToken, validateProductData, addProductToDatabase);

// Remove Product from DB
router.delete('/:productId', verifyAccessToken, deleteProductFromDatabase);

// Add/Update Product/VAT/Discount to cart
router.put(
  '/cart/:employeeId',
  verifyAccessToken,
  validateCartData,
  updateCart
);

export default router;
