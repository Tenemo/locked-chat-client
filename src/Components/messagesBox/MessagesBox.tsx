import { Message } from '../../types/chatType';

type Props = {
    messages: Message[];
};

const MessagesBox = ({ messages }: Props): JSX.Element => {
    const messagesMarkup = messages.map((message) => (
        <div key={message.id}>
            {message.content}
            {message.timestamp}
        </div>
    ));
    return <div>{messagesMarkup}</div>;
};
export default MessagesBox;
