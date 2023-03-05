import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import { UserTypes } from './index.types';

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
    tagTypes: [
        'cv-detail',
        'letter-deatil',
        'login',
        'logout',
        'make-cv',
        'make-letters',
        'password/reset',
        'register',
        'schema',
        'skills',
        'token',
        'users',
        'users/me',
    ],
    endpoints: (builder) => ({
        getUsers: builder.query<UserTypes[], string>({
            query: () => `/register`,
        }),
    }),
});

export const { useGetUsersQuery } = api;
