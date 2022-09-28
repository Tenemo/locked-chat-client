import { formatISO } from 'date-fns';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addMessage } from 'state/features/messages/messagesSlice';
import { Message } from 'state/features/messages/messagesTypes';

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

        const newMessage: Message = {
            content: input,
            author: 'unknown',
            timestamp: formatISO(Date.now()),
            id: input,
        };

        setInput('');
        dispatch(addMessage(newMessage));
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <form> */}
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
