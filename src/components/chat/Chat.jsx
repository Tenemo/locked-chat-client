import "./chat.css";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

import MessagesBox from "./messagesBox/MessagesBox";
import MessageInput from "./messageInput/MessageInput";

const Chat = ({ users }) => {
  const { chat, addMessage } = useContext(DataContext);
  //   console.log(chat);
  return (
    <div className="chatContainer">
      <MessagesBox messages={chat} />
      <MessageInput chat={chat} addMessage={addMessage} />
    </div>
  );
};
export default Chat;
