export interface ChatInputContainerProps {
    inputValue: string;
    handleChangeMessageValue(e: React.FormEvent<HTMLInputElement>): void;
    handleSubmitMessage(e: React.FormEvent<SubmitEvent>): void;
}
