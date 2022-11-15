import ReplyIcon from '@mui/icons-material/Reply';
import React from 'react';

import styles from './MessageWrap.module.scss';

import ReplyToMessage from 'Components/ReplyToMessage/ReplyToMessage';
import { setIsReplyMessage, setReplyToId } from 'state/features/chat/chatSlice';
import { useAppDispatch } from 'state/hooks';

type Props = {
    content: string;
    timestamp: string;
    author: string;
    isOwnUsername: boolean;
    id: string;
    replyTo?: string;
};

const MessageWrap = ({
    content,
    timestamp,
    author,
    isOwnUsername,
    id,
    replyTo,
}: Props): JSX.Element => {
    const dispatch = useAppDispatch();
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${hours}:${minutes}`;

    const onReplyIconClick = (): void => {
        dispatch(setIsReplyMessage({ isReplyMessage: true }));
        dispatch(setReplyToId({ replyToId: id }));
    };

    return (
        <div
            className={`${styles.messageWrap} ${
                isOwnUsername ? styles.jsFe : styles.jsFs
            }`}
        >
            <div className={styles.author}>{author}</div>
            <div className={styles.time}>
                <ReplyIcon
                    className={styles.replyIcon}
                    onClick={onReplyIconClick}
                />
                {time}
            </div>
            {replyTo ? <ReplyToMessage inMessageWrap replyTo={replyTo} /> : ''}
            <p>{content}</p>
        </div>
    );
};

MessageWrap.defaultProps = { replyTo: '' };

export default MessageWrap;
export const MemoizedMessageWrap = React.memo(MessageWrap);
