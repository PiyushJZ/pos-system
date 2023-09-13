import express from 'express';

import { login } from '../controllers/auth.js';
import { validateLoginData } from '../middlewares/index.js';

const router = express.Router();

// Login to the App
router.post('/login', validateLoginData, login);

// Create a new User
router.post('/register', (req, res) => {});

export default router;
