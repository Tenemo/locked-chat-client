import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Chat.module.scss';

import MessageInput from 'Components/MessageInput/MessageInput';
import MessagesBox from 'Components/MessagesBox/MessagesBox';
import UsersBox from 'Components/UsersBox/UsersBox';
import {
    useSetUsernameMutation,
    useVerifyTokenQuery,
} from 'state/features/api/api';
import { loginReducer } from 'state/features/user/userSlice';
import { useAppDispatch, useAppSelector } from 'state/hooks';
// import { socket } from 'state/service';
import { LoginEvents } from 'types/userType';

const Chat = (): JSX.Element => {
    // const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
    // const navigate = useNavigate();
    // const getToken = localStorage.getItem('token') || '';
    // const getToken = localStorage.getItem('token') || null;
    // if (getToken) {
    //     const token = JSON.parse(getToken) as string;
    //     console.log('token w chat ', token);
    //     const { currentData, isFetching, isLoading } = useVerifyTokenQuery({
    //         token,
    //     });
    //     console.log({ currentData, isFetching, isLoading });
    // }

    // const [setUsername, response] = useSetUsernameMutation({
    //     fixedCacheKey: 'shared-set-username',
    // });
    // const dispatch = useAppDispatch();

    // console.log('dziwne', currentData, isFetching, isLoading);

    // useEffect(() => {
    //     console.log('w use effect', currentData);
    //     if (currentData) {
    //         setUsername({ username: currentData.username, socketID: socket.id })
    //             .unwrap()
    //             .then((resp) => {
    //                 console.log('response w useEfect', resp, response);
    //                 dispatch(
    //                     loginReducer({
    //                         username: currentData.username,
    //                         setIsLoggedIn: LoginEvents.LOG_IN,
    //                         token: resp.token,
    //                     }),
    //                 );
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     }
    // }, [currentData]);

    // if (currentData) {
    //     setUsername({ username: currentData.username, socketID: socket.id })
    //         .unwrap()
    //         .then((resp) => {
    //             dispatch(
    //                 loginReducer({
    //                     username: currentData.username,
    //                     setIsLoggedIn: LoginEvents.LOG_IN,
    //                     token: resp.token,
    //                 }),
    //             );
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    // console.log(wynik);
    // useEffect(() => {
    //     if (isLoggedIn === 0) {
    //         navigate('/login');
    //     }
    // }, [isLoggedIn, navigate]);
    return (
        <div className={styles.chat}>
            <div className={styles.chatWrap}>
                <MessagesBox />
                <MessageInput />
            </div>
            <UsersBox />
        </div>
    );
};
export default Chat;
