import "./chat.scss";
import MessagesBox from "./messagesBox/MessagesBox";
import MessageInput from "./messageInput/MessageInput";
import {  useSelector } from "react-redux";
import { RootState } from "../../state/store";



const Chat = ():JSX.Element => {
  
  const chat = useSelector((state:RootState)=>state.messages.chat)



  return (
    <div className="chatContainer">
      <MessagesBox messages={chat} />
      <MessageInput chat={chat}  />
    </div>
  );
};
export default Chat;
