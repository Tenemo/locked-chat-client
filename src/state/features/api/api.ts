import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
    SetUsernameResponse,
    SetUsernameRequest,
    VerifyTokenResponse,
    VerifyTokenRequest,
} from 'types/apiTypes';
// "one API slice per base URL" as a rule of thumb.
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000',
    }),
    endpoints: (builder) => ({
        setUsername: builder.mutation<SetUsernameResponse, SetUsernameRequest>({
            query: (payload) => ({
                url: '/set-username',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        verifyToken: builder.query<VerifyTokenResponse, VerifyTokenRequest>({
            query: (payload) => ({
                url: '/verify-token',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
    }),
});
export const { useSetUsernameMutation, useVerifyTokenQuery } = api;
