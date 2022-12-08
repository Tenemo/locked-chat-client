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
// export const setUsernameThunk = createAsyncThunk(
//     'user/setUsername',
//     async ({ username, socketID }: Request, ThunkAPI) => {
//         try {
//             const response = await axios.post<Response>(
//                 'http://localhost:4000/set-username',
//                 {
//                     username,
//                     socketID,
//                 },
//             );
//             return response.data;
//         } catch (error) {
//             // Assert that the error variable is an instance of AxiosError
//             const axiosError = error as AxiosError;
//             // Extract only the relevant data from the error.response object
//             const serializedError: SerializedError = {
//                 name: axiosError.name,
//                 message: axiosError.response?.data as string,
//                 stack: axiosError.stack,
//                 code: axiosError.code,
//             };

//             // Return the serialized error instead of the full error.response object
//             return ThunkAPI.rejectWithValue(serializedError);
//         }
//     },
// );

// export const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(setUsernameThunk.pending, (state, action) => {
//             state.loading = 'pending';
//             state.username = action.meta.arg.username;
//             state.error = null;
//         });
//         builder.addCase(setUsernameThunk.fulfilled, (state) => {
//             state.loading = 'fulfilled';
//         });
//         builder.addCase(setUsernameThunk.rejected, (state, { payload }) => {
//             state.loading = 'rejected';
//             state.error = payload as SerializedError;
//         });
//     },
// });

// export default userSlice.reducer;
