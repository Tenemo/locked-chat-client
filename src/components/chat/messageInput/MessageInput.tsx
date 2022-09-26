import { useState } from "react";
import { formatISO } from "date-fns";
import { useDispatch } from "react-redux";
import { addMessage } from "../../../state/features/messages/messageSlice";
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
      author: "unknown",
      timeStamp: formatISO(Date.now()),
    };
    
    
    setInput("");
    dispatch(addMessage(newMessage))
  };
  
  return (
    <form onSubmit={handleSubmit}>
    {/* <form> */}
      <input
        type="text"
        name="inputValue"
        value={input}
        onChange={handleInputChange}
        autoComplete="off"
      ></input>
      <input type="submit" value="Submit"></input>
    </form>
  );
};
export default MessageInput;
