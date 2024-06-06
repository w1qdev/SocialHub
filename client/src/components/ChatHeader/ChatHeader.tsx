import './ChatHeader.scss';

export default function ChatHeader() {
    return (
        <div className="chat-header">
            <div className="chat-header__content">
                <div className="content-avatar">
                    <img
                        src="https://i.pinimg.com/736x/0e/6a/d2/0e6ad287274d5bfb45a49e52f9c9a064.jpg"
                        alt="user-avatar"
                    />
                </div>
                <div className="content-info">
                    <div className="content-info__title">Название чата</div>
                    <div className="content-info__last-seen-time">
                        В последний раз в сети 18:00
                    </div>
                </div>
            </div>
        </div>
    );
}
