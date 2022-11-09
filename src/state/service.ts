import { io, Socket } from 'socket.io-client';

const createSocket = (): Socket => {
    const socket: Socket = io('localhost:4000', {});
    return socket;
};
export const socket = createSocket();
