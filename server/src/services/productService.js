import mongoose from 'mongoose';
import { Product, User } from '../models/index.js';

const UserProjection = 'email name role cart';

export const fetchAllProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (err) {
    console.log(`=================================`);
    console.log(`Could not fetch products`);
    console.log(`due to error:\n${err}`);
    console.log(`=================================`);
    return { status: 500 };
  }
};

export const addProductToProductList = async product => {
  try {
    const addedProduct = await Product.create(product);
    return addedProduct;
  } catch (err) {
    console.log(`=================================`);
    console.log(`Could not add product`);
    console.log(`due to error:\n${err}`);
    console.log(`=================================`);
    return { status: 500 };
  }
};

export const deleteProductFromProductList = async productId => {
  try {
    const product = await Product.findOneAndDelete({ _id: productId });
    return product;
  } catch (err) {
    console.log(`=================================`);
    console.log(`Could not delete product`);
    console.log(`due to error:\n${err}`);
    console.log(`=================================`);
    return { status: 500 };
  }
};

export const updateVat = async (employeeId, vatAmount) => {
  try {
    const user = await User.findByIdAndUpdate(
      employeeId,
      {
        $set: { 'cart.vat': vatAmount },
      },
      { new: true, select: UserProjection }
    );
    return user;
  } catch (err) {
    console.log(`=================================`);
    console.log(`Could not update vat`);
    console.log(`due to error:\n${err}`);
    console.log(`=================================`);
    return { status: 500 };
  }
};

export const updateDiscount = async (employeeId, discount) => {
  try {
    const user = await User.findByIdAndUpdate(
      employeeId,
      {
        $set: { 'cart.discount': discount },
      },
      { new: true, select: UserProjection }
    );
    return user;
  } catch (err) {
    console.log(`=================================`);
    console.log(`Could not update discount`);
    console.log(`due to error:\n${err}`);
    console.log(`=================================`);
    return { status: 500 };
  }
};

export const updateProductQuantityInCart = async (
  employeeId,
  productId,
  quantity
) => {
  try {
    const product = await Product.findById(productId);
    if (quantity > product.availableQuantity) {
      return { status: 409 };
    }
    const user = await User.findById(employeeId, UserProjection);
    user.cart.cartItems = user.cart.cartItems.filter(item => {
      return item.product.toString() !== productId;
    });
    if (quantity !== 0) {
      user.cart.cartItems.push({
        product: mongoose.Types.ObjectId.createFromHexString(productId),
        quantity,
      });
    }

    await user.save();
    return user;
  } catch (err) {
    console.log(`=================================`);
    console.log(`Could not update cart item`);
    console.log(`due to error:\n${err}`);
    console.log(`=================================`);
    return { status: 500 };
  }
};
