import React from 'react';

import styles from './Username.module.scss';

type Props = {
    name: string;
    isOwnUsername: boolean;
};
const Username = React.memo(function Username({
    name,
    isOwnUsername = false,
}: Props) {
    return (
        <div className={isOwnUsername ? styles.ownUsername : ''}>
            <h2>{name}</h2>
        </div>
    );
});
export default Username;
