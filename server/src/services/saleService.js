import { Product, Sale } from '../models/index.js';

const ProductProjection = 'name category unitPrice';

/**
 * Returns a randomly generated invoice number
 * @returns number
 */
const generateInvoiceNumber = () => {
  return new Date().getTime() * 100;
};

/**
 * @typedef Cart
 * @type Object
 *
 * @property {number} vat
 * @property {number} discount
 * @property {Array<{property: ObjectID, quantity: number}>} cartItems
 */

/**
 * Generate the list of items for the sale
 * @param {Cart} cart
 */
const generateSaleItems = cart => {
  return Promise.all(
    cart.cartItems.map(async item => {
      const product = await Product.findById(item.product.toString());
      product.availableQuantity -= item.quantity;
      await product.save();
      return {
        product: product,
        price: product.unitPrice,
        quantity: item.quantity,
      };
    })
  );
};

export const processUserSale = async (employeeId, cart) => {
  try {
    const sale = {
      invoiceNumber: generateInvoiceNumber(),
      employeeId,
      dateOfSale: Date.now(),
      items: await generateSaleItems(cart),
      discount: cart.discount,
      vat: cart.vat,
    };
    const processedSale = await Sale.create(sale);
    return processedSale;
  } catch (err) {
    console.log(`=================================`);
    console.log(`Could not complete sale`);
    console.log(`due to error:\n${err}`);
    console.log(`=================================`);
    return { status: 500 };
  }
};
