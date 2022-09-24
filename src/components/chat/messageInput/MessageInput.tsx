import { useState } from "react";
import { formatISO } from "date-fns";
import { IChat, TChatContextType } from "../../../context/DataContext";



const MessageInput = ({ chat, addMessage }:TChatContextType):JSX.Element => {
  
  const [input, setInput] = useState<string>("");

  const handleInputChange = ({currentTarget:{value}}:React.FormEvent<HTMLInputElement>) => {
    setInput(value);
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newMessage:IChat = {
      text: input,
      nick: "unknown",
      timeStamp: formatISO(Date.now()),
    };
    addMessage([...chat, newMessage]);

    setInput("");
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
