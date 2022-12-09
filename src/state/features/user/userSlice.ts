import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState } from 'types/userType';

const initialState: UserState = {
    username: '',
    errorMessage: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsernameReducer: (
            state,
            action: PayloadAction<{
                username: string;
                error?: string;
            }>,
        ) => {
            state.username = action.payload.username;
            state.errorMessage = action.payload.error;
        },
    },
});
export default userSlice.reducer;
export const { setUsernameReducer } = userSlice.actions;
