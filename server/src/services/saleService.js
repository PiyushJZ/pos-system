import { Sale } from '../models/index.js';

const generateInvoiceNumber = () => {
  return new Date().getTime() * 100;
};

const generateSaleItems = cart => {
  cart.cartItems.map(item => {
    return {
      product: item.product.productId,
      price: item.product.unitPrice,
      quantity: item.quantity,
    };
  });
};

export const processUserSale = async (employeeId, cart) => {
  try {
    const sale = {
      invoiceNumber: generateInvoiceNumber(),
      employeeId,
      dateOfSale: Date.now(),
      items: generateSaleItems(cart),
      discount: cart.discount,
      vat: cart.vat,
    };
    console.log(sale.items);
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
