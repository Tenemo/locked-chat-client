export type ChatState = {
    messages: Message[];
    usernames: string[];
    isReplyMessage: boolean;
    replyToId: string;
};
export type Message = {
    readonly content: string;
    readonly timestamp: string;
    author: string;
    readonly id: string;
};
