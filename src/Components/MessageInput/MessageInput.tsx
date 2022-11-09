import React, { useState } from 'react';

import styles from './MessageInput.module.scss';

import { newMessage } from 'state/features/chat/chatSlice';
import { useAppDispatch } from 'state/hooks';

const MessageInput = (): JSX.Element => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = ({
        target: { value },
    }: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(value);
    };

    const dispatch = useAppDispatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        dispatch(newMessage({ content: inputValue }));
        setInputValue('');
    };

    return (
        <div className={styles.messageInput}>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input
                    // eslint-disable-next-line jsx-a11y/no-autofocus
                    autoFocus
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
