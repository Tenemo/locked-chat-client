import MessageInput from 'Components/MessageInput/MessageInput';
import MessagesBox from 'Components/MessagesBox/MessagesBox';
import UsersBox from 'Components/UsersBox/UsersBox';
import './Chat.scss';

const Chat = (): JSX.Element => {
    return (
        <div className="chat">
            <div className="chatWrap">
                <MessagesBox />
                <MessageInput />
            </div>
            <UsersBox />
        </div>
    );
};
export default Chat;
