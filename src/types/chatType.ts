export interface ChatState {
    messages: Message[];
    usernames: string[];
}
export type Message = {
    readonly content: string;
    readonly timestamp: string;
    author: string;
    readonly id: string;
};
export enum ChatEvents {
    NEW_MESSAGE = 'new-message',
    NEW_MESSAGE_UPDATE = 'new-message-update',
    UPDATE_USERNAMES = 'update-usernames',
    USER_DISCONNECTED = 'user-disconnected',
    USER_RECONNECT = 'user-reconnect',
}
