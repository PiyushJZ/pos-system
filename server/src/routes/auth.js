import express from 'express';

import { validateLoginData } from '../middlewares/index.js';

const router = express.Router();

// Login to the App
router.post('/login', validateLoginData);

// Create a new User
router.post('/register', (req, res) => {});

export default router;
