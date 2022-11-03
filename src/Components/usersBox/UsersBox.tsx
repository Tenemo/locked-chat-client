import { v4 as uuidv4 } from 'uuid';

import Username from 'Components/username/Username';
import { useAppSelector } from 'state/hooks';

const UsersBox = (): JSX.Element => {
    const { username } = useAppSelector((store) => store.user);
    const { usernames } = useAppSelector((store) => store.chat);

    return (
        <div>
            <Username name={username} nameOwner />
            {usernames.map(
                (user) =>
                    user !== username && (
                        <Username
                            key={uuidv4()}
                            name={user}
                            nameOwner={false}
                        />
                    ),
            )}
        </div>
    );
};

export default UsersBox;
