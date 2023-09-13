import express from 'express';
import { setCache, verifyAccessToken } from '../middlewares/index.js';

const router = express.Router();

// Get all products
router.get('/', verifyAccessToken, setCache);

// Add Product to DB
router.post('/', verifyAccessToken);

// Remove Product from DB
router.delete('/:productId', verifyAccessToken);

// Add Product/VAT/Discount to cart
router.put('/cart', verifyAccessToken);

// Remove Product/VAT/Discount from cart
router.delete('/cart/:employeeId', verifyAccessToken);

export default router;
