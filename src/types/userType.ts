export type UserState = {
    username: string;
    errorMessage?: null | string;
    isLoggedIn: LoginEvents;
    token: string | null;
    userID: string | null;
};

// todo mozna usunac?
// export type Response = ChatState;

export enum LoginEvents {
    LOG_IN = 1,
    LOG_OUT = 0,
}
