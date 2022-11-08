import styles from './Chat.module.scss';

import MessageInput from 'Components/MessageInput/MessageInput';
import MessagesBox from 'Components/MessagesBox/MessagesBox';
import UsersBox from 'Components/UsersBox/UsersBox';

const Chat = (): JSX.Element => {
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
