import express from 'express';
import { verifyAccessToken } from '../middlewares/index.js';

const router = express.Router();

// Process the sale
router.post('/', verifyAccessToken);

// Delete the sale
router.delete('/:employeeId', verifyAccessToken);

export default router;
