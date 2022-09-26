import { Imessage } from "../../../state/types";


type Props = {
  messages:Imessage[]
}

const MessagesBox = ({ messages }:Props):JSX.Element => {
  const messagesMarkup = messages.map((message, index) => (
    <div key={index}>
      {message.text}
      {message.timeStamp}
    </div>
  ));
  return <div>{messagesMarkup}</div>;
};
export default MessagesBox;
