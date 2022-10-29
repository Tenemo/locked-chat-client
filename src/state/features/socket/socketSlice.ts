import { createSlice } from '@reduxjs/toolkit';

import { socketState } from './socketTypes';

const initialState: socketState = {
    isEstablishingConnection: false,
    isConnected: false,
};

export const socketSlice = createSlice({
    name: 'socket',
    initialState,
    reducers: {
        startConnecting: (state) => {
            state.isEstablishingConnection = true;
        },
        connectionEstablished: (state) => {
            state.isConnected = true;
            state.isEstablishingConnection = false;
        },
    },
});
export const { startConnecting, connectionEstablished } = socketSlice.actions;
export default socketSlice.reducer;
