import { Schema, model } from 'mongoose';

const saleSchema = new Schema({
  invoiceNumber: {
    type: Number,
    required: true,
    unique: true,
    index: true,
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
      price: Number,
      quantity: Number,
    },
  ],
  discount: Number,
  vat: {
    type: Number,
    required: true,
  },
});

const Sale = model('Sale', saleSchema);
export default Sale;
