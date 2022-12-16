import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.scss';

import { useSetUsernameMutation } from 'state/features/api/api';
import { loginReducer } from 'state/features/user/userSlice';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import { socket } from 'state/service';
import { LoginEvents } from 'types/userType';

const Login = (): JSX.Element => {
    const [value, setValue] = useState<string>('');
    const [setUsername, response] = useSetUsernameMutation({
        fixedCacheKey: 'shared-set-username',
    });
    const { errorMessage } = useAppSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleInputChange = ({
        target: { value: newValue },
    }: ChangeEvent<HTMLInputElement>): void => {
        setValue(newValue);
    };
    const handleSubmitClick = (): void => {
        setUsername({ username: value, socketID: socket.id })
            .unwrap()
            .then((resp) => {
                dispatch(
                    loginReducer({
                        username: value,
                        setIsLoggedIn: LoginEvents.LOG_IN,
                        token: resp.token,
                        userId: resp.userId,
                    }),
                );
                console.log('!!!!!!!!!!!!!!!!!', resp);
                localStorage.setItem('token', JSON.stringify(resp.token)); // todo `token ${value}`?
                navigate('/');
            })
            .catch(
                (error: {
                    data: string;
                    error: string;
                    originalStatus: number;
                    status: string;
                }) => {
                    dispatch(
                        loginReducer({
                            username: value,
                            errorMessage: error.data,
                            setIsLoggedIn: LoginEvents.LOG_OUT,
                            token: null,
                            userId: null,
                        }),
                    );
                },
            );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        handleSubmitClick();
    };

    return (
        <div className={styles.login}>
            {errorMessage ? (
                <div>
                    <p>{errorMessage}</p>
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
                    disabled={response.isLoading}
                    onClick={handleSubmitClick}
                    type="button"
                >
                    {response.isLoading ? 'loading' : 'Submit'}
                </button>
            </form>
        </div>
    );
};
export default Login;
