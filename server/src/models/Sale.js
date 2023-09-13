import { Schema, model } from 'mongoose';

const saleSchema = new Schema({
  invoiceNumber: {
    type: Number,
    required: true,
  },
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  dateOfSale: {
    type: Date,
    required: true,
  },
  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
      price: Nummber,
    },
  ],
  discount: Number,
  vat: {
    type: Number,
    required: true,
  },
});
