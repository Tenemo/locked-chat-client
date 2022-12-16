import { ChatState } from './chatType';

export type SetUsernameResponse = ChatState & {
    token: string;
    message: string[];
    usernames: string[];
    userId: string;
};
export type SetUsernameRequest = {
    username: string;
    socketID: string;
};
export type VerifyTokenResponse =
    | {
          username: string;
          iat: number;
          exp: number;
      }
    | {
          name: string;
          message: string;
      };
export type VerifyTokenRequest = {
    token: string;
};
