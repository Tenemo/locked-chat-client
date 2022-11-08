import { MemoizedUsername } from 'Components/Username/Username';
import { useAppSelector } from 'state/hooks';
import './UsersBox.scss';

const UsersBox = (): JSX.Element => {
    const { username: ownUsername } = useAppSelector((store) => store.user);
    const { usernames } = useAppSelector((store) => store.chat);

    return (
        <div className="usersBox">
            <MemoizedUsername isOwnUsername name={ownUsername} />
            {usernames.map(
                (username) =>
                    username !== ownUsername && (
                        <MemoizedUsername
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
