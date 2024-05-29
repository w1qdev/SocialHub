import './ChatMessagesContainer.scss';
import MessageContainer from '../MessageContainer/MessageContainer';
import { useRef, useEffect } from 'react';
import { Message } from '../Chat/Chat';

interface ChatMessagesContainerProps {
    messagesList: Message[];
}

export default function ChatMessagesContainer({
    messagesList,
}: ChatMessagesContainerProps) {
    const messageListRef = useRef(null);

    useEffect(() => {
        if (messageListRef.current) {
            messageListRef.current.scrollTop =
                messageListRef.current.scrollHeight;
        }
    }, [messagesList]);

    return (
        <div ref={messageListRef} className="chat-messages-container">
            {messagesList?.length
                ? messagesList.map(message => (
                      <MessageContainer
                          key={message.id}
                          text={message.text}
                          userId={'1'}
                      />
                  ))
                : null}
        </div>
    );
}
