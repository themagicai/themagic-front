import { api } from '../index.api';
import { RegisterTypes, LoginTypes, LogoutTypes } from './auth.types';
import { transformResponse, transformErrorResponse } from '../../utils/transformResponse';

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        registerUsers: builder.mutation<RegisterTypes[], string>({
            query: (body) => ({
                url: 'api/register',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['auth'],
            transformResponse,
            transformErrorResponse,
        }),
        loginUsers: builder.mutation<string, LoginTypes>({
            query: (body) => ({
                url: 'api/login',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['auth'],
            transformResponse,
            transformErrorResponse
        }),
        logoutUsers: builder.mutation<string, LogoutTypes>({
            query: (body) => ({
                url: 'api/logout',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['auth'],
            transformResponse,
        }),
    }),
});
