export default (req, res, next) => {
  const DURATION = 60 * 10;

  res.set('Cache-Control', `public, max-age=${DURATION}, must-revalidate`);

  next();
};
