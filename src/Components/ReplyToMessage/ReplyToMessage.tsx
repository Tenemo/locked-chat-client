import ClearIcon from '@mui/icons-material/Clear';

import styles from './ReplyToMessage.module.scss';

import { setIsReplyMessage, setReplyToId } from 'state/features/chat/chatSlice';
import { useAppSelector, useAppDispatch } from 'state/hooks';

type Props = { replyTo: string; inMessageWrap: boolean };

const ReplyToMessage = ({ replyTo, inMessageWrap }: Props): JSX.Element => {
    const dispatch = useAppDispatch();
    const messages = useAppSelector((state) => state.chat.messages);

    const onClearIconClick = (): void => {
        dispatch(setIsReplyMessage({ isReplyMessage: false }));
        dispatch(setReplyToId({ replyToId: '' }));
    };

    const senderMessage = messages.find((message) => message.id === replyTo);

    // Da sie to lepiej zrobic? bez if elsa eslint mysli, ze teoretycznie senderMessage moze byc undefined (choc to nieprawda, bo tworzymy ten obiekt tylko jesli wiadomosc ma property replyTo na backendzie lub jesli ktos odpowiada w danej chwili).
    if (senderMessage) {
        return (
            <div className={inMessageWrap ? styles.messageWrap : styles.input}>
                <div className={styles.bar}>
                    <div>
                        {senderMessage.author} on{' '}
                        {new Date(senderMessage.timestamp).toLocaleString()}
                    </div>
                    {inMessageWrap ? (
                        ''
                    ) : (
                        <ClearIcon
                            className={styles.clearIcon}
                            onClick={onClearIconClick}
                        />
                    )}
                </div>
                <div className={styles.content}>{senderMessage.content}</div>
            </div>
        );
    }
    return <div />;
};

export default ReplyToMessage;
