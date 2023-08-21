import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DevTools } from 'jotai-devtools';
import './index.css';

// # Routes
import Root from './routes/root';
import Login from './routes/login';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: <Root />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <DevTools isInitialOpen={false} />
        <RouterProvider router={router} />
    </React.StrictMode>,
);
