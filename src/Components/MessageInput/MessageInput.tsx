import React, { useState } from 'react';

import { newMessage } from 'state/features/chat/chatSlice';
import { useAppDispatch } from 'state/hooks';
import './MessageInput.scss';

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
        <div className="messageInput">
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
                <input className="hiddenSubmit" type="submit" value="Submit" />
            </form>
        </div>
    );
};
export default MessageInput;
