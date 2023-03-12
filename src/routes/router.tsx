import { createBrowserRouter, Link } from 'react-router-dom';
import { HomePage, CVPage, ErrorPage } from '../pages';
import { Login, Register } from '../components';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
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
