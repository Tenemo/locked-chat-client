import { configureStore } from '@reduxjs/toolkit';
import { Middleware, Action, combineReducers } from 'redux';
import { io, Socket } from 'socket.io-client';

import messagesReducer, {
    startConnecting,
    connectionEstablished,
    receiveMessage,
    submitMessage,
} from './features/messages/messagesSlice';

import { Message, MessagesEvents } from 'state/features/messages/messagesTypes';

const rootReducer = combineReducers({
    messages: messagesReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
let socket: Socket;
const messagesMiddleware: Middleware<unknown, RootState> =
    (messagesStore) => (next) => (action: Action) => {
        console.log({ action });
        const isConnectionEstablished =
            socket && messagesStore.getState().messages.isConnected;

        if (startConnecting.match(action)) {
            socket = io('localhost:4000', {});

            socket.on('connect', () => {
                messagesStore.dispatch(connectionEstablished());
                // socket.emit(MessagesEvents.RequestAllMessages);
            });

            socket.on(MessagesEvents.NEW_MESSAGE_UPDATE, (message: Message) => {
                messagesStore.dispatch(receiveMessage({ message }));
            });
        }

        if (submitMessage.match(action) && isConnectionEstablished) {
            socket.emit(MessagesEvents.NEW_MESSAGE, action.payload.content);
        }

        next(action);
    };
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([messagesMiddleware]),
});
export type AppDispatch = typeof store.dispatch;
