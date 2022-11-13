import { parseISO } from 'date-fns';
import format from 'date-fns/format';
import React from 'react';

import styles from './MessageWrap.module.scss';

type Props = {
    content: string;
    timestamp: string;
    author: string;
    isOwnUsername: boolean;
};
const MessageWrap = React.memo(function MessageWrap({
    content,
    timestamp,
    author,
    isOwnUsername,
}: Props) {
    const time = format(parseISO(timestamp), 'hh:mm');
    return (
        <div
            className={`${styles.messageWrap} ${
                isOwnUsername ? styles.ownUsername : styles.username
            }`}
        >
            <div className={styles.author}>{author}</div>
            <div className={styles.time}>{time}</div>
            <p>{content}</p>
        </div>
    );
});

export default MessageWrap;
