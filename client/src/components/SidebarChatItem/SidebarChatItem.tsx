import './SidebarChatItem.scss';

export default function SidebarChatItem() {
    return (
        <div className="chat__item">
            <div className="chat__item-avatar">
                <img
                    src="https://i.pinimg.com/564x/d6/9b/32/d69b320501c2fa0019e1bb5c82dc4f30.jpg"
                    alt="avatar"
                />
            </div>
            <div className="chat__item-content">
                <div className="chat__item-content-name">Название чата</div>
                <div className="chat__item-content-last-message">
                    chat last message
                </div>
            </div>
        </div>
    );
}
