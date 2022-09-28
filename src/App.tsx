import { Provider } from 'react-redux';

import Chat from './components/chat/Chat';
import { store } from './state/store';

const App = (): JSX.Element => {
    return (
        <Provider store={store}>
            <Chat />
        </Provider>
    );
};

export default App;
