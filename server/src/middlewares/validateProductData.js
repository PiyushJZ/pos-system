import { Types } from 'mongoose';
import { z } from 'zod';

// Schema for validating the product details to add to database
const productSchema = z
  .object({
    name: z
      .string({
        required_error: 'Name is required',
        message: 'Name must be a string',
      })
      .max(20, { message: 'Name cannot be longer than 20 characters' }),
    category: z
      .string({
        required_error: 'Category is required',
        message: 'Category must be a string',
      })
      .max(20, { message: 'Category cannot be longer than 20 characters' }),
    availableQuantity: z
      .number({
        required_error: 'Quantity is required',
        invalid_type_error: 'Quantity must be a number',
      })
      .positive({ message: 'Quantity must be a positive number' })
      .finite({ message: 'Quantity cannot be infinite' }),
    unitPrice: z
      .number({
        required_error: 'Price is required',
        invalid_type_error: 'Price must be a number',
      })
      .positive({ message: 'Price must be a positive number' })
      .finite({ message: 'Price cannot be infinite' }),
  })
  .required()
  .strict();

export default (req, res, next) => {
  const productData = req.body;
  if (Object.keys(productData).length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Empty object sent',
    });
  }

  const parseOutput = productSchema.safeParse(productData);

  if (parseOutput.success) {
    next();
  } else {
    console.log('PARSE OUTPUT', parseOutput.error.flatten());
    res.status(400).json({
      success: false,
      message: parseOutput.error.flatten().fieldErrors,
    });
  }
};
