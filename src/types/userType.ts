export type UserState = {
    username: string;
    isLoggedIn: boolean;
    error: Error;
};
type Error = {
    isUsernameFailure: boolean | null;
};
