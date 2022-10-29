import { configureStore } from '@reduxjs/toolkit';
import { Middleware, Action, combineReducers } from 'redux';
import logger from 'redux-logger';
// import { io, Socket } from 'socket.io-client';

import messagesReducer, {
    // startConnecting,
    // connectionEstablished,
    receiveMessage,
    submitMessage,
} from './features/messages/messagesSlice';
import socketReducer, {
    startConnecting,
    connectionEstablished,
} from './features/socket/socketSlice';
import { socket } from './service';

import { Message, MessagesEvents } from 'state/features/messages/messagesTypes';

const rootReducer = combineReducers({
    messages: messagesReducer,
    socket: socketReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const messagesMiddleware: Middleware<unknown, RootState> =
    (messagesStore) => (next) => (action: Action) => {
        const isConnectionEstablished =
            socket && messagesStore.getState().socket.isConnected;

        if (startConnecting.match(action)) {
            socket.on('connect', () => {
                messagesStore.dispatch(connectionEstablished());
            });
            socket.on(MessagesEvents.SET_USERNAME_CORRECT, (users) => {
                console.log(users);
            });
            socket.on(MessagesEvents.NEW_MESSAGE_UPDATE, (message: Message) => {
                messagesStore.dispatch(receiveMessage({ message }));
            });
        }

        if (submitMessage.match(action) && isConnectionEstablished) {
            socket.emit(MessagesEvents.NEW_MESSAGE, action.payload.content);
        }

        return next(action);
    };
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([messagesMiddleware, logger]),
});
export type AppDispatch = typeof store.dispatch;
