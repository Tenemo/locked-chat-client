import { useMemo } from 'react';

import styles from './MessageBox.module.scss';

import MessageWrap from 'Components/MessageWrap/MessageWrap';
import { useAppSelector } from 'state/hooks';

const MessagesBox = (): JSX.Element => {
    const messages = useAppSelector((state) => state.chat.messages);
    const { username: isOwnUsername } = useAppSelector((state) => state.user);
    const newMessages = useMemo(() => {
        let author = '';
        return messages.map((message) => {
            if (message.author === author) {
                return {
                    ...message,
                    author: '',
                    isOwnUsername: message.author === isOwnUsername,
                };
            }
            author = message.author;

            return {
                ...message,
                isOwnUsername: message.author === isOwnUsername,
            };
        });
    }, [messages, isOwnUsername]);
    return (
        <div className={styles.messageBox}>
            {/* tutaj też powiniennem używać useMemo ? */}
            {newMessages.map((message) => (
                <MessageWrap key={message.id} {...message} />
            ))}
        </div>
    );
};

export default MessagesBox;
