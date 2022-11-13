import { AxiosError } from 'axios';
import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.scss';

import { setUsernameSuccess } from 'state/features/chat/chatSlice';
import { setUsernameThunk } from 'state/features/user/userSlice';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import { socket } from 'state/service';
import { Response } from 'types/userType';

const Login = (): JSX.Element => {
    const [value, setValue] = useState<string>('');
    const { loading, error } = useAppSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleInputChange = ({
        target: { value: newValue },
    }: ChangeEvent<HTMLInputElement>): void => {
        setValue(newValue);
    };

    const handleSubmitClick = async (): Promise<Response> => {
        try {
            const response = await dispatch(
                setUsernameThunk({ username: value, socketID: socket.id }),
            );
            if (setUsernameThunk.fulfilled.match(response)) {
                const { messages, usernames } = response.payload;
                dispatch(setUsernameSuccess({ messages, usernames }));
                navigate('/');
            }
            return response.payload as Response;
        } catch (err) {
            throw err as AxiosError;
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        void handleSubmitClick();
    };
    return (
        <div className={styles.login}>
            {error ? (
                <div>
                    <p>{error.message}</p>
                </div>
            ) : (
                ''
            )}
            <form
                autoComplete="off"
                className="form-content"
                onSubmit={handleSubmit}
            >
                <label htmlFor="username">
                    username
                    <input
                        autoComplete="new-username"
                        // eslint-disable-next-line jsx-a11y/no-autofocus
                        autoFocus
                        id="username"
                        name="username"
                        onChange={handleInputChange}
                        placeholder="Enter your username"
                        type="text"
                        value={value}
                    />
                </label>

                <button
                    disabled={loading === 'pending'}
                    // czy to jest duży problem ? ;d
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onClick={handleSubmitClick}
                    type="button"
                >
                    {loading === 'pending' ? 'loading' : ''}Submit
                </button>
            </form>
        </div>
    );
};
export default Login;
