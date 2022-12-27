import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState, LoginEvents } from 'types/userType';

const initialState: UserState = {
    username: '',
    errorMessage: null,
    isLoggedIn: LoginEvents.LOG_OUT,
    token: null,
    userID: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginReducer: (
            state,
            action: PayloadAction<{
                username: string;
                setIsLoggedIn: LoginEvents;
                errorMessage?: string;
                token: string | null;
                userId: string | null;
            }>,
        ) => {
            state.username = action.payload.username;
            state.errorMessage = action.payload.errorMessage;
            state.isLoggedIn = action.payload.setIsLoggedIn;
            state.token = action.payload.token;
            state.userID = action.payload.userId;
        },
    },
});
export default userSlice.reducer;
export const { loginReducer } = userSlice.actions;
