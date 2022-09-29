import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Message, MessagesState } from './messagesTypes';

const initialState: MessagesState = {
    isEstablishingConnection: false,
    isConnected: false,
    messages: [],
};

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        startConnecting: (state) => {
            state.isEstablishingConnection = true;
        },
        connectionEstablished: (state) => {
            state.isConnected = true;
            state.isEstablishingConnection = true;
        },
        receiveMessage: (
            state,
            action: PayloadAction<{
                message: Message;
            }>,
        ) => {
            state.messages.push(action.payload.message);
        },
        submitMessage: (
            _state,
            action: PayloadAction<{
                content: string;
            }>,
        ) => {
            console.log({ content: action.payload.content });
        },
    },
});

export const {
    startConnecting,
    connectionEstablished,
    receiveMessage,
    submitMessage,
} = messagesSlice.actions;
export default messagesSlice.reducer;
