import { createContext, useState } from "react";




/**
 * @timeStamp {string} must be in ISO-8601
 */    
export interface IChat {
  readonly text:string;
  readonly timeStamp:number 
  readonly nick:string
}
export type TChatContextType = {
  chat:IChat[];
  addMessage:React.Dispatch<React.SetStateAction<IChat[]>>;
}
//React.ReactNode sprawdzić później
type Props = {
  children: JSX.Element,
}
//temporarily, the intended value will be assigned on the provider.
const DataContext = createContext<TChatContextType | null>(null);

export const DataProvider:React.FC<Props> = ({ children }) => {
    const [chat, addMessage] = useState<IChat[]>([
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
