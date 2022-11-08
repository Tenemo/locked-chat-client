import styles from './MessageBox.module.scss';

import { MemoizedMessageWrap } from 'Components/MessageWrap/MessageWrap';
import { useAppSelector } from 'state/hooks';

const MessagesBox = (): JSX.Element => {
    const messages = useAppSelector((state) => state.chat.messages);
    const { username: isOwnUsername } = useAppSelector((state) => state.user);
    let author = '';
    const newMessages = messages.map((message) => {
        if (message.author === author) {
            return {
                ...message,
                author: '',
                isOwnUsername: message.author === isOwnUsername,
            };
        }
        author = message.author;

        return { ...message, isOwnUsername: message.author === isOwnUsername };
    });
    return (
        <div className={styles.messageBox}>
            {newMessages.map((message) => (
                <MemoizedMessageWrap key={message.id} {...message} />
            ))}
        </div>
    );
};

export default MessagesBox;
