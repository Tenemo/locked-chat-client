import React, { useState } from 'react';

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
        <form autoComplete="off" onSubmit={handleSubmit}>
            <input
                autoComplete="off"
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                name="inputValue"
                onChange={handleInputChange}
                type="content"
                value={inputValue}
            />
            <input type="submit" value="Submit" />
        </form>
    );
};
export default MessageInput;
