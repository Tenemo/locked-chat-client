import './chat.scss';
import { useSelector } from 'react-redux';

import { RootState } from '../../state/store';

import MessageInput from './messageInput/MessageInput';
import MessagesBox from './messagesBox/MessagesBox';

const Chat = (): JSX.Element => {
    const chat = useSelector((state: RootState) => state.messages.chat);

    return (
        <div className="chatContainer">
            <MessagesBox messages={chat} />
            <MessageInput />
        </div>
    );
};
export default Chat;
