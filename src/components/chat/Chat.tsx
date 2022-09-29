import './chat.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MessageInput from './messageInput/MessageInput';
import MessagesBox from './messagesBox/MessagesBox';

import { startConnecting } from 'state/features/messages/messagesSlice';
import { RootState } from 'state/store';

let flag = false;
const Chat = (): JSX.Element => {
    const messages = useSelector((state: RootState) => state.messages.messages);
    const isEstablishingConnection = useSelector(
        (state: RootState) => state.messages.isEstablishingConnection,
    );
    const isConnected = useSelector(
        (state: RootState) => state.messages.isConnected,
    );
    const dispatch = useDispatch();
    useEffect(() => {
        if (!isConnected && !isEstablishingConnection && flag === false) {
            flag = true;
            console.log('tutaj');
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
