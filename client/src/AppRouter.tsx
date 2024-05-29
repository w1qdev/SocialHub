import { createBrowserRouter } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import SocialHub from './SocialHub';
import ErrorPage from './pages/error/error-page';
import './App.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <SocialHub />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'chat/:chatId',
                element: <Chat />,
            },
        ],
    },
]);

export default router;
