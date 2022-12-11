import { ChatState } from './chatType';

export type UserState = {
    username: string;
    errorMessage: null | string | undefined;
    isLoggedIn: LoginEvents;
};

export type Response = ChatState;
export type Request = {
    username: string;
    socketID: string;
};
export enum LoginEvents {
    LOG_IN = 1,
    LOG_OUT = 0,
}
