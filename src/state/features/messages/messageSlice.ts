import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { formatISO } from 'date-fns';

import { Message } from '../../types';

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

export const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<Message>) => {
            state.chat = [...state.chat, action.payload];
        },
    },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
