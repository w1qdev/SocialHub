import './Chat.scss';
import ChatMessagesContainer from '../ChatMessagesContainer/ChatMessagesContainer';
import ChatInputContainer from '../ChatInputContainer/ChatInputContainer';
import ChatHeader from '../ChatHeader/ChatHeader';
import React, { useState } from 'react';

export interface Message {
    id: string | number;
    text: string;
    time?: string;
}

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [messageValue, setMessageValue] = useState('');

    const handleChangeMessageValue = (e: React.FormEvent<HTMLInputElement>) => {
        setMessageValue(prev => e.target.value);
    };

    const onSubmitMessage = (e: React.FormEvent<SubmitEvent>) => {
        e.preventDefault();

        setMessages(prev => [...prev, { id: 1, text: messageValue }]);
        setMessageValue('');
    };

    return (
        <div className="chat">
            <ChatHeader />
            <ChatMessagesContainer messagesList={messages} />
            <ChatInputContainer
                inputValue={messageValue}
                handleChangeMessageValue={handleChangeMessageValue}
                handleSubmitMessage={onSubmitMessage}
            />
        </div>
    );
}
