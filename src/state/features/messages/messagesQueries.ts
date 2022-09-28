import { Socket, io } from 'socket.io-client';

let socket: Socket;

export const getSocket = (): Socket => {
    if (!socket) {
        socket = io('localhost:4000', {});
    }
    return socket;
};
