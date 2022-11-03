export type ChatState = {
    messages: Message[];
    usernames: string[];
};
export type Message = {
    readonly content: string;
    readonly timestamp: string;
    readonly author: string;
    readonly id: string;
};
