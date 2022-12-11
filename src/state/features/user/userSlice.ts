import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState, LoginEvents } from 'types/userType';

const initialState: UserState = {
    username: '',
    errorMessage: null,
    isLoggedIn: LoginEvents.LOG_OUT,
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
                error?: string;
            }>,
        ) => {
            state.username = action.payload.username;
            state.errorMessage = action.payload.error;
            state.isLoggedIn = action.payload.setIsLoggedIn;
        },
    },
});
export default userSlice.reducer;
export const { loginReducer } = userSlice.actions;
