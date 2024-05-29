import './App.css';
import Sidebar from './components/layout/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function SocialHub() {
    return (
        <div className="social-hub">
            <Sidebar />
            <Outlet />
        </div>
    );
}

export default SocialHub;
