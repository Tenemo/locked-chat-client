import React, { useState } from 'react';

import { submitMessage } from 'state/features/messages/messagesSlice';
import { useAppDispatch } from 'state/hooks';

const MessageInput = (): JSX.Element => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = ({
        target: { value },
    }: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(value);
    };

    const dispatch = useAppDispatch();

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    //     event.preventDefault();

    //     setInputValue('');
    //     dispatch(submitMessage({ content: inputValue }));
    // };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        dispatch(submitMessage({ content: inputValue }));
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                autoComplete="off"
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
