import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState } from '../../../types/userType';

const initialState: UserState = {
    username: '',
    isLoggedIn: false,
    error: { isUsernameFailure: null },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (
            state,
            action: PayloadAction<{
                username: string;
            }>,
        ) => {
            state.username = action.payload.username;
            state.error = {
                ...state.error,
                isUsernameFailure: null,
            };
        },
        setIsLogin: (
            state,
            action: PayloadAction<{
                isLogin: boolean;
                isUsernameFailure: boolean;
            }>,
        ) => {
            state.isLoggedIn = action.payload.isLogin;
            state.error = {
                ...state.error,
                isUsernameFailure: action.payload.isUsernameFailure,
            };
        },
        setUsernameFailure: (state) => {
            state.error = {
                ...state.error,
                isUsernameFailure: true,
            };
        },
    },
});

export const { setUsername, setIsLogin, setUsernameFailure } =
    userSlice.actions;
export default userSlice.reducer;
