import express from 'express';

import authRouter from './auth.js';
import productRouter from './product.js';
import saleRouter from './sale.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/product', productRouter);
router.use('/sale', saleRouter);

export default router;
