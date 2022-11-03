const Username = ({
    name,
    nameOwner = false,
}: {
    name: string;
    nameOwner: boolean;
}): JSX.Element => {
    return (
        <div style={nameOwner ? { border: '1px solid red' } : {}}>
            <h2>{name}</h2>
        </div>
    );
};

export default Username;
