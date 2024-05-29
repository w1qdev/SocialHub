import './Sidebar.scss';
import SearchIcon from '@/components/Icons/SearchIcon';
import SettingsIcon from '@/components/Icons/SettingsIcon';
import SidebarChatItem from '@/components/SidebarChatItem/SidebarChatItem';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <SettingsIcon className="sidebar__header-settings-icon" />
                <div className="sidebar__header-search">
                    <SearchIcon className="search-icon" />
                    <input
                        placeholder="Поиск..."
                        className="search-input"
                        type="text"
                    />
                </div>
            </div>

            <div className="sidebar__chatslist">
                <SidebarChatItem />
            </div>
        </div>
    );
}
