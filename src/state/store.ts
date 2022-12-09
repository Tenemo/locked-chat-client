import { configureStore } from '@reduxjs/toolkit';
import { Middleware, Action, combineReducers } from 'redux';
import logger from 'redux-logger';

import { api } from './features/api/api';
import chatReducer, {
    newMessage,
    newMessageUpdate,
    setUsernameSuccess,
    updateUsernames,
    userDisconnected,
} from './features/chat/chatSlice';
import socketReducer, {
    startConnecting,
    connectionEstablished,
} from './features/socket/socketSlice';
import userReducer from './features/user/userSlice';
import { socket } from './service';

import { ChatEvents } from 'enums/ChatEvents';
import { ChatState, Message } from 'types/chatType';

interface ActionPayload extends Action {
    payload: ChatState;
}
const messagesMiddleware: Middleware<unknown, RootState> =
    (chatStore) => (next) => (action: ActionPayload) => {
        const isConnectionEstablished =
            socket && chatStore.getState().socket.isConnected;
        if (action.type === 'api/executeMutation/fulfilled') {
            chatStore.dispatch(setUsernameSuccess({ ...action.payload }));
        }
        if (startConnecting.match(action)) {
            socket.on('connect', () => {
                chatStore.dispatch(connectionEstablished());
            });

            socket.on(ChatEvents.NEW_MESSAGE_UPDATE, (message: Message) => {
                chatStore.dispatch(newMessageUpdate({ message }));
            });

            socket.on(ChatEvents.UPDATE_USERNAMES, (users: string[]) => {
                chatStore.dispatch(updateUsernames({ users }));
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
    chat: chatReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            messagesMiddleware,
            logger,
            api.middleware,
        ]),
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
