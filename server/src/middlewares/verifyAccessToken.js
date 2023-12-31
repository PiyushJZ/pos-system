import jwt from 'jsonwebtoken';

export default async (req, res, next) => {
  const { JWT_SECRET } = process.env;

  try {
    const token = req.headers.authorization.split(' ')[1];
    const isAuthorized = jwt.verify(token, JWT_SECRET);
    if (isAuthorized) {
      const { _id, role } = jwt.decode(token);
      req.employeeId = _id;
      req.role = role;
      next();
    }
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      console.log(`=================================`);
      console.log(`Could not access data`);
      console.log(`due to error:\n${err}`);
      console.log(`=================================`);
      return res.status(401).json({
        success: false,
        message: 'You are not authorized to access this data',
      });
    }
    console.log(`=================================`);
    console.log(`Could not access data`);
    console.log(`due to error:\n${err}`);
    console.log(`=================================`);
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
};
