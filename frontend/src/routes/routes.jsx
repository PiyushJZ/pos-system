import ProtectedRoute from './ProtectedRoute';
import ReverseRoute from './ReverseRoute';

const routes = [
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        lazy: () => import('../pages/HomePage'),
      },
    ],
  },
  {
    path: 'login',
    element: <ReverseRoute />,
    children: [
      {
        index: true,
        lazy: () => import('../pages/Login'),
      },
    ],
  },
  {
    path: '*',
    lazy: () => import('../pages/NotFound'),
  },
];

export default routes;
