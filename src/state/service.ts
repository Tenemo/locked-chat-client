/* eslint-disable no-console */
import { io, Socket } from 'socket.io-client';

import { api } from './features/api/api';
import { store } from './store';

// import { ChatEvents } from 'types/chatType';

const createSocket = (): Socket => {
    const socket: Socket = io('localhost:4000', {
        reconnection: true,
        reconnectionAttempts: 10,
        reconnectionDelay: 5000,
        timeout: 5000,
        autoConnect: true,
    });

    return socket;
};

export const socket = createSocket();

socket.on('connect', () => {
    console.log('connected to the server.');
});

// Fired upon a successful reconnection
socket.io.on('reconnect', async () => {
    console.log('successful reconnect attempt ');
    const getToken = localStorage.getItem('token');

    if (getToken) {
        const token = JSON.parse(getToken) as string;
        const result = api.endpoints.verifyToken.initiate({ token });
        const wynik = await store.dispatch(result);
        console.log('wynik', wynik);
    }
    // console.log('zobacz to ', token);
    // socket.on('testuje', (odebralem) => {
    //     console.log('co odebralem ?', odebralem);
    // });
});
// Fired upon an attempt to reconnect.
// socket.io.on('reconnect_attempt', (attempt) => {
//     console.log('reconnect_attempt ', attempt);
// });
// // Fired when couldn't reconnect within reconnectionAttempts.
// socket.io.on('reconnect_failed', () => {
//     console.log('reconnect_failed');
// });
