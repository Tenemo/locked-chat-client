import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.scss';

import { setUsername } from 'state/features/user/userSlice';
import { useAppDispatch } from 'state/hooks';

const Login = (): JSX.Element => {
    const [value, setValue] = useState<string>('');
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
        navigate('/chat');
        // navigate(0);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        handleSubmitClick();
    };
    return (
        <div className="login-container">
            <form
                autoComplete="off"
                className="form-content"
                onSubmit={handleSubmit}
            >
                <label htmlFor="username">
                    user name
                    <input
                        autoComplete="new-username"
                        // eslint-disable-next-line jsx-a11y/no-autofocus
                        autoFocus
                        id="username"
                        name="username"
                        onChange={handleInputChange}
                        placeholder="Enter your user name"
                        type="text"
                        value={value}
                    />
                </label>

                <button onClick={handleSubmitClick} type="button">
                    Submit
                </button>
                {/* <Link to="/chat">Link </Link> */}
            </form>
        </div>
    );
};
export default Login;
