export type Message = {
    readonly content: string;
    readonly timestamp: string;
    readonly author: string;
    readonly id: string;
};
export enum MessagesEvents {
    NEW_MESSAGE = 'new-message',
    NEW_MESSAGE_UPDATE = 'new-message-update',
}
export type MessagesState = {
    messages: Message[];
    isEstablishingConnection: boolean;
    isConnected: boolean;
};
