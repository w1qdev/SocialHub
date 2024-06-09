import './Sidebar.scss';
import SearchIcon from '@/components/Icons/SearchIcon';
import SettingsIcon from '@/components/Icons/SettingsIcon';
import SidebarChatItem from '@/components/SidebarChatItem/SidebarChatItem';
import SidebarDropdownMenu from '@/components/SidebarDropdownMenu/SidebarDropdownMenu';
import { useState } from 'react';
import { chatItem } from './Sidebar.props';

export default function Sidebar() {
    const [chatList, setChatList] = useState<chatItem[]>([
        {
            chatId: 1,
            avatar: 'url',
            title: 'Заголовок чата',
            lastMessage: 'Что-то там...',
        },
        {
            chatId: 2,
            avatar: 'url',
            title: 'Заголовок чата 2',
            lastMessage: 'Что-то там...',
        },
    ]);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <SidebarDropdownMenu TriggerElement={<SettingsIcon />} />
                {/* <SettingsIcon className="sidebar__header-settings-icon" /> */}
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
                {chatList.length
                    ? chatList.map(chat => (
                          <SidebarChatItem key={chat.chatId} {...chat} />
                      ))
                    : null}
            </div>
        </div>
    );
}
