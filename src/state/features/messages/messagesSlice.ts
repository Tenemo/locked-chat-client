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
        // do wyjebania
        // startConnecting: (state) => {
        //     state.isEstablishingConnection = true;
        // },
        // do wyjebania
        // connectionEstablished: (state) => {
        //     state.isConnected = true;
        //     state.isEstablishingConnection = true;
        // },
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
            // wyjeb tego console.loga
            console.log({ content: action.payload.content });
        },
    },
});

export const {
    // do wyjebania
    // startConnecting,
    // do wyjebania
    // connectionEstablished,
    receiveMessage,
    submitMessage,
} = messagesSlice.actions;
export default messagesSlice.reducer;
