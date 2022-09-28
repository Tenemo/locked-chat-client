import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { formatISO } from 'date-fns';

import { Message } from './messagesTypes';

const initialState: { chat: Message[] } = {
    chat: [
        {
            content: 'test',
            timestamp: formatISO(Date.now()),
            author: 'admin',
            id: '1515',
        },
    ],
};

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<Message>) => {
            state.chat = [...state.chat, action.payload];
        },
    },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
