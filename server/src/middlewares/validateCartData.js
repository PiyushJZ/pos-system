import { Types } from 'mongoose';
import { z } from 'zod';

const cartSchema = z
  .object({
    vat: z
      .number({ invalid_type_error: 'VAT must be a number' })
      .positive()
      .finite(),
    discount: z
      .number({ invalid_type_error: 'Discount must be a number' })
      .gte(0, { message: 'Discount cannot be less than 0' })
      .lte(100, { message: 'Discount cannot be more than 100' }),
    productID: z.string().refine(
      val => {
        return Types.ObjectId.isValid(val);
      },
      { message: 'Invalid Product ID.' }
    ),
  })
  .partial();

export default (req, res, next) => {
  const cartData = req.body;
  if (Object.keys(cartData).length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Empty object sent',
    });
  }

  const parseOutput = cartSchema.safeParse(cartData);

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
