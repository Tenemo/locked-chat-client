import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Chat from './components/chat/Chat';
import { store } from './state/store';

import Login from 'components/login/Login';

const App = (): JSX.Element => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Login />} path="/" />
                    <Route element={<Chat />} path="/chat" />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
