import React from 'react';
import './Username.scss';

type Props = {
    name: string;
    isOwnUsername: boolean;
};
const Username = ({ name, isOwnUsername = false }: Props): JSX.Element => {
    return (
        <div className={`username ${isOwnUsername ? 'active' : ''}`}>
            <h2>{name}</h2>
        </div>
    );
};

export const MemoizedUsername = React.memo(Username);
