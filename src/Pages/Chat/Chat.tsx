import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Chat.module.scss';

import MessageInput from 'Components/MessageInput/MessageInput';
import MessagesBox from 'Components/MessagesBox/MessagesBox';
import UsersBox from 'Components/UsersBox/UsersBox';
import { useAppSelector } from 'state/hooks';

const Chat = (): JSX.Element => {
    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
    const navigate = useNavigate();
    useEffect(() => {
        if (isLoggedIn === 0) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);
    return (
        <div className={styles.chat}>
            <div className={styles.chatWrap}>
                <MessagesBox />
                <MessageInput />
            </div>
            <UsersBox />
        </div>
    );
};
export default Chat;
