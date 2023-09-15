import { Navigate, Outlet } from 'react-router-dom';

const ReverseRoute = () => {
  const token = false;
  const flag = token ? false : true;

  return flag ? <Outlet /> : <Navigate to='/' />;
};

export default ReverseRoute;
