import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState } from '../../../types/userType';

const initialState: UserState = {
    username: '',
    isLogin: false,
    error: {},
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
        },
        setIsLogin: (
            state,
            action: PayloadAction<{
                isLogin: boolean;
            }>,
        ) => {
            state.isLogin = action.payload.isLogin;
        },
    },
});

export const { setUsername, setIsLogin } = userSlice.actions;
export default userSlice.reducer;
