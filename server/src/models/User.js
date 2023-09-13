import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  employeeId: {
    type: ObjectId,
    required: true,
  },
  name: {
    type: String,
    maxLength: 40,
  },
  role: {
    type: String,
    required: true,
    default: 'MANAGER',
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    cartItems: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: Number,
      },
    ],
    vat: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
  },
});

const User = model('User', userSchema);
export default User;
