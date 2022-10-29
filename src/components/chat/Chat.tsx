import './chat.scss';

import MessageInput from './messageInput/MessageInput';
import MessagesBox from './messagesBox/MessagesBox';

import { useAppSelector } from 'state/hooks';

const Chat = (): JSX.Element => {
    const messages = useAppSelector((state) => state.messages.messages);

    return (
        <div className="chatContainer">
            <MessagesBox messages={messages} />
            <MessageInput />
        </div>
    );
};
export default Chat;
