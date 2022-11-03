import { configureStore } from '@reduxjs/toolkit';
import { Middleware, Action, combineReducers } from 'redux';
import logger from 'redux-logger';

import { Message, ChatState } from '../types/chatType';

import chatReducer, {
    newMessage,
    newMessageUpdate,
    setUsernameSuccess,
} from './features/chat/chatSlice';
import socketReducer, {
    startConnecting,
    connectionEstablished,
} from './features/socket/socketSlice';
import userReducer, {
    setUsername,
    setIsLogin,
} from './features/user/userSlice';
import { socket } from './service';

import { ChatEvents } from 'enums/ChatEvents';

const rootReducer = combineReducers({
    socket: socketReducer,
    user: userReducer,
    chat: chatReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

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
            socket.on(ChatEvents.SET_USERNAME_FAILURE, () => {
                socket.disconnect();
            });
            socket.on(ChatEvents.NEW_MESSAGE_USERNAME_NOT_REGISTERED, () => {
                socket.disconnect();
            });
            socket.on(
                ChatEvents.SET_USERNAME_SUCCESS,
                ({ messages, usernames }: ChatState) => {
                    chatStore.dispatch(
                        setIsLogin({
                            isLogin: true,
                        }),
                    );
                    chatStore.dispatch(
                        setUsernameSuccess({ messages, usernames }),
                    );
                },
            );
        }

        if (newMessage.match(action) && isConnectionEstablished) {
            socket.emit(ChatEvents.NEW_MESSAGE, action.payload.content);
        }
        if (setUsername.match(action)) {
            socket.emit(ChatEvents.SET_USERNAME, action.payload.username);
        }

        return next(action);
    };
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([messagesMiddleware, logger]),
});
export type AppDispatch = typeof store.dispatch;
