export type userIdType = string;
export type messageTextType = string;
export type messageTimeType = string;

export interface MessageContainerProps {
    userId: userIdType;
    text: messageTextType;
    time: messageTimeType;
}
