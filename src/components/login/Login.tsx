import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.scss';
import { socket } from '../../state/service';

import { MessagesEvents } from 'state/features/messages/messagesTypes';

const Login = (): JSX.Element => {
    const [value, setValue] = useState<string>('');
    const navigate = useNavigate();

    const handleInputChange = ({
        target: { value: newValue },
    }: ChangeEvent<HTMLInputElement>): void => {
        setValue(newValue);
    };

    const handleSubmitClick = (): void => {
        socket.emit(MessagesEvents.SET_USERNAME, value);
        navigate('/chat');
        // navigate(0);
    };
    return (
        <div className="login-container">
            <form className="form-content">
                <label htmlFor="username">
                    user name
                    <input
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
