import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = false;

  const flag = token ? true : false;

  return flag ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
