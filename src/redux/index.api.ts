import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import { RegisterTypes } from './auth/auth.types';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_SOME_KEY,
        prepareHeaders: (headers) => {
            const token = Cookies.get('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    refetchOnFocus: true,
    tagTypes: ['auth', 'cv'],
    endpoints: (builder) => ({
        getUsers: builder.query<RegisterTypes[], any>({
            query: () => `register`,
        }),
    }),
});

export const { useGetUsersQuery } = api;
