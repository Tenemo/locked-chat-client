import styles from './UserBox.module.scss';

import Username from 'Components/Username/Username';
import { useAppSelector } from 'state/hooks';

const UsersBox = (): JSX.Element => {
    const { username: ownUsername } = useAppSelector((store) => store.user);
    const { usernames } = useAppSelector((store) => store.chat);

    return (
        <div className={styles.usersBox}>
            <Username isOwnUsername name={ownUsername} />
            {usernames.map(
                (username) =>
                    username !== ownUsername && (
                        <Username
                            key={username}
                            isOwnUsername={false}
                            name={username}
                        />
                    ),
            )}
        </div>
    );
};

export default UsersBox;
