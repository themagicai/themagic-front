import { createBrowserRouter, Link } from 'react-router-dom';
import { HomePage, CVPage, ErrorPage } from '../pages';
import { Layout, Login, Register } from '../components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: 'cv',
    element: <CVPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
