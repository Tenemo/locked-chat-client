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
        updateUsers: (
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
    },
});

export const {
    newMessageUpdate,
    newMessage,
    updateUsers,
    userDisconnected,
    setUsernameSuccess,
} = chatSlice.actions;
export default chatSlice.reducer;
