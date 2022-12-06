import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { Request, Response, UserState } from 'types/userType';

const initialState: UserState = {
    username: '',
    error: null,
    loading: '',
};
export interface SerializedError {
    name?: string;
    message?: string;
    stack?: string;
    code?: string;
    respone: { data: string };
}

export const setUsernameThunk = createAsyncThunk(
    'user/setUsername',
    async ({ username, socketID }: Request, ThunkAPI) => {
        try {
            const response = await axios.post<Response>(
                'http://localhost:4000/set-username',
                {
                    username,
                    socketID,
                },
            );
            console.log('...', response);
            return response.data;
        } catch (error) {
            console.log('catch', error);
            // tu mam problem bo zamiast odbierać error z be z responsa to dostaje axiosowy error
            // throw error as AxiosError;
            return ThunkAPI.rejectWithValue(error.response);
        }
    },
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setUsernameThunk.pending, (state, action) => {
            state.loading = 'pending';
            state.username = action.meta.arg.username;
            state.error = null;
        });
        builder.addCase(setUsernameThunk.fulfilled, (state) => {
            state.loading = 'fulfilled';
        });
        builder.addCase(setUsernameThunk.rejected, (state, action) => {
            state.loading = 'rejected';
            // Cos mowiles ze ci nie pasuje ze do state.error przekazuje caly obiekt action.error ale nie wiem o co ci chodzilo, co w takim razie mam przekazywac?
            console.log('action.error', action.error);
            console.log('action rejected', action);
            state.error = action.payload;
        });
    },
});

export default userSlice.reducer;
