import { Schema, Types, model } from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    index: true,
  },
  availableQuantity: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
});

const Product = model('Product', productSchema);
export default Product;
