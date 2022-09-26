import "./App.css";
import Chat from "./components/chat/Chat";
import { store} from './state/store'
import {Provider} from 'react-redux'

function App():JSX.Element {
  return (
    
      <Provider store = {store}>
        <Chat />
      </Provider>
    
  );
}

export default App;
