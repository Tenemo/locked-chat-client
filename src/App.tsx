import "./App.css";
import Chat from "./components/chat/Chat";
import { DataProvider } from "./context/DataContext";

function App():JSX.Element {
  return (
    <DataProvider>
      <Chat />
    </DataProvider>
  );
}

export default App;
