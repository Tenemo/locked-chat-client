import React, { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.scss';

import { setUsername } from 'state/features/user/userSlice';
import { useAppDispatch, useAppSelector } from 'state/hooks';

const Login = (): JSX.Element => {
    const [value, setValue] = useState<string>('');
    const { isUsernameFailure } = useAppSelector((state) => state.user.error);
    const { username } = useAppSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleInputChange = ({
        target: { value: newValue },
    }: ChangeEvent<HTMLInputElement>): void => {
        setValue(newValue);
    };

    const handleSubmitClick = (): void => {
        dispatch(
            setUsername({
                username: value,
            }),
        );
    };
    useEffect(() => {
        if (isUsernameFailure === false) {
            navigate('/chat');
        }
    }, [isUsernameFailure, dispatch, navigate]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        handleSubmitClick();
    };
    return (
        <div className={styles.login}>
            {isUsernameFailure === true ? (
                <div>
                    <p>{username} already exist</p>
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

                <button onClick={handleSubmitClick} type="button">
                    Submit
                </button>
            </form>
        </div>
    );
};
export default Login;
