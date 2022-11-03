import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ChatState, Message } from '../../../types/chatType';
// import { Users } from '../../../types/usersType';

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
        loadMessages: (
            state,
            action: PayloadAction<{
                messages: Message[];
            }>,
        ) => {
            state.messages = action.payload.messages;
        },
        // setUsers: (
        //     state,
        //     action: PayloadAction<{
        //         users: Users;
        //     }>,
        // ) => {
        //     state.usernames.push(action.payload.users);
        // },
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
    },
});

export const {
    newMessageUpdate,
    loadMessages,
    newMessage,
    // setUsers,
    setUsernameSuccess,
} = chatSlice.actions;
export default chatSlice.reducer;
