import { api } from '../index.api';
import { RegisterTypes, LoginTypes, LogoutTypes } from './auth.types';
import { transformResponse, transformErrorResponse } from '../../utils/transformResponse';

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        registerAuth: builder.mutation<RegisterTypes[], any>({
            query: (body) => ({
                url: 'api/register',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['register'],
            transformResponse,
        }),
        loginAuth: builder.mutation<LoginTypes, any>({
            query: (body) => ({
                url: 'api/login',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['login'],
            transformResponse,
            transformErrorResponse,
        }),
        logoutAuth: builder.mutation<LogoutTypes, any>({
            query: (body) => ({
                url: 'api/logout',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['logout'],
            transformResponse,
        }),
    }),
});
