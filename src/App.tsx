import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Chat from './components/chat/Chat';
import { RootState } from './state/store';

import Login from 'components/login/Login';
import { startConnecting } from 'state/features/socket/socketSlice';
import { useAppDispatch, useAppSelector } from 'state/hooks';

const NotFound = (): JSX.Element => <>nic tu nie ma</>;

const App = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const isEstablishingConnection = useAppSelector((state: RootState) => {
        return state.socket.isEstablishingConnection;
    });
    const isConnected = useAppSelector((state: RootState) => {
        return state.socket.isConnected;
    });
    useEffect(() => {
        if (!isConnected && !isEstablishingConnection) {
            dispatch(startConnecting());
        }
    }, [dispatch, isConnected, isEstablishingConnection]);
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Chat />} path="/chat" />
                <Route element={<Login />} path="/" />
                <Route element={<NotFound />} path="*" />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
