import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Chat from 'Pages/Chat/Chat';
import Login from 'Pages/Login/Login';
import { startConnecting } from 'state/features/socket/socketSlice';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import './App.scss';

const NotFound = (): JSX.Element => <>nic tu nie ma</>;
// ale bedzie

const App = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const isEstablishingConnection = useAppSelector((state) => {
        return state.socket.isEstablishingConnection;
    });
    const isConnected = useAppSelector((state) => {
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
                <Route element={<Login />} path="/" />
                <Route element={<Chat />} path="/chat" />
                <Route element={<NotFound />} path="*" />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
