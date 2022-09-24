import "./chat.css";
import { useContext } from "react";
import DataContext, { TChatContextType } from "../../context/DataContext";

import MessagesBox from "./messagesBox/MessagesBox";
import MessageInput from "./messageInput/MessageInput";

const Chat:React.FC = () => {
  const { chat, addMessage } = useContext(DataContext) as TChatContextType;

  return (
    <div className="chatContainer">
      <MessagesBox messages={chat} />
      <MessageInput chat={chat} addMessage={addMessage} />
    </div>
  );
};
export default Chat;
