import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { submitMessage } from 'state/features/messages/messagesSlice';

const MessageInput = (): JSX.Element => {
    const [input, setInput] = useState<string>('');

    const handleInputChange = ({
        target: { value },
    }: React.ChangeEvent<HTMLInputElement>): void => {
        setInput(value);
    };

    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        setInput('');
        dispatch(submitMessage({ content: input }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                autoComplete="off"
                name="inputValue"
                onChange={handleInputChange}
                type="content"
                value={input}
            />
            <input type="submit" value="Submit" />
        </form>
    );
};
export default MessageInput;
