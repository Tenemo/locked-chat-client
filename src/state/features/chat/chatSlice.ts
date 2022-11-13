import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ChatState, Message } from 'types/chatType';

const initialState: ChatState = {
    messages: [],
    usernames: [],
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        newMessage: (
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            _state,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            _action: PayloadAction<{
                content: string;
            }>,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
        ) => {},
        newMessageUpdate: (
            state,
            action: PayloadAction<{
                message: Message;
            }>,
        ) => {
            state.messages.push(action.payload.message);
        },
        setUsernameSuccess: (
            state,
            action: PayloadAction<{
                messages: Message[];
                usernames: string[];
            }>,
        ) => {
            state.messages = action.payload.messages;
            state.usernames = action.payload.usernames;
        },
        updateUsernames: (
            state,
            action: PayloadAction<{
                users: string[];
            }>,
        ) => {
            state.usernames = [...action.payload.users];
        },
        userDisconnected: (
            state,
            action: PayloadAction<{
                users: string[];
            }>,
        ) => {
            state.usernames = [...action.payload.users];
        },
        // zakladajac ze mam to dispatchować w login zamiast setUsernameSuccess to jak ja mam to wyexportować
        'user/setUsername/fulfilled': (
            state,
            action: PayloadAction<{
                messages: Message[];
                usernames: string[];
            }>,
        ) => {
            state.messages = action.payload.messages;
            state.usernames = action.payload.usernames;
        },
    },
});

export const {
    newMessageUpdate,
    newMessage,
    updateUsernames,
    userDisconnected,
    setUsernameSuccess,
} = chatSlice.actions;
export default chatSlice.reducer;
