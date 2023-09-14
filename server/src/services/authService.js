import bcrypt from 'bcrypt';

import { getUserByEmail } from './userService.js';

export const loginUser = async (email, password) => {
  try {
    const requestedUser = await getUserByEmail(email);
    if (!requestedUser) {
      return null;
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      requestedUser.password
    );
    if (!isPasswordCorrect) {
      return { status: 400 };
    }

    delete requestedUser['password'];
    return requestedUser;
  } catch (err) {
    console.log(`=================================`);
    console.log(`Could not complete login`);
    console.log(`due to error:\n${err}`);
    console.log(`=================================`);
    return { status: 500 };
  }
};
