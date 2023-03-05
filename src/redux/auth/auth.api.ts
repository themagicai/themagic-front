import { api } from '../index.api';
import { RegisterTypes, LoginTypes, LogoutTypes } from './auth.types';
import { transformResponse, transformErrorResponse } from '../../utils/transformResponse';

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        registerUsers: builder.mutation<RegisterTypes, any>({
            query: (body) => ({
                url: 'api/register',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['auth'],
            transformResponse,
            transformErrorResponse,
        }),
        loginUsers: builder.mutation<LoginTypes, any>({
            query: (body) => ({
                url: 'api/login',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['auth'],
            transformResponse,
            transformErrorResponse
        }),
        logoutUsers: builder.mutation<LogoutTypes, any>({
            query: (body) => ({
                url: 'api/logout',
                body,
            }),
            invalidatesTags: ['auth'],
            transformResponse,
        }),
    }),
});
