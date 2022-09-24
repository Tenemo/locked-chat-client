import { IChat } from "../../../context/DataContext";

type TChatProps = {
  messages:IChat[]
}

const MessagesBox = ({ messages }:TChatProps):JSX.Element => {
  const messagesMarkup = messages.map((message, index) => (
    <div key={index}>
      {message.text}
      {message.timeStamp}
    </div>
  ));
  return <div>{messagesMarkup}</div>;
};
export default MessagesBox;
