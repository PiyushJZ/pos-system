import express from 'express';

import { login } from '../controllers/auth.js';
import { validateLoginData } from '../middlewares/index.js';

const router = express.Router();

// Login to the App
router.post('/login', validateLoginData, login);

// Create a new User
// router.post('/register', async (req, res) => {
//   const { name, role, email, password } = req.body;
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password, salt);
//   const user = await User.create({
//     name,
//     role,
//     email,
//     password: hashedPassword,
//   });

//   res.status(200).json({ message: 'Success!', user });
// });

export default router;
