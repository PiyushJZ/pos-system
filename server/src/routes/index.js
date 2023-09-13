import express from 'express';

import authRouter from './auth.js';
import cartRouter from './cart.js';
import checkoutRouter from './checkout.js';
import productRouter from './product.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/product', productRouter);
router.use('/cart', cartRouter);
router.use('checkout', checkoutRouter);

export default router;
