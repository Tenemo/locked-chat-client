import { format } from "date-fns";
const MessagesBox = ({ messages }) => {
  console.log("xd", messages);
  const messagesMarkup = messages.map((message, index) => (
    <div key={index}>
      {message.text}
      {format(message.timeStamp, " hh:mm:ss dd-MM-yyyy")}
    </div>
  ));
  return <div>{messagesMarkup}</div>;
};
export default MessagesBox;
