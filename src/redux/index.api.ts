import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
// import { API } from "../api/api";
import { UserTypes } from './index.types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.MODE,
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
    getUsers: builder.query<UserTypes[], string>({
      query: () => `api`,
    }),
  }),
});

export const { useGetUsersQuery } = api;
