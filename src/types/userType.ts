import { SerializedError } from '@reduxjs/toolkit';

import { ChatState } from './chatType';

export type UserState = {
    username: string;
    error: null | SerializedError;
    loading: 'pending' | 'fulfilled' | 'rejected' | '' | 'succeeded';
};

export type Response = ChatState;
export type Request = {
    username: string;
    socketID: string;
};
