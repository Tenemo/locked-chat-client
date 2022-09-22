import { useState, useEffect } from "react";

const MessageInput = ({ chat, addMessage }) => {
  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(input);
    setInput("");
  };
  useEffect(() => {
    const newMessage = {
      text: message,
      nick: "unknown",
      timeStamp: Date.now(),
    };
    addMessage([...chat, newMessage]);
  }, [message]);
  console.log("chat ", chat);
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
