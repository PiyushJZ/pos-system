import { User } from '../models/index.js';

const UserProjection = 'email name role cart';

export const getUserById = async employeeId => {
  const user = await User.findById(employeeId).populate('cart.cartItems');
  return user;
};

export const getUserByEmail = async email => {
  const user = await User.findOne({ email });
  return user;
};

export const deleteUserCart = async employeeId => {
  try {
    const user = await User.findByIdAndUpdate(
      employeeId,
      {
        $set: { 'cart.cartItems': [] },
      },
      { new: true, select: UserProjection }
    );
    return user;
  } catch (err) {
    console.log(`=================================`);
    console.log(`Could not delete cart`);
    console.log(`due to error:\n${err}`);
    console.log(`=================================`);
    return { status: 500 };
  }
};
