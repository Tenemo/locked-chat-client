export type Message = {
    readonly content: string;
    readonly timestamp: string;
    readonly author: string;
    readonly id: string;
};
export enum MessagesEvents {
    NEW_MESSAGE = 'new-message',
    NEW_MESSAGE_UPDATE = 'new-message-update',
    SET_USERNAME = 'set-username',
    SET_USERNAME_FAILED = 'set-username-failed',
    SET_USERNAME_CORRECT = 'set-username-correct',
}
export type MessagesState = {
    messages: Message[];
    isEstablishingConnection: boolean;
    isConnected: boolean; // wyjebac
};
