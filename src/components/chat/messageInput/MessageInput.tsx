import { useState } from "react";
import { formatISO } from "date-fns";
import { useDispatch } from "react-redux";
import { addMessageXD } from "../../../state/features/messages/messageSlice";
import { Imessage } from "../../../state/types";

export type TMessageInputType = {
  chat:Imessage[];
  
}

const MessageInput = ({ chat }:TMessageInputType):JSX.Element => {
  
  const [input, setInput] = useState<string>("");

  const handleInputChange = ({currentTarget:{value}}:React.FormEvent<HTMLInputElement>) => {
    setInput(value);
  };

  
  
  const dispatch = useDispatch()

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const newMessage:Imessage = {
      text: input,
      nick: "unknown",
      timeStamp: formatISO(Date.now()),
    };
    
    
    setInput("");
    dispatch(addMessageXD(newMessage))
  };
  
  return (
    <form onSubmit={handleSubmit}>
    {/* <form> */}
      <input
        type="text"
        name="inputValue"
        value={input}
        onChange={handleInputChange}
      ></input>
      <input type="submit" value="Submit"></input>
    </form>
  );
};
export default MessageInput;
