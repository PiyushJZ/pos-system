import jwt from 'jsonwebtoken';

import { loginUser } from '../services/authService.js';

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await loginUser(email, password);
  if (!user) {
    return res
      .status(404)
      .json({ success: false, message: 'Account with given email not found' });
  }

  if (user?.status === 400) {
    return res
      .status(400)
      .json({ success: false, message: 'Password is incorrect' });
  }

  if (user?.status === 500) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
  const { name, role, cart, _id } = user;
  const { JWT_SECRET } = process.env;
  const token = jwt.sign({ name, email, role, _id }, JWT_SECRET);

  res.status(200).json({
    success: true,
    message: 'Logged in successfully',
    token,
    _id,
    name,
    email,
    role,
    cart,
  });
};
