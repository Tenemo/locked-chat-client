import { ChatState } from './chatType';

export type UserState = {
    username: string;
    errorMessage: null | string | undefined;
};

export type Response = ChatState;
export type Request = {
    username: string;
    socketID: string;
};
