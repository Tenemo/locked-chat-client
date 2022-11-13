import { configureStore } from '@reduxjs/toolkit';
import { Middleware, Action, combineReducers } from 'redux';
import logger from 'redux-logger';

import chatReducer, {
    newMessage,
    newMessageUpdate,
    updateUsersName,
    userDisconnected,
} from './features/chat/chatSlice';
import socketReducer, {
    startConnecting,
    connectionEstablished,
} from './features/socket/socketSlice';
import userReducer from './features/user/userSlice';
import { socket } from './service';

import { ChatEvents } from 'enums/ChatEvents';
import { Message } from 'types/chatType';

const messagesMiddleware: Middleware<unknown, RootState> =
    (chatStore) => (next) => (action: Action) => {
        const isConnectionEstablished =
            socket && chatStore.getState().socket.isConnected;
        if (startConnecting.match(action)) {
            socket.on('connect', () => {
                chatStore.dispatch(connectionEstablished());
            });

            socket.on(ChatEvents.NEW_MESSAGE_UPDATE, (message: Message) => {
                chatStore.dispatch(newMessageUpdate({ message }));
            });

            socket.on(ChatEvents.UPDATE_USERS_NAME, (users: string[]) => {
                chatStore.dispatch(updateUsersName({ users }));
            });
            socket.on(ChatEvents.USER_DISCONNECTED, (users: string[]) => {
                chatStore.dispatch(userDisconnected({ users }));
            });
        }

        if (newMessage.match(action) && isConnectionEstablished) {
            socket.emit(ChatEvents.NEW_MESSAGE, action.payload.content);
        }

        return next(action);
    };

const rootReducer = combineReducers({
    socket: socketReducer,
    user: userReducer,
    chat: chatReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([messagesMiddleware, logger]),
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
