import './chat.scss';
import { useEffect } from 'react';

import MessageInput from './messageInput/MessageInput';
import MessagesBox from './messagesBox/MessagesBox';

import { startConnecting } from 'state/features/socket/socketSlice';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import { RootState } from 'state/store';

let flag = false;
const Chat = (): JSX.Element => {
    const messages = useAppSelector((state) => state.messages.messages);
    const isEstablishingConnection = useAppSelector((state: RootState) => {
        return state.socket.isEstablishingConnection;
    });
    console.log('chat ', isEstablishingConnection);
    const isConnected = useAppSelector((state: RootState) => {
        console.log('state ', state);
        return state.socket.isConnected;
    });
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!isConnected && !isEstablishingConnection && flag === false) {
            flag = true;
            dispatch(startConnecting());
        }
    }, [dispatch, isConnected, isEstablishingConnection]);

    return (
        <div className="chatContainer">
            <MessagesBox messages={messages} />
            <MessageInput />
        </div>
    );
};
export default Chat;
