import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ChatState } from 'types/chatType';
import { Request } from 'types/userType';
// "one API slice per base URL" as a rule of thumb.
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000',
    }),
    endpoints: (builder) => ({
        setUsername: builder.mutation<ChatState, Request>({
            query: (payload) => ({
                url: '/set-username',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
    }),
});
export const { useSetUsernameMutation } = api;
