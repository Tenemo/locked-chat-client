import { io, Socket } from 'socket.io-client';

function connectSocket(): Socket {
    const socket: Socket = io('localhost:4000', {});
    console.log('singleton ', socket);
    return socket;
}
export const socket = connectSocket();
