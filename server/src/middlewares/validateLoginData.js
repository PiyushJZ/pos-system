import { z } from 'zod';

const loginSchema = z
  .object({
    email: z
      .string({ required_error: 'Email is required' })
      .trim()
      .email({ message: 'Invalid email address' }),
    password: z
      .string({ required_error: 'Password is required' })
      .min(6, { message: 'Password must be minimum 6 characters' }),
  })
  .required()
  .strict();

export default (req, res, next) => {
  const loginFormData = req.body;
  const parseOutput = loginSchema.safeParse(loginFormData);

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
