import {
  addProductToProductList,
  deleteProductFromProductList,
  fetchAllProducts,
  updateDiscount,
  updateProductQuantityInCart,
  updateVat,
} from '../services/productService.js';

/**
 * Fetch All the products
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
export const getAllProducts = async (req, res) => {
  const products = await fetchAllProducts();
  if (products?.status === 500) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
  if (products.length === 0) {
    res.set('Cache-Control', 'no-cache');
    return res.status(204).end();
  }
  res.status(200).json({ products });
};

/**
 * Add Products to Product list by admins
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
export const addProductToDatabase = async (req, res) => {
  if (req.role !== 'ADMIN') {
    return res.status(401).json({
      success: false,
      message: 'You are not authorized to add products',
    });
  }
  const product = await addProductToProductList(req.body);
  if (product?.status === 500) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
  res.status(201).json({ product });
};

/**
 * Remove Products from Product list by admins
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
export const deleteProductFromDatabase = async (req, res) => {
  if (req.role !== 'ADMIN') {
    return res.status(401).json({
      success: false,
      message: 'You are not authorized to delete products',
    });
  }
  const productId = req.params.productId;
  const deletedProduct = await deleteProductFromProductList(productId);
  if (deletedProduct?.status === 500) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }

  res.status(204).end();
};

/**
 * Update user cart
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
export const updateCart = async (req, res) => {
  if (req.employeeId.toString() !== req.params.employeeId) {
    return res.status(401).json({
      success: false,
      message: "You cannot update another employee's cart",
    });
  }
  const { vat, discount, product } = req.body;
  let user = null;
  if (vat) {
    user = await updateVat(req.params.employeeId, vat);
  }
  if (discount) {
    if (req.role !== 'ADMIN') {
      return res.status(401).json({
        success: false,
        message: 'You are not authorized to delete products',
      });
    }
    user = await updateDiscount(req.params.employeeId, discount);
  }
  if (product) {
    const { productId, quantity } = product;
    user = await updateProductQuantityInCart(
      req.params.employeeId,
      productId,
      quantity
    );
  }
  if (!user) {
    return res.status(404).end();
  }
  if (user?.status === 409) {
    return res.status(409).json({
      success: false,
      message: 'Quantity more then available quantity',
    });
  }
  if (user?.status === 500) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
  await user.populate('cart.cartItems.product');
  res.status(200).json({ user });
};
