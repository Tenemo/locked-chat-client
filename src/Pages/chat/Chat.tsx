import './chat.scss';

import MessageInput from '../../Components/messageInput/MessageInput';
import MessagesBox from '../../Components/messagesBox/MessagesBox';

import UsersBox from 'Components/usersBox/UsersBox';
import { useAppSelector } from 'state/hooks';

const Chat = (): JSX.Element => {
    const messages = useAppSelector((state) => state.chat.messages);
    const { isLogin, username } = useAppSelector((state) => state.user);

    return (
        <div>
            {isLogin ? (
                <div style={{ display: 'flex' }}>
                    <div className="chatContainer">
                        <MessagesBox messages={messages} />
                        <MessageInput />
                    </div>
                    <div>
                        <UsersBox />
                    </div>
                </div>
            ) : (
                <div>
                    <p>
                        {username} {username === '' ? 'no nickname' : 'taken'}{' '}
                    </p>
                    <a href="/">go to login page</a>
                </div>
            )}
        </div>
    );
};
export default Chat;
