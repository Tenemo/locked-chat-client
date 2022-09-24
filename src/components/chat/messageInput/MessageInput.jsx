import { useState, useEffect } from "react";
import { formatISO } from "date-fns";

const MessageInput = ({ chat, addMessage }) => {
  const [input, setInput] = useState("");

  const handleInputChange = ({ target: { value } }) => {
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      text: input,
      nick: "unknown",
      timeStamp: Date.now(),
    };
    addMessage([...chat, newMessage]);

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
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
