import './ChatInputContainer.scss';
import React from 'react';

export interface ChatInputContainerProps {
    inputValue: string;
    handleChangeMessageValue(e: React.FormEvent<HTMLInputElement>): void;
    handleSubmitMessage(e: React.FormEvent<SubmitEvent>): void;
}

export default function ChatInputContainer({
    inputValue,
    handleChangeMessageValue,
    handleSubmitMessage,
}: ChatInputContainerProps) {
    return (
        <div className="chat-input-container">
            <div className="chat-input-item">
                <form className="form" onSubmit={e => handleSubmitMessage(e)}>
                    <input
                        value={inputValue}
                        onChange={e => handleChangeMessageValue(e)}
                        placeholder="Message"
                        className="message"
                        type="text"
                    />
                </form>
            </div>
        </div>
    );
}
