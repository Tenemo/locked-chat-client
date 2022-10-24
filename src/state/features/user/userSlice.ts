import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState } from './userType';

const initialState: UserState = {
    username: '',
    loginStarted: false, // wyswietl spiner dla false
    isLogin: false,
    error: {},
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        startLogin: (state) => {
            state.loginStarted = true;
        },
        setUsername: (state, action: PayloadAction<{ username: string }>) => {
            state.username = action.payload.username;
        },
    },
});

export const { startLogin, setUsername } = userSlice.actions;
export default userSlice.reducer;
