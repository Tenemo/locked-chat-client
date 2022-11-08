import React from 'react';

import './MessageWrap.scss';

type Props = {
    content: string;
    timestamp: string;
    author: string;
    isOwnUsername: boolean;
};
const MessageWrap = ({
    content,
    timestamp,
    author,
    isOwnUsername,
}: Props): JSX.Element => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${hours}:${minutes}`;

    return (
        <div className={`messageWrap ${isOwnUsername ? 'js-fe' : 'js-fs'}`}>
            <div className="author">{author}</div>
            <div className="time">{time}</div>
            <p>{content}</p>
        </div>
    );
};

export default MessageWrap;
export const MemoizedMessageWrap = React.memo(MessageWrap);
