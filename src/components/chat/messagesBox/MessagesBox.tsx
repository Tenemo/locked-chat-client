import { Imessage } from "../../../state/types";


type TChatProps = {
  messages:Imessage[]
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
