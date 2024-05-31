import { createBrowserRouter } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import SocialHub from './SocialHub';
import ErrorPage from './pages/error/error-page';
import AuthPage from './pages/auth/auth-page';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import './App.css';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: (
            <ProtectedRoute>
                <SocialHub />
            </ProtectedRoute>
        ),
        children: [
            {
                path: 'chat/:chatId',
                element: <Chat />,
            },
        ],
    },
    {
        path: '/auth',
        element: <AuthPage />,
    },
]);

export default router;
