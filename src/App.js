import { RouterProvider } from 'react-router-dom';
import routes from './router/Routes';

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
