import "./App.css";
import Chat from "./components/chat/Chat.jsx";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <Chat />
    </DataProvider>
  );
}

export default App;
