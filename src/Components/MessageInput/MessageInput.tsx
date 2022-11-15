import React, { useState } from 'react';

import styles from './MessageInput.module.scss';

import ReplyToMessage from 'Components/ReplyToMessage/ReplyToMessage';
import {
    newMessage,
    setIsReplyMessage,
    setReplyToId,
} from 'state/features/chat/chatSlice';
import { useAppDispatch, useAppSelector } from 'state/hooks';

const MessageInput = (): JSX.Element => {
    const { replyToId: messageId } = useAppSelector((state) => state.chat);
    const { isReplyMessage } = useAppSelector((state) => state.chat);

    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = ({
        target: { value },
    }: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(value);
    };

    const dispatch = useAppDispatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (!inputValue) return;

        dispatch(newMessage({ content: inputValue, messageId }));

        dispatch(setIsReplyMessage({ isReplyMessage: false }));
        dispatch(setReplyToId({ replyToId: '' }));

        setInputValue('');
    };

    return (
        <div className={styles.messageInput}>
            {isReplyMessage ? (
                <ReplyToMessage inMessageWrap={false} replyTo={messageId} />
            ) : (
                ''
            )}
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input
                    // eslint-disable-next-line jsx-a11y/no-autofocus
                    autoFocus={!!isReplyMessage}
                    name="inputValue"
                    onChange={handleInputChange}
                    placeholder="Message"
                    type="content"
                    value={inputValue}
                    // eslint-disable-next-line react/jsx-sort-props
                    autoComplete="off"
                />
                <input
                    className={styles.hiddenSubmit}
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
};
export default MessageInput;
