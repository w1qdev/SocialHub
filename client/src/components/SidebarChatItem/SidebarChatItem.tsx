import { Link } from 'react-router-dom';
import './SidebarChatItem.scss';
import { chatItem } from '../layout/Sidebar/Sidebar.props';
import { motion } from 'framer-motion';

export default function SidebarChatItem({
    chatId,
    avatar,
    title,
    lastMessage,
}: chatItem) {
    return (
        <motion.div>
            <Link className="chat__item" to={`/chat/${chatId}`}>
                <div className="chat__item-avatar">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="chat__item-content">
                    <div className="chat__item-content-name">{title}</div>
                    <div className="chat__item-content-last-message">
                        {lastMessage}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
