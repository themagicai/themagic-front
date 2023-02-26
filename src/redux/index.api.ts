import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../api/api";
import { RegisterTypes } from "./auth/auth.types";

export const api = createApi({
    reducerPath: "/api",
    baseQuery: fetchBaseQuery({ baseUrl: API }),
    refetchOnFocus: true,
    tagTypes: ["auth"],
    endpoints: (builder) => ({
        getUsers: builder.query<RegisterTypes[], string>({
            query: () => `/users`,
        }),
    }),
});

export const { useGetUsersQuery } = api;
