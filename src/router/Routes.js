import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';

import UserPage from '../pages/UserPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/Home',
    element: <HomePage />,
  },
  {
    path: `/UserPage/:id`,
    element: <UserPage />,
  },
]);

export default routes;
