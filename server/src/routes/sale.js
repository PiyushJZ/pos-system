import express from 'express';

import { deleteSale, processSale } from '../controllers/sale.js';
import { verifyAccessToken } from '../middlewares/index.js';

const router = express.Router();

// Process the sale
router.get('/:employeeId', verifyAccessToken, processSale);

// Delete the sale
router.delete('/:employeeId', verifyAccessToken, deleteSale);

export default router;
