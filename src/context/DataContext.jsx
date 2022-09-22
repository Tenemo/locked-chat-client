import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [chat, addMessage] = useState([
    {
      text: "Lorem Ipsum is simply dummy text",
      timeStamp: Date.now(),
      nick: "unknown",
    },
    {
      text: "Lorem Ipsum is simply dummy text",
      timeStamp: Date.now(),
      nick: "unknown",
    },
  ]);
  useEffect(() => {
    addMessage(chat);
  }, [chat]);

  return (
    <DataContext.Provider
      value={{
        chat,
        addMessage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
