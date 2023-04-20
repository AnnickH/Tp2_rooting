import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import ArticlePage from '../pages/ArticlePage';

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
  {
    path: `/Article/:id`,
    element: <ArticlePage />,
  }, // on ne met pas de route pour app car app est un root pour utiliser cette page de rooting
]);

export default routes;
