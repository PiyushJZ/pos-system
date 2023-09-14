import { processUserSale } from '../services/saleService.js';
import { deleteUserCart, getUserById } from '../services/userService.js';

/**
 * Process employee sale
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
export const processSale = async (req, res) => {
  const employeeId = req.params.employeeId;
  const user = await getUserById(employeeId);
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  if (req.employeeId !== employeeId) {
    return res.status(400).json({
      success: false,
      message: "You are not authorized to process another user's sale",
    });
  }

  if (user.cart.cartItems.length === 0) {
    return res.status(404).json({ success: false, message: 'Cart is empty' });
  }

  const sale = await processUserSale(employeeId, user.cart);
  if (sale?.status === 500) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
  const userWithEmptyCart = await deleteUserCart(employeeId);
  if (userWithEmptyCart?.status === 500) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
  res.status(201).json({ success: true, message: 'Sale made!', sale });
};

/**
 * Delete employee sale
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
export const deleteSale = async (req, res) => {
  const employeeId = req.params.employeeId;
  const user = await getUserById(employeeId);
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  if (req.employeeId !== employeeId) {
    return res.status(400).json({
      success: false,
      message: "You are not authorized to cancel another user's sale",
    });
  }
  try {
    await deleteUserCart(employeeId);
    return res.status(201).json({ success: true, message: 'Sale cancelled' });
  } catch (err) {
    console.log(`=================================`);
    console.log(`Could not delete sale`);
    console.log(`due to error:\n${err}`);
    console.log(`=================================`);
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
};
